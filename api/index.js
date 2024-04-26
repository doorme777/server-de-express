const express = require('express');
const cors = require('cors');
const app = express();
const routerApi = require('./routes/index');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middleware/error.handler');
const port = 3003;

const whitelist = [
  'http://localhost:3003',
  'https://server-de-express.vercel.app/',
];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};
app.use(cors(options));

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(errorHandler);
app.use(boomErrorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
