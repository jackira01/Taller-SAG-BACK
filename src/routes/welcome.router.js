const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
  try {
    res.status(200).send('welcome');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
