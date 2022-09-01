import React, { Component } from 'react';
import './List.css';
import RowUser from './RowUser';

class List extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
        }
    }
    componentDidMount(){
        fetch("/users/list")
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
            <div>
                <h2>Listado de usuarios</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>DNI</th>
                            <th>Telefono</th>
                            <th>Email</th>
                            <th>Direccion</th>
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
                                    direccion={user.direccion}
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