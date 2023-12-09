function loadContent(page) {
    // Usa el método pushState del History API para cambiar la URL sin recargar la página
    history.pushState({page: page}, null, page);

    // Carga dinámicamente el contenido
    $('#content').load(page + '.html');
}

// Maneja los eventos de cambio de estado para cargar el contenido apropiado
window.onpopstate = function(event) {
    if (event.state) {
        loadContent(event.state.page);
    } else {
        // Si no hay estado, cargamos el contenido inicial
        loadContent('index');
    }
};
