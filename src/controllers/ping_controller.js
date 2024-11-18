function pingController(request , response)
{
    console.log("Controller hit !");
    return response.status(200).json( { message: "Ping recieved !" } );
}

module.exports = {
    pingController
}