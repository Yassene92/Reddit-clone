import { firestore } from '@/firebase/clientApp';
import { doc, getDoc } from 'firebase/firestore';
import safeJsonStringify from 'safe-json-stringify';

import { Community } from '@/atoms/commuityAtom';
import CommunityNotFound from '@/components/Community/NotFond';
import Header from '@/components/Community/Header';
import PageContent from '@/components/layout/PageContent';
import CreatPostLink from '@/components/Community/CreatPostLink';

interface PageProps {
  params: {
    community: string;
  };
}

//export const dynamic = 'force-dynamic';

async function getCommunityData(community: string) {
  try {
    const communityDocRef = doc(firestore, 'communities', community);
    const communityDoc = await getDoc(communityDocRef);
    const communityData = communityDoc.exists()
      ? JSON.parse(
          safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
        )
      : '';
    return communityData;
  } catch (error) {
    console.log('[community]', error);
  }
}

export default async function Page({ params: { community } }: PageProps) {
  const communityData: Community = await getCommunityData(community);

  if (!communityData) return <CommunityNotFound />;

  return (
    <>
      <Header communityData={communityData} />
      <PageContent>
        <>
          <CreatPostLink />
        </>
        <>
          <div>RHS</div>
        </>
      </PageContent>
    </>
  );
}
