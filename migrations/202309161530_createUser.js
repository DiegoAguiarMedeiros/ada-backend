// eslint-disable-next-line no-undef
module.exports = {
    async up(db) {
      // Insert a user into the 'users' collection
      await db.collection('users').insertOne({
        login: 'letscode',
        password: '$2b$10$Hp4mdB27nTjLcquR17xPr.ao0A0r91PseEnr29AXDGLlXFG3kxsxy',
      });
    },
  
    async down(db) {
      // Remove the user with the specified login from the 'users' collection
      await db.collection('users').deleteOne({ login: 'letscode' });
    },
  };
  