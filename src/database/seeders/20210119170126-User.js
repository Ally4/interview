module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Users',
    [
      {
        name: 'babalao',
        email: 'babalao@gmail.com',
        password:
            '$2b$10$ETW/SCsansx8fQswDBkkIuGRrfdmZLYwx6BE8dm5LLPx3izBbQgLu',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
