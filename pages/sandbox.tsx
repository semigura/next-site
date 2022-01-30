/* eslint-disable react/button-has-type */
import { useEffect, useState } from "react";

import { css } from "@emotion/react";
import type { NextPage } from "next";

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => {
  const [fontSize, setFontSize] = useState(14);
  const [fontSizePerSeconds, setFontSizePerSeconds] = useState(0.1);
  useEffect(() => {
    const interval = setInterval(() => {
      setFontSize(
        Math.round(fontSize * 10) / 10 +
          Math.round(fontSizePerSeconds * 10) / 10
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [fontSize, fontSizePerSeconds]);
  return (
    <div
      css={css`
        background-color: white;
        color: black;
        min-height: 100vh;
        text-align: center;
      `}
    >
      <div
        css={css`
          font-size: ${fontSize}px;
        `}
      >
        Currently increasing by 0.1px every second
      </div>
      <br />
      <button
        onClick={() => {
          setFontSizePerSeconds(
            Math.round(fontSizePerSeconds + fontSize * 10) / 10 - 14
          );
          setFontSize(14);
        }}
      >
        Reset font size to increase font size by{" "}
        {Math.round(fontSizePerSeconds + (fontSize - 14) * 10) / 10}px every
        second
      </button>
    </div>
  );
};

export default Home;
