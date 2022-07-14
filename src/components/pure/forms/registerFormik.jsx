
import React from 'react';
import { Contacto } from '../../../models/contacto.class';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Registerformik = () => {

    let contacto = new Contacto()

    const initialValues = {
        name: '',
        surname: '',
        email: '',
        online: false,
        display: false
        }

        const registerSchema = Yup.object().shape(
            {
                name: Yup.string()
                    .required('Name is required')
                    .min(1, 'Please, introduce a valid name'),
                surname: Yup.string()
                    .required('Surname is required')
                    .min(1, 'Please, introduce a valid name'),
                email: Yup.string()
                    .required('Email is required')
                    .email('Invalid email format'),
                online: Yup.bool(),
                display: Yup.bool()
            
            }
        )

        const submit = (values) => {
            alert('Create contact')
        }
    return (
        <div>
            <h4>Register Formik</h4>
            <Formik 
                    initialValues={initialValues} 
                    validationSchema= {registerSchema}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 1000))
                        alert(JSON.stringify(values, null, 2))
                    }}
                    >
                    {({
                        values, 
                        isSubmitting, 
                        
                    }) => (

                        <Form>
                        <label htmlFor='name'>Name</label>
                        <Field id='name' name='name' placeholder='Your Name' />

                        <label htmlFor='surname'>Surname</label>
                        <Field id='surname' name='surname' placeholder='Your Surname' />

                        <label htmlFor='email'>Email</label>
                        <Field id='email' name='email' placeholder='Your Email' />

                        <div id='status-radio-group'>Online Status</div>
                        <div role='group' aria-labelledby='status-radio-group'>
                            <label>
                                <Field type="radio" name="status" value="Online" />
                                Online
                            </label>
                            <label>
                                <Field type="radio" name="status" value ="Offline" />
                                Offline
                            </label>

                        </div>
                        <div id='display-radio-group'>Show Contact Info</div>
                        <div role='group' aria-labelledby='display-radio-group'>
                            <label>
                                <Field type="radio" name="display" value="Yes" />
                                Yes
                            </label>
                            <label>
                                <Field type="radio" name="display" value ="No" />
                                No
                            </label>

                        </div>
                        <button type='submit'>Submit</button>
                        {isSubmitting ? (<p>Sending your credentials...</p>): null}
                    </Form>
                    )
                    }
                    
                    </Formik>
        </div>
    );
};





export default Registerformik;
