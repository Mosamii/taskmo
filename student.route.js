const router = require("express").Router();

router.get('/students', (req, res,next) => {
    res.send(`<ul style="font-size:3em;">
    <li>mohamed</li>
    <li>sami</li>
    <li>ali</li>
    <li>ebrahem</li>
    </ul>`)
  })


module.exports = router;
