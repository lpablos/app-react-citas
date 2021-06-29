import React, {Fragment, useState, useEffect} from 'react'
import Formulario from './components/Formulario'
import Cita from './components/Cita'

const App = () => {
  // citas en localStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales){
    citasIniciales = []
  }
  // Arreglo de citas
  const [citas, anexarCitas] = useState(citasIniciales)

  //Realizar opraciones cuando el state cambia
  // es un observador de una variable cuando lo uses o pases un parametro
  // es parecido a un document ready pero tambien observa
  useEffect(() => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas',JSON.stringify([]))
    }
  }, [citas, citasIniciales])  

  // Funcion que tome las citas actuales y tome la nueva
  const crearCita = cita =>{
    anexarCitas([...citas, cita])
  }
  // Funcion que elimina una cita por su id
  const eliminarCita = id =>{
    const nuevasCitas = citas.filter(cita=> cita.id !== id)
    anexarCitas(nuevasCitas)    
  }
  // Mensaje condicional
  const titulo = citas.length === 0 
    ? 'No existen citas'
    : 'Administra tus citas' 


  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
            crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {
              citas.map(cita =>(
                <Cita 
                  key={cita.id}
                  cita={cita}
                  eliminarCita = {eliminarCita}
                />
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App


