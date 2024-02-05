export async function createProduct(userId, productData, defaultUrl) {
  console.log(productData);
  const newProduct = {
    ...productData,
    sellerId: userId,
    defaultImage: defaultUrl,
  };
  return newProduct;
}
