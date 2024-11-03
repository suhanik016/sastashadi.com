var express = require("express");
var app = express(); // Corrected this line
var bodyParser = require("body-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
    console.log(req.body.husbandname);
    console.log(req.body.wifename);
    console.log(req.body.husbandday);
    console.log(req.body.wifeday);
    console.log(req.body.husbandmonth);
    console.log(req.body.wifemonth);
    console.log(req.body.husbandyear);
    console.log(req.body.wifeyear);
   
    var c = 0;

    if (req.body.husbandday % 2 === 0 && req.body.wifeday % 2 === 0 || req.body.husbandday % 2 != 0 && req.body.wifeday % 2 != 0) {
        c++;
    } 

    if ((req.body.husbandmonth % 2 == 0 && req.body.wifemonth % 2 != 0) || (req.body.husbandmonth % 2 != 0 && req.body.wifemonth % 2== 0)) {
        c++;
        
    } 
    if ((req.body.wifeyear +5 == req.body.husbandyear)){
        c++;
    }
    if(c==3){
        res.send("shaadi karlo")
        
    }
    else{
        c=0;
        res.send("shadi mat karo")
    }

    


});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
