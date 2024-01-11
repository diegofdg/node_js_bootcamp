import { OpenStreetMapProvider } from 'leaflet-geosearch';

const lat = 20.666332695977;
const lng = -103.3921777456999;

const map = L.map('mapa').setView([lat, lng], 15);

document.addEventListener('DOMContentLoaded', () => {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // buscar la dirección
    const buscador = document.querySelector('#formbuscador');
    buscador.addEventListener('input', buscarDireccion);
});

function buscarDireccion(e) {
    if(e.target.value.length > 8) {
        // Utilizar el provider
        const provider = new OpenStreetMapProvider();
        provider.search({ query: e.target.value }).then(( resultado ) => {
            // agregar el pin
            console.log(resultado);
        });
    }
}