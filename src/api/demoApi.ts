import request from '@/api/request'

interface MockReq {
  foo: string
  bar: number
}

interface MockRes {
  abc: number
  cba: string
}

function MockAPI(ad: MockReq) {
  return request<MockRes>({
    data: ad,
  })
}
