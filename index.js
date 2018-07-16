const restify = require('restify');
const restling = require('restling');
const {url, default_access_token, default_message} = require('./config');

const server = restify.createServer({
    name: 'line-notify',
    version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.post('/', (req, res)=> {
    const {body={}} = req;
    const {message = default_message, access_token=default_access_token} = body;
    const headers = {'content-type': 'multipart/form-data;', "authorization": `Bearer ${access_token}`};
    const data = {message};

    restling.post(url, {headers, data}).then(({data})=>{
        res.json(data);
    }).catch(({data: msg})=>{
        console.error(msg);
        res.json(msg);
    });
});

server.listen(3000, () => {
    console.log('%s listening at %s', server.name, server.url);
});