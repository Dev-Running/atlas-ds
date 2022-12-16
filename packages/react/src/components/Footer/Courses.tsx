import { Container, Heading, LinkButton } from '../'
export const Courses = () => {
  return (
    <Container
      css={{
        '@2xl': {
          $$gap: '1rem',
        },
      }}
      type="Column"
    >
      <Heading as="h2">Cursos</Heading>
      <Container
        type="Column"
        css={{
          '@2xl': {
            $$gap: '0.875rem',
          },
        }}
      >
        <LinkButton intent="light" decoration="false">
          Front-end
        </LinkButton>
        <LinkButton intent="light" decoration="false">
          Back-end
        </LinkButton>
        <LinkButton intent="light" decoration="false">
          Infraestrutura
        </LinkButton>
        <LinkButton intent="light" decoration="false">
          Microsservicos
        </LinkButton>
        <LinkButton intent="light" decoration="false">
          Observabilidade
        </LinkButton>
      </Container>
    </Container>
  )
}
