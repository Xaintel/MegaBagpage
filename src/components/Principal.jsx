import React from 'react'

import LogoG from '/Users/xaint/Documents/Programacion/Megabag/megabag/src/assets/img/megabag_logo_rojo.svg'
import '/Users/xaint/Documents/Programacion/Megabag/megabag/src/css/animate.css'
import '/Users/xaint/Documents/Programacion/Megabag/megabag/src/css/style.css'
import '/Users/xaint/Documents/Programacion/Megabag/megabag/src/css/style.css.map'

import '/Users/xaint/Documents/Programacion/Megabag/megabag/src/js/anime.js'

import '/Users/xaint/Documents/Programacion/Megabag/megabag/src/js/easing.js'


const Principal = () => {
    return (
        <section id='s1' class="main section s1">
            <div class="main__wrapper">
                <div class="main__box">
                <h1 class="main__name" data-depth='5'>
                    MEGA BAG
                </h1>
                <button>Conoce La mega Bolsa</button>
                <span class='main__underBar'></span>
                <p class='main__info'></p>
                </div>
                <div class="layer main__sun" id="demo">
                    <div class="main_sunny" data-depth='-1'>
                        <br/>
                        <br/>
                        <img src={LogoG}  alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Principal
