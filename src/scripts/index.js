import { getLocation } from './services/prevision.js'
import { exibicao } from './exibicao.js';
const botao = document.getElementById('botao');

botao.addEventListener('click', async () => {
    getLocation()
})

export const exibirNaTela = async (data) => {

    const { temp_max, temp_min } = data.list[0].main

    const temperaturaMaximaCelcius = (temp_max - 273.15).toFixed(2);
    const temperaturaMinimaCelcius = (temp_min - 273.15).toFixed(2);
    const dataCurrently = data.list[0].dt_txt
    const { lat, lon } = data.city.coord
    const dataHora = new Date(dataCurrently);

    const dia = dataHora.getDate();
    const mes = dataHora.getMonth() + 1;
    const ano = dataHora.getFullYear();
    let climaDescription = data.list[0].weather[0].description
    const responseVisualCeu = await temporal(climaDescription)
    
    exibicao(data, lat, lon, ano, mes, dia,  responseVisualCeu, temperaturaMaximaCelcius, temperaturaMinimaCelcius )
}

const temporal = async (climaDescription) => {
    let visualCeu;
    switch (climaDescription) {
        case "clear sky":
            visualCeu = "Céu limpo: 'Tempo ensolarado'";
            break;

        case "few clouds":
            visualCeu = "Algumas nuvens: 'Parcialmente nublado'";
            break;

        case "scattered clouds":
            visualCeu = "Nuvens dispersas: 'Nuvens espalhadas no céu'";
            break;

        case "broken clouds":
            visualCeu = "Nuvens quebradas: 'Céu com nuvens quebradas'";
            break;

        case "overcast clouds":
            visualCeu = "Céu encoberto: 'Céu totalmente coberto de nuvens'";
            break;

        case "light rain":
            visualCeu = "Chuva fraca: 'Leve precipitação de chuva'";
            break;

        case "moderate rain":
            visualCeu = "Chuva moderada: 'Precipitação de chuva moderada'";
            break;

        case "heavy rain":
            visualCeu = "Chuva intensa: 'Precipitação de chuva intensa'";
            break;

        case "snow":
            visualCeu = "Neve: 'Está nevando'";
            break;

        case "mist":
            visualCeu = "Névoa: 'Condições de névoa'";
            break;

        default:
            visualCeu = "Condição desconhecida";
    }
    return visualCeu
}


