import React from "react"
import style from "./Title.module.css"
import { Logo } from "../../public/Apped"
import { Button } from "@mui/material"
import Image from "next/image"
import Phone1 from "./../../public/IPhonesPNG/image24.png"
import Phone2 from "./../../public/IPhonesPNG/image23.png"
import Phone3 from "./../../public/IPhonesPNG/image22.png"
import Phone4 from "./../../public/IPhonesPNG/image21.png"
import Phone5 from "./../../public/IPhonesPNG/image25.png"
import Phone6 from "./../../public/IPhonesPNG/image26.png"
import Phone7 from "./../../public/IPhonesPNG/image27.png"

export const Title: React.FC = () => {
    return (
        <div className={style.main_title}>
            <div className={style.container}>
                <div className={style.logo}>
                    <Logo/>
                </div>
                <div className={style.links_container}>
                    <div>HOME</div>
                    <div>ABOUT US</div>
                    <div>TESTIMONIALS</div>
                    <div>CONTACT</div>
                    <Button
                        variant={"contained"}
                        className={`${style.button} ${style.button_contained}`}
                    >
                        CLIENT AREA
                    </Button>
                    <Button
                        variant={"outlined"}
                        className={`${style.button} ${style.button_head__get_quote}`}
                    >
                        GET A QUOTE
                    </Button>
                    <div>0800 726 543</div>
                </div>
            </div>
            <div className={style.main__text_content}>
                <div className={style.main__top_text}>
                    <span>NEED A MOBILE APP DEVELOPED?</span>
                </div>
                <div className={style.main__bottom_text}>
                    <span>We are a New Zealand App development agency building custom mobile apps for iOS and Android.</span>
                </div>
            </div>
            <div>
                <Button
                    variant={"contained"}
                    className={`${style.button} ${style.button_contained} ${style.button_get_quote}`}
                >
                    GET A QUOTE
                </Button>
            </div>
            <div className={style.phones_block}>
                <div className={style.phones_block__phone1}>
                    <Image src={Phone1}/>
                </div>
                <div className={style.phones_block__phone2}>
                    <Image src={Phone2}/>
                </div>
                <div className={style.phones_block__phone3}>
                    <Image src={Phone3}/>
                </div>
                <div className={style.phones_block__phone4}>
                    <Image src={Phone4}/>
                </div>
                <div className={style.phones_block__phone5}>
                    <Image src={Phone5}/>
                </div>
                <div className={style.phones_block__phone6}>
                    <Image src={Phone6}/>
                </div>
                <div className={style.phones_block__phone7}>
                    <Image src={Phone7}/>
                </div>
            </div>
        </div>
    )
}