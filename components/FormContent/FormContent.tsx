import React from "react"
import style from "./Form.module.css"
import { Form } from "./Form"
import { CustomEmailIcon, CustomGPSIcon, CustomPhoneIcon } from "./formSVG/formSvg"

export const FormContent: React.FC = () => {
    return (
        <form className={style.form_container}>
            <div className={style.form_area}>
                <div className={style.form_title}>
                    <span>Get in touch with us.</span>
                </div>
                <div className={style.form}>
                    <Form/>
                </div>
            </div>
            <div className={style.form_descr_block}>
                <div className={style.form_descr_title}>
                    <div>
                        <span>We are a New Zealand owned company from out of Tauranga, Bay of Plenty.</span>
                    </div>
                </div>
                <div className={style.form_descr_contacts}>
                    <div className={style.form_descr_contacts_block}>
                        <div>
                            <span>
                                <CustomPhoneIcon/>
                            </span>
                            <span>Phone: 0800 726 543</span>
                        </div>
                        <div>
                            <span>
                                <CustomEmailIcon/>
                            </span>
                            <span>Email: hello@apped.nz</span>
                        </div>
                        <div>
                            <span>
                                <CustomGPSIcon/>
                            </span>
                            <span>Address: Tauranga, New Zealand</span>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}