import { exibirNaTela } from "../index.js";

let apiKey = 'de878cdb55eadce74e21424fe30f9ba9';

export const getLocation = async () => {

    const cidadePesquisada = document.getElementById('campo-de-pesquisa').value;
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(cidadePesquisada)}&format=json&limit=1`);
        const data = await response.json()
        const { lat, lon } = data[0]
        getPrevision( lat, lon)

    }catch(error){
        console.log('está dando erro no request da localização', error)
    }        
}

export const getPrevision = async (latitude,longitude) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        const data = await response.json()
    
        exibirNaTela(data)

    } catch (error) {
        console.log('está dando algum erro no prevision:', error)
    } finally {
       console.log('finalizado o processo')
    }
}
