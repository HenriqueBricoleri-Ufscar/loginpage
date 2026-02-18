//Faz os cadastros e requisições ao banco
import pool from '../database/db.js'

const createUser = async ({email, name, password}) => {

    const query = `INSERT INTO users (email, name, password) VALUES ($1, $2, $3) RETURNING email, name, created_at`
    const user = await pool.query(query, [email, name, password]);

    return user.rows[0];
    
}

const loginGetUserByEmail = async ({email}) => {
    const query = `SELECT email, name, password FROM users WHERE email = $1`;
    const user = await pool.query(query, [email]);

    return user.rows[0];
}

export default { createUser, loginGetUserByEmail};