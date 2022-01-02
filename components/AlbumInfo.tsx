import { ReactNode } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const AlbumInfoDiv = styled.div`
  border-top: 1px dashed;
  padding-top: calc(1em * 1.5);
  margin-top: calc(1em * 1.5);
`;

interface Props {
  label?: ReactNode;
  tracklisting: ReactNode;
  streamings?: ReactNode;
  note?: ReactNode;
}

export const AlbumInfo = ({ label, tracklisting, streamings, note }: Props) => {
  return (
    <AlbumInfoDiv>
      {label && (
        <div
          css={css`
            margin-bottom: calc(1em * 1.5);
          `}
        >
          {label}
        </div>
      )}
      <div
        css={css`
          margin-bottom: calc(1em * 1.5);
        `}
      >
        {tracklisting}
      </div>
      {streamings && (
        <div
          css={css`
            margin-bottom: calc(1em * 1.5);
          `}
        >
          {streamings}
        </div>
      )}
      {note && note}
    </AlbumInfoDiv>
  );
};

AlbumInfo.defaultProps = {
  label: undefined,
  streamings: undefined,
  note: undefined,
};
