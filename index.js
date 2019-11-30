function takeANumber(katzDeli,newPersonName){
katzDeli.push(newPersonName);
return `Welcome, ${newPersonName}. You are number ${katzDeli.length} in line.`
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){

  }
  else{
    return `There is nobody waiting to be served!`;
  }
}
