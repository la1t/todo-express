import request from 'supertest';
import app from '../app';

describe('Test get all tasks', () => {
  test('It should response the GET method with 200 status code', async () => {
    const response = await request(app).get('/tasks/');
    expect(response.statusCode)
      .expect(200)
      .toEqual([]);
  })
});
