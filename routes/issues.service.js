import axios from 'axios';

async function getIssues(owner, repo) {
    console.log(`Fetching data from repository ${repo} owned by ${owner}`)
    const results = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`);
    return results.data;
}

export { getIssues };