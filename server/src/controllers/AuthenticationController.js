const {User} = require('../models')

module.exports = {
    async register(req, res){
          try{
            const user = await User.create(req.body)
            res.send(user.toJSON())
          }
          catch (err){
            res.status(400).send({
                error : `this emial is already in use. try with anonther email.`
            })
          }
    }
}











// res.send({
//     message: `Hello ${req.body.email}! you are register have fun`
// })