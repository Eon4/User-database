import http from 'http';

http.createServer((request, response) => {
	response.writeHead(200, {'Content-Type': 'text/html'})
	response.write('Hello World! Im here')
	response.end()
}).listen(3000, () => {
	console.log('Node Server kører på http://localhost:3000');
}) 
