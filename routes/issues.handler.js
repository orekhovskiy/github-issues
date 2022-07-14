async function getIssues(req, res, next) {
    try {
        const owner = req.params.owner;
        const repo = req.params.repo;
        const queryParams = req.query
        const results = await req.service.getIssues(owner, repo, queryParams);
        res.json(results);
    }
    catch (err) {
        next(err);
    }
}

export { getIssues };