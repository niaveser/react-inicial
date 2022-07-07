import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ContactComponent = ({ contacto, show, status, remove, info }) => {
    function colorStatus() {
        if(contacto.online){
            return (<span className='online' style={{color:'green'}}>Contacto en Línea</span>)
        }else{
            return (<span className='offline' style={{color:'tomato'}}>Contacto no Disponible</span>)
        }
    }
    
   
    
    return (

        <tr>
            <td>
                <span>{contacto.name}</span>
            </td>
            <td>
                <span style={{
                    display: contacto.display ? 'block' : 'none'}}>{contacto.surname}</span>
            </td>
            <td>
                <span style={{
                    display: contacto.display ? 'block' : 'none'}}>{contacto.email}</span>
            </td>
            <td>
            {colorStatus(contacto)}
            </td>
            <td>
                <button onClick={() =>show(contacto)}>Show</button>
                <button onClick={() =>status(contacto)} >Change Status</button>
                <button onClick={() => remove(contacto)} style={{background:'tomato'}}>Delete</button>
            </td>
        </tr>
        
    );
};


ContactComponent.propTypes = {
    contacto: PropTypes.object.isRequired,
    show: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    status: PropTypes.func.isRequired,
};


export default ContactComponent;
