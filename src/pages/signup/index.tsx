import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

import { NoLoginRequiredLayout } from "@/components/layouts/NoLoginRequiredLayout/NoLoginRequiredLayout";
import { SignupPageComponent } from "@/components/pages/signup";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const SignupPage: NextPageWithLayout = () => <SignupPageComponent />;
SignupPage.getLayout = (page) => (
  <NoLoginRequiredLayout>{page}</NoLoginRequiredLayout>
);
export default SignupPage;
