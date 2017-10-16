/**
 * UserController
 *
 * @description :: Server-side logic for managing user
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	create: function (req, res) {
		if (req.body.password !== req.body.confirmPassword) {
			return res.json(401, { err: "A senha não corresponde!" });
		}
		User.create(req.body).then(function (user) {
			if (user) {
				res.json(200, { user: user, token: jwToken.issue({ id: user.id }) });
			}
		}).catch(function (err) {
			return res.json(err.status, { err: err });
		});
	}
};
