const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const { createHandler } = require('graphql-http/lib/use/express');
const expressPlayground =
  require('graphql-playground-middleware-express').default;

const schema = require('./schema/schema');

const app = express();

app.use(cors());

app.all('/graphql', createHandler({ schema }));
app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.listen(4000, () => {
  mongoose.connect(
    process.env.MONGO_DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log('connected to mongoose');
    }
  );
});
