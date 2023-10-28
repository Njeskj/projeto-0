window.onscroll = function() {
    var logo = document.getElementById("logoImage");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        logo.style.width = "100px"; /* Tamanho reduzido da logo ao rolar */
    } else {
        logo.style.width = "200px"; /* Tamanho original da logo */
    }
};
