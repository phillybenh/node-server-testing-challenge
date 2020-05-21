const router = require("express").Router();


const Users = require("../users/userModel");



router.get("/", (req, res) => {
    Users.getAll()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post("/", (req, res) => {
    const user = req.body;
    Users.add(user)
        .then(newUser => {
            res.status(201).json({ created: newUser });
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to create new user" });
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Users.remove(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({ removed: deleted });
            } else {
                res.status(404).json({ message: 'Could not find user with given id' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to delete user' });
        });
});

module.exports = router;