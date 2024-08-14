package main

import (
	"encoding/json"
	"fmt"
	"os"
	"strings"
)

type Posts struct {
    posts []Post
}

type Post struct {
    Content     string 
    Title       string 
    Date        string    
}

type postWrite struct {
    Content     []string
}

type PostsWrite struct {
    content     []postWrite
}

func check(err error) {
    if err != nil {
        fmt.Println(err)
    }
}

func getFileNames(filesPath string) []string{
    var fileNames []string;
    files, err := os.ReadDir(filesPath);
    check(err)
    for _, file := range files {
        fileNames = append(fileNames, file.Name())
    }
    return fileNames
}

func readFile(fileName string) string{
    var fileString string;
    content, error := os.ReadFile(fileName)
    check(error)
    fileString = string(content);
    return fileString
}

func readLines(content string) []string {
    var lines_list []string;
    var temp_str string = "";
    for _, char := range(content){
        if char == '\n'{
            lines_list = append(lines_list, temp_str)
            temp_str = "";
        }
        temp_str += string(char);
    }
    return lines_list
}

func getFileContent(filePath string) Post{
    var content = readFile(filePath);
    var lines_list = readLines(content);
    var post Post;
    post.Title = strings.Replace(lines_list[2], "#", "", 10)
    post.Date = strings.Replace(lines_list[3], "#", "", 10)
    post.Date = strings.Replace(post.Date, "_", "", 10)
    post.Content = content;
    return post
}

func buildPosts(filePath string) Posts{
    var postList Posts;
    files, err := os.ReadDir(filePath)
    check(err)
    for _, file := range(files){
        var filename string = file.Name()
        postList.posts = append(postList.posts, getFileContent(filePath+filename)) 
    }
    return postList
}

func WriteJson(pw [][]string){
    b, err := json.Marshal(pw)
    check(err)
    os.WriteFile("posts.json", b, os.ModePerm)
}

func main() {
    var posts Posts = buildPosts("./posts/")
    var postsWrite PostsWrite;
    for _, post := range(posts.posts){
        var content []string = []string{post.Content, post.Title, post.Date}
        var postWrite postWrite = postWrite{content};
        postsWrite.content = append(postsWrite.content, postWrite)
    }
    var toWrite [][]string
    for _, content := range(postsWrite.content){
        var tempArray []string = []string{
            content.Content[0],
            content.Content[1],
            content.Content[2],
        }
        toWrite = append(toWrite, tempArray)
    }
    WriteJson(toWrite)
}
