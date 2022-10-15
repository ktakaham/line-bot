import type { ReactElement } from "react";

import { Header } from "./Header";
import { useRequiredLogin } from "./useRequiredLogin";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

export const Layout = ({ children }: LayoutProps) => {
  useRequiredLogin();

  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
