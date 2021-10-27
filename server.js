let express = require("express");

let app = express();

app.get("/", function(request, response){
    response.redirect('index.html');
});

app.use(express.static('public'));

app.listen(80);
console.log("Server starting...")
