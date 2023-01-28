import React from 'react'
import { StyleContainer, StyleList, StyleNav, StyledHeader } from './styles'

const Header = () => {
  return (
    <StyledHeader>
      <StyleContainer>
        <div className='logo'>
          <h1>Raddix</h1>
        </div>

        <StyleNav>
          <StyleList>
            <li>Documentación</li>
            <li>Plantillas</li>
            <li>Guías</li>
          </StyleList>
        </StyleNav>
      </StyleContainer>
    </StyledHeader>
  )
}

export default Header