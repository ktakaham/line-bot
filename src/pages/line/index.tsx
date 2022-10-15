import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

import { Layout } from "@/components/layouts/";
import { LinePageComponent } from "@/components/pages/line";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const LinePage: NextPageWithLayout = () => <LinePageComponent />;
LinePage.getLayout = (page) => (
  <Layout>{page}</Layout>
);
export default LinePage;