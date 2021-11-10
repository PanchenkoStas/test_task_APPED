import type { NextPage } from "next"
import styles from "../styles/Index.module.css"
import { MainContainer } from "../components/containers/MainContainer/MainContainer"
import { Title } from "../components/Title/Title"
import { Services } from "../components/Services/Services"
import { Images } from "../components/Images/Images"
import { Advertising } from "../components/Advertising/Advertising"
import { FormContent } from "../components/FormContent/FormContent"
import { FooterLogo } from "../public/Apped"
import { Button } from "@mui/material"
import React from "react"

const Index: NextPage = () => {
    return (
        <MainContainer keywords={"apped-app"}>

            <main className={styles.main}>
                <div className={styles.main_container}>
                    <Title/>
                    <Services/>
                    <Images/>
                    <Advertising/>
                    <FormContent/>
                </div>
            </main>

            <footer>
                <div className={styles.footer}>
                    <div className={styles.footer}>
                        <div className={styles.footer_logo}>
                            <FooterLogo/>
                        </div>
                        <div className={styles.footer_buttons}>
                            <div>HOME</div>
                            <div>ABOUT US</div>
                            <div>TESTIMONIALS</div>
                            <div>CONTACT</div>
                            <Button
                                className={styles.client_button}
                                variant={"contained"}
                            >
                                CLIENT AREA
                            </Button>
                            <Button
                                variant={"outlined"}

                            >
                                GET A QUOTE
                            </Button>
                        </div>
                    </div>
                </div>
            </footer>
        </MainContainer>
    )
}

export default Index
