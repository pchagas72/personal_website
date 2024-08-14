package main

import (
	"encoding/json"
	"fmt"
	"os"
	"strings"
)

type Post struct {
    Content     string 
    Title       string 
    Date        string    
}

type Posts struct {
    posts []Post
}

func check(err error) {
    if err != nil {
        fmt.Println(err)
        os.Exit(3)
    }
}

func readFile(fileName string) string{
    var fileString string
    content, error := os.ReadFile(fileName)
    check(error)
    fileString = string(content)
    return fileString
}

func readLines(content string) []string {
    var lines_list []string
    var temp_str string = ""
    for _, char := range(content){
        if char == '\n'{
            lines_list = append(lines_list, temp_str)
            temp_str = ""
        }
        temp_str += string(char)
    }
    return lines_list
}

func getFileContent(filePath string) Post{
    var content = readFile(filePath)
    var lines_list = readLines(content)
    var post Post
    post.Title = strings.Replace(lines_list[2], "#", "", 10)
    post.Date = strings.Replace(lines_list[3], "#", "", 10)
    post.Date = strings.Replace(post.Date, "_", "", 10)
    post.Content = content
    return post
}

func buildPosts(filePath string) Posts{
    var postList Posts
    files, err := os.ReadDir(filePath)
    check(err)
    for _, file := range(files){
        var filename string = file.Name()
        postList.posts = append(postList.posts, getFileContent(filePath+filename)) 
    }
    return postList
}

func WritePostsJson(posts Posts){
    var posts_array []Post = posts.posts
    var toWrite [][]string
    for _, post := range(posts_array){
        var tempArray []string = []string{
            post.Content,
            post.Title,
            post.Date,
        }
        toWrite = append(toWrite, tempArray)
    }

    b, err := json.Marshal(toWrite)
    check(err)
    err = os.WriteFile("posts.json", b, os.ModePerm)
    check(err)
}

func main() {
    var posts Posts = buildPosts("./posts/")
    WritePostsJson(posts)
    fmt.Println("Posts shuffled.")

}
