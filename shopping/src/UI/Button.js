import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  font-size: 1.5em;
  text-align: center;
  border-radius: 5px;
  background-color: #fff;
  ${(props) => `
    color: ${props.color};
    border-color:${props.color};
  `}
  &:hover {
    color: #fff;
    ${(props) => `background:${props.color};`}
  }
`;
export default Button;
