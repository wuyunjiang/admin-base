'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('future_international');

  const NewsSchema = new Schema({
    title: { type: String },
    cover_url: { type: String },
    author_id: { type: String },
    tags: { type: String },
    is_public: { type: Boolean },
    summary: { type: String },
    content: { type: String },
    create_time: { type: Date },
    last_modify: { type: Date },
  });
  return conn.model('fi_news', NewsSchema, 'fi_news');
};
