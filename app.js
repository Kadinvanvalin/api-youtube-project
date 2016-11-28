$(document).ready(function(){
	var URL = "https://www.googleapis.com/youtube/v3/search";
	var state ={
		thumbnails:[],
		videoID:[],
		title:[]
	}


var renderList = function(state, element) {
	
	    var itemsHTML = state.thumbnails.map(function(item, index) {

        return "<li><a href='https://www.youtube.com/watch?v="+state.videoID[index] +"' ><img class ='thumbnail' src='"+ item + "' alt =some content ></a><span class='title'>"+ state.title[index]+"</span></li>";
    });
    element.html(itemsHTML);
};

	 


$("#submit").click(function(event){
	var q = $('#query').val();

$.getJSON(URL,
	{
		part:'snippet',
		key:'AIzaSyCFxtZx3Ip9eK2kfq4MAuvUL3KdUvR0N5o',
		q:q

	},

 function(data){
 		clearEverything();
 		console.log($("#search-container").html());
 	for(var i =0; i < 5; i++){
 	state.thumbnails.push(data.items[i].snippet.thumbnails.high.url );
 	state.videoID.push(data.items[i].id.videoId);
 	state.title.push(data.items[i].snippet.title);}
 	renderList(state, $("#search-container"));
	console.log(data);});
});

function clearEverything(){
	// Clear out element before render
 $("#search-container").html("");
state.thumbnails=[];
state.videoID =[];
}

});