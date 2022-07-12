async function getIssues(req, res, next) {
    // try {
        const owner = req.params.owner;
        const repo = req.params.repo;
        const queryParams = req.query
        const results = await req.service.getIssues(owner, repo, queryParams);
        res.json(results);
    // }
    // catch (err) {
    //     if (err.response.status == 404) {
    //         res.status(404).json({ error:'Unable to get issues form given owner/repo' })
    //     }
    //     else if (err.response.status == 422) {
    //         res.status(422).json({ error:'Validation failed' })
    //     }
    //     else if (err.response.status == 301) {
    //         res.status(301).json({ error:'Requested issues ave been moved permanently' })
    //     }
    //     else {
    //         console.error(err);
    //         res.status(500).json({ error: 'Failed to request Github API' });
    //     }
    // }
}


export { getIssues };