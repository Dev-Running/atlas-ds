import { Container, Heading, LinkButton } from '../'

export const Contacts = () => {
  return (
    <Container
      css={{
        '@2xl': {
          $$gap: '1rem',
        },
      }}
      type="Column"
    >
      <Heading as="h2">Contatos</Heading>
      <Container
        type="Column"
        css={{
          '@2xl': {
            $$gap: '0.875rem',
          },
        }}
      >
        <Container>
          <Heading as="h6">Lucas Laurentino</Heading>
          <LinkButton intent="light" decoration="false">
            laurentino@devrunning.com
          </LinkButton>
        </Container>
        <Container>
          <Heading as="h6">Suporte</Heading>
          <LinkButton intent="light" decoration="false">
            suporte@devrunning.com
          </LinkButton>
        </Container>
      </Container>
    </Container>
    // <div className="  flex flex-col gap-4">
    //   <h1 className="font-semibold text-neutral-200">Contatos</h1>
    //   <div>
    //     <h2 className="font-medium text-neutral-300">Lucas Laurentino</h2>
    //     <a href="" className="text-neutral-400 hover:text-neutral-200">
    //       laurentinodeev@gmail.com
    //     </a>
    //   </div>
    //   <div>
    //     <h2 className="font-medium text-neutral-300 ">Suporte</h2>
    //     <a href="" className="text-neutral-400 hover:text-neutral-200">
    //       devrunning@gmail.com
    //     </a>
    //   </div>
    // </div>
  )
}
