'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('future_international');

  const UserSchema = new Schema({
    account: { type: String },
    pwd: { type: String },
    avatar_url: { type: String },
    create_time: { type: Date },
    last_modify: { type: Date },
  });
  return conn.model('fi_user', UserSchema, 'fi_user');
};
