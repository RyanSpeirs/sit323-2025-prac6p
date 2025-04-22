//  SIT323 6.1P  600152989 Ryan Speirs
//  We use some of express so we need to make sure its there and define it as a var so it can be called.
const express = require('express')
const app = express()

//  Just a basic way to pull files from the current directory.
//  Best practice would be to create a specific folder for hosting, instead of this current implementation that exposes files
app.use(express.static(__dirname))

//  A simple hello world with no extras
app.get('/', (req, res) =>{  
    res.send('Hello World')
})

//  This starts our Express server on port 3000 because we want to keep it simple. The console log here is to inform us the server
//  is up and running and to remind us what specific localhost address to confirm.
var server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})