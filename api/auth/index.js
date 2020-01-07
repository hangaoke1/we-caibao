import { post, get } from '../index';

const api = {
  post,
  get
}
export default {
  login: param => api.post('/user/login.htm', param),
  register: param => api.post('/user/mobile_register.htm', param),
  getRegisterVerify: param => api.post('/user/register_validateCode.htm', param)
};
