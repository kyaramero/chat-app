import { NavigationBar, BtnSignin, BtnSignout } from './style'

export const Navbar = () => {
  return (
    <>
      <NavigationBar>
        <BtnSignin />
        <BtnSignout>Sign out</BtnSignout>
      </NavigationBar>
    </>
  )
}
