import express from 'express';

import * as  issuesRouter from './routes/issues.js';
import { getIssues } from './routes/issues.service.js';

const issuesService = () => {
  return Object.freeze({
    getIssues,
  });
};

const exposeIssuesService = async (req, res, next) => {
  req.service = issuesService();
  next();
};


var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/issues', exposeIssuesService, issuesRouter.router);

app.use(function(req, res) {
  res.status(404).json({ error: 'Not found' });
  return;
});

app.use(function (err, req, res, next) {
  if (err.response.status == 404) {
      res.status(404).json({ error:'Unable to get issues form given owner/repo' })
    }
    else if (err.response.status == 422) {
      res.status(422).json({ error:'Validation failed' })
    }
    else if (err.response.status == 301) {
      res.status(301).json({ error:'Requested issues ave been moved permanently' })
    }
    else {
      console.error(err);
      res.status(500).json({ error: 'Failed to request Github API' });
    }
});

app.listen(3000, () => {
  console.log('Server is started');
});
