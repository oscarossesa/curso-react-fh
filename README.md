# Curso React: De cero a experto

# Sección 4: Primeros pasos en React

¿Qué veremos en esta sección?

- [x] Nuestra primera aplicación - Hola Mundo
- [x] Exposiciones sobre los componentes
- [x] Creación de componentes (Functional Components)
- [x] Propiedades - Props
- [x] Impresiones en el HTML
- [x] PropTypes
- [x] DefaultProps
- [x] Introducción general a los Hooks
- [x] useState

Es una sección importante, especialmente para todos los que están 
empezando de cero en React, ya que dará las bases de cómo segmentar la 
lógica de nuestra aplicación en pequeñas piezas más fáciles de mantener.

## ¿Qué es un componente?

Es una pequeña pieza de código encapsulada re-utilizable que puede tener estado o no.

# Sección 5: Pruebas unitarias y de integración - Probando las secciones anteriores

- [x] ¿Qué veremos en esta sección?
- [x] Introducción a las pruebas
- [x] AAA
- [x] Arrange - Arreglar
- [x] Act - Actuar
- [x] Assert - Afirmar
- [x] Primeras pruebas
- [x] Jest
- [x] Expect
- [x] toBe
- [x] Enzyme
- [x] Comandos útiles en la terminal para pruebas
- [x] Revisar elementos renderizados en el componente
- [x] Simular eventos

Esta sección de pruebas es sumamente importante porque nos dará la base 
de las pruebas que estaremos haciendo durante el curso, las pruebas irán 
creciendo en complejidad, por lo que les recomiendo que nos aseguremos 
de comprender bien todos estos conceptos para que nos sea más fácil las 
siguientes secciones de pruebas.

# Sección 6: GifExpertApp - Aplicación

¿Qué veremos en esta sección?

- [x] Custom Hooks
- [x] Fetch hacia un API
- [x] Comunicación entre componentes
- [x] Clases de CSS
- [x] Animaciones: https://animate.style/
- [x] Enviar métodos como argumentos
- [x] Crear listados
- [x] keys
- [x] Giphy

Esta es una aplicación pequeña pero muy ilustrativa que explica cómo 
utilizar React + customHooks para poder resolver necesidades en 
específico que podremos re-utilizar después.

# Sección 7: Sección 7:Generando el build de producción y despliegues en Github Pages

¿Qué veremos en esta sección?

- [x] Aprender cómo realizar backups a repositorios de Git
- [x] Subir nuestro repositorio a GitHub
- [x] Uso de Github Pages
- [x] Desplegar nuestra aplicación de React
- [x] Generar build de producción de nuestra aplicación

Aunque es una sección pequeña, les puede servir para desplegar infinidad 
de proyectos de React de forma gratuita, sin contar que tendrán respaldos 
de sus proyectos por si llegan a perder su trabajo que tenían localmente 
en su computadora.

# Sección 9:  Profundizando Hooks - Generales

¿Qué veremos en esta sección?

- [x] Profundizar en el tema de los Hooks
- [x] Crear otros customHooks
- [x] useState
- [x] useCounter - Personalizado
- [x] useEffect y sus precauciones
- [x] useRef
- [x] useFetch - Personalizado + optimizaciones
- [x] useLayoutEffect
- [x] Memo
- [x] useMemo
- [x] useCallback

Estos son los Hooks relativamente simples, aún hay mas que explicaremos 
más adelante, pero en esta sección nos enfocaremos en estos trabajos y 
para qué nos pueden servir.

Adicionalmente estaremos dejando las bases para lo que será una sección 
de pruebas sumamente interesante después.

## useRef

Error:

```log
index.js:1 Warning: Can't perform a React state update on an unmounted 
component. This is a no-op, but it indicates a memory leak in your 
application. To fix, cancel all subscriptions and asynchronous tasks
in a useEffect cleanup function.
    in MultipleCustomHooks (at RealExampleRef.js:11)
```

## useLayoutEffect

https://es.reactjs.org/docs/hooks-reference.html#uselayouteffect

# Sección 10:  Profundizando Hooks - useReducer

¿Qué veremos en esta sección?

- [x] useReducer
- [x] Reducers
- [x] Teoría de un reducer
- [x] Aplicación de TODOs
- [x] CRUD local

Esta es una sección dedicada a comprender el concepto de un Reducer, 
el cual es sumamente importante para poder entrar a Redux o bien usar 
el contextAPI fácilmente.

## ¿Qué es un Reducer?

1. Es una función común y corriente
2. Debe ser una función pura
3. Debe retornar un nuevo estado
4. Usualmente sólo recibe dos argumentos
   4.1 El valor inicial (initialState) y la acción a ejecutar

## useReducer

https://es.reactjs.org/docs/hooks-reference.html#usereducer

# Sección 11: Profundizando Hooks - useContext

¿Qué veremos en esta sección?

- [x] Context
- [x] Provider
- [x] useContext
- [x] React Router
- [x] Links y NavLinks
- [x] CreateContext
- [x] SPA ( Single Page Application )

El objetivo de la sección es principalmente aprender sobre el Context, 
el Router es un valor agregado que explotaremos mucho más en próximas 
secciones, pero al usar un Router, podemos explicar claramente el 
problema y necesidad del context.

# Sección 12: Pruebas unitarias y de integración - Hooks

¿Qué veremos en esta sección?

- [x] Pruebas sobre Hooks y CustomHooks
- [x] Ese es el tema principal, demostrar cómo podemos evaluar cada unos de 
- [x] los hooks aplicados anteriormente con sus casos reales de uso.

Hay varios extras, como la prueba de un Reducer, que realmente no es 
nada complicado, también quiero aclarar qué nos toca evaluar a 
nosotros y qué no es responsabilidad nuestra.

# Sección 13: Bonus: Repositorio de Custom Hooks

¿Qué veremos en esta sección?

- [x] Subir código a nuestro repositorio
- [x] Tener un listado de customHooks y código que podemos reutilizar
- [x] Una idea para mantener tu repositorio ordenado con ejemplos

No es una sección obligatoria, pero puede ayudarles a tener su código 
ordenado y fácil de utilizar en proyectos futuros.

# Sección 14: HeroesApp - Single Page Application (SPA)

¿Qué veremos en esta sección?

- [x] SPA ( Single Page Application ) a profundidad
- [x] Diferentes temas en la misma aplicación aplicados a diferentes rutas
- [x] Multiples Routers
- [x] Push y Replace en el History
- [x] Leer argumentos por URL
- [x] QueryParams
- [x] Aplicar filtros utilizando QueryStrings

En esta sección aún no haremos protección de rutas, pero dejaremos el 
estilo de esos componentes listos para la siguiente sección. Aquí quiero 
enfocarme en la funcionalidad de la aplicación suponiendo que estamos 
autenticados.

# Sección 15: Protección de rutas

¿Qué veremos en esta sección?

- [x] Rutas públicas
- [x] Rutas privadas
- [x] Login y logout - Sin backend aún
- [x] Recordar cuál fue la última ruta visitada para mejorar la experiencia de usuario.
- [x] Context
- [x] Reducer

Esta es una sección pequeña pero importante para trabajar las bases de la 
autenticación y protección de nuestra aplicación.

# Sección 17: JournalApp - SASS - Estructura y Diseño

¿Qué veremos en esta sección?

- [x] SASS
- [x] Diseño completo de la aplicación de forma manual
- [x] Uso de funciones de SASS
- [x] Configuración y uso de parciales
- [x] Transiciones en SASS

Esta sección está totalmente enfocada en aprender a utilizar SASS para 
crear nuestro estilo de la aplicación, la cual haremos todo nosotros 
de absoluto cero.

# Sección 18: Redux - ¿Qué es y conceptos?

¿Qué veremos en esta sección?

- [x] Redux
- [x] Store
- [x] Middlewares
- [x] Dispatch
- [x] Actions
- [x] State
- [x] Acciones asíncronas

Es una sección sumamente pequeña, pero quiero darles una explicación teórica 
sobre Redux antes de entrar en él, pero la ventaja es que para estas alturas, 
ya deberíamos de saber sobre el Reducer, el cual es el corazón del Redux, por 
consecuencia aprender Redux en este instante debería ser más fácil!

# Sección 19: Introducción a Redux y autenticación en Firebase

¿Qué veremos en esta sección?

- [x] Redux aplicado en nuestro proyecto
- [x] Firebase
- [x] FireStore
- [x] Redux Devtools
- [x] Thunk
- [x] Formularios
- [x] Google SingIn
- [x] Acciones Asíncronas
- [x] Mantener el estado de la autenticación

En esta sección configuraremos Redux en nuestro proyecto por primera vez, 
aplicado al inicio en la parte de la autenticación y mantener el estado de 
la misma a lo largo de toda la aplicación.

# Utilidades

- [x] Breaking Bad API: https://breakingbadapi.com/
- [x] Animaciones: https://animate.style/
- [x] Sass: https://sass-lang.com/documentation
- [x] font-awesome: https://cdnjs.com/libraries/font-awesome
- [x] Redux: https://es.redux.js.org/
- [x] React Redux: https://react-redux.js.org/ install: npm install react-redux redux
- [x] React Redux Devtools: https://github.com/zalmoxisus/redux-devtools-extension#usage
- [x] Firebase: https://firebase.google.com/
- [x] Tutorial Firebase: https://www.youtube.com/playlist?list=PLCKuOXG0bPi29EkcAuVCln9ISbExcQk66
- [x] Redux Thunk: https://www.npmjs.com/package/redux-thunk


