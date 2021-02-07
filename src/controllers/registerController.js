const fs = require('fs');
const path = require('path');

const registerController = {
    index: function(req, res){
     return res.render('register');
    },


  
    store: function(req,res){

    delete req.body.retypePassword
    let usuarionuevo = {
    id:"",
    ...req.body,
}

let usuarios = fs.readFileSync(path.join(__dirname, '..', 'data', 'usersDataBase.json'),
'utf-8');
usuarios = JSON.parse(usuarios);
usuarios = [...usuarios, usuarionuevo];
usuarios = JSON.stringify(usuarios, null, ' '); //pasar el array a texto, para guardarlo en jason

fs.writeFileSync(path.join(__dirname,'..', 'data', 'usersDataBase.json'), usuarios);
   
res.redirect('/');
},
    };
    
module.exports = registerController;







