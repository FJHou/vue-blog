import Mock from 'mockjs'
// import {random} from 'assets/js/util'
const Random = Mock.Random
Random.date

Mock.setup({
  timeout: 2000
})

const wordsMap = '创建于1997年，是一家面向大型公司和快速发展的中小企业提供一站式专业人力资源服务，包括网络招聘、报纸招聘、校园招聘、猎头服务、招聘外包、企业培训以及人才测评等。在中国首创了人力资源高端杂志《首席人才官》'.split('')

// function randomImage () {
//   return Random.image('50x50')
// }

function randomWords () {
  let len = wordsMap.length
  let str = ''
  wordsMap.forEach((item, index) => {
    let randomNumber = Math.random()
    let range = randomNumber * (len / 2) | 0
    str += wordsMap[range]
  })
  return str
}

// console.log(randomWords())

export const mockGetBlogList = function () {
  Mock.mock('localhost:8180/a', {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|10-20': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      'content|+1': randomWords,
      'title|+1': '标题' + 1,
      'date|+1': '@date("2016-MM-dd")',
      'img': '@dataImage("200x200")'
    }]
  })
}
