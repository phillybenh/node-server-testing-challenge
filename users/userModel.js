const db = require('../database/dbConfig');

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
};

async function insert(hobbit) {
    return null;
}

async function update(id, changes) {
    return null;
}

function remove(id) {
    return null;
}

function getAll() {
    return db('users');
}

function findById(id) {
    return null;
}
