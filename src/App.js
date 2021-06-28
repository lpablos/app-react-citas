import React, {Fragment, useState, useEffect} from 'react'
import Formulario from './components/Formulario'
import Cita from './components/Cita'

const App = () => {
  // Arreglo de citas
  const [citas, anexarCitas] = useState([])

  useEffect(() => {
    
  }, [])

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


