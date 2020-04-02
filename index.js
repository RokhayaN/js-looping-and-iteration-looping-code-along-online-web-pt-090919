// Code your solutions in this file writeCards 
function writeCards (names,eventName){
    let cards =[]
    for (let i = 0; i < names.length;i++){
    cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
}
return cards;

}

function countDown (integer) {
    let i = integer;
    while (integer > 0) {
        console.log( integer )
        integer = integer - 1
    }
    console.log( integer );
}