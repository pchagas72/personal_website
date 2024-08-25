package main

import (
	"fmt"

	"github.com/pchagas72/personal_website/bookshelf"
	"github.com/pchagas72/personal_website/cli"
	"github.com/pchagas72/personal_website/posts"
	"github.com/pchagas72/personal_website/repertoir"
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
    var option int = cli.StartMenu()
    if (option == 1){
        updatePosts("markdown/blog/posts/","markdown/blog/posts.json")
        updateBooks("markdown/bookshelf/books/", "markdown/bookshelf/books.json")
    } else if (option == 2){
        updateBooks("markdown/bookshelf/books/", "markdown/bookshelf/books.json")
    } else if (option == 3){
        updatePosts("markdown/blog/posts/","markdown/blog/posts.json")
    } else if (option == 4){
        repertoir.WriteSongs("markdown/repertoir/pieces.json")
    }

}
