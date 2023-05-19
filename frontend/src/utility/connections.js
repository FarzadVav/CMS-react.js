const mainUrl = 'http://localhost:3000/api/';

// get all products from backend
export const getAllProducts = async () => {
  return await fetch(mainUrl + 'products/').then(response => response.json())
}

// delete a product
export const deleteProduct = async id => {
  return await fetch(mainUrl + 'products/' + id, {
    method: 'DELETE'
  }).then(response => response)
}

// update a product
export const updateProduct = async (id, contentBody) => {
  return await fetch(mainUrl + 'products/' + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contentBody)
  }).then(response => response.json())
}

// add new product
export const addNewProduct = async contentBody => {
  return await fetch(mainUrl + 'products/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contentBody)
  }).then(response => response.json())
}