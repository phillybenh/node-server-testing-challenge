const supertest = require("supertest");
const router = require("./userRouter");
const db = require("../database/dbConfig");

afterEach(async () => {
    await db('users').truncate()
});

describe('user router', () => {
    it.todo("test the router")
})