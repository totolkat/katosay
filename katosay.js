import colors from "colors";
import process from "process"


const text = process.argv.slice(2).join(" ")
if (text == "" || text == "") {
    console.log("You put nothing in the text.")
} else {
console.log(` 
         < ${colors.bold(text)} >
         ------
        |
    \\   /\\
    )  ( ')
    (  /  )
     \\(__)|`)
}
