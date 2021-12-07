const http = require('http');
const port = 6000;

const server = http.createServer(function(req, res){
    res.write('Hello Node')
    res.end()
});

server.listen(port,function(error){
    if (error){
        console.log('Something went wrong')
    }
    else{
        console.log('Server is listening at port :'+ port)
    }

});