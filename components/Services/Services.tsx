import React from "react"
import style from "./Services.module.css"
import { Button, Card } from "@mui/material"
import { CustomDesignIcon, CustomHostingIcon, CustomMenuIcon, CustomPhoneIcon } from "./accets/SVG"

export const Services: React.FC = () => {
    return (
        <div className={style.services_container}>
            <div className={style.services_main}>
                <div className={style.services_cards_container}>
                    <Card elevation={3} className={`${style.services_card}`}>
                        <div>
                            <div>
                                <CustomPhoneIcon/>
                            </div>
                            <div className={style.services_card__text}>CUSTOM APPS</div>
                        </div>
                    </Card>
                    <Card elevation={3} className={`${style.services_card}`}>
                        <div>
                            <div>
                                <CustomMenuIcon/>
                            </div>
                            <div className={style.services_card__text}>
                                APP PRODUCTS
                            </div>
                        </div>
                    </Card>
                    <Card elevation={3} className={`${style.services_card}`}>
                        <div>
                            <div>
                                <CustomHostingIcon/>
                            </div>
                            <div className={style.services_card__text}>
                                APP HOSTING
                            </div>
                        </div>
                    </Card>
                    <Card elevation={3} className={`${style.services_card}`}>
                        <div>
                            <div>
                                <CustomDesignIcon/>
                            </div>
                            <div className={style.services_card__text}>
                                APP DESIGN
                            </div>
                        </div>
                    </Card>
                </div>
                <div className={style.services_descr}>
                    <div>
                        <span>Services </span>
                        <span>that we offer</span>
                    </div>
                    <span className={style.services_descr__text}>
                            Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.
                    </span>
                </div>
            </div>
            <div className={style.services_bottom_content}>
                    <div className={style.services_bottom_descr}>
                        <div>Examples of our apps</div>
                        <span>Here are some examples of the quality of our app projects</span>
                    </div>
                    <div className={style.services_buttons}>
                        <Button variant={"contained"}>SHOW ALL</Button>
                        <Button>BUSINESS APPS </Button>
                        <Button>CONSTRUCTION</Button>
                        <Button>CUSTOM APP VENTURES</Button>
                        <Button>RESTAURANTS</Button>
                    </div>

            </div>
        </div>
    )
}