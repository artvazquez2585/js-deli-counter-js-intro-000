function takeANumber(katzDeli,newPersonName){
katzDeli.push(newPersonName);
return `Welcome, ${newPersonName}. You are number ${katzDeli.length+1} in line.`
}
