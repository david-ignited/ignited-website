import styled from 'styled-components';

const NavStyles = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    
    li{
      height: 100%;
      position: relative;
      
      
      a {
        height: 100%;
        padding: 0 25px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        
        /* transition: .3s; */
        background-image:linear-gradient(90deg, #166FEF,#9E00F3);
          background-size:0% 3px;
          background-repeat: no-repeat;
          background-position:50% 70%;
        cursor:pointer;
        transition:300ms ease;
        
       
        &:hover{
          color:white;
          background-size:80% 3px;
          
        }
        /* &:before{
          content: "";
          width: calc(100% - 50px);
          height: 2px;
          background: #814bf6;
          border-radius: 50px;
          position: absolute;
          bottom: 0;
          left: 50%;
          display: block;
          transform: translateX(-50%) scaleX(1);
          transform-origin: right;
          box-shadow: 0px 0px 10px #df1cff;
        } */
      }
    }
  }
`;

export default NavStyles;