const db = require('../config/db');

const Item_Type = {
  create: item_type => {
    return new Promise((resolve, reject) => {
      const query =
        'INSERT INTO item_type(item_type, status) VALUES ( ?,?)';
      db.query(
        query,
        [item_type.name, item_type.status],
        (err, results) => {
          if (err) {
            return reject(err);
          }

          return resolve(results);
        }
      );
    });
  },

  getItem_TypeList: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM item_type';
      db.query(query, (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      });
    });
  },

  getItem_Type: id => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM item_type WHERE id = ?';
      db.query(query, [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        // if we return just results it will still gv us the relevent item_type bt in `[ {} ]`
        return resolve(results[0]);
      });
    });
  }
};

module.exports = Item_Type;
