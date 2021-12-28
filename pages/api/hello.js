import knex from "knex";

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: '26042000',
    database : 'ybs'
    }
    });

// Try to catch node shutting down and explicitly close
// connection to database


export { db };


