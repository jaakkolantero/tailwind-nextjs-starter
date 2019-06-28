import Link from "next/link";
import Header from "../components/header";
import tw from "tailwind.macro";
import styled from "styled-components";

const StyledLink = styled.a`
  ${tw`bg-red-500 text-red-200 py-4 px-8 inline-block hover:cursor-pointer`};
`;

function Index() {
  return (
    <main>
      <Header />
      <section>
        <Link href="/about">
          <StyledLink>Go to About Me</StyledLink>
        </Link>
      </section>
    </main>
  );
}

export default Index;
