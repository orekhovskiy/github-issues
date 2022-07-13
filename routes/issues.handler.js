async function getIssues(req, res, next) {
    const owner = req.params.owner;
    const repo = req.params.repo;
    const queryParams = req.query
    const results = await req.service.getIssues(owner, repo, queryParams);
    res.json(results);
    next();
}


export { getIssues };