import React from "react"
import style from "./Images.module.css"
import Image from "next/image"

import image1 from "./images/top/Rectangle97.jpg"
import image2 from "./images/top/Rectangle96.jpg"
import image3 from "./images/top/Rectangle99.jpg"
import image4 from "./images/top/Rectangle98.jpg"

import image5 from "./images/bottom/left/Rectangle100.jpg"
import image6 from "./images/bottom/left/Rectangle104.jpg"
import image7 from "./images/bottom/left/Rectangle105.jpg"

import image8 from "./images/bottom/right/Rectangle101.jpg"
import image9 from "./images/bottom/right/Rectangle102.jpg"
import image10 from "./images/bottom/right/Rectangle103.jpg"

export const Images: React.FC = () => {
    return (
        <div className={style.img_content}>
            <div className={style.top_images}>
                <div><Image src={image1} alt={"picture"}/></div>
                <div><Image src={image2} alt={"picture"}/></div>
                <div><Image src={image3} alt={"picture"}/></div>
                <div><Image src={image4} alt={"picture"}/></div>
            </div>
            <div className={style.bottom_images}>
                <div className={style.bottom_images__left}>
                    <div className={style.left1}><Image width={"735px"} src={image5} alt={"picture"}/></div>
                    <div className={style.left2}><Image src={image6} alt={"picture"}/></div>
                    <div className={style.left3}><Image src={image7} alt={"picture"}/></div>
                </div>
                <div className={style.bottom_images__right}>
                    <div className={style.right1}><Image src={image8} alt={"picture"}/></div>
                    <div className={style.right2}><Image src={image9} alt={"picture"}/></div>
                    <div className={style.right3}><Image width={"736px"} src={image10} alt={"picture"}/></div>
                </div>
            </div>
        </div>
    )
}