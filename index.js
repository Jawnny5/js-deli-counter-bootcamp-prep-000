let  takeANumber = (katzDeliLine, name)=> {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

let nowServing = (katzDeliLine) =>{

  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!";
}else{
  return `Currently serving ${katzDeliLine.shift()}.`;
}
}

let currentLine = (katzDeliLine) =>{
  let theQueue = [];
  if(katzDeliLine.length ===0){
    return "The line is currently empty."
  }
  for(var i = 0; i < katzDeliLine.length; i++){
    theQueue.push(`${i+1}. ${katzDeliLine[i]}`);
  }
  theQueue = theQueue.join(", "+ "")
  return `The line is currently: ` + theQueue

}
