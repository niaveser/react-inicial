import React, { useState } from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactComponent from '../pure/contacts';
import ContactForm from '../pure/forms/contactForm';


const ContactListComponent = () => {

    const defaultContact1 = new Contacto('Estefanía', 'Robles', 'email@email.com', true, false) 
    const defaultContact2 = new Contacto('Example2', 'Example2', 'Example2', false, false)
    const defaultContact3 = new Contacto('Example3', 'Example3', 'Example3', false, false)

    const [contactos, setContacto] = useState([defaultContact1, defaultContact2, defaultContact3])
    
   
    function showContact(contacto){
        const index = contactos.indexOf(contacto)
        const tempContacts = [...contactos]
        tempContacts[index].display = !tempContacts[index].display
        setContacto(tempContacts)
    }
    
    function createContact (contacto) {
        const index = contactos.indexOf(contacto)
        const tempContacts = [...contactos]
        tempContacts.push(contacto)
        setContacto(tempContacts)
    }

    function removeContact(contacto) {

        const index =contactos.indexOf(contacto)
        const tempContacts = [...contactos]
        tempContacts.splice(index,1)

        setContacto(tempContacts)
    }

    function statusContact(contacto) {
        const index = contactos.indexOf(contacto)
        const tempContacts = [...contactos]
        tempContacts[index].online = !tempContacts[index].online
        setContacto(tempContacts)
    }

    return (
        <div>
            <div className='a'>
                <div className='b'>
                    <div className='c'>
                        <h1>Contactos:</h1>
                    </div>
                    <div>
                        <table>
                        <thead>
                        <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Surname</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        
                        {contactos.map((contacto, index) => {
                            return (
                                <ContactComponent 
                                    key={index}
                                    contacto={contacto}
                                    show={showContact}
                                    remove={removeContact}
                                    status={statusContact}
                                    
                                    >
                                    
                                </ContactComponent>
                            )
                        }
                        )}
                        
                        </tbody>
                        </table>
                    </div>
                </div>         
            </div>
            <ContactForm create={createContact}></ContactForm>
        </div>
    );
};





export default ContactListComponent;

