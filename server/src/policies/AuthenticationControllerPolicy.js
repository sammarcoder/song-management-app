const joi = require('joi');

module.exports = {
    register(req, res, next) {
        const schema = joi.object({
            email: joi.string().email(),
            password: joi.string().pattern(
                new RegExp('^[a-zA-Z-0-9]{8,32}$')
            )
        })
        const { error, value } = schema.validate(req.body)
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must enter a valid email adress'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `the password provide failed to following rules:
                                <br>
                                1. it must contiane ONLY lower case and upper case letter 
                                <br>
                                2. i must contain atleast one a number and a special letter
                `
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'invalid registration information'
                    })
            }
        }
        else {
            next()
        }
    }
}