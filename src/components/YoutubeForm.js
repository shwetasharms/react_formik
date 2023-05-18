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
            errors.name = 'please fill the required field'
        }
        if (!values.email) {
            errors.email = 'please fill the required field'
        } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
            errors.email = 'Invalid email format'
        }
        if (!values.channel) {
            errors.channel = 'please fill the required field'
        }
        return errors
    }


    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    return (
        <div className='container-fluid vh-100 appBgcolor align-items-center d-flex  justify-content-center'>
            <div className='border border-primary  rounded p-4 cardBgcolor'>
                <form onSubmit={formik.handleSubmit}>
                    <div className="box-body ">
                        <div className='form-group mb-3'>
                            <label htmlFor='name'>Name  <span className='text-danger small'>*</span></label>
                            <input type="text" id="name" name="name"
                                className='form-control border-primary w-100 m-0'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name} />
                            {formik.touched.name && formik.errors.name ? <span className='text-danger small'>{formik.errors.name}</span> : null}
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor='email'>E-mail  <span className='text-danger small'>*</span></label>
                            <input type="email" id="email" name="email"
                                className='form-control border-primary w-100 m-0'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                                value={formik.values.email} />
                            {formik.touched.email && formik.errors.email ? <span className='text-danger small'>{formik.errors.email}</span> : null}
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor='channel'>Channel  <span className='text-danger small'>*</span></label>
                            <input type="text" id="channel" name="channel"
                                className='form-control border-primary w-100 m-0'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                                value={formik.values.channel} />
                            {formik.touched.channel && formik.errors.channel ? <span className='text-danger small '>{formik.errors.channel}</span> : null}
                        </div>
                        <button type="submit" className='btn btn-primary float-end'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default YoutubeForm
