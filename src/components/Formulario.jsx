import React, {Fragment} from 'react'

const Formulario = () => {
    return (
        <Fragment>
            <h1>Crear Cita</h1>

            <form action="">
                <label>Nombre Mascota</label>
                <input 
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre Mascota"
                />
                <label>Nombre Dueño Mascota</label>
                <input 
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre dueño Mascota"
                />
                <label>Fecha</label>
                <input 
                type="date"
                name="fecha"
                className="u-full-width"
                />
                <label>Hora</label>
                <input 
                type="time"
                name="hora"
                className="u-full-width"
                />
                <label>Sintoma</label>
                <textarea 
                    name="sintomas" 
                    id="" 
                    cols="30" 
                    rows="10"
                    className="u-full-width">
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
