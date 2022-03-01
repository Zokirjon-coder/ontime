import React from 'react'
import {Container} from './styled'
import logo from '../../../assets/icons/logo.png'

const Header = () => {
  return (
    <Container>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="menu">
            <a href="#">Home</a>
            <a href="#">24/7 dispatch service</a>
            <a href="#">Workflow</a>
            <a href="#">Get quotation</a>
            <a href="#">Services</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
        </div>
        <div className="hirebtn">
            <button>We are hiring</button>
        </div>
    </Container>
  )
}

export default Header