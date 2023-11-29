const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getUserData(user, password) {
    try {
        const query = `
            SELECT nombre, rol 
            FROM usuarios 
            WHERE login = ? AND password = ?
        `;

        const rows = await db.query(query, [user, password]);

        const data = helper.emptyOrRows(rows[0]);

        return {
            data,
        };
    } catch (error) {
        // Manejo de errores
        console.error('Error en getUserData:', error.message);
        throw error;
    }
}

module.exports = {
    getUserData,
};
