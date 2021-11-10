import React from "react"
import style from "./Advertising.module.css"
import {
    CustomCompatibilityIcon,
    CustomDevelopmentIcon,
    CustomUI_UX_DesignIcon, CustomVectorNext,
    CustomVectorPrev
} from "./svg/SVGImages"
import Image from "next/image"

import image1 from "./img/image40.png"
import image2 from "./img/image41.png"
import image3 from "./img/image42.png"
import image4 from "./img/image43.png"
import image5 from "./img/image44.png"
import image6 from "./img/image45.png"
import Stack from "@mui/material/Stack"
import { IconButton, Rating } from "@mui/material"

export const Advertising: React.FC = () => {
    return (
        <div className={style.advertising_container}>
            <div className={style.advertising_content}>
                <div className={style.advertising_panel}>
                    <div className={style.advertising_panel__decsr_block}>
                        <div className={style.advertising_panel__decsr_title}>
                            <div>
                                Easy to use backend admin panels
                            </div>
                        </div>
                        <div className={style.advertising_panel__decsr}>
                            <div>
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Ipsum has been the industry's standard dummy
                                text ever since the 1500s.
                            </div>
                        </div>
                    </div>
                    <div className={style.advertising_panel__stickers}>
                        <div className={`${style.advertising_panel__sticker} ${style.sticker_dev}`}>
                            <div className={style.advertising_panel__sticker_img}>
                                <CustomDevelopmentIcon/>
                            </div>
                            <div className={style.advertising_panel__sticker_ability}>
                                <div className={style.advertising_panel__sticker_title}>
                                    <span className={style.title}>Development</span>
                                    <span className={style.percent}>100%</span>
                                </div>
                                <div className={style.advertising_panel__sticker_status_bar}></div>
                            </div>
                        </div>
                        <div className={`${style.advertising_panel__sticker} ${style.sticker_des}`}>
                            <div className={style.advertising_panel__sticker_img}>
                                <CustomUI_UX_DesignIcon/>
                            </div>
                            <div className={style.advertising_panel__sticker_ability}>
                                <div className={style.advertising_panel__sticker_title}>
                                    <span className={style.title}>UI / UX Design</span>
                                    <span className={style.percent}>100%</span>
                                </div>
                                <div className={style.advertising_panel__sticker_status_bar}></div>
                            </div>
                        </div>
                        <div className={`${style.advertising_panel__sticker} ${style.sticker_comp}`}>
                            <div className={style.advertising_panel__sticker_img}>
                                <CustomCompatibilityIcon/>
                            </div>
                            <div className={style.advertising_panel__sticker_ability}>
                                <div className={style.advertising_panel__sticker_title}>
                                    <span className={style.title}>Compatibility</span>
                                    <span className={style.percent}>100%</span>
                                </div>
                                <div className={style.advertising_panel__sticker_status_bar}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.advertising}>
                    <div className={style.advertising__images_block}>
                        <div><Image src={image1}/></div>
                        <div><Image src={image2}/></div>
                        <div><Image src={image6}/></div>
                        <div><Image src={image3}/></div>
                        <div><Image src={image4}/></div>
                        <div><Image src={image5}/></div>
                    </div>
                </div>
                <div className={style.advertising_slider}>
                    <div className={style.slider_container}>
                        <div className={style.slider_prev}>
                            <IconButton className={style.slider_button}>
                                <CustomVectorPrev/>
                            </IconButton>
                        </div>
                        <div className={style.slider_content}>
                            <div className={style.slider_title_content}>
                                <div className={style.slider_title}>
                                    <span>OMEGA</span>
                                </div>
                                <div className={style.slider_rating}>
                                    <Stack spacing={3}>
                                        <Rating name="size-medium" defaultValue={5}/>
                                    </Stack>
                                </div>
                            </div>
                            <div className={style.slider_descr}>
                                <span>
                                    We found the process with app to be
                                    extremely simple - they just really
                                    know what they are talking about which
                                    gave us great peace of mind with moving
                                    forward with the project
                                </span>
                            </div>
                        </div>
                        <div className={style.slider_next}>
                            <IconButton className={style.slider_button}>
                                <CustomVectorNext/>
                            </IconButton>
                        </div>
                    </div>
                    <div className={style.slider_bottom_bar}>
                        <div className={style.slider_bar_progress}>
                            <div className={`${style.progress_elem}`}></div>
                            <div className={`${style.progress_elem} ${style.active_progress_elem}`}></div>
                            <div className={`${style.progress_elem}`}></div>
                            <div className={`${style.progress_elem}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}