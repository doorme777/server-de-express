const express = require('express');
const app = express();
const routerApi = require('./routes/index');
const { logErrors, errorHandler } = require('./middleware/error.handler');
const port = 3003;

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
