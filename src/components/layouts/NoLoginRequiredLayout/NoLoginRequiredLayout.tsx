import type { ReactElement } from "react";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

export const NoLoginRequiredLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};
