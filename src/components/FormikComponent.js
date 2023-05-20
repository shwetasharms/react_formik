// Formik Component
// Formik - Formik component is the replacement of the useFormik hooks line 46, 
// the object we will pass in as the argument that we will pass as the props in the Formik Component
// step-1 import Formik instead of useFormik Hooks
// step-2 remove the call useFormik 
// step-3 wrap the whole form in the Formik component 
//step- 4 import Form from formik, replace4 html form tag with the Form Component
//step- 5 import Field from formik, replace html Field tag with the Field Component
//steep-6 import the ErrorMessage from formik, replace the code that render the error message ex-  line 70,
// pass  in a name props which is equal to name attribute in Field component




// Form
// Field
// ErrorMessage



import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
function FormikComponent() {
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

    const validationSchema = Yup.object({
        name: Yup.string().required(<span className='small text-danger'>Required !</span>),
        email: Yup.string().email(<span className='small text-danger'>Invalid email format</span>).required(<span className='small text-danger'>Required !</span>),
        channel: Yup.string().required(<span className='small text-danger'>Required !</span>)
    })

    return (
        <div className='container-fluid vh-100 appBgcolor align-items-center d-flex  justify-content-center'>
            <div className='border border-primary  rounded p-4 cardBgcolor'>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form >
                        <div className="box-body ">
                            <div className='form-group mb-3'>
                                <label htmlFor='name'>Name  <span className='text-danger small'>*</span></label>
                                <Field type="text" id="name" name="name"
                                    className='form-control border-primary w-100 m-0'
                                />
                                {/* {formik.touched.name && formik.errors.name ? <span className='text-danger small'>{formik.errors.name}</span> : null} */}
                                <ErrorMessage name="name" />
                            </div>
                            <div className='form-group mb-3'>
                                <label htmlFor='email'>E-mail  <span className='text-danger small'>*</span></label>
                                <Field type="email" id="email" name="email"
                                    className='form-control border-primary w-100 m-0'
                                />
                                {/* {formik.touched.email && formik.errors.email ? <span className='text-danger small'>{formik.errors.email}</span> : null} */}
                                <ErrorMessage name="email" />

                            </div>
                            <div className='form-group mb-3'>
                                <label htmlFor='channel'>Channel  <span className='text-danger small'>*</span></label>
                                <Field type="text" id="channel" name="channel"
                                    className='form-control border-primary w-100 m-0'
                                />
                                {/* {formik.touched.channel && formik.errors.channel ? <span className='text-danger small '>{formik.errors.channel}</span> : null} */}
                                <ErrorMessage name="channel" />

                            </div>
                            <button type="submit" className='btn btn-primary float-end'>Submit</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default FormikComponent
