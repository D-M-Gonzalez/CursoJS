/*
*-------------------------------------------------------*
== Es igual, por ej:
*-------------------------------------------------------*

let num1 = 9
let num2 = 9

num1 == num2; es verdadero

*-------------------------------------------------------*
=== Es estrictamente igual ( tanto en valor, como en tipo ), por ej:
*-------------------------------------------------------*

let num1 = "9" ( ojo, tiene comillas, es un caracter )
let num2 = 9

num1 === num2; es falso, porque si bien son ambos 9, uno es un caracter y el otro un número

*-------------------------------------------------------*
!= Es distinto, por ej:
*-------------------------------------------------------*

let num1 = 9
let num2 = 8

num1 != num2; es verdadero, ya que son distintos

*-------------------------------------------------------*
!== Es estrictamente distinto, por ej:
*-------------------------------------------------------*

let num1 = "9"
let num2 = 9

num1 !== num2; es verdadero, su valor es igual, pero uno es un caracter y el otro un número

*-------------------------------------------------------*
< menor, por ej:
*-------------------------------------------------------*
let num1 = 0
let num2 = 9
let num3 = 9

num1 < num2; es verdadero, 0 es menor que 9
num2 < num3; es falso, 9 no es menor que 9

*-------------------------------------------------------*
<= menor o igual, por ej:
*-------------------------------------------------------*
let num1 = 0
let num2 = 9
let num3 = 9

num1 < num2; es verdadero, 0 es menor que 9
num2 < num3; es verdadero, 9 no es menor que 9 pero son iguales

*-------------------------------------------------------*
> mayor, por ej:
*-------------------------------------------------------*
let num1 = 0
let num2 = 9
let num3 = 9

num2 > num1; es verdadero, 9 es mayor que 0
num2 > num3; es falso, 9 no es mayor que 9

*-------------------------------------------------------*
>= mayor o igual, por ej:
*-------------------------------------------------------*
let num1 = 0
let num2 = 9
let num3 = 9

num2 > num1; es verdadero, 9 es mayor que 0
num2 > num3; es verdadero, 9 no es mayor que 9 pero son iguales

*-------------------------------------------------------*
&&, operador Y, se usa para unir dos condiciones, por ej:
*-------------------------------------------------------*

let num1 = 0
let num2 = 9
let num3 = 9

num2 > num 1 && num2 == num3; se lee num2 es mayor que num1 y num2 es igual a num3

Se tienen que cumplir AMBAS condiciones para que esto de verdadero, con que una sea falsa, ya todo da falso.

*-------------------------------------------------------*
|| (ALT + 124), operador O, se usa para que si una de las condiciones da verdadera, todo de verdadero, por ej:
*-------------------------------------------------------*

let num1 = 0
let num2 = 9
let num3 = 9

num2 > num1 || num2 != num3; se lee num2 es mayor que num1 o num2 es distinto a num3

Como la primer condicion es verdadera, ya todo el condicional da verdadero.

*-------------------------------------------------------*
!, operador NO, se usa para dar la condición opuesta, por ej:
*-------------------------------------------------------*

let num2 = 9
let num3 = 9

!(num2 > num3); se lee si num2 NO es mayor que num3 y esto da verdadero, ya que num2 es igual a num3, no es mayor.

*-------------------------------------------------------*
Condicional con If, If else, else
*-------------------------------------------------------*

*/

let num1 = 0
let num2 = 9
let num3 = 9


// Si ( num1 es igual a num2 Y num2 es igual a num3)
if (num1 == num2 && num2 == num3){
    /*{
        si se cumple lo de arriba, hacé lo que está aca adentro
    }*/
// Sinó, si ( num1 es menor que num2 )
} else if (num1 < num2){
    /*{
        Si en cambio se cumple esto, hacé lo que está aca adentro
    }*/
// Sinó
} else {
    /*{
        Si no se cumple ninguna, hacé lo que está aca adentro
    }*/
}