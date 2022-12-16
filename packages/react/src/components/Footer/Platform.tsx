import { Container, Heading, LinkButton } from '../'

export const Platform = () => {
  return (
    <Container
      css={{
        '@2xl': {
          $$gap: '1rem',
        },
      }}
      type="Column"
    >
      <Heading as="h2">Plataforma</Heading>
      <Container
        type="Column"
        css={{
          '@2xl': {
            $$gap: '0.875rem',
          },
        }}
      >
        <LinkButton intent="light" decoration="false">
          Inicio
        </LinkButton>
        <LinkButton intent="light" decoration="false">
          Blog
        </LinkButton>
        <LinkButton intent="light" decoration="false">
          Sobre
        </LinkButton>
        <LinkButton intent="light" decoration="false">
          Entrar
        </LinkButton>
        <LinkButton intent="light" decoration="false">
          Criar conta
        </LinkButton>
      </Container>
    </Container>
  )
}
