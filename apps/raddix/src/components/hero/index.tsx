import { HightLight2, StyledHero, HightLight } from "./styles";

const Hero = () => {
  return (
    <StyledHero>
      <h1>
        A library of React hooks that provides accessible UI primitives for your design system.
      </h1>
      <p>Accesible, Unstyled and Developer experience</p>
      <HightLight />
      <HightLight2 />
    </StyledHero>
  )
}

export default Hero