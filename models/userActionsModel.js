const db = require('./db');
const {Schema} = db;
require('dotenv').config();

const userActionsSchema = new Schema(
  {
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    action: {type: String, required: true},
    searchKeyword: String,
    article: {
      title: String,
      description: String,
      content: String,
      url: String,
      image: String,
      publishedAt: String,
    },
  },
  {
    // Use Unix timestamps
    timestamps: {currentTime: () => Math.floor(Date.now() / 1000)},
    collection: process.env.MONGO_DB_USER_ACTIONS_COLLECTION,
  },
);

const UserActions = db.model('UserActions', userActionsSchema);

module.exports = UserActions;
