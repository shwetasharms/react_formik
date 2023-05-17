import React from 'react'
import { useFormik } from 'formik'
function YoutubeForm() {
    const initialValues = {
        name: '',
        email: "",
        channel: ""

    }
    const onSubmit = (values) => {
        console.log("Form data", values)
    }
    const validate = values => {
        //values.name values.email values.channel
        //errors.name errors.email errors.channel
        //error.name=''This field is required
        let errors = {}
        if (!values.name) {
            errors.name = 'Required'
        }
        if (!values.email) {
            errors.email = 'Required'
        } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
            errors.email = 'Invalid email format'
        }
        if (!values.channel) {
            errors.channel = 'Required'
        }
        return errors
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    console.debug("Form errors", formik.errors)
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>name</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
                {formik.errors.name ? <div>{formik.errors.name}</div> : ""}
                <label htmlFor='email'>E-mail</label>
                <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
                {formik.errors.email ? <div>{formik.errors.email}</div> : ""}

                <label htmlFor='channel'>Channel</label>
                <input type="channel" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} />
                {formik.errors.channel ? <div>{formik.errors.channel}</div> : ""}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm
