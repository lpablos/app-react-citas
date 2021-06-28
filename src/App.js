import React, {Fragment, useState} from 'react'
import Formulario from './components/Formulario'
const App = () => {
  // Arreglo de citas
  const [citas, anexarCitas] = useState([])
  // Funcion que tome las citas actuales y tome la nueva
  const crearCita = cita =>{
    console.log("Este es el elmento del formulario en padre", cita );
    anexarCitas([...citas, cita])
  }
  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
            crearCita={crearCita}/>
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </Fragment>
  )
}

export default App


