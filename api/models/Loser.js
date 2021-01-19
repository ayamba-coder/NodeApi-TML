/**
 * Loser.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    surname:{ type: 'string', required: true},
    othername:{ type: 'string', required: true},
    samaritan:{ type: 'number', required: true},
    isRewarding:{ type: 'boolean' },
    type:{ type: 'string', required: true}
  },
  tableName: 'losers',
};

