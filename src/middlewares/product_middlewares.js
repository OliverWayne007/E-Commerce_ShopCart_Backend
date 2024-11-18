const errorResponse = require("../utils/error_response");

const { StatusCodes } = require("http-status-codes");

function createProductValidator(request , response , next)
{
    if(!request.body)
    {
        return response.status(400).json( errorResponse("No body was recieved in the incoming request" , { 
            message: "Request recieved without body" }) );
    }

    let body = request.body;

    if(!body.title)
    {
        return response.status(StatusCodes.BAD_REQUEST).json( errorResponse("title was not recieved in the incoming request" , {
            message: "Request body recieved without title"
        } ) );
    }

    if(!body.price)
    {
        return response.status(400).json( errorResponse("price was not recieved in the incoming request !") , {
            message: "Request body recieved without price"
        } );
    }

    if(!body.description)
    {
        return response.status(400).json( errorResponse("description was not recieved in the incoming request" , {
            message: "Request body recieved without description"
        } ) );
    }

    if(!body.image)
    {
        return response.status(400).json( errorResponse("image was not recieved in the incoming request" , {
            message: "Request body recieved without image"
        } ) );
    }

    if(!body.category)
    {
        return response.status(400).json( errorResponse("category was not recieved in the incoming request" , {
            message: "Request body recieved without category"
        } ) );
    }

    // If everything looks good then forward the request to the next middleware
    next();
}

module.exports = {
    createProductValidator
}