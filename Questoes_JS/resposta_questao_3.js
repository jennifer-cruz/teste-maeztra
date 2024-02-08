function isValidSequence(sequence) {
    // Cria um array para armazenar os caracteres abertos
    const openChars = [];
    // Mapeia os caracteres fechados para os seus correspondentes abertos
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Itera sobre cada caractere da sequência
    for (let char of sequence) {
        // Se o caractere for um de abertura, adiciona ao array
        if (Object.values(mapping).includes(char)) {
            openChars.push(char);
        } else if (openChars.length === 0 || stack.pop() !== mapping[char]) {
            // Se o array de caracteres abertos estiver vazio ou o primeiro item dos caracteres abertos não corresponder ao caractere de abertura correspondente ao caractere atual, a sequência é inválida e retorna false
            return false;
        }
    }

    // Se o array de caracteres abertos estiver vazio, todos os caracteres foram devidamente fechados e a sequência é válida
    return openChars.length === 0;
}