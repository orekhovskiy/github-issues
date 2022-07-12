import axios from 'axios';

async function getIssues(owner, repo, params) {
    console.log(`Fetching data from repository ${repo} owned by ${owner}`);
    console.log(`Fetching with folowing query params: \n ${JSON.stringify(params)}`);
    const url = `https://api.github.com/repos/${owner}/${repo}/issues`;
    let results = (await axios.get(url, { params })).data;
    if (params.title) {
        results = results.filter(item => 
            item.title === params.title
        );
    }
    return results;
}

export { getIssues };