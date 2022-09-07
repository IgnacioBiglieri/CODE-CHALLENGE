import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { listProcess } from '../services/auth';
import './List.css';
import RowUser from './RowUser'

function List() {
    const [users, adminUsers] = useState([]);
    let params = useParams();
    const navigate = useNavigate();


    const registers = async () => {
        let data = await listProcess(localStorage.getItem('token'));
        if (data.status === 200) {
            adminUsers(data.data);
            return true;
        } else {
            localStorage.clear();
            return false
        }
    }

    //component did mount
    useEffect(() => {
        if(!localStorage.getItem('token'))
        {
            navigate('/login');
        }
        else
        {
            if (registers())
            {
                let titulo = document.getElementById("titulo");
                titulo.innerHTML = localStorage.getItem('name');
            }
            else
            {
                navigate('/login');
            }
        }
    }, [params.id]);

    

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
                    /* {
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
                    )} */

                    users.map(user => {
                        return <RowUser 
                                nombre={user.nombre}
                                apellido={user.apellido}
                                dni={user.dni}
                                telefono={user.telefono}
                                email={user.email}
                                domicilio={user.domicilio}
                                key={`usuario${user.id}`}
                                />
                    })

                    }
                </tbody>
            </table>
        </div>
    );
}

export default List