import { Container } from '../'
import { styled } from '../../stitches'
import { FooterCSS } from '../../styles'
import { Contacts } from './Contacts'
import { Courses } from './Courses'
import { Platform } from './Platform'
import { Politics } from './Politics'

export const FooterContainer = styled('footer', FooterCSS)

export const Footer = () => (
  <FooterContainer>
    <Container type="flex" css={{ $$gap: '5rem' }}>
      <Contacts />
      <Courses />
      <Platform />
      <Politics />
    </Container>
  </FooterContainer>
)
