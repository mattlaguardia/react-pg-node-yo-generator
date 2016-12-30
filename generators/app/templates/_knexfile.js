const databaseName = '<%= name %>'

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: databaseName
    },
    migrations: {
       directory: __dirname + '/db/migrations'
    },
    seeds: {
       directory: __dirname + '/db/seeds'
    }
  }
}
