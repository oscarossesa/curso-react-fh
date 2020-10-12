import React, { useEffect, useState } from 'react'

const Message = () => {

  /*
    Este componente funciona colocando 123 en el input
    nombre, comenzará a mostrar las coordenadas del
    mouse, una vez modificado el 123, se desmonta el
    evento.
  */

  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const { x, y } = coords

  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y }
      setCoords(coords)
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <div>
      <h3>Eres genial!</h3>
      <p>
        x: { x } y: { y }
      </p>
    </div>
  )
}

export default Message
