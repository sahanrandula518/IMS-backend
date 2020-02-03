const db = require('../config/db');

const Department = {
  create: department => {
    return new Promise((resolve, reject) => {
      const query =
        'INSERT INTO department (department_name, status) VALUES ( ?,?)';
      db.query(
        query,
        [department.name, department.status],
        (err, results) => {
          if (err) {
            return reject(err);
          }

          return resolve(results);
        }
      );
    });
  },

  getDepartmentList: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM department';
      db.query(query, (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      });
    });
  },

  getDepartment: id => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM department WHERE id = ?';
      db.query(query, [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        // if we return just results it will still gv us the relevent department bt in `[ {} ]`
        return resolve(results[0]);
      });
    });
  }
};

module.exports = Department;
