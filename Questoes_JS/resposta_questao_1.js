function isSequential(number) {
    // Converte o número para string
    const digits = number.toString();

    // Caso o número tenha apenas um dígito (ou menos), ele é considerado sequencial
    if (digits.length <= 1) {
        return true;
    }

    // Define a variável que determina a direção da sequência (1 para crescente e -1 para decrescente)
    let direction = 0;

    // Itera sobre os dígitos do número, começando do segundo dígito
    for (let i = 1; i < digits.length; i++) {
        // Calcula a diferença entre o dígito atual e o anterior
        const difference = digits[i] - digits[i - 1];

        // Se a diferença é maior que 1 ou menor que -1, a sequência não é válida e retorna false
        if (difference > 1 || difference < -1) return false;

        // Se existe uma diferença e a direção ainda não foi determinada, define a direção
        if (difference !== 0 && direction === 0) {
            direction = difference > 0 ? 1 : -1;
        }

        // Se a direção já foi determinada, verifica se os dígitos seguem a mesma direção
        if (direction !== 0) {
            // Se a direção é crescente e a diferença atual é negativa, ou se a direção é decrescente e a diferença atual é positiva, retorna false
            if (direction === 1 && difference < 0) return false;
            if (direction === -1 && difference > 0) return false;
        }
    }

    // Caso passe por todas as verificações, a sequência é válida e retorna true
    return true;
}
