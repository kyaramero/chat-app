import { styled } from 'styled-components'
import { SigninNormal } from '../../assets'

export const NavigationBar = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: red;
  display: flex;
  justify-content: center;
  gap: 2em;
`

export const BtnSignin = styled.button`
  width: 210px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-image: url(${SigninNormal});
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`

export const BtnSignout = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  cursor: pointer;
`
