import { getIssues } from './issues.handler.js'
import express from 'express';

var router = express.Router();

router.get('/:owner/:repo', getIssues);

export { router }
