import { auth, firestore } from '@/firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState, useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  Community,
  communitySnippets,
  communityState,
} from '@/atoms/commuityAtom';
import {
  collection,
  doc,
  getDocs,
  increment,
  writeBatch,
} from 'firebase/firestore';
import { authModalState } from '@/atoms/authModalAtom';

const useCommunityData = () => {
  const [user] = useAuthState(auth);
  const [communityStateValue, setCommunityStateValue] =
    useRecoilState(communityState);
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const onJoinOrLeaveCommunity = (
    communityData: Community,
    isJoined: boolean
  ) => {
    // is the user signed in?
    // if not => open modal to sign in
    if (!user) {
      setAuthModalState({
        open: true,
        view: 'login',
      });
      return;
    }
    if (!user) {
    }
    if (isJoined) {
      leaveCommunity(communityData.id);
      return;
    }
    joinCommunity(communityData);
  };

  const getMySnippets = async () => {
    setLoading(true);
    try {
      const snippetDocs = await getDocs(
        collection(firestore, `users/${user?.uid}/communitySnippets`)
      );

      const snippets = snippetDocs.docs.map((doc) => ({
        ...doc.data(),
      }));
      setCommunityStateValue((prev) => ({
        ...prev,
        mySnippets: snippets as communitySnippets[],
      }));

      console.log('getMySnipprt', snippets);
    } catch (error: any) {
      console.log('getMySnippets', error);
      setError(error.message);
    }
    setLoading(false);
  };

  const joinCommunity = async (communityData: Community) => {
    //batch write
    // creating a new community snippet
    const batch = writeBatch(firestore);

    const newSnippet: communitySnippets = {
      communityId: communityData.id,
      imageUrl: communityData.imageUrl || '',
    };
    batch.set(
      doc(firestore, `users/${user?.uid}/communitySnippets`, communityData.id),
      newSnippet
    );

    batch.update(doc(firestore, 'communities', communityData.id), {
      numberOfMembers: increment(1),
    });
    await batch.commit();
    // update recoil state
    setCommunityStateValue((prev) => ({
      ...prev,
      mySnippets: [...prev.mySnippets, newSnippet],
    }));
    try {
    } catch (error: any) {
      console.log('joinCommunity', error);
      setError(error.message);
    }
    setLoading(false);
  };

  const leaveCommunity = async (communityId: string) => {
    try {
      const batch = writeBatch(firestore);

      batch.delete(
        doc(firestore, `users/${user?.uid}/communitySnippets`, communityId)
      );

      batch.update(doc(firestore, 'communities', communityId), {
        numberOfMembers: increment(-1),
      });
      await batch.commit();

      setCommunityStateValue((prev) => ({
        ...prev,
        mySnippets: prev.mySnippets.filter(
          (item) => item.communityId !== communityId
        ),
      }));
    } catch (error: any) {
      console.log('leaveCommunity', error);
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!user) return;
    getMySnippets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return {
    communityStateValue,
    onJoinOrLeaveCommunity,
    loading,
  };
};

export default useCommunityData;
