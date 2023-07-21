import React, { useState } from 'react';
// import 'react-phone-input-2/lib/style.css';
import './style.css';
import { Footer } from '../../components/Footer';
import {Navbar} from '../../components/Navbar'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore';
import firebase from '../../firebase-config'
import {initializeApp} from 'firebase/app'

const app = initializeApp(firebase)
const db = getFirestore(app);



function Contacto() {

    
  return (
    <div className='contact'>
      <Navbar/>
      <h1>Contacto</h1>
      <p>Ponte en contacto con nosotros.</p>
      
      <ContactForm />
      <Footer/>
    </div>
  );
}



function ContactForm() {

  const valorInicial = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  }
  //Variables de estado

  const [user, setUser] = useState(valorInicial);

   const [formError, setFormError] = useState('');

    const capturarInputs = (event)=>{
      const {name, value}= event.target;
      setUser({...user, [name]:value})
    }

//Guardar datos
  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!user.nombre || !user.email || !user.mensaje || !user.telefono) {
      setFormError('Por favor, completa todos los campos obligatorios.');
      return;
    } else{
        try {
          await addDoc(collection(db, 'usuarios'),{
            ...user
          })
        } catch (error) {
          console.log(error)
        }

     }

    // Aquí puedes agregar la lógica para enviar el formulario de contacto
    // por ejemplo, una llamada a una API o una función de envío de correo electrónico
    console.log('Formulario enviado:', { user});
  
    setUser({...valorInicial})
  };

  return (
    <div className='contact_form'>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor='name_contact'>Nombre</label>
        <input
          name='nombre'
          type='text'
          placeholder='Nombre'
          value={user.nombre}
          onChange={capturarInputs}
          id='name_contact'
        />
        <label htmlFor='email_contact'>Email</label>
        <input
          name='email'
          type='email'
          placeholder='Correo electrónico'
          value={user.email}
          onChange={capturarInputs}
          id='email_contact'
        />
        <label htmlFor='phone_contact'>Teléfono</label>
        <input
          name='telefono'
          type='phone'
          placeholder='Telefono'
          value={user.telefono}
          onChange={capturarInputs}
          id='phone_contact'
        />
        {/* <PhoneInput
          name= 'telefono'
          country={'auto'}
          value={user.telefono}
          onChange={capturarInputs}
          inputProps={{
            id: 'phone_contact',
            minLength: 15,
          }}
        /> */}
        <label htmlFor='msj_contact'>Mensaje</label>
        <textarea
          name='mensaje'
          placeholder='Mensaje'
          value={user.mensaje}
          onChange={capturarInputs}
          id='msj_contact'
        ></textarea>
        <button type='submit'>Enviar</button>
        {formError && <div className='error'>{formError}</div>}
      </form>
    </div>
  );
}

export default Contacto;
