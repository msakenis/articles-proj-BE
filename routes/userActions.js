const express = require('express');
const router = express.Router();
const UserActions = require('../models/userActionsModel');

router.route('/create').post((req, res) => {
  const action = req.body.action;
  const article = req.body.article;
  const searchKeyword = req.body.searchKeyword;

  const values = {action};

  if (article) {
    values.article = article;
  }
  if (searchKeyword) {
    values.searchKeyword = searchKeyword;
  }

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
});
module.exports = router;
