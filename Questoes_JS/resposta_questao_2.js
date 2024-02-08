function getDuplicates(arr) {
    // Define um objeto para contar a ocorrência de cada elemento do array
    const count = {};
    // Define uma array que armazena os elementos duplicados
    const duplicates = [];

    // Itera sobre cada elemento do array
    arr.forEach((item) => {
        // Caso o elemento já tenha sido contado, incrementa a contagem. Caso contrário, inicializa com 1
        count[item] = (count[item] || 0) + 1;
    });

    // Itera sobre o objeto de contagem
    for (const number in count) {
        // Se a contagem de um elemento for maior que 1, ele é duplicado
        if (count[number] > 1) {
            // Adiciona o elemento no final da array (convertendo para inteiro)
            duplicates.push(parseInt(number));
        }
    }

    // Retorna o array de elementos duplicados
    return duplicates;
}