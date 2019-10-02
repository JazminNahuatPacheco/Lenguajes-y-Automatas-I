var texto = " \
Mido uno cincuenta y dos, mi bulto de la escuela es color rosado con rosas \
Me gustan las musicas de todo tipo, menos la banda \
Acostumbro despertarme temprano por mi hermanito que va a la primaria \
Mi signo es Cancer, cabello negro, ojos cafes oscuros \
Cuando mi mama estaba embarazada ella no lo sabia asi que penso que tenia una enfermedad, bueno eso le dijeron los doctores \
Tengo 9 hermanos hombres y mujeres, incluyendome \
Tengo una mejor amiga desde la prepa\
";

let mensaje1 = "Accidentally in Love";
let palabras = mensaje1.match(/[A-Z][a-z]{7,14}/g);
console.log(palabras);


var mensaje2 = /[a-z]+[^aeiou ]\b/gmi;
result = texto.match(mensaje2);
console.log(result);

var mensaje3 = /[M][^aeiou][a-z]+/g
result = texto.match(mensaje3);
console.log(result);

let mensaje4 = "Soy el tipo de persona que se enoja facilmente 'sigh' pero soy amigable"
let frase = mensaje4.match(/['][a-z|A-Z]+[']/g);
console.log(frase);

let mensaje5 = "La IP de mi casa es 192.168.10.25 y la del vecino de a lado es 192.168.20.11"
let numero = mensaje5.match(/(\d{1,3})[.](\d{1,3})[.](\d{1,3})[.](\d{1,3})/g)
console.log(numero);

var horas = "\
12:30:00 \
15:40:61 \
09:11:30\
";

var mensaje6 = /([0-12]{1,2})[:]([0-59]{1,2})[:]([0-59]{1,2})\b/g;
result = horas.match(mensaje6)
console.log(result);

var mensaje7 = /(\d{3})[-](\d{3})[-](\d{4})\b/g;

var telefono = "\
985-107-46-67 \
985-120-35-36 \
985-111-71-24 \
985-122-14-34 \
";
result = telefono.match(mensaje7)
console.log(result);

var mensaje8 = /([a-z|0-9])+[@]([a-z|0-9])+[.]([a-z|0-9]{3})+\b/g;

var correos = "\
jazminmercedes99@gmail.com \
jazminnp1099@gmail.com \
jazmin.nahuatpacheco.itsva.edu.mx \
correos \
";
result = correos.match(mensaje8)
console.log(result);

var mensaje9 = "\
http//:www.instagram.com \
http//:www.youtube.com \
http//:www.twitter.com \
";
let newlink = mensaje9.match(/[http//:www.]+[a-z]+[.]+([a-z]{3})/g);
console.log(newlink);

var mensaje10 = "El codigo postal de mi zona es: 97780"; //Elimina un codigo postal
let codigopostal = mensaje10.match(/[0-9]{5}/g, "*");
console.log(codigopostal);