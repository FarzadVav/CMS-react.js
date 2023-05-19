const mainUrl = 'http://localhost:3000/api/';

export const getAllProducts = async () => {
  return await fetch(mainUrl + 'products/').then(response => response.json())
}

export const deleteProduct = async id => {
  console.log(mainUrl + 'products/' + id);
  return await fetch(mainUrl + 'products/' + id, {
    method: 'DELETE'
  }).then(response => response)
}