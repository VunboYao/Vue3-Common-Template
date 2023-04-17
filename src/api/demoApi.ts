import request from '@/api/request'

interface MockReq {
  foo: string
  bar: number
}

interface MockRes {
  abc: number
  cba: any
}

function MockAPI(ad: MockReq) {
  return request<MockRes>({
    data: ad
  })
}

const func = () => {
  console.log(123)
}

const age = 123
console.log(age)

async function foo(): Promise<boolean> {
  console.log('123')
  return true
}

const arr = '123'
