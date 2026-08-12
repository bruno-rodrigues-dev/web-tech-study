/*
  - Abaixo do array "fruits", verifique se "abacaxi" existe no array. Se  
    existir, exiba no console a mensagem "A string "abacaxi" existe no array  
    fruits.";
  - Se "abacaxi" não existir, verifique se "pera" existe no array. Se existir,  
    exiba no console a mensagem "A string "pera" existe no array fruits.";
  - Se nenhuma das duas frutas existirem no array, exiba no console a mensagem  
    "Nem pera nem abacaxi existem no array "fruits".".
*/

const fruits = ["morango", "banana", "mamão", "pera"];

if (fruits.includes("Abacaxi")) {
    console.log ("A string 'abacaxi' existe no array fruits.")
}
else if (fruits.includes("pera")) {
    console.log ("A string 'pera' existe no array fruits.")
}
else {
    console.log ("Nem pera nem abacaxi existem no array fruits.")
}