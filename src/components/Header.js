import React from 'react'
import styled from 'styled-components'
import HeaderContent from './HeaderContent'
import bg from './images/bg.svg'
import Navigation from './Navigation'



function Header() {
  return (
    <HeaderStyled>
        <div className='header-content'>
            <Navigation />
            <HeaderContent />
        </div>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
    height: 100vh;
    width: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
    .header-content {
        padding: 0 10rem;
    }
`;

export default Header