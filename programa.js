var map = L.map('map').setView([4.6169444, -74.19], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Datos de las tiendas de mascotas
const carniceriasBosa = [
    
    {
        
        nombre: 'Carnes la esperanza',
        nombre2: 'Latitud',
        latitud: 4.635302,
        nombre3: 'longitud',
        longitud: -74.18694,
        telefono: '3228556009',
        nombre4: 'Telefono: ' ,
        nombre5: 'Dirección: ',
        Dirección: 'calle 57 sur #87g bis',
        
    },
    {
       
        nombre: 'Carnes la norteña Bosa',
        nombre2: 'latitud',
        latitud: 4.626581,
        nombre3: 'longitud',
        longitud: -74.189986,
        telefono: '3103314016',
        nombre4: 'Telefono: ' ,
        nombre5: 'Dirección: ',
        Dirección: 'carrera 88c #88a-21'
    },
    {
        
        nombre: 'Carnes finas',
        nombre2: 'Latitud',
        latitud: 4.628894,
        nombre3: 'longitud',
        longitud: -74.190848 ,
        nombre4: 'Telefono: ' ,
        telefono: 3126542598,
        nombre5: 'Dirección: ',
        Dirección: 'calle 58asur #89-15',
        
    },
    {
        Imagen: 'dv.jpeg',
        nombre: 'Districarnes villanueva',
        nombre2: 'Latitud',
        latitud: 4.628589,
        nombre3: 'longitud',
        longitud: -74.18365,
        nombre4: 'Telefono: ' ,
        telefono: 326884590,
        nombre5: 'Dirección: ',
        Dirección: 'carrera 87d bis #54d sur',
        
    },
    {
        Imagen: 'sm.jpeg',
        nombre: 'Carnes San Martín',
        nombre2: 'Latitud: ',
        latitud:  4.629808,
        nombre3: 'longitud: ',
        longitud: -74.18864,
        nombre4: 'Telefono: ' ,
        telefono: 3158465014,
        nombre5: 'Dirección: ',
        Dirección: 'carrera 89 #56f bis sur',
        
    },
];


// Función para redirigir a otra página al hacer clic en el botón "Agregar"
function mostrarFormulario() {
    // Cambia 'URL_DE_LA_PAGINA' por la URL a la que quieres redirigir
    window.location.href = 'http://127.0.0.1:5000/nuevo';

}
// Iterar sobre las tiendas y agregar marcadores al mapa

carniceriasBosa.forEach(carnicerias => {
    const marker = L.marker([carnicerias.latitud, carnicerias.longitud]).addTo(map);

    // Configurar la información de la ventana emergente
    const popupContent = `<b>${carnicerias.nombre}</b><br>
                          <b>${carnicerias.nombre2}</b>
                          <br>${carnicerias.latitud}<br>
                          <b>${carnicerias.nombre3}</b>
                          <br>${carnicerias.longitud}<br>
                          <b>${carnicerias.nombre4}</b>
                          <br>${carnicerias.telefono}<br>
                          <b>${carnicerias.nombre5}</b>
                          <br>${carnicerias.Dirección}<br>
                          <br>${carnicerias.Imagen}<br><img src="dv.jpeg "style="width:100px"><br>`;
                          
    // Agregar la ventana emergente al marcador
    marker.bindPopup(popupContent);
});