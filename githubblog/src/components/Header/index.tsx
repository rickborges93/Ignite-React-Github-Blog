import { HeaderContainer } from './styles'
import techBg from '../../assets/bg-header.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={techBg} alt="GITHUB BLOG LOGO"></img>
    </HeaderContainer>
  )
}
