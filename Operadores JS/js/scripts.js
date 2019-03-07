/**
 * 
 * @param {El numero a dividir} dividendo 
 * @param {El numero divisor} divisor 
 * @returns 
 */
function esDivisor(dividendo,divisor){
    return dividendo%divisor == 0;
}
/**
 * 
 * @param {Numero} numero 
 */
function esPrimo(numero){
    var divisores = 0;
    for(i= 1;i<=numero;i++){
        if (esDivisor(numero,i)){
            divisores++;
        }
    }
    return  divisores === 2;
}

/**
 * Encontrar el numero en la posicion N de la secuencia fibonnacci
 * @param {*} n 
 */
function secuenciaFibo(n){
    var num1= 0
    var num2= 1
    var array = new Array;
    for(i=0;i<n;i++){
        var num3= num1;
        num1 = num2
        num2 =num3+num2
        array.push(num2)
    }
    return array
};

function fibonnacci(num){
    if(num == 1 || num ==2){
        return 1;
    }
    return fibonnacci(num - 1) + fibonnacci (num - 2);
}

function findNumberFibonacci(numero){
    var secuencia = secuenciaFibo(numero+10)
    var resultado = 0
    for(i=0;i<=secuencia.length;i++){
         if (secuencia[i] == numero){
             resultado = i
         }
    }
    return resultado
}