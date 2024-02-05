export async function createProduct(userId, productData, defaultUrl) {
  const newProduct = {
    ...productData,
    sellerId: userId,
    defaultImage: defaultUrl,
  };
  return newProduct;
}
