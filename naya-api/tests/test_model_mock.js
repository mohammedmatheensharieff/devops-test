
const mongoose = require('mongoose');
jest.mock('mongoose', () => ({
  model: jest.fn().mockReturnValue({
    find: jest.fn().mockResolvedValue([{ name: "Mock" }])
  }),
  connect: jest.fn(),
  connection: { on: jest.fn() },
}));

const Profile = mongoose.model('Profile');

test('Mocked DB model returns expected data', async () => {
  const result = await Profile.find();
  expect(result).toEqual([{ name: "Mock" }]);
});
