// Test suite for katsuyou API route /verb/:word

const app = require('../src/app.js');
const supertest = require('supertest');
const mongoose = require('mongoose');
const { connectMongo } = require('../src/utils/connectMongo');

beforeAll(async () => {
    await connectMongo();
});

describe('verbs', () => {
    describe('get verb route', () => {
        // Scenario: invalid verb input (not in DB)
        describe('given the verb does not exist', () => {
            it('should return a 400', async () => {
                const verb = 'fly'
                await supertest(app).get(`/api/katsuyou/verb/${verb}`)
                .expect(400);
            });
        });
        // Scenario: valid verb input (should return 200 and matching data)
        describe('given the verb does exist', () => {
            it('should return a 200 and the verb data', async () => {
                const verb = 'たべる';
                const res = await supertest(app).get(`/api/katsuyou/verb/${verb}`).expect(200);
                expect(res.body).toHaveProperty('meaning');
                expect(res.body.meaning).toBe('to eat');
            });
        });
    });
});

afterAll(async () => {
  await mongoose.connection.close();
});