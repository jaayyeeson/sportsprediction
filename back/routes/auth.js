const express = require('express');
const path = require('path')
const router = express.Router();

module.exports = router;

router.post('/login', async(req, res) => {
    const { username, password, displayName } = req.body;
    console.log("user is trying to signup", username, password, displayName);
});