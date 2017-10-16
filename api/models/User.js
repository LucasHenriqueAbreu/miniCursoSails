/**
 * User.js
 *
 * @description :: Entidade que representa o objeto de usuário no banco de dados
 * @docs        :: http://sailsjs.org/#!documentation/models
 * @author      :: Lucas Henrique de Abreu <lucas.viasoft.com.br>
 * @date		:: 05/09/2017
 */

var bcrypt = require('bcrypt');

module.exports = {
	connection: 'mongo',
	attributes: {
		name: {
			type: 'string',
			required: true,
			unique: true
		},
		email: {
			type: 'string',
			required: true,
			unique: true
		},
		password: {
			type: 'string',
			required: true
		},
		// Para não enviar uma senha criptografada
		toJSON: function () {
			var obj = this.toObject();
			delete obj.encryptedPassword;
			return obj;
		}
	},
	// Criptografa a senha antes de criar o usuário.
	beforeCreate: function (values, next) {
		bcrypt.genSalt(10, function (err, salt) {
			if (err) return next(err);
			bcrypt.hash(values.password, salt, function (err, hash) {
				if (err) return next(err);
				values.password = hash;
				next();
			});
		});
	},

	comparePassword: function (password, user, cb) {
		bcrypt.compare(password, user.password, function (err, match) {
			if (err) cb(err);
			if (match) {
				cb(null, true);
			} else {
				cb(err);
			}
		});
	}
};
