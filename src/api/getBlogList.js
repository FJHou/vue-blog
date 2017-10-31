import axios from 'axios'

export function getBlogList () {
  return axios.get('localhost:8180/a')
      .then((res) => {
        return Promise.resolve(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
}

