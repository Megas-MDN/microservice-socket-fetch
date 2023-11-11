require('dotenv/config');
const { server } = require('./app');
const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`Server Up on port ${port}`);
});
