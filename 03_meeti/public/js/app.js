import { OpenStreetMapProvider } from 'leaflet-geosearch';

const lat = 20.666332695977;
const lng = -103.3921777456999;

const map = L.map('mapa').setView([lat, lng], 15);
let markers = new L.FeatureGroup().addTo(map);
let marker;

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
        // si existe un pin anterior limpiarlo
        markers.clearLayers();

        // Utilizar el provider
        const provider = new OpenStreetMapProvider();
        provider.search({ query: e.target.value }).then(( resultado ) => {
            // mostrar el mapa
            map.setView(resultado[0].bounds[0], 15);

            // agregar el pin
            marker = new L.marker(resultado[0].bounds[0], {
                draggable : true,
                autoPan: true
            })
            .addTo(map)
            .bindPopup(resultado[0].label)
            .openPopup();

            // asignar al contenedor markers
            markers.addLayer(marker);

            // detectar movimiento del marker
            marker.on('moveend', function(e) {
                marker = e.target;
                const posicion = marker.getLatLng();
                map.panTo(new L.LatLng(posicion.lat, posicion.lng) );                
            });
        });
    }
}