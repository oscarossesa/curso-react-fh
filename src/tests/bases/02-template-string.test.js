import '@testing-library/dom'
import { getSaludo } from '../../bases/02-template-string'

describe('Pruebas en el archivo 02-template-string.test.js', () => {
  
  test('getSaludo debe retornar Hola Oscar', () => {
  
    // 1. inicialización
    const nombre = 'Oscar'

    // 2. estimulo
    const saludo = getSaludo('Oscar')

    // 3. Observar el comportamiento
    expect(saludo).toBe('Hola ' + nombre)
  })

  test('getSaludo debe retornar Hola Gabriel si no hay argumento nombre', () => {
  
    const nombre = 'Gabriel'

    const saludo = getSaludo()

    // 3. Observar el comportamiento
    expect(saludo).toBe('Hola ' + nombre)
  })
})