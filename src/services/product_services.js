const products = [];

function createProduct(productSpecifications)
{
    let newProduct = {
        id: products.length + 1 , 
        ...productSpecifications
    }

    products.push(newProduct);

    return newProduct;
}

module.exports = {
    createProduct
}