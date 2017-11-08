/*var db = require('/user.js');


app.get('/orders', function(request, response) {
  db.Post.findAll().success(function(orders) {
    var post_json = [];
    post.forEach(function(order) {
      orders_json.push({id: order.id, weed_type: order.amount, time: order.time});
    });
    // Uses views/orders.ejs
    response.render("feed", {orders: orders_json});
  }).error(function(err) {
    console.log(err);
    response.send("error retrieving orders");
  });
});*/



<h2>Recent Posts</h2> 

<ul>   
	{{#each Posts}}     
		{{#if strain.type === sativa}} 
			<h3>{{weed_type.type}} <br> {{strain.type}} <br> {{discription.type}} <br> {{date_created.type}}</h3>
			<img>{{image.type}}</img>
		{{/if}}
		{{#else if strain.type === indica}}
			<h3>{{weed_type.type}} <br> {{strain.type}} <br> {{discription.type}} <br> {{date_created.type}}</h3>
			<img>{{image.type}}</img>
		{{/if}}
		{{#else}}
			<h3>{{weed_type.type}} <br> {{strain.type}} <br> {{discription.type}} <br> {{date_created.type}}</h3>
			<img>{{image.type}}</img>
		{{/if}}
	{{/each}}
</ul> 
