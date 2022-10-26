/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
class DatabaseService {
  save(email, price, timestamp) {
    console.log(`Running query: INSERT INTO orders VALUES (email, price, created) VALUES (${email}, ${price}, ${timestamp})`);
  }
}

module.exports = DatabaseService;
