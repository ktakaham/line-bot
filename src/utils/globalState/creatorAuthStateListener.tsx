import type { PropsWithChildren } from "react";
import { useEffect } from "react";

import { useProjectOwnerByIdLazyQuery } from "@/utils/apollo/generated";
import { fireAuth } from "@/utils/firebase";

import { useSetCreatorAccount } from "./creator";
import { useSetCreatorCredential } from "./credential";

export const CreatorAuthStateListener = ({ children }: PropsWithChildren) => {
  const setCredential = useSetCreatorCredential();
  const setCreator = useSetCreatorAccount();

  // const [getCreater] = useProjectOwnerByIdLazyQuery();

  useEffect(() => {
    const unsubscriber = fireAuth.onAuthStateChanged(async (credential) => {
      const isPasswordLogin = credential
        ? credential.providerData.filter(
            (provider) => provider?.providerId == "password"
          ).length > 0
        : false;

      if (!isPasswordLogin || !credential) {
        setCredential({ uid: undefined, loading: false });
        return;
      }

      const uid = credential.uid;
      setCredential({ uid: uid, loading: false });

      setCreator((creator) => {
        return { ...creator, loading: true };
      });
      // getCreater({
      //   variables: { projectOwnerId: uid },
      //   onCompleted: (res) => {
      //     setCreator({
      //       projectOwner: res.projectOwnersByPk,
      //       loading: false,
      //       error: undefined,
      //     });
      //   },
      //   onError: (error) => {
      //     setCreator({ projectOwner: undefined, loading: false, error: error });
      //   },
      // });
    });
    return unsubscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{children}</>;
};
