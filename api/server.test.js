const supertest = require("supertest");
const server = require("./server");
const db = require("../database/dbConfig");

afterEach(async () => {
    await db('hobbits').truncate()
});