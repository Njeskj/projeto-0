// Seleciona o elemento onde deseja exibir o ano atual
    var currentYearElement = document.getElementById("currentYear");

    // Obtém o ano atual
    var currentYear = new Date().getFullYear();

    // Define o ano atual no elemento selecionado
    currentYearElement.textContent = currentYear;