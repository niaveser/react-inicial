import React from 'react';
import { Contacto } from '../../models/contacto.class';
import Compb from '../pure/compB';


const Compa = () => {

    const defaultContact = new Contacto('Estefanía', 'Robles', 'email@email.com', true) 

    return (
        <div>
        <div>
            Contactos:
        </div>
        <Compb contacto={defaultContact}></Compb>
        </div>
    );
};





export default Compa;

