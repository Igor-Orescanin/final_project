const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels');
const bcrypt = require('bcrypt');



router.post('/registration', async (request, response) => {

    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(request.body.password, saltPassword);

    const signedUpUser = new signUpTemplateCopy({

        username: request.body.username,
        email: request.body.email,
        password: securePassword,
        macAddress: request.body.macAddress
    })
    signedUpUser.save()
        .then(data => {
            response.jason(data)
        })
        .catch(error => {
            response.json(error)
        })
})

module.exports = router
