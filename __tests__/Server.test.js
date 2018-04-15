/**
 * @jest-environment node
 */
import request from 'supertest';
import app from '../server/app';

process.env.NODE_ENV = 'prod';

test('It should content to root path', () => {
  request(app).get('/').then((response) => {
    expect(response.statusCode).toBe(200);
    expect(response.text).toMatch(/<title>Sample Project<\/title>/);
  });
});

test('It should return Notfound', () => {
  request(app).get('/sdfd').then((response) => {
    expect(response.statusCode).toBe(404);
  });
});
