import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

import { NoLoginRequiredLayout } from "@/components/layouts/NoLoginRequiredLayout/NoLoginRequiredLayout";
import { LoginPageComponent } from "@/components/pages/login";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const LoginPage: NextPageWithLayout = () => <LoginPageComponent />;
LoginPage.getLayout = (page) => (
  <NoLoginRequiredLayout>{page}</NoLoginRequiredLayout>
);
export default LoginPage;
