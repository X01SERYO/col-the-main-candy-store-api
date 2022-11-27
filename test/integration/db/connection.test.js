import { connection, models } from '../../../src/infra/db';

beforeAll(() => {
  connection();
});

afterAll(() => {});

test('Should create a new document', async () => {
  // Arrange
  // Act
  const brandId = await new models.BrandModel({ name: 'TEST' }).save();
  console.log(brandId);
  // Assert
  expect(brandId).not.toBeNull();
});

test('Should find all documnets', async () => {
  // Arrange
  // Act
  const brands = await models.BrandModel.find();
  console.log(brands);
  // Assert
  expect(brands).not.toBeNull();
});

test('Should find documnet by id', async () => {
  // Arrange
  // Act
  const brand = await models.BrandModel.findById({
    _id: '63811cf814f908489ecd88e8',
  });
  console.log(brand);
  // Assert
  expect(brand).not.toBeNull();
});
