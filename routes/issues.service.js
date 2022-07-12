import axios from 'axios';

async function getIssues(owner, repo, queryParams) {
    console.log(`Fetching data from repository ${repo} owned by ${owner}`)
    console.log(`Fetching with folowing query params: \n ${JSON.stringify(queryParams)}`)
    const url = `https://api.github.com/repos/${owner}/${repo}/issues`;
    const results = await axios.get(url, { params: queryParams });
    return results.data;
}

export { getIssues };