var express = require('express');
var router = express.Router();
var qs = require('./quotesService');

router.route('/quotes')
.get(function (req, res, next) {
    qs.getQuotes(rows => {
      res.json(rows);
    });
  })
.delete(function (req, res, next) {
  qs.deleteQuotes(rows => {
    res.json(rows);
  });
})
.post(function (req, res, next) {
  qs.insertQuote(req.body, (rowCount) => {
    if (rowCount > 0)
      res.status(201).json({ message: 'Inserted' });
    else {
      res.status(400).json({ message: 'Failed to insert' });
    }
  });
});

router.route('/quotes/:id')
.get(function (req, res, next) {
  qs.getQuote(req.params.id, (rows) => {
    res.json(rows);
  });
})
.put(function (req, res, next) {
  qs.updateQuote(req.body, req.params.id, (rowCount) => {
    if (rowCount > 0)
      res.status(200).json({ message: 'Updated' });
    else {
      res.status(400).json({ message: 'Failed to update' });
    }
  });
})
  .delete(function (req, res, next) {
  qs.deleteQuote(req.params.id, (rowCount) => {
    if (rowCount > 0)
      res.status(200).json({ message: 'Deleted' });
    else {
      res.status(400).json({ message: 'Failed to delete' });
    }
  });
});

/*
router.put('/reset', function(req, res){
  qs.populate(function(createcount){
    res.status(201).send(JSON.stringify({url: '/api/', count: createcount}));
  })
});*/

module.exports = router;