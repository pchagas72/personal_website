package repertoir

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/pchagas72/personal_website/helper"
)

type Song struct{
    title       string
    author      string
    description string
    sheet_music string
}

func AddSong() Song{
    var title string;
    var author string;
    var description string;
    var sheet_music string;
    fmt.Println("Type the song title:")
    title = helper.GetInput()
    fmt.Println("Type the author:")
    author = helper.GetInput()
    fmt.Println("Type the song description:")
    description = helper.GetInput()
    fmt.Println("Paste a link for the sheet music:")
    sheet_music = helper.GetInput()
    return Song{title, author, description, sheet_music}
}

func getSongs(filepath string) [][]string{
    contentJson, err := os.ReadFile(filepath)
    helper.Check(err)
    var content [][]string
    json.Unmarshal(contentJson, &content)
    return content
}

func WriteSongs(songsJsonPath string){
    var song Song = AddSong()
    var songToWrite []string = []string{
        song.title, song.author, song.description, song.sheet_music,
    }
    var oldSongs = getSongs(songsJsonPath)
    newsongs := append(oldSongs, songToWrite)
    b, err := json.Marshal(newsongs)
    helper.Check(err)
    err = os.WriteFile(songsJsonPath, b, os.ModePerm)
    helper.Check(err)
}
