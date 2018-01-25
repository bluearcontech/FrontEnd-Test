import { fetchGet, fetchPost, fetchPut, fetchDelete } from './helpers'

export const loadPosts = () => (
  new Promise((resolve, reject) => {
    fetchGet('posts').then((response) => {
      if (response.status !== 200) {
        response.json().then((json) => {
          let message = json.message
          if (Array.isArray(message)) {
            message = message.join()
          }
          reject(message)
        })
      } else {
        response.json().then((posts) => {
          resolve(posts)
        })
      }
    })
  })
)