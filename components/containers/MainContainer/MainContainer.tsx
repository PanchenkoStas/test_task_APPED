import React from "react"
import Head from "next/head"


export type MainContainerPropsType = {
    keywords: string
}
export const MainContainer: React.FC<MainContainerPropsType> = ({children, keywords}) => {

    return (
        <>
            <Head>
                <meta content={keywords}/>
                <title>APPED</title>
            </Head>
            <div>{children}</div>
        </>
    )
}