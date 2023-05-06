import React from 'react';
import styles from '@/styles/Home.module.css';


export default function Nav() {
    
        return(
            <div className={`${styles.Nav}`}>
                <div>
                    <ul>
                        <li ><a href="">Home</a></li>
                        <li><a href="#about">Productos</a></li>
                            <ul className={`${styles.Nav2}`}>
                                <li ><a href="#">Comida</a></li>
                                <li><a href="#about">Babida</a></li>   
                                <li><a href="#contact">Postre</a></li>
                                <a tabindex="0"></a>
                            </ul>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
          
        )
}