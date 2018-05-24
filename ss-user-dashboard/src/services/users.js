import request from '../utils/request';
import { PAGE_SZIE } from '../constants';

export function fetch({ page = 1 }) {
  return request(`/api/users?_page=${page}&_limit=${PAGE_SZIE}`);      // .._page、_limit前面加_作用是什么？
}
