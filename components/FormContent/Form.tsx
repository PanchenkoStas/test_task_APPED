import React from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { useFormik } from "formik"
import style from "./Form.module.css"

type LoginFormPropsType = {

}
export const Form: React.FC<LoginFormPropsType> = ({}) => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            textArea:""
        },

        onSubmit: (values) => {

        }
    })

    return (
        <>
            <Box component="form" onSubmit={formik.handleSubmit} noValidate>
                <TextField
                    {...formik.getFieldProps("name")}
                    className={style.form_field}
                    margin="normal"
                    required
                    fullWidth
                    autoComplete="name"
                    autoFocus
                    placeholder="Name"
                />
                <TextField
                    className={style.form_field}
                    {...formik.getFieldProps("email")}
                    margin="normal"
                    required
                    fullWidth
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                />
                <TextField
                    className={`${style.form_field} ${style.form_textarea_height} `}
                    {...formik.getFieldProps("textArea")}
                    margin="normal"
                    required
                    fullWidth
                    multiline
                    type="text"
                    autoComplete="text"
                    placeholder="Write a message"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                >
                    Get In Touch With Us
                </Button>
            </Box>
        </>
    )
}