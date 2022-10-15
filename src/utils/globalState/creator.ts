import type { ApolloError } from "@apollo/client";
import { atom } from "recoil";
import { useRecoilValue, useSetRecoilState } from "recoil";

import type { CreatorAccountFragment } from "@/utils/apollo/generated";

type CreatorAccountType = {
  projectOwner: CreatorAccountFragment | null | undefined;
  loading: boolean;
  error: ApolloError | undefined;
};

const MyCreatorAccountState = atom<CreatorAccountType>({
  key: "MyCreatorAccount",
  default: { projectOwner: undefined, loading: false, error: undefined },
  // effects_UNSTABLE: [persistAtom]  // 永続化
});

export const useSetCreatorAccount = () => {
  return useSetRecoilState(MyCreatorAccountState);
};

export const useGetCreatorAccount = () => {
  return useRecoilValue(MyCreatorAccountState);
};
