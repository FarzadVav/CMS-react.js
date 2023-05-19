const mainUrl = 'http://localhost:3000/api/';

export const getAllProducts = async () => {
  return await fetch(mainUrl + 'products/').then(response => response.json())
}

export const deleteProduct = async id => {
  return await fetch(mainUrl + 'products/' + id, {
    method: 'DELETE'
  }).then(response => response)
}

export const updateProduct = async (id, contentBody) => {
  return await fetch(mainUrl + 'products/' + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contentBody)
  }).then(response => response.json())
}