/**
 * Loser.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    email:{ type: 'string', required: true},
    email_pass:{ type: 'string', required: true},
    username:{ type: 'string', required: true},
    //isRewarding:{ type: 'boolean' },
    user_pass:{ type: 'string', required: true}
  },
  tableName: 'petronpay-query',
};

