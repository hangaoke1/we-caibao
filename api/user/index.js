import { post, get, upload } from '../index';

const api = {
  post,
  get,
  upload
}
export default {
  queryVersion: param => api.get('/version/wid04087891', param)
};
