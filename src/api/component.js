import request from '@/utils/request'

const componentApi ={
  getComponentInformation: '/specific_component/get_component_information'
}
export function getComponentInformation(specificComponentId) {
  return request({
    url: componentApi.getComponentInformation + '/' + `${specificComponentId}`,
    method: 'get',
    params: specificComponentId
  })
}
