addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const url = new URL(request.url);
    const targetUrl = url.pathname.slice(1); // Extrai o link após a barra

    if (!targetUrl) {
        return new Response('URL is required', { status: 400 });
    }

    try {
        const response = await fetch(decodeURIComponent(targetUrl), {
            method: request.method,
            headers: {
                ...request.headers,
                'Origin': '', // Remove o cabeçalho de origem
            },
        });

        // Verifica se a resposta é bem-sucedida
        if (!response.ok) {
            return new Response('Error fetching the M3U8 file', { status: response.status });
        }

        // Retorna a resposta do M3U8
        return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: {
                ...response.headers,
                'Content-Type': 'application/x-mpegURL', // Define o tipo de conteúdo
                'Access-Control-Allow-Origin': '*', // Permite CORS
                // Adicione outros cabeçalhos conforme necessário
            },
        });
    } catch (error) {
        return new Response('Error fetching the M3U8 file', { status: 500 });
    }
}
