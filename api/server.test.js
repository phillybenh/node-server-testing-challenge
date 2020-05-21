const supertest = require("supertest");
const server = require("./server");
const db = require("../database/dbConfig");


describe('server', () => {
    it("can run the tests", () => {
        expect(true).toBeTruthy();
    })
})
describe('GET /', () => {
    it('should return http status code 200', () => {
        return supertest(server).get('/').then(res => {
            expect(res.status).toBe(200);
        })
    })
    it("should return { api: 'up }", () => {
        return supertest(server).get('/').then(res => {
            expect(res.body).toEqual({ api: "up" });
            expect(res.body.api).toBe("up");
        })
    })
})