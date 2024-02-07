const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCHuGy5HAoFl0fHsSp_2gDdg&part=snippet%2Cid&order=date&maxResults=5';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3480cd9450msha0b6ec1aeecd3d2p1139bejsn56ee6fb49cf3',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

// Función para consumir la Api
async function fetchData(urlApi) {
    const response = await fetch(urlApi, options); //Se llama la información
    const data = await response.json(); //Se convierte los datos a .Json para poder iterar
    return data;
}

//Función anónima de ejecución
(async () => {
    try {
      const videos = await fetchData(API);
      let view = `
        ${videos.items.map(video => `
          <div class="group relative">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
              </h3>
            </div>
          </div>
        `).slice(0,4).join('')}
      `;
      content.innerHTML = view;
    } catch (error) {
        console.log(error);  
    }
})();