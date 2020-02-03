/*
    SAHAN

 */

const db = require('../config/db');

const user1 = {

    getUserList: () => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM user';
            db.query(query, (err, results) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(results);
                }
            })
        });
    },

    create: user => {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO user (name, department_id) VALUES(?, ?)';
            db.query(query, [user.name, user.department_id], (err, results) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(results);
                }
            })
        });
    },

    getUser: id => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM user WHERE id = ?';
            db.query(query, [id], (err, results) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(results[0]);
                }            
            })
        });
    },

    delete: id => {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM user WHERE id = ?';
            db.query(query, [id], (err, results) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(results[0]);
                }            
            })
        });
    }
    
};

module.exports = user1;