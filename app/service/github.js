'use strict';

// app/service/github.js
const Service = require('egg').Service;
class GitHub extends Service {
  async listReposByOrg(org, page = 1, size = 10) {
    const url = `https://api.github.com/orgs/${org}/repos?page=${page}&per_page=${size}`;
    const repositories = await this.ctx.curl(url, { dataType: 'json' });
    return repositories.data.map(item => {
      return {
        name: item.name,
        // ...
        url: item.html_url,
        description: item.description,
        star: item.stargazers_count,
        watch: item.watchers_count,
        fork: item.forks_count,
        language: item.language,
      };
    });
  }
}
module.exports = GitHub;
