const sentence = "  The quick brown fox jumps over the lazy dog.  ";
const hasFox = sentence.includes("fox"); // True
const indeOfFox = sentence.indexOf("fox"); // 16
const substring = sentence.substring(16,19);
const reemplace = sentence.replace("fox","cat");
const recorte = sentence.trim();

console.log(hasFox); // busca si dentro de la cadena encuetra este valor escrito
console.log(indeOfFox); // busca donde esta fox en el indice
console.log(substring); // busca en contenido entre los valores de los indices proporcionados
console.log(sentence); // imprime la cadena princpipal
console.log(reemplace); //reemplaza un valor por otro
console.log(recorte); // elimina los espacios en blanco en el inicio y el final del string
