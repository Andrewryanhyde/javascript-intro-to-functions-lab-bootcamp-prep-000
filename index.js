function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  let a = string.toUpperCase()
  console.log(a) 
}

function logWhisper(string) {
  let a = string.toLowerCase() 
  console.log(a)
}



function sayHiToGrandma(string) {
  
  
  if(string === string.toLowerCase()) {
    console.log("I can't hear you!")
  } 
  
  else if(string === string.toUpperCase()) {
    console.log("YES INDEED!")
  }
  
  else if (string === "I love you Grandma.") {
    console.log("I love you, too.")
  }
  
}
