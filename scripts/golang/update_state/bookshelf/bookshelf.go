package bookshelf

import (
	"encoding/json"
	"os"

	"github.com/pchagas72/personal_website/helper"
)

type book struct {
    content string
}

type Books struct {
    books []book
}

func getFileContent(filePath string) book{
    var content = helper.ReadFile(filePath) 
    var book book
    book.content = content
    return book
}

func buildBooks(filesPath string) Books{
    var booksList Books
    files, err := os.ReadDir(filesPath)
    helper.Check(err)
    for _, file := range(files){
        var filename string = file.Name()
        booksList.books = append(booksList.books, getFileContent(filesPath+filename))
    }
    return booksList
}

func WriteBooksJson(filesPath string, booksJsonPath string){
    var books Books = buildBooks(filesPath)
    var books_array []book = books.books
    var toWrite []string
    for _, book := range(books_array){
        toWrite = append(toWrite, book.content)
    }
    b, err := json.Marshal(toWrite)
    helper.Check(err)
    err = os.WriteFile(booksJsonPath, b, os.ModePerm)
    helper.Check(err)
}
