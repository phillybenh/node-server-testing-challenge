const db = require('../database/dbConfig');

module.exports = {
    add,
    remove,
    getAll,
    findById,
};

async function add(user) {
    try {
        const [id] = await db("users").insert(user, "id");
        return findById(id);
    } catch (error) {
        throw error;
    }
}

function remove(id) {
    return findById(id)
        .then(resp => {
            // console.log({ resp })
            const delObj = resp;
            return db("users")
                .where({ id })
                .del()
                .then(res => {
                    return delObj;
                });
        })
};

function getAll() {
    return db('users');
}

function findById(id) {
    return db("users").where({ id }).first();
}
