const apiKey = 'wLdpjbX2u9soMZ5o5BOgZQ0onDEe8hfk';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then(resp => {
//   resp.json().then(data => {
//     console.log(data)
//   })
// })
// .catch(console.warn);

// Se puede mejorar el código de las promesas:

peticion
  .then(resp => resp.json())
  .then(({ data })=> {
    const { url } = data.images.original

    const img = document.createElement('img');
    img.src = url

    document.body.append(img);
  })
  .catch(console.warn);