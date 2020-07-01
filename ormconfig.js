module.exports = {
  "type": "mysql",
  "host": "127.0.0.1",
  "port": 3306,
  "username": "test",
  "password": "test",
  "database": "test",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "migrations": ["dist/migration/*.js"],
  "cli": { 
    "migrationsDir": "src/migration" 
  }
}
