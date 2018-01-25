import { fetchGet, fetchPost } from './helpers'

export const writeComment = (comment) => {
  return new Promise((resolve, reject) => {
    fetchPost('comments', {
      ...comment
    }).then( response => {
      if (response.status !== 201) {
        response.json().then((json) => {
          let message = json.message
          if (Array.isArray(message)) {
            message = message.join()
          }
          reject(message)
        })
      } else {
        response.json().then((commentAdded) => {
          resolve(commentAdded)
        })
      }
    })
  })
}

export const loadComments = (postId) => (
  new Promise((resolve, reject) => {
    fetchGet(`posts/${postId}/comments`).then((response) => {
      if (response.status !== 200) {
        response.json().then((json) => {
          let message = json.message
          if (Array.isArray(message)) {
            message = message.join()
          }
          reject(message)
        })
      } else {
        response.json().then((comments) => {
          resolve(comments)
        })
      }
    })
  })
)