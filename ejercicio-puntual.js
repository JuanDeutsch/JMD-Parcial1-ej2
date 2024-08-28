function menorMayor(numeros) {
    // La función llamada 'menorMayor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
    // arreglo que contenga el menor número del arreglo 'numeros' en la posición cero y el mayor número del arreglo
    // 'numeros' en la posición 1.
    // Ej:
    // menorMayor([4, 6, 1, 7, 15]) debe retornar [1, 15]
    // ya que 1 es el número más chico (menor) dentro del arreglo [4, 6, 1, 7, 15]
    // y 15 es el número más grande (mayor) dentro del arreglo [4, 6, 1, 7, 15]
  
    // Tu código aca:

    const menor = Math.min(...numeros);
    const mayor = Math.max(...numeros);

    return [menor, mayor];
  
  }

  console.log(menorMayor([0, 2, 5, 6, 8, 6, 3, 7, 5, 4, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));