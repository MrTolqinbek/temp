module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'resume',
      user: 'postgres',
      password: 'postgres'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds:{
      directory:'./db/seeds'
    }
  }

};
