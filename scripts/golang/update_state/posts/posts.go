package posts

import (
	"encoding/json"
	"os"
	"strings"
    "github.com/pchagas72/personal_website/helper"
)

type post struct {
    Content     string 
    Title       string 
    Date        string    
}

type Posts struct {
    posts []post
}


func getFileContent(filePath string) post{
    var content = helper.ReadFile(filePath)
    var lines_list = helper.ReadLines(content)
    var post post
    post.Title = strings.Replace(lines_list[2], "#", "", 10)
    post.Date = strings.Replace(lines_list[3], "#", "", 10)
    post.Date = strings.Replace(post.Date, "_", "", 10)
    post.Content = content
    return post
}

func buildPosts(filePath string) Posts{
    var postList Posts
    files, err := os.ReadDir(filePath)
    helper.Check(err)
    for _, file := range(files){
        var filename string = file.Name()
        postList.posts = append(postList.posts, getFileContent(filePath+filename)) 
    }
    return postList
}

func WritePostsJson(filePath string, postsJsonPath string){
    var posts Posts = buildPosts(filePath)
    var posts_array []post = posts.posts
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
    helper.Check(err)
    err = os.WriteFile(postsJsonPath, b, os.ModePerm)
    helper.Check(err)
}
