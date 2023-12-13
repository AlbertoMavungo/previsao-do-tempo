const div = document.getElementById('exibicao')

export const exibicao = (data, lat, lon, ano, mes, dia, responseVisualCeu, temperaturaMaximaCelcius, temperaturaMinimaCelcius) => {
    try {
        div.innerHTML = `
            <h3 class="city-titulo">${data.city.name}</h3>
            <p class="data"><span>${dia}/${mes}/${ano}</span></p>
            <div class="temps data">
                <p>Min.: <span>${temperaturaMinimaCelcius}</span> °C</p>
                <p>Máx.: <span>${temperaturaMaximaCelcius}</span> °C</p>
            </div>    
            <p class="visual"><span>${responseVisualCeu}</span></p>
            <div class='lat-lon'>
                <p><span>Latitude: ${lat}</span></p>
                <p><span>longitude: ${lon}</span></p>
            </div>
        `
    } catch (error) {
        console.log('dando problema no exibir na tela', error)
    }
}