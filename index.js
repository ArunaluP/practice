function RandomPasswordGenerator(includeLowercase, includeUppercase, includeNummbers, includeSymbols, length) {
    let password = ""
    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789"
    const symbols = "!@#$%^&*()" 

    let allowedChars = ""
    allowedChars += includeLowercase ? lowercase : ""
    allowedChars += includeUppercase ? uppercase : ""
    allowedChars += includeNummbers ? numbers : ""
    allowedChars += includeSymbols ? symbols : ""

    if (length === 0) {    
        console.log("Password length should be at least 1 character long")
    }else if(length > 1){
        for(let i = 0 ;i<length; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length)
            password += allowedChars.charAt(randomIndex)
        
        }
        return password
    
    }
}

const length= 9
const includeLowercase = true
const includeUppercase = true
const includeNummbers = true
const includeSymbols = true

console.log(RandomPasswordGenerator(includeLowercase, includeUppercase, includeNummbers, includeSymbols, length))