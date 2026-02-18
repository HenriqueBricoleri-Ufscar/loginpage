import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    idleTimeoutMillis: 2000,
    connectionTimeoutMillis: 5000
});

export const testDatabaseConnection = async () => { 
    try {
        
        const result = await pool.query('SELECT NOW() as now');
        console.log(`PgSQL infos: ${result.rows[0].now}`);

    } catch (err) {
        console.error(err);
    }
}

export default pool;
