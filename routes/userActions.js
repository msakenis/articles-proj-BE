const express = require('express');
const router = express.Router();
const UserActions = require('../models/userActionsModel');
const isQueryValid = require('../utils/isQueryValid');
const isString255 = require('../utils/isString255');

router.route('/create').post((req, res) => {
  const action = req.body.action;
  const article = req.body.article;
  const searchKeyword = req.body.searchKeyword;
  let error = null;
  const values = {action};

  if (article) {
    const articleKeys = Object.keys(article);

    // all article values should be strings not longer than 255
    const isAllValuesValid = articleKeys.length > 0 && articleKeys.every((key) => isString255({value: article[key]}));

    if (isAllValuesValid) {
      values.article = article;
    } else {
      error = 'Articles values is not valid';
      res.status(400).send(error);
    }
  }

  if (searchKeyword) {
    if (isQueryValid({value: searchKeyword})) {
      values.searchKeyword = searchKeyword;
    } else {
      error = 'Search keyword is not valid';
      res.status(400).send(error);
    }
  }

  if (error === null) {
    const newUserAction = new UserActions({
      action,
      article,
      searchKeyword,
    });

    newUserAction.save((err, data) => {
      if (err) {
        console.log(`ERROR SAVING USER ACTIONS: ${JSON.stringify(err)}`);
      } else {
        res.status(200).send('User action logged successfuly');
      }
    });
  }
});
module.exports = router;
