import React from 'react';
import './RowUser.css';

function RowUser(userData) {
    return (
        <tr className='headList'>
            <td className="users">{userData.nombre}</td>
            <td className="users">{userData.apellido}</td>
            <td className="users">{userData.dni}</td>
            <td className="users">{userData.telefono}</td>
            <td className="users">{userData.email}</td>
            <td className="users">{userData.domicilio}</td>
        </tr>
    )
}

export default RowUser