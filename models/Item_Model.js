const db = require('../config/db');

const Item_Model = {
  create: item_model => {
    return new Promise((resolve, reject) => {
      const query =
        'INSERT INTO item_model(item_model, status) VALUES ( ?,?)';
      db.query(
        query,
        [item_model.name, item_model.status],
        (err, results) => {
          if (err) {
            return reject(err);
          }

          return resolve(results);
        }
      );
    });
  },

  getItem_ModelList: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM item_model';
      db.query(query, (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      });
    });
  },

  getItem_Model: id => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM item_model WHERE id = ?';
      db.query(query, [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        // if we return just results it will still gv us the relevent item_model bt in `[ {} ]`
        return resolve(results[0]);
      });
    });
  }
};

module.exports = Item_Model;
