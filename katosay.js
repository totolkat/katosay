import colors from "colors";
import process from "process"; 


const text = process.argv.slice(2).join(" ") // getting argument provided and joining the string 

// checking if text is empty
if (text == "" || text == "") {
    console.log("node katosay.js [text]. You didn't put anything in the text.");
} else {
console.log(` 
         < ${colors.bold(text)} >
         ------
        |
    \\   /\\
    )  ( ')
    (  /  )
     \\(__)|`);
}
