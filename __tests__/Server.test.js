import request from 'supertest';
import app from '../server/app';

it('It should response the GET method', (done) => {
    request(app).get('/').then((response) => {
        expect(response.statusCode).toBe(200);
        done();
    });
});

it('It should content to root path', (done) => {
    request(app).get('/').then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toMatch(/<title>Sample Project<\/title>/ );
        done();
    });
});

it('It should return Notfound', (done) => {
    request(app).get('/sdfd').then((response) => {
        expect(response.statusCode).toBe(404);
        done();
    });
});