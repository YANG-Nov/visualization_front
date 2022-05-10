import request from '@/utils/request'

const tunnelApi ={
  getTunnelBasicInformation: '/tunnel/get_tunnel_basic_information'
}
export function getTunnelBasicInformation(tunnelId) {
  return request({
    url: tunnelApi.getTunnelBasicInformation + '/' + `${tunnelId}`,
    method: 'get',
    params: tunnelId
  })
}
