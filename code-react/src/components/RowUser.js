import React from 'react';

function RowUser(userData){
    return(
        <tr>
            <td>userData.nombre</td>
            <td>userData.apellido</td>
            <td>userData.dni</td>
            <td>userData.telefono</td>
            <td>userData.email</td>
            <td>userData.direccion</td>
        </tr>
    )
}

export default RowUser