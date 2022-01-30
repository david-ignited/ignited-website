import styled, { css } from 'styled-components'

export const BtnLink = styled.div`
  border-radius: 30px;
  background-clip: padding-box;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  background: var(--fg);
  display: table;
  transition: 0.3s;
  a {
    height: ${props => props.small ?  "calc(var(--button-height) - 20px)" : "var(--button-height)"};
    padding: 17px 34px;
    overflow: hidden;
    color: #fff;
    font-size: var(--body14-fs);
    font-weight: 700;
    line-height: initial;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 10;
    transition: 0.3s;
  }
`

export const Divide = styled.div`
  width: 1px;
  height: 16px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0 25px;
`  

export const ConatinerFluid = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1920px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 30px;
  padding-left: 30px;
  margin-right: auto;
  margin-left: auto;
  ${props => props.isGrid && css`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 30px;
  `}
`

export const Container = styled.div`
  width: 100%;
  padding-right: var(--gap);
  padding-left: var(--gap);
  margin: 0 auto;
  position: relative;
  z-index: 9;
  @media (min-width: 481px){
    body & {
      max-width: 540px;
    }
  }
  @media (min-width: 768px){
    body & {
      max-width: 720px;
    }
  }
  @media (min-width: 992px){
    body & {
      max-width: 100%;
    }
  }
  @media (min-width: 1200px){
    body & {
      max-width: 1300px;
    }
  }
`

export const EyeBrow = styled.div`
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: var(--body10-fs);
  margin-bottom: 14px;
  ${props => props.pill && css`
    background: rgba(129, 75, 246, 0.3);
    border-radius: 16px;
  `}
  ${props => props.ghost && css`
    background: rgba(129, 75, 246, 0);
    border-radius: 16px;
    border: 1px solid var(--light-blue);
  `}
`

export const Group = styled.div`
  *:not(:last-child){
    margin-right: 10px;
  }
`

export const H2 = styled.h2`
  color: #fff;
  font-size: var(--h2-fs);
  line-height: var(--h2-lh);
`
