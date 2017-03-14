$(document).ready(function(){
$.get('https://www.reddit.com/r/aww/.json').done(function(responseBody) {
console.log("hello");

 responseBody.data.children.forEach(function(post){
   var title = post.data.title;
   var author =post.data.author;
   var img =post.data.thumbnail;
   var number=post.data.num_comments;
   console.log(title, img, author, number);

$("body").append("<div class='box'><h3 class='title'>"+title+"</h3><h4 class='author'>"+author+"</h4><img src="+img+"><p>"+number+"</p></div>");

 });
});

});
