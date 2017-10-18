/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Política simples para permitir que qualquer usuário autenticado
 *                 Assume que sua ação de login em um de seus controladores define  `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 * @author      :: Lucas Henrique de Abreu <lucas.viasoft.com.br>
 * @date		:: 05/09/2017
 *
 */
module.exports = function(req, res, next) {
  
  /**
   * O usuário é permitido, vá para a próxima política,
   * ou se esta é a última política, o controlador
   */
  if (req.session.authenticated) {
    return next();
  }

  /**
   * O usuário não é permitido 
   * (o comportamento padrão res.forbidden () pode ser substituído em `config / 403.js`)
   */
  return res.forbidden("Usuário não tem permissão.");
};
