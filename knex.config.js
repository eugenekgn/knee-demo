module.exports = {
  pg: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      database: 'book',
      password: 'sprite'
    }
  },
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: './book.sqlite'
    }
  }
}