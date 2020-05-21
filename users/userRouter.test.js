const supertest = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig");

afterAll(async () => {
    await db('users').truncate()
});

describe('user router', () => {
    it("can run the tests", () => {
        expect(true).toBeTruthy();
    })
    describe('GET /users', () => {
        it('should return an array', () => {
            return supertest(server).get('/users').then(res => {
                expect(Array.isArray(res.body)).toBe(true)
            })
        })
        it('should return an array of length of 4', () => {
            return supertest(server).get('/users')
            .then(res => {
                // the 4 are in the dev DB, but the testing one has not been seeded
                expect(res.body).toHaveLength(0)
            })
        })
    })
    describe('POST /users', () => {
        it('should return a 201 http status code', () => {
            return supertest(server)
                .post('/users')
                .send({
                    name: 'Someone',
                    location: 'Philly'
                })
                .then(res => {
                    expect(res.status).toBe(201);
                })
        })
        it('should return a 201 http status code', () => {
            return supertest(server)
                .post('/users')
                .send({
                    name: 'Ben',
                    location: 'Philly'
                })
                .then(res => {
                    expect(res.body).toEqual({
                        created: {
                            id: 2,
                            name: 'Ben',
                            location: 'Philly'
                        }
                    });
                })

        })
    })
    describe("DELETE /users/:id", () => {
        it("should return status 200", () => {
            return supertest(server)
                .delete("/users/1")
                .then((res) => {
                    expect(res.status).toBe(200);
                });
        });
        it("should return status 404 with bad id", () => {
            return supertest(server)
                .delete("/users/111")
                .then((res) => {
                    expect(res.status).toBe(404);
                });
        });
    });
    
})

