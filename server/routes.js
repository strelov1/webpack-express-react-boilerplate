import { Router } from 'express';
import path from 'path';

const routes = Router();

routes.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

export default routes;