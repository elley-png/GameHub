const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',          
  database: 'testing_1',  
  password: 'admin',   
  port: 5433,              
});

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL database!');
    
    // Example query
    const res = await client.query('SELECT NOW()');
    console.log('Server time:', res.rows[0]);

    await client.end();
    console.log('Connection closed.');
  } catch (err) {
    console.error('Connection error', err.stack);
  }
}

connectDB();

