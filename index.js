// Code your solutions in this file
function writeCards(arrayName,event){
    const newArray=[];
for(let i=0;i<arrayName.length;i++){
    console.log(i);

  newArray.push(`Thank you, ${arrayName[i]}, for the wonderful ${event} gift!`)
}

return newArray;
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(num){
    for(let i=num;i>=0;i--){
        console.log(i);
    }
}