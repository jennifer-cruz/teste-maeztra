function getMaxWorkYears(years) {
    // Define um objeto para contar quantas pessoas trabalharam em cada ano
    const workCounts = {};

    // Itera sobre cada intervalo de anos, incrementando a contagem para cada ano trabalhado
    years.forEach(([start, end]) => {
        for (let year = start; year <= end; year++) {
            workCounts[year] = (workCounts[year] || 0) + 1;
        }
    });

    // Define uma variável para armazenar o máximo número de pessoas trabalhando em um ano
    let maxWorkCount = 0;
    // Cria um array para armazenar os anos com o máximo número de funcionários
    const maxWorkYears = [];

    // Encontra o maior número de pessoas trabalhando em um único ano
    for (const year in workCounts) {
        if (workCounts[year] > maxWorkCount) {
            maxWorkCount = workCounts[year];
        }
    }

    // Econtra todos os anos que tiveram esse número máximo de funcionários
    for (const year in workCounts) {
        if (workCounts[year] === maxWorkCount) {
            maxWorkYears.push(year);
        }
    }

    // Retorna os anos com o maior número de pessoas trabalhando
    return maxWorkYears;
}