package helper

import (
    "fmt"
    "os"
)

func Check(err error) {
    if err != nil {
        fmt.Println(err)
        os.Exit(3)
    }
}

func ReadFile(fileName string) string{
    var fileString string
    content, error := os.ReadFile(fileName)
    Check(error)
    fileString = string(content)
    return fileString
}

func ReadLines(content string) []string {
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

