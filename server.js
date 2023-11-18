const http = require('http');

const server  = http.createServer(( req, res )=>{
    // console.log(req.url,req.headers,req.method)

    const url = req.url;
    if(url === '/home'){
        res.setHeader('content-type', 'text/html');
        res.write('<html><body><h1>Welcome Home</h1></body></html>')
        res.end();
    }
    else if(url === '/about'){
        res.setHeader('content-type', 'text/html');
        res.write('<html><body><h1>Welcome to About Us page</h1></body></html>')
        res.end();
    }
    else if(url === '/node'){
        res.setHeader('content-type', 'text/html');
        res.write('<html><body><h1>Welcome to my Node Js project</h1></body></html>')
        res.end();
    }

    
});

server.listen(4000);