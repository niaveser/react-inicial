import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const Compb = ({ contacto }) => {
    return (
        <div>
            <h2>
                Nombre: { contacto.name }
            </h2>
            <h2>
                Apellido: { contacto.surname }
            </h2>
            <h3>
                E-mail: { contacto.email }
            </h3>
            <h3>
                Estado: {contacto.online ? 'Contacto En Línea':'Contacto No Disponible'}
            </h3>
        </div>
    );
};


Compb.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)

};


export default Compb;
