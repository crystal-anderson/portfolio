import styled from "styled-components";

export const Nav = styled.nav`
  background-color: rgba(255, 255, 255, 0.5);
  height: 50px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled.a`
  font-size: 1.5em;
  text-align: center;
  color: #003221;
  letter-spacing: 1px;
  padding: 20px;
  line-height: 50px;
  transition: all 0.3s ease-out;
  :hover {
    color: #812116;
  }
`;
