/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {type: 'string'},
    email: {type: 'string'}
  }
};

// $.ajax({
//   url: 'localhost:1337/user',
//   type: 'post',
//   data: {
//     name: "hiro",
//     email: "hiro@hiro.com"
//   },
//   success: function(res){console.log(res)}
// });
