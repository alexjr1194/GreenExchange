// storing values for feed
var $feedArea = $(".feedArea");

$( document ).ready(function() {
    // Get listing from database when page loads   
    getData();
 
	var dataForFeed = [];  

	// reset feed with feed from DB   
	function initializeRows() {     
		$feedArea.empty();     
		var rowsToAdd = [];     
		for (var i = 0; i < dataForFeed.length; i++) {       
			rowsToAdd.push(createNewRow(dataForFeed[i]));     
		}     
		// this should add the listings to the list in order of last to first
		$feedArea.prepend(rowsToAdd);   
	}

	// grabbing and updating the feed area
	function getData() {     
		$.get(" /*notSureWhereToPointThis*/ ", function(data) {       
			dataForFeed = data;       
			initializeRows();     
		});   
	}

});