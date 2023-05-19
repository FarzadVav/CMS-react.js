const mainUrl = 'http://localhost:3000/api/';

export const getAllProducts = async () => {
  return await fetch(mainUrl + 'products/').then(response => response.json())
}