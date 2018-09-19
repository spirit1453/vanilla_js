
class GitUtil {
  static getRepoName (repo) {
    const result = repo.split('/').pop().replace('.git', '')
    return result
  }
}

Object.freeze(GitUtil)
module.exports = GitUtil
