import React from 'react'
import "../style/contents.scss"
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import thumb from "../images/thumb1.png"
import thumb2 from "../images/thumb2.png"
import thumb3 from "../images/thumb3.png"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import instagram from "../images/instagram.png"

function Contents(props) {
    const imgSlider = (img, color) => {
        console.log(img, color)
        document.querySelector(".starbucks").src = img

        props.getColor(color)
    }
    return (
        <>
        <div className="contents">
            <div className="textBox">
                <h2>
                    It's not just Coffee
                    <br/>
                    It's <span>Starbuck</span>
                </h2>
                <p>Since 1971, it always has been and will always be about quality. We’re passionate about ethically sourcing only the finest Arabica coffee beans and roasting them with great care. Our passion for coffee is rivaled only by our love of sharing it.</p>
                <a href="/">Learn More</a>
            </div>
            <div className="imgBox">
                <img src={img1} alt="" className="starbucks"/>
            </div>
        </div>
        <ul className="thumb">
            <li><img src={thumb} onClick={()=>imgSlider(img1,"#017143")}/></li>
            <li><img src={thumb2} onClick={()=>imgSlider(img2,"#eb7495")}/></li>
            <li><img src={thumb3} onClick={()=>imgSlider(img3,"#d752b1")}/></li>
        </ul>
        <ul className="sci">
            <li><a href="/"><img src={facebook} alt=""/></a></li>
            <li><a href="/"><img src={twitter} alt=""/></a></li>
            <li><a href="/"><img src={instagram} alt=""/></a></li>
        </ul>
        </>
    )
}

export default Contents
