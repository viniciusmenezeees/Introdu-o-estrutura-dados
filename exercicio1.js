let dados = [97, 45, 49, 32, 2, 5, 9, 99, 1, 7];

// Percorrer todos os itens do array
let ordenado = false;

do {
    ordenado = true; 
    for (let i = 0; i < dados.length - 1; i++) { 
        if (dados[i] > dados[i + 1]) {
            console.log(`[${dados[i]}] é maior que [${dados[i + 1]}]. Realizando inversão`);
            let aux = dados[i];
            dados[i] = dados[i + 1];
            dados[i + 1] = aux;
            ordenado = false; // Marca como não ordenado
        }
    }
    console.table(dados); // Exibe o array após cada iteração
} while (!ordenado);

console.log("Array final:", dados);