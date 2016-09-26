/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	hi: function (req, res) {
		// debugger;
		// assert.equal(req.method, "GET");
		if (req.method.toUpperCase() === "GET") {
			return res.send('hi, there');
		}
		return res.send('wrong method!');
	}
};
