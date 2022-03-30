import styled from "@emotion/styled";

export const Button = styled.button`
  border: 0;
  appearance: none;
  background: transparent;
  color: rgb(14 165 233);
  font-size: 1em;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
  font-family: inherit;

  &:disabled {
    color: inherit;
    text-decoration: none;
    cursor: auto;
  }
`;

export default Button;
