import Image from "next/image";
import { Heading, Text } from "@ignite-ui/react";

import ClainUsernameForm from "./components/ClainUsernameForm";

import PreviewImage from "../../assets/app-preview.png";

import { Container, Hero, Preview } from "./styles";

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="3xl">
          Agendamento descomplicado
        </Heading>
        <Text size="lg">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClainUsernameForm />
      </Hero>
      <Preview>
        <Image
          src={PreviewImage}
          alt="Calendário simbolizando aplicação em funcionamento"
          height={400}
          quality={100}
          priority
        />
      </Preview>
    </Container>
  );
}
