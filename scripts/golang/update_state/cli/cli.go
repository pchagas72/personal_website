package cli

import (
	"fmt"
	"strconv"
	"strings"

	"github.com/pchagas72/personal_website/helper"
)

func StartMenu() int{
    fmt.Println("(1) - Update all")
    fmt.Println("(2) - Update books")
    fmt.Println("(3) - Update posts")
    fmt.Println("(4) - Add song to repertoir")
    var line string = helper.GetInput()
    option, err := strconv.Atoi(strings.TrimSpace(line))
    helper.Check(err)
    return option
}
