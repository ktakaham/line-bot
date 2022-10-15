import { atom } from "recoil";
import { useRecoilValue, useSetRecoilState } from "recoil";

type CreatorCredentialType = {
  uid: string | undefined;
  loading: boolean;
};

const CreatorCredentialState = atom<CreatorCredentialType>({
  key: "CreatorCredential",
  default: { uid: undefined, loading: true },
  // effects_UNSTABLE: [persistAtom]  // 永続化
});

export const useSetCreatorCredential = () => {
  return useSetRecoilState(CreatorCredentialState);
};

export const useGetCreatorCredential = () => {
  return useRecoilValue(CreatorCredentialState);
};
