import React, { Component } from 'react';
import './List.css';
import RowUser from './RowUser'

class List extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
        }
    }
    componentDidMount(){
        fetch("http://localhost:8000/users/list",{
            method: 'GET',
            headers:{
              'Content-Type': 'application/json',
            }
        })
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((response) => {
            this.setState({
                users : response.data
            });
        })
    }

    render(){
        return(
            <div className='tabla'>
                <h2>Listado de usuarios</h2>
                <table className='list'>
                    <thead className='headDatos'>
                        <tr className='tablaDatos'>
                            <th className='datosUsers'>Nombre</th>
                            <th className='datosUsers'>Apellido</th>
                            <th className='datosUsers'>DNI</th>
                            <th className='datosUsers'>Telefono</th>
                            <th className='datosUsers'>Email</th>
                            <th className='datosUsers'>Direccion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(user => { 
                                return <RowUser 
                                    nombre={user.nombre}
                                    apellido={user.apellido}
                                    dni={user.dni}
                                    telefono={user.telefono}
                                    email={user.email}
                                    domicilio={user.domicilio}
                                    key={`usuario${user.id}`}
                                    />
                            }
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List