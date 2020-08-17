import request from '@/api/request';
import path from '@/api/path';

const getGithubUser = (username) => request.get(`${path.GITHUB_USER}/${username}`);

export default {
  getGithubUser,
};
