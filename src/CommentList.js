class CommentList {
  constructor(){
    this.comments = []
  }

  render(){

    return this.comments.map(function(comment){
      return `<ul><li>${comment}</li></ul>`
    })
  }

  addComment(string){
    var comment = new Comment(string)
    this.comments.push(comment)

  }


}
