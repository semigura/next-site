import { ReactNode } from "react";

import { css } from "@emotion/react";

const Div = ({ children }: { children: ReactNode }) => {
  return (
    <div
      css={css`
        margin-bottom: calc(2em * 1.5);
      `}
    >
      {children}
    </div>
  );
};

export default Div;
