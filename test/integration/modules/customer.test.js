import supertest from 'supertest';
import { config } from './../../../src/infra';

const path = `http://${config.server.ip}:${config.server.port}/api`;
let customerId;

test('customer.create', async () => {
  const service = '/customer.create';
  const data = {
    name: 'Customer 5',
    phone: '123456789',
  };
  const { status, body } = await supertest(path).post(service).send(data);
  customerId = body.customerId;
  expect(status).toBe(200);
  expect(body).not.toBeNull();
});

test('customer.find', async () => {
  const service = '/customer.find';
  const data = { id: customerId, page: 0, size: 0 };
  const { status, body } = await supertest(path).get(service).query(data);
  expect(status).toBe(200);
  expect(body).not.toBeNull();
});

test('customer.update', async () => {
  const service = '/customer.update';
  const data = {
    id: customerId,
    name: `Customer Update ${customerId}`,
    phone: '1',
  };
  const { status, body } = await supertest(path).patch(service).send(data);
  expect(status).toBe(204);
  expect(body).not.toBeNull();
});

test('customer.delete', async () => {
  const service = '/customer.delete';
  const data = { id: customerId };
  const { status, body } = await supertest(path).patch(service).send(data);
  expect(status).toBe(204);
  expect(body).not.toBeNull();
});
