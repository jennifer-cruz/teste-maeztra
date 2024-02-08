function getArrangements(n) {
    // Os arranjos possíveis dos amigos é o fatorial do número de amigos
    // 0! é 1 por axioma
    if (n === 0) return 1;

    // Define a variável que armazenará n!
    let arrangements = 1;
    // Loop que calcula n! (n * (n-1) * (n-2)...)
    for (let i = 1; i <= n; i++) {
        arrangements *= i;
    }

    // Retorna o total de arranjos possíveis (n!)
    return arrangements;
}