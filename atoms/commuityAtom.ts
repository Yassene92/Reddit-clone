import { Timestamp } from 'firebase/firestore';
import { atom } from 'recoil';

export interface Community {
  id: string;
  creatorId: string;
  numberOfMembers: number;
  privacyType: 'public' | 'restricted' | 'private';
  createdAt?: Timestamp;
  imageUrl?: string;
}

export interface communitySnippets {
  communityId: string;
  isModerator?: boolean;
  imageUrl?: string;
}

interface CommunityState {
  mySnippets: communitySnippets[];
  // visitedCommunities
}

const defaultCommunityState: CommunityState = {
  mySnippets: []
}
export const communityState = atom<CommunityState>({
  key: 'communityState',
  default: defaultCommunityState
})