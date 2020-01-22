import request from '@/utils/request'

export function findList() {
  return request({
    url: '/find',
    method: 'get'
  })
}


export function delByName(id) {
  return request({
    url: '/delete',
    method: 'delete',
    params: { id: id }

  })
}
