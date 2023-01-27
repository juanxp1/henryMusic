'use strict';


const jsonschema = require('jsonschema');
const express = require('express');

const { BadRequestError } = require('../expressError');
const Song = require('../models/song');

const songNew = require('../schemas/songNew.json');

const router = express.Router({ mergeParams: true });



router.post('/', async (req, res, next) => {
  try {
    const validator = jsonschema.validate(req.body, songNew);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const song = await Song.add(req.body);
    return res.status(201).json({ song });
  } catch (err) {
    return next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const count = await Song.getTotalSongs();
    return res.json({ count });
  } catch (err) {
    return next(err);
  }
});



module.exports = router;
