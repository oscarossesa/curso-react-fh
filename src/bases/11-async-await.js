// const getImagenPromesa = () => {
//   const promesa = new Promise((resolve, reject) => {
//     resolve('http://www.cualquiera.cl');
//   });

//   return promesa;
// }

// getImagenPromesa().then(console.log);

// Vamos a simplificar el código anterior.

// const getImagenPromesa = () => new Promise(resolve => resolve('http://www.cualquiera.cl'));
// getImagenPromesa().then(console.log);

// Vamos a simplificar el código anterior usando async.

const getImagen = async() => {

  // Cuando trabajamos con peticiones async await tienen que ir dentro de un try/catch.

  try {
    const apiKey = 'wLdpjbX2u9soMZ5o5BOgZQ0onDEe8hfk';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();
    const { url } = data.images.original
    const img = document.createElement('img');
    img.src = url
    document.body.append(img);    
  } catch (error) {
    // manejo del error
    console.error(error);
  }
}

getImagen();