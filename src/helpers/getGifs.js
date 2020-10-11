export const getFetchGifts = async (category) => {
  const apiKey = 'wLdpjbX2u9soMZ5o5BOgZQ0onDEe8hfk';
  const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`
  const resp = await fetch(url)
  const { data } = await resp.json()

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })

  return gifs
}