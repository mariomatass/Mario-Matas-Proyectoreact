// gestion.jsx

import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const fakeUserData = [
    { id: 3, name: 'Usuario1', login: 'user1', password: 'pass1', role: 'admin' },
    { id: 4, name: 'Usuario2', login: 'user2', password: 'pass2', role: 'user' },
];

const Gestion = () => {
    const [users, setUsers] = useState(fakeUserData);

    const [newUser, setNewUser] = useState({
        name: '',
        login: '',
        password: '',
        role: 'user',
    });

    const [loggedIn, setLoggedIn] = useState(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    if (!newUser.name || !newUser.login || !newUser.password) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUserId = users.length + 1;
        const newUserWithId = { id: newUserId, ...newUser };

        setUsers([...users, newUserWithId]);

        setNewUser({
            name: '',
            login: '',
            password: '',
            role: 'user',
        });
    };

    if (!loggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            {userRole === 'invitado' && <InsertEmoticonIcon />}
            <nav>
                {/* Incluye aquí tu componente de navegación o simplemente el código del menú */}
            </nav>
            <form onSubmit={handleSubmit}>
            <button type="submit">Agregar Usuario</button>
                <label>
                    Nombre:
                    <input type="text" name="name" value={newUser.name} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Login:
                    <input type="text" name="login" value={newUser.login} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" value={newUser.password} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Rol:
                    <select name="role" value={newUser.role} onChange={handleInputChange}>
                        <option value="user">Usuario</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <br />
                <button type="submit">Agregar Usuario</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Login</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.login}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Gestion;
