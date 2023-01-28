import Header from "@/components/header"
import { styled } from "@stitches/react"

const StyledMain = styled('main', {
  marginTop: '-80px',
  paddingTop: '100px',
  overflowX: "hidden"
})

export interface Props {
  children?: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <StyledMain>
        {children}
      </StyledMain>
    </>
  )
}

export default RootLayout