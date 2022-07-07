import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../../models/contacto.class';


const Contactform = ({create}) => {

    const nameRef = useRef('')
    const surnameRef = useRef('')
    const emailRef = useRef('')
    const onlineRef = useRef(true)
    

    function createContact(e){
        e.preventDefault()
        const newContacto = new Contacto(
            nameRef.current.value,
            surnameRef.current.value,
            emailRef.current.value,
            onlineRef,
            false)
        create(newContacto)
        console.log(newContacto)
    }
    return (
        <form onSubmit={createContact}>
            <input ref={nameRef} id='inputName' type='text' required placeholder='Name'/>
            <input ref={surnameRef} id='inputSurname' type='text' required placeholder='Surname'/>
            <input ref={emailRef} id='inputEmail' type='text' required placeholder='Email'/>
            <button type='submit'>Create Contact</button>
            
        </form>
    );
};

Contactform.propTypes = {
    create: PropTypes.func
}
export default Contactform;
