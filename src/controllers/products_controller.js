const productServices = require("../services/product_services");

function getAllProductsController(request , response)
{
    return response.status(200).json( { message: "Lists all the product categories !" } ); 
}

const getAllProductCategoriesController = (request , response) => {
    return response.status(200).json( { message: "Lists all the brands in the product category !" } );
}

const getAllBrandProductsController = function(request , response)
{
    return response.status(200).json( { message: "Lists all the products of a brand !" } );
}

const createProductController = (request , response) => {
    try 
    {
        console.log("Query params: " , request.query);
        console.log('\n');
        console.log("Request body: " , request.body);
        console.log('\n');
        console.log("Route/Path/URL params: " , request.params);
        console.log('\n');
        console.log("Request Headers: " , request.headers);
        console.log('\n');

        // Calling the createProduct service from product_services and passing the request body as argument
        const newProduct = productServices.createProduct(request.body);

        // Some db processing will be done by the service layer

        // Preparing the response object from the response recieved from the createProduct service of the service layer
        return response.status(201).json( { 
            success: "true" , 
            error: {} , 
            message: "Product created successfully !" ,
            data: newProduct
        } );

    } 
    catch (error) 
    {
        console.log("Something went wrong !" , error);
    }
}

module.exports = {
    getAllProductsController , 
    getAllProductCategoriesController , 
    getAllBrandProductsController , 
    createProductController
}