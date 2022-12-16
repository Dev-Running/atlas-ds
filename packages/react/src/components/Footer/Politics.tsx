import { Container, Heading, LinkButton } from '../'
export const Politics = () => {
  return (
    <Container
      css={{
        '@2xl': {
          $$gap: '1rem',
        },
      }}
      type="Column"
    >
      <Heading as="h2">Normas</Heading>
      <Container
        type="Column"
        css={{
          '@2xl': {
            $$gap: '0.875rem',
          },
        }}
      >
        <LinkButton intent="light" decoration="false">
          Politicas de privacidade
        </LinkButton>
        <LinkButton intent="light" decoration="false">
          Direitos de uso
        </LinkButton>
        <LinkButton intent="light" decoration="false">
          Preferencias de cookies
        </LinkButton>
        <LinkButton intent="light" decoration="false">
          Para empresas
        </LinkButton>
      </Container>
    </Container>
  )
}
