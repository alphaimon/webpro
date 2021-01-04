const http = requrie("http")
const fs = requrie("fs")
const port = 3000


const server = http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type':'test/html' })
    fs.readFile("index.html", function(error, data) {

    if (error) {
        res.writeHead(404)
        res.write('Error: File not found')

        } else {
            // the data parameter indicates all the file inside html
            res.write(data)
        }
        res.end()
        })       
})


// This gives the feedback whether a server is running properly //
server.listen(port,function(error) {
    if (error) {
        console.log('something went wrong', error)
    } else{
        console.log("server is listening on port" + port)
    }
})