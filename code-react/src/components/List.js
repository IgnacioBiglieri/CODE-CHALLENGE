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

        // SUPONGO QUE ES ASI
        
        /* let [users, setUsers] = useState([]);

        let getUsers = async () => {
            await fetch('http://localhost:3020/api/users')
              .then((response) => response.json())
              .then((data) => setUsers(data))
          }

          useEffect(() => {
            getUsers()
          }, [])   */

        return(
            <div className='tabla'>
                <h2>Listado de usuarios</h2>
                <table className='list'>
                    <thead className='datos'>
                        <tr className='datosUsers'>
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