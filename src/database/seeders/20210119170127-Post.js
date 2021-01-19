module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Posts',
    [
      {
        title: 'once upon a time',
        content: 'babalao@gmail.comIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Posts', null, {}),
};
