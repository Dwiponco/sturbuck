import React from 'react'
import Header from './header'
import "../style/home.scss"
import Contents from './contents'

function Home() {
    const changeCircleColor = (color) => {
        console.log("home ", color)
        const circle = document.querySelector(".circle");
        circle.style.background = color
    }
    return (
        <section className="section">
            <div className="circle"></div>
                <Header/>
                <Contents
                    getColor={(value) => changeCircleColor(value)}
                />
        </section>
    )
}

export default Home
