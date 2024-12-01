const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Hello World!'));

test('GET / responds with Hello World!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello World!');
});