async function getIssues(req, res, next) {
    try {
        const owner = req.params.owner;
        const repo = req.params.repo;
        const results = await req.service.getIssues(owner, repo);
        res.json(results);
    }
    catch (err) {
        if (err.response.status == 404) {
            res.status(404).json({ error:'Unable to get issues form given owner/repo' })
        }
        else {
            console.error(err);
            res.status(500).json({ error: 'Failed to request Github API' });
        }
    }
}


export { getIssues };