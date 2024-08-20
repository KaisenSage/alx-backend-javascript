// full_server/server.js
import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 1245;

app.use((req, res, next) => {
    req.databaseFilePath = process.argv[2]; // Pass database filename to routes
    next();
});

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

export default app;

