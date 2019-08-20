const request = require('supertest');
const app = require('../src/app');


describe('GET /', () => {

  it('should get 200', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  }),

  it('should get Hello World', (done) => {
    request(app)
      .get('/')
      .expect(JSON.stringify({
        msg: 'Hello! Server is up and running'
      }), done);
  });
});
