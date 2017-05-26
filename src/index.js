$(document).ready(function(){
  // your code here!



  $('#note-form').on("submit", function(event){
    event.preventDefault()

    var newText = $('#text-input').val()

    var newComment = new Comment(newText)
    var showComment = newComment.render()
    $('#comment-list').append(showComment)

    $('#text-input').val("")

    // var commentsList = new CommentList()
    // debugger
    // var comments = commentsList.addComment(newText)
    // var showComments = commentsList.render()
    // $('#comment-list').append(commentsList)
    //
    // $('#text-input').val("")

  }) // note-form













}) //document ready
