import 'whatwg-fetch'

export const fetchGet = url => (
  fetch(`http://localhost:9001/${url}`, {
    credentials: 'same-origin'
  }, { mode: 'no-cors' })
)

export const fetchPost = (url, payload) => (
  fetch(`http://localhost:9001/${url}`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  })
)

export const fetchPut = (url, payload) => (
  fetch(`http://localhost:9001/${url}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  })
)

export const fetchDelete = url => (
  fetch(`http://localhost:9001/${url}`, {
    method: 'DELETE',
    credentials: 'same-origin',
  })
)
