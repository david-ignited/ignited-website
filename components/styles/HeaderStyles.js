import styled from 'styled-components';

const HeaderStyles = styled.header`
width: 100%;
height: var(--header-height);
max-width: 100%;
position: fixed;
top: 0;
background: rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10px);
font-size: var(--body14-fs);
line-height: var(--body14-lh);
z-index: 500;
will-change: transform;
transform: translateY(0%);
&:after {
  content: "";
  width: 100%;
  height: 1px;
  background: rgba(65, 57, 134, 0.5);
  position: absolute;
  bottom: 0;
  left: 0;
}
a{
  display: flex;
  align-items: center;
  outline: 0;
  h1 {
    display: none;
  }
}
`;

export default HeaderStyles