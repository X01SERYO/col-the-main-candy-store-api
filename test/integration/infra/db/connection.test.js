import { connection, models } from '../../../../src/infra/db';

let BRANDID;

beforeAll(() => {
  connection();
});

afterAll(() => {});

test('Should create a new document', async () => {
  // Arrange
  // Act
  const brandId = await new models.BrandModel({
    name: 'TEST',
    code: 'CD',
  }).save();
  console.log(brandId);
  BRANDID = brandId._id;
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
    _id: BRANDID,
  });
  console.log(brand);
  // Assert
  expect(brand).not.toBeNull();
});
