import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
const server = express();
const PORT = 8080;
server.use(bodyParser.json()); // tells the app to use json throughout the app
// ROUTES
server.get('/', (req, res) => {
    res.send('Hello World');
});
server.use('/users', usersRoutes);
server.listen(PORT, () => console.log(`Server running on http://127.0.0.1:${PORT}`));
//# sourceMappingURL=server.js.map