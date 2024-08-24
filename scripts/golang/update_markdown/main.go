package main

import (
	"fmt"

	"github.com/pchagas72/personal_website/bookshelf"
	"github.com/pchagas72/personal_website/posts"
)

func updatePosts(postsPath string, postsJsonPath string){
    posts.WritePostsJson(postsPath, postsJsonPath)
    fmt.Println("Posts shuffled.")
}

func updateBooks(booksPath string, booksJsonPath string){
    bookshelf.WriteBooksJson(booksPath, booksJsonPath)
    fmt.Println("Books shuffled.")
}

func main(){
    fmt.Println("Hey, what do you want to do?")
    updatePosts("markdown/blog/posts/","markdown/blog/posts.json")
    updateBooks("markdown/bookshelf/books/", "markdown/bookshelf/books.json")

}
