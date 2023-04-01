import { app } from '@/firebase/clientApp';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore(app);
export default async function CommunityData(collection, communityData) {
  const docRef = doc(db, collection, communityData.id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { communityData: docSnap.data() };
  } else {
    return { communityData: null };
  }
}
