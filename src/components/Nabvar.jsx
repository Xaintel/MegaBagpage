import React from 'react'

import Logo from '/Users/xaint/Documents/Programacion/Megabag/megabag/src/assets/img/Logo.svg'

const Nabvar = () => {
    return (
        <div>
            

            <nav class="navbar navbar-default navbar-fixed-top mt-8">
            <div class="container">
                <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>                        
                </button>
                
                <a class="navbar-brand" href="#myPage">
                    <img src={Logo} alt=""  href="#"  width="90" height ="72"/></a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#portfolio">PORTFOLIO</a></li>
                    <li><a href="#pricing">PRICING</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
                </div>
            </div>
            </nav>
                    

        </div>
    )
}

export default Nabvar
