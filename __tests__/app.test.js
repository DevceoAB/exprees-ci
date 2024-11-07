const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('responds with Hello, Jai siya ram', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, Jai siya ram');
    expect(response.statusCode).toBe(200);
  });
});
