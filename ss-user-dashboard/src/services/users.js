import request from '../utils/request';

export function fetch({ page = 1 }) {
  return request(`/api/users?_page=${page}&_limit=5`);      // .._page、_limit前面加_作用是什么？
}
