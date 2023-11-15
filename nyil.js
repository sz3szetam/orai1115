const reverseStr = str => str.split('').reverse().join('');
document.getElementById("btn").addEventListener("click", () =>
{
    
    const inputElem = document.getElementById("bekeres");
    const szoveg = inputElem.value;
    const Forditott = reverseStr(szoveg); 
    document.getElementById("eredmeny").innerHTML = Forditott;
});



