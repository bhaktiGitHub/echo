const express = require('express');
const app = express();

app.get('/echo/:what',function(req,res){
	console.log(req.params);
	var object ={
		host:req.hostname,
		query:req.query,
		params:req.params
	}
	res.json(object);
})

app.listen('3000', () => {
  console.log(`Listening on port 3000`);
});
