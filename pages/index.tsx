import type { NextPage } from "next"
import styles from "../styles/Index.module.css"
import { MainContainer } from "../components/containers/MainContainer/MainContainer"
import { Title } from "../components/Title/Title"
import { Services } from "../components/Services/Services"
import { Images } from "../components/Images/Images"
import { Advertising } from "../components/Advertising/Advertising"
import { FormContent } from "../components/FormContent/FormContent"

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

            <footer className={styles.footer}>
                <div>
                    footer
                </div>
            </footer>
        </MainContainer>
    )
}

export default Index
