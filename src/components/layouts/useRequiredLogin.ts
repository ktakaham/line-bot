import { useRouter } from "next/router";
import { useEffect } from "react";

import { useGetCreatorCredential } from "@/utils/globalState/";
import { pagesPath } from "@/utils/pathpida/$path";

export const useRequiredLogin = () => {
  const { uid, loading } = useGetCreatorCredential();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !uid) {
      //TODO: ログインが必要なことを伝える
      router.push(pagesPath.login.$url());
    }
  }, [loading, uid, router]);
};
