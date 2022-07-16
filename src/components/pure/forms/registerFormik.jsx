
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const Registerformik = () => {

    let user = new User()

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
        }

        const registerSchema = Yup.object().shape(
            {
                username: Yup.string()
                    .required('Name is required')
                    .min(3, 'Username must be at least 3 characters long')
                    .max(12, 'Username cannot be more than 12 characters long'),
                email: Yup.string()
                    .required('Email is required')
                    .email('Invalid email format'),
                role: Yup.string()
                    .oneOf([ROLES.USER, ROLES.ADMIN], 'Select a role: User or Admin')
                    .required('Role is required'),
                password: Yup.string()
                    .min(6, 'Password must be at least 6 characters long')
                    .required('Password is required'),
                confirm: Yup.string()
                    .when('password', {
                        is: value => (value && value.length > 0 ? true : false),
                        then:Yup.string().oneOf(
                            [Yup.ref('password')],
                            'Passwords do not match!'
                        )

                    }).required('Password must be confirmed')
                
            }
        )

        const submit = (values) => {
            alert('Register user')
        }
    return (
        <div>
            <h4>Register User</h4>
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
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur
                        
                    }) => (

                        <Form>
                        <label htmlFor='username'>Username</label>
                        <Field id='username' type='text' name="username" placeholder='Your username' />

                        {
                            errors.username && touched.username &&
                            (
                                <ErrorMessage name='username' component='div'></ErrorMessage>
                            )
                        }
                        
                        <label htmlFor='email'>Email</label>
                        <Field id='email' type='email' name='email' placeholder='Your Email' />
                        
                        {
                            errors.email && touched.email &&
                            <ErrorMessage name ='email' component='div'></ErrorMessage>
                        }

                        <label htmlFor='password'>Password</label>
                        <Field id='password' type='password' name='password' placeholder='Your password'/>

                        {
                            errors.password && touched.password &&
                            <ErrorMessage name='password' component='div'></ErrorMessage>
                        }

                        <label htmlFor='confirm'>Password confirmation</label>
                        <Field id='confirm' name='confirm' type='password' placeholder='confirm password' />

                        {
                            errors.confirm && touched.confirm &&
                            <ErrorMessage name='confirm' component='div'></ErrorMessage>
                        }
                        
                        <button type='submit'>Create Account</button>
                        {isSubmitting ? (<p>Sending your credentials...</p>): null}
                    </Form>
                    )
                    }
                    
                    </Formik>
        </div>
    );
};





export default Registerformik;
