import { Button } from '../'
import { styled } from '../../stitches'
import {
  HeaderBox1CSS,
  HeaderBox2CSS,
  HeaderCSS,
  HeaderUlCSS,
} from '../../styles'
import { LinkButton } from '../LinkButton'

const HeaderContainer = styled('header', HeaderCSS)
const HeaderBox1 = styled('div', HeaderBox1CSS)
const HeaderUL = styled('ul', HeaderUlCSS)
const HeaderBox2 = styled('div', HeaderBox2CSS)
const HeaderLI = styled('li', {
  listStyle: 'none',
})

export const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderBox1>
          <img
            src="/assets/short-dark-mode-logo.svg"
            width={80}
            height={100}
            alt=""
          />

          <HeaderUL>
            <HeaderLI>
              <LinkButton
                href=""
                decoration="false"
                intent="light"
                weight="bold"
              >
                Inicio
              </LinkButton>
            </HeaderLI>
            <HeaderLI>
              <a href="" className="  text-zinc-300 hover:brightness-110">
                Cursos
              </a>
            </HeaderLI>
            <HeaderLI>
              <a href="" className=" text-zinc-300 hover:brightness-110">
                Blog
              </a>
            </HeaderLI>
            <HeaderLI>
              <a href="" className=" text-zinc-300 hover:brightness-110">
                Sobre
              </a>
            </HeaderLI>
          </HeaderUL>
        </HeaderBox1>
        <HeaderBox2>
          <a
            href=""
            className="text-sm font-semibold uppercase text-zinc-300  hover:brightness-110"
          >
            Entrar
          </a>
          <Button intent="primary" text-size="sm">
            CRIAR CONTA
          </Button>
        </HeaderBox2>
      </HeaderContainer>
    </div>
  )
}
