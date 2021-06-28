import React, {Fragment, useState} from 'react'
import {v4 as uuid} from "uuid";

const Formulario = ({crearCita}) => {
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    })
    // Extraccion de propietarios
    const {mascota, propietario, fecha, hora, sintomas} = cita

    // En caso de un error
    const [error, setError] = useState(false)

    // Funcion que se ejecuta cada vez que se escribe en un input 
    const acutalizarState = e =>{
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }   

    // Cuando el usuario preciona agregar citas
    const submitCita = e =>{
        e.preventDefault();
        // Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            setError(true)
            return 
        }
        setError(false)
        // Asignar un id
        cita.id = uuid()

        // Crear la cita
        crearCita(cita)
        // Reinciar el form 
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: '',
        })
    }

    return (
        <Fragment>
            <h1>Crear Cita</h1>
            {
                error 
                ? <p className="alerta-error">Todos los campos son obligatorios</p>
                : null
            }
            <form 
            onSubmit={submitCita}>
                <label>Nombre Mascota</label>
                <input 
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre Mascota"
                onChange={acutalizarState}
                value={mascota}
                />
                <label>Nombre Dueño Mascota</label>
                <input 
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre dueño Mascota"
                onChange={acutalizarState}
                value={propietario}
                />
                <label>Fecha</label>
                <input 
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={acutalizarState}
                value={fecha}
                />
                <label>Hora</label>
                <input 
                type="time"
                name="hora"
                className="u-full-width"
                onChange={acutalizarState}
                value={hora}
                />
                <label>Sintoma</label>
                <textarea 
                    name="sintomas" 
                    id="" 
                    cols="30" 
                    rows="10"
                    className="u-full-width"
                    onChange={acutalizarState}
                    value={sintomas}>
                </textarea>
                <button 
                type="submit"
                className="u-full-width button-primary">
                    Agregar Cita
                </button>
                
            </form>

        </Fragment>
    )
}

export default Formulario
