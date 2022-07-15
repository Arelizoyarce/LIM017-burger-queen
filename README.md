<!-- # Burger Queen

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

***

## 1. Preámbulo

[React](https://es.reactjs.org/) y [Angular](https://angular.io/)
son algunos de los _frameworks_ y _librerías_ de JavaScript más utilizados por
lxs desarrolladorxs alrededor del mundo, y hay una razón para eso.
En el contexto del navegador, [_mantener la interfaz sincronizada con el estado
es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir un _framework_ o _librería_ para nuestra interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web. Esto nos permite concentrarnos
mejor (dedicar más tiempo) en las caractrísticas _específicas_ de
nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de
código para reusarlo (lo cuál es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, etc...

Como desarrolladora Front-end, estos kits de desarrollo pueden resultarte
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajes.

## 2. Resumen del proyecto

Un pequeño restaurante de hamburguesas, que está creciendo, necesita una
interfaz en la que puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente (a través de un
_backend_ del que nos darán detalles más adelante).

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Esta vez tenemos un proyecto 100% por encargo. Si bien siempre puedes (y debes)
hacer sugerencias de mejoras y/o cambios, muchas veces trabajarás en proyectos
en los que primero hay que asegurarse de cumplir con lo requerido.

Esta es la información que tenemos del cliente:

> Somos **Burguer Queen**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestros clientes.
>
> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      |Precio $|
> |---------------------------|------|
> | Café americano            |    5 |
> | Café con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo de frutas natural              |    7 |
>
> Y otro menú para el resto del día:
>
> | Ítem                      |Precio|
> |---------------------------|------|
> |**Hamburguesas**           |   **$**   |
> |Hamburguesa simple         |    10|
> |Hamburguesa doble          |    15|
> |**Acompañamientos**        |   **$**   |
> |Papas fritas               |     5|
> |Aros de cebolla            |     5|
> |**Para tomar**             |   **$**   |
> |Agua 500ml                 |     5|
> |Agua 750ml                 |     7|
> |Bebida/gaseosa 500ml       |     7|
> |Bebida/gaseosa 750ml       |     10|
>
> **Importante:** Los clientes pueden escoger entre hamburguesas de res,
> de pollo, o vegetariana. Además, por $ 1 adicional, pueden agregarle queso
> o huevo.
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien
>el su pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario debe poder ir eligiendo qué _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el
costo total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

El objetivo principal de este proyecto es aprender a construir una _interfaz web_
usando el _framework_ elegido (React o Angular). Todos estos frameworks de
Front-end atacan el mismo problema: **cómo mantener la interfaz y el estado sincronizados**.
Así que esta experiencia espera familiarizarte con el concepto de _estado de pantalla_,
y cómo cada cambio sobre el estado se va a ir reflejando en la interfaz (por ejemplo,
cada vez que agregamos un _producto_ a un _pedido_, la interfaz debe actualizar
la lista del pedido y el total).

## 3. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/02-html5/02-semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/01-css/01-intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [ ] **Uso de flexbox en CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#es)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

- [ ] **Uso de CSS Grid Layout**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Grid - CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
  * [Grids - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
</p></details>

- [ ] **Uso de media queries**

  <details><summary>Links</summary><p>

  * [CSS media queries - MDN](https://developer.mozilla.org/es/docs/CSS/Media_queries)
</p></details>

### JavaScript

- [ ] **Arrays (arreglos)**

  <details><summary>Links</summary><p>

  * [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
  * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [ ] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects)
</p></details>

- [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [ ] **Pruebas asíncronas**

  <details><summary>Links</summary><p>

  * [Tests de código asincrónico con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/asynchronous)
</p></details>

- [ ] **Uso de mocks y espías**

  <details><summary>Links</summary><p>

  * [Manual Mocks con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/manual-mocks)
</p></details>

- [ ] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

- [ ] **Callbacks**

  <details><summary>Links</summary><p>

  * [Función Callback - MDN](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
</p></details>

- [ ] **Promesas**

  <details><summary>Links</summary><p>

  * [Promise - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  * [How to Write a JavaScript Promise - freecodecamp (en inglés)](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)
</p></details>

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

- [ ] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### user-centricity

- [ ] **Diseñar un producto o servicio poniendo a la usuaria en el centro**

### product-design

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] **Seguir los principios básicos de diseño visual**

### research

- [ ] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

  <details><summary>Links</summary><p>

  * [Intro a testeos usabilidad](https://coda.io/@bootcamp-laboratoria/contenido-ux/test-de-usabilidad-15)
  * [Pruebas con Usuarios 1 — ¿Qué, cuándo y para qué testeamos?](https://eugeniacasabona.medium.com/pruebas-con-usuarios-1-qu%C3%A9-cu%C3%A1ndo-y-para-qu%C3%A9-testeamos-7c3a89b4b5e7)
</p></details>

### Firebase

- [ ] **Firebase Auth**

  <details><summary>Links</summary><p>

  * [Primeros pasos con Firebase Authentication en sitios web - Documentación oficial](https://firebase.google.com/docs/auth/web/start?hl=es)
  * [Administra usuarios en Firebase (onAuthStateChanged)](https://firebase.google.com/docs/auth/web/manage-users?hl=es#get_the_currently_signed-in_user)
</p></details>

- [ ] **Firestore**

  <details><summary>Links</summary><p>

  * [Firestore - Documentación oficial](https://firebase.google.com/docs/firestore?hl=es)
  * [Reglas de seguridad de Firestore - Documentación oficial](https://firebase.google.com/docs/rules?hl=es)
  * [Obtén actualizaciones en tiempo real con Cloud Firestore - Documentación oficial](https://firebase.google.com/docs/firestore/query-data/listen?hl=es)
</p></details>

### Angular

- [ ] **Components & templates**

  <details><summary>Links</summary><p>

  * [Angular Components Overview - Documentación oficial (en inglés)](https://angular.io/guide/component-overview)
  * [Introduction to components and templates - Documentación oficial (en inglés)](https://angular.io/guide/architecture-components#introduction-to-components)
</p></details>

- [ ] **Directivas estructurales (ngIf / ngFor)**

  <details><summary>Links</summary><p>

  * [Writing structural directives - Documentación oficial (en inglés)](https://angular.io/guide/structural-directives)
</p></details>

- [ ] **@Input | @Ouput**

  <details><summary>Links</summary><p>

  * [Component interaction - Documentación oficial (en inglés)](https://angular.io/guide/component-interaction#component-interaction)
</p></details>

- [ ] **Creación y uso de servicios**

  <details><summary>Links</summary><p>

  * [Providing services - Documentación oficial (en inglés)](https://angular.io/guide/architecture-services#providing-services)
</p></details>

- [ ] **Manejo de rutas**

  <details><summary>Links</summary><p>

  * [In-app navigation: routing to views - Documentación oficial (en inglés)](https://angular.io/guide/router)
</p></details>

- [ ] **Creación y uso Observables.**

  <details><summary>Links</summary><p>

  * [Observables in Angular - Documentación oficial (en inglés)](https://angular.io/guide/observables-in-angular)
</p></details>

- [ ] **Uso de HttpClient**

  <details><summary>Links</summary><p>

  * [Communicating with backend services using HTTP - Documentación oficial (en inglés)](https://angular.io/guide/http)
</p></details>

- [ ] **Estilos de componentes (ngStyle / ngClass)**

  <details><summary>Links</summary><p>

  * [Template syntax - Documentación oficial (en inglés)](https://angular.io/guide/template-syntax#built-in-directives)
</p></details>

### React

- [ ] **JSX**

  <details><summary>Links</summary><p>

  * [Presentando JSX - Documentación oficial](https://es.reactjs.org/docs/introducing-jsx.html)
</p></details>

- [ ] **Componentes y propiedades (props)**

  <details><summary>Links</summary><p>

  * [Componentes y propiedades - Documentación oficial](https://es.reactjs.org/docs/components-and-props.html)
</p></details>

- [ ] **Manejo de eventos**

  <details><summary>Links</summary><p>

  * [Manejando eventos - Documentación oficial](https://es.reactjs.org/docs/handling-events.html)
</p></details>

- [ ] **Listas y keys**

  <details><summary>Links</summary><p>

  * [Listas y keys - Documentación oficial](https://es.reactjs.org/docs/lists-and-keys.html)
</p></details>

- [ ] **Renderizado condicional**

  <details><summary>Links</summary><p>

  * [Renderizado condicional - Documentación oficial](https://es.reactjs.org/docs/conditional-rendering.html)
</p></details>

- [ ] **Elevación de estado**

  <details><summary>Links</summary><p>

  * [Levantando el estado - Documentación oficial](https://es.reactjs.org/docs/lifting-state-up.html)
</p></details>

- [ ] **Hooks**

  <details><summary>Links</summary><p>

  * [Presentando Hooks - Documentación oficial](https://es.reactjs.org/docs/hooks-intro.html)
</p></details>

- [ ] **CSS modules**

  <details><summary>Links</summary><p>

  * [Adding a CSS Modules Stylesheet - Documentación de Create React App (en inglés)](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)
</p></details>

- [ ] **React Router**

  <details><summary>Links</summary><p>

  * [Quick Start - Documentación oficial (en inglés)](https://reactrouter.com/web/guides/quick-start)
</p></details>

## 4. Consideraciones generales

Este proyecto se puede "resolver" de parejas.

Trabaja en una historia hasta terminarla antes de pasar a la siguiente. Trabaja
hasta la historia que puedas en el tiempo especificado.

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6+), HTML y CSS y empaquetada de manera automatizada.
En este proyecto Sí está permitido usar librerías o frameworks
(debes elegir entre [React](https://es.reactjs.org/) o
[Angular](https://angular.io/)).

La aplicación debe ser un _Single Page App_. Los pedidos los tomaremos desde una
_tablet_, pero **no queremos una app nativa**, sino una web app que sea
**responsive** y pueda funcionar **offline**.

Necesitamos pensar bien en el aspecto UX de quienes van a tomar los pedidos,
 el tamaño y aspecto de los botones, la visibilidad del estado actual del
 pedido, etc.

La aplicación desplegada debe tener 80% o más el las puntuaciones de
Performance, Progressive Web App, Accessibility y Best Practices de Lighthouse.

La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
`test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
empaquetar y desplegar la aplicación respectivamente.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
_lines_ y _branches_.

Este proyecto incluye un _boilerplate_ con el código necesario para arrancar con
la parte de backend ya resuelta. El _boilerplate_ incluye los siguientes
archivos/carpetas con la configuración de Fierbase (hosting y firestore):

```text
.
├── .editorconfig
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── README.md
└── README.pt-BR.md
```

Por otro lado, la parte de la interfaz no está incluida, por lo que, deberás
definir la estructura de carpetas y archivos que consideres necesaria. Puedes
guiarte de las convenciones del _framework_ elegido. Por ende, los _tests_ y el
_setup_ necesario para ejecutarlos, serán hechos por ti.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio.

## 5. Criterios de aceptación mínimos del proyecto

### Definición del producto

El [_Product Owner_](https://youtu.be/r2hU7MVIzxs) nos
presenta este _backlog_ que es el resultado de su trabajo con el cliente hasta
hoy.

***

#### [Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente

Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario)

* Anotar nombre de cliente.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 2] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un cliente.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 3] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a los clientes que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

***

## 6. Pistas, tips y lecturas complementarias

### Primeros pasos

NOTA: Si estás haciendo el proyecto en equipo, estos pasos solo los necesita
hacer una persona por equipo. El resto de las integrantes del equipo después
podrán hacer sus propios _forks_ a partir del _fork_ principal de su equipo.

1. Haz un _fork_ de este repo (en GitHub).

2. Clona tu _fork_ en tu computadora:

   ```sh
   git clone git@github.com:<tu-usuario-de-github>/<cohortid>-burger-queen.git
   cd <cohortid>-burger-queen
   ```

3. Crea una rama a partir de `main` para empezar a trabajar. Por ejemplo:

   ```sh
   git checkout -b develop
   ```

4. Crea un proyecto en [Firebase](https://firebase.google.com/)

5. Habilita Firestore (_comenzar en modo bloqueado_) en sección de "Bases de
   Datos" de [Firebase console](https://console.firebase.google.com/).

6. Instala la [utilidad de línea de comando de Firebase](https://firebase.google.com/docs/cli?hl=es).
   Esta utilidad nos permitirá usar el comando `firebase` desde nuestra
   terminal. Ten en cuenta que el comando de instalación incluye la opción `-g`,
   lo cual significa que estamos instalando `firebase-tools` de forma _global_,
   con lo cual quedará disponible desde cualquier _lugar_ (es independiente de
   un proyecto en particular, no queda instalado en la carpeta `node_modules` de
   tu proyecto, si no globalmente, por lo tanto no importa desde qué carpeta
   ejecutes el siguiente comando de instalación).

   ```sh
   npm i -g firebase-tools
   ```

7. Iniciamos sesión con Firebase y agregamos entorno que usaremos para
   desplegar:

   ```sh
   firebase login
   firebase use --add

   # Una vez agregado el entorno (proyecto de firebase) puedes agregar otros y
   # listar los entornos configurados para esta carpeta con este comando
   firebase use
   ```

8. Llegado a este punto, ya puedes comenzar con la problemática del proyecto en
   sí. Te recomendamos como siguiente paso convertir el menú descrito por el
   cliente en una estructura que podamos poner en un archivo JSON para después
   _pintar_ en la pantalla.

### Despliegue

En esta sección revisamos algunas opciones para desplegar
el backend y frontend de tu app.
Si usas firebase con reglas de firestore, índices, cloud functions,
necesitas desplegar el backend con firebase-cli.

Puedes desplegar el frontend con Firebase hosting.
Hay otras opciones como Github Pages (que ya estan familiarizadas),
Netlify, y Heroku.

Netlify y Heroku son servicios para desplegar tu web app - backend y
frontend - y no son limitados a usar solamente con Firebase.
Por ejemplo, puedes desplegar un app MySQL/Express/React.

#### Build para production

Cada framework incluye su propio _pipeline_ de _construcción_ o _build_. Con
esto nos referimos a que para _construir_ nuestro proyecto y producir un
_artefacto_ que podamos desplegar vamos a usar un script que normalmente
configuramos como una tarea de `npm-scripts` con el nombre `build` e invocamos
así:

```sh
npm run build
```

Una vez hayamos _construido_ la aplicación, tendremos un directorio que contiene
la app lista para desplegar. Dependiendo del framework que uses y tu
configuración en particular, esa carpeta puede tener un nombre distinto;
normalmente `build` o `dist`.

##### Firebase

La herramienta de línea de comando de Firebase (`firebase-tools`) incluye un
comando que nos permite desplegar nuestro proyecto a Firebase:
`firebase deploy`. A la hora de ejecutar este comando, se usará la configuración
que tenemos en el archivo `firebase.json`. En ese archivo asegúrate de que la
_propiedad_ `public` del _objeto_ `hosting` tenga la ruta correcta a la carpeta
donde hemos _construido_ la aplicación. En este ejemplo es implemente `build`,
asumiendo que la carpeta `build` es una subcarpeta del directorio donde se
encuentra nuestro `firebase.json`.

```json
  ...
  "hosting": {
    "public": "build",
    ...
  },
  ...
```

Finalmente, estás lista para desplegar tu proyecto a Firebase :rocket::fire:!

```sh
firebase deploy
```

##### Netlify

[Netlify](http://netlify.com) es un servicio de hosting
para sitios web estáticos.
Para usarlo primero necesitas crear una cuenta en
[Netlify](http://netlify.com) y después puedes conectar tu repo.

* [Netlify y React](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/)
* [Netlify y Angular](https://www.netlify.com/blog/2019/09/23/first-steps-using-netlify-angular/)

Para desplegar tu aplicación en netlify seleccionas acceder con GitHub
y luego concedes los permisos para que Netlify acceda a tus repositorios y
generar la clave para poder realizar el despliegue continuo.

Una vez terminado el registro bastará con compilar tu aplicación para
producción y arrastrar tu carpeta (dist, build) a la parte de sites
dentro de netlify.

![netlify-sites](https://user-images.githubusercontent.com/21324865/128918519-04336a77-9c34-4266-a711-9975917e8f87.png)

Al terminar de cargar los archivos podras ver el nombre de la aplicación dentro
de Netlify junto al link del app ya hosteada.

###### netlify cli

Hay un `netlify-cli` si prefieres hacer el despliegue por linea de comando.
Para usarlo, hay que instalar el cli en tu proyecto y authorizarlo.

Puedes checar la [documentación](https://docs.netlify.com/cli/get-started/)
o seguir con los siguentes comandos:

```sh
npm install netlify-cli --save-dev
netlify login
```

Esto va a crear un `config.json` en tu proyecto.

Puedes usar `netlify` con continuous deployment (despliegue continuo) y así
cada vez que agregues un commit se va a compilar y desplegar tu app con
los nuevos cambios. Alternativamente, también puedes hacer depliegue manual.

Para continuous deployment corre `netlify init`  y sigue las instrucciones
para conectar un repo de tu github.
Puedes configurar deploy settings (comando para el build, directorio de la
carpeta y la rama para producción) en "deploy settings" de tu site en netlify.

Para desplegar manualmente puedes usar `netlify deploy`. También por defecto
busca un directorio `build` en tu proyecto para desplegarlo. Si tu proyecto
tiene un directorio de otro nombre puedes usar la opción `--dir`.

```sh
netlify deploy --dir=dist`
```

#### Github pages

* [Github pages y React](https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom)
* [Github pages y Angular](https://angular.io/guide/deployment#deploy-to-github-pages)

#### Heroku

### :information_source: Nota para estudiantes que elijan React y `create-react-app`

Si tratas de usar [`create-react-app`](https://reactjs.org/docs/create-a-new-react-app.html)
en el directorio del proyecto recibirás un error diciendo que hay archivos que
podrían presentar un conflicto. Para evitar este problema puedes crear una nueva
app usando `create-react-app` y de ahí _mezclarla_ con la carpeta del proyecto:

```sh
# Si estabas en la carpeta del proyecto, salimos a la carpeta de más arriba
cd ..

# Creamos una nueva aplicación con `create-react-app` en la carpeta
# `burger-queen-tmp`
npx create-react-app burger-queen-tmp

# Copiamos el _boilerplate_ del proyecto _encima_ de la aplicación creada con
# `create-react-app`
cp -r <cohort-id>-burger-queen/* burger-queen-tmp/

# Copiamos el contenido de la aplicación creada con `create-react-app` de vuelta
# al repo del proyecto (teniendo en cuenta el archivo _oculto_ `.gitignore`).
cp -r burger-queen-tmp/.gitignore burger-queen-tmp/* <cohort-id>-burger-queen/

# Ya podemos borrar la instalación _temporal_ y quedarnos solo con el repo del
# proyecto, con el que partimos.
rm -rf burger-queen-tmp

# Volvemos a entrar en el directorio del proyecto y ya deberíamos estar listas
# para comenzar.
cd <cohort-id>-burger-queen

# Para confirmar que todo fue bien arranca la aplicación con el siguinte comando
# y verifica que la interfaz se abre en el navegador.
yarn start
```

### Otros recursos

#### Frameworks / libraries

* [React](https://es.reactjs.org/)
* [Angular](https://angular.io/)

#### Herramientas

* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [Babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)

#### PWA

* [Tu primera Progressive Web App - Google developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
* [Progressive Web Apps - codigofacilito.com](https://codigofacilito.com/articulos/progressive-apps)
* [offlinefirst.org](http://offlinefirst.org/)
* [Usando Service Workers - MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
* [Cómo habilitar datos sin conexión - Firebase Docs](https://firebase.google.com/docs/firestore/manage-data/enable-offline?hl=es-419)

#### Serverless

* [Qué es eso de serverless? - @PamRucinque en Medium](https://medium.com/@PamRucinque/qu%C3%A9-es-eso-de-serverless-f4f6c8949b87)
* [Qué es Serverless? | FooBar - YouTube](https://www.youtube.com/watch?v=_SYHUpLi-2U)
* [Firebase](https://firebase.google.com/)
* [Serverless Architectures - Martin Fowler](https://www.martinfowler.com/articles/serverless.html) -->

# LA BURGUESA 🍔

## Índice

* [1. Sobre el proyecto](#1-sobre-el-proyecto)
* [2. Historias de Usuario](#2-historias-de-usuario)
* [3. Prototipos](#3-prototipos)
* [4. Tecnologías y Herramientas](#4-tecnologías-y-herramientas)
* [5. Objetivos de Aprendizaje](#5-objetivos-de-aprendizaje)
* [6. Despliegue](#6-despliegue)
* [7. Autoras](#7-autoras)

## 1. Sobre el proyecto
[La Burguesa](https://boisterous-squirrel-2b3a14.netlify.app/log-in) es una interfaz diseñada para la gestión de pedidos de un restaurante, con vistas orientadas para los siguientes roles: mesero y chef. Inicia con una vista para el ingreso a la plataforma, la cual se redirecciona a una segunda vista según el respectivo rol ingresado. En el caso de nuestra plataforma se usaron los siguientes correos:

- mesera@laburguesa.com
- cocinera@laburguesa.com

Ambos con la contraseña: laboratoria

Para el caso del mesero, una vez que se encuentra en su vista correspondiente; puede ir eligiendo qué productos agregar y/o eliminar, asimismo la interfaz muestra el resumen del pedido con el costo total de la orden y de cada producto según la cantidad. Y para el caso del cocinero, una vez que se encuentra en su vista correspondiente; puede visualizar todas las órdenes que el mesero le ha proporcionado con el fin de atenderlas.

La aplicación es una Single Page Application, pudiéndose usar como una PWA con el objetivo que se similar a una aplicación nativa.

## 2. Historias de Usuario

#### HU 01: Yo **como** trabajadorx **quiero** acceder a la interfaz del usuario con mi email y password **para** que me redirija a la página que me corresponda segun mi cargo.

>Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

* Validar email y contraseña y redirigir a la página de tomar orden o ver pedido según el cargo mesero o chef.
* Que se vea y funcione bien en una Tablet.

>Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido code review de al menos una compañera.
* Testear funciones y/ componentes.

***

#### HU 02: Yo **como** meserx **quiero** tomar el pedido de un cliente **para** no depender de mi mala memoria, **para** saber cuánto cobrar, y enviarlo a la cocina para evitar errores y que se puedan ir preparando en orden.

>Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

* Mostrar la data de productos en la pantalla de forma ordenada.
* Agregar productos al pedido.
* Agregar, disminuir, eliminar producto (CRUD) y observar resumen del pedido y monto a pagar.
* Enviar pedido a cocina (guardar en alguna base de datos) y actualizar la pestaña de ver pedidos todos, pendientes y listos del mesero.
* Que el mesero pueda acceder a la pestaña de ver pedidos, navegar entre las opciones de todos, pendientes, listos y eliminar los perdidos (solo pendientes).
* Que se vea y funcione bien en una Tablet.

>Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido code review de al menos una compañera.
* Testar componentes y funciones realizadas.

***

#### HU 03: Yo **como** jefx de cocina **quiero** ver los pedidos de los clientes en orden **para** marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs que un pedido está listo para servirlo a un cliente.

>Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

* Pintar los pedidos en la vista del cocinero
* El cocinero debe ver el timer desde que se envía el pedido hasta que se actualiza a listo.
* La navBar del chef debe filtrar y jalar actualizaciones de pedidos según su status.
* Los pedidos de la sección done tienen que tener el color verde.
* Que el botón de 'actulizar pedido' cambie el status del pedido y lo envie a la sección de 'done'.
* Que se vea y funcione bien en una Tablet.

>Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido code review de al menos una compañera.
* Testar componentes y funciones realizadas.

***

## 3. Prototipos
Se trabajó con un editor de gráficos vectorial y una herramienta de generación de prototipos ([Figma](http://www.figma.com/?fuid= "Figma")) para tener un diseño más profesional y reflejar lo que la interfaz debería mostrar.

#### **Tablet Vista Horizontal**
  ##### **Mesero**
![loginMeseroHorizontal](https://user-images.githubusercontent.com/98605059/178320720-15a49a2d-4434-48eb-8c88-d4db7d14f885.png)
![meseroOrdenesHorizontal](https://user-images.githubusercontent.com/98605059/178320863-cbfb522f-a9c3-4a2a-818a-97396f8bfccc.png)
  
  ##### **Cocinero**
![cocineroHorizontal](https://user-images.githubusercontent.com/98605059/178320929-9dedc5a5-9a6b-4b4e-893e-5f50ea13f6ef.png)

#### **Tablet Vista Vertical**
  ##### **Mesero**
![loginMeseroVertical](https://user-images.githubusercontent.com/98605059/178321033-17dcf5ac-44cf-4acb-bb74-61ced0ab8460.png)  
![meseroOrdenesVertical](https://user-images.githubusercontent.com/98605059/178321104-c881aa28-cf95-4d3f-bf92-4f34e08261c5.png)
  
  ##### **Cocinero**
![cocineroVertical](https://user-images.githubusercontent.com/98605059/178320599-9298cbd5-e7ac-498a-b14e-9f7864684f88.png)

## 4. Tecnologías y Herramientas
![GitHub](https://img.shields.io/badge/-GitHub-181717?style=plastic&logo=github)
![Angular](https://img.shields.io/badge/-Angular-8B0000?style=plastic&logo=angular)
![Typescript](https://img.shields.io/badge/-Typescript-000080?style=plastic&logo=typescript)
![Firebase](https://img.shields.io/badge/-Firebase-181717?style=plastic&logo=firebase)
![Figma](https://img.shields.io/badge/-Figma-634DFF?style=plastic&logo=figma)
![Karma](https://img.shields.io/badge/-Karma-5DC19?style=plastic&logo=karma)
![Jasmine](https://img.shields.io/badge/-Jasmine-4C2882?style=plastic&logo=jasmine)

## 5. Objetivos de Aprendizaje
#### Uso de HTML semántico

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
      <title>Hello world!</title>
  </head>
  <body>
	<main>
	  <header>
	    <h1>Hello world!</h1>
	  </header>
  </main>
	<footer></footer>
	<script></script>
  </body>
</html>
```
#### Selectores, modelo de caja, flexbox, Grid y Media Queries en CCS

[CSS Selectors-MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors "CSS Selectors-MDN")

[Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model "Box Model")

[Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox "Flexbox")

[Grids](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)

[Media queries](https://developer.mozilla.org/es/docs/CSS/Media_queries)

[Responsive Design](https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Responsive_Design "Responsive Design")

#### Javascript

[Métodos de Array-MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array "Métodos de Array")

[Objetos](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics)

[EventTarget.addEventListener()-MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener "Evento AddEventListener-MDN")

[Condicionales-MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals "Condicionales-MDN")

[Funciones(Parámetros y argumentos)-MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions "Funciones(Parámetros y argumentos)-MDN")

#### Angular

[Angular Componentes](https://angular.io/guide/component-overview)

[Introducción a componentes y plantillas](https://angular.io/guide/architecture-components#introduction-to-components)

[Directivas estructurales](https://angular.io/guide/structural-directives)

[Input & Output](https://angular.io/guide/component-interaction#component-interaction)

[Creación y uso de servicios](https://angular.io/guide/architecture-services#providing-services)

[Manejo de rutas](https://angular.io/guide/router)

[Creación y uso de observables](https://angular.io/guide/observables-in-angular)

[Uso de HttpClient](https://angular.io/guide/http)

[Estilos de componentes](https://angular.io/guide/template-syntax#built-in-directives)

#### Es Modules y Test

[ECMAScript (ES Modules-Import)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import "ECMAScript (ES Modules-Import)")

[ECMAScript (ES Modules-Export)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export "ECMAScript (ES Modules-Export)")

[Karma](https://angular.io/guide/testing)

[Jasmine](https://www.digitalocean.com/community/tutorials/testing-angular-with-jasmine-and-karma-part-1)

#### CallBack y Promesas

[Función CallBack](https://developer.mozilla.org/es/docs/Glossary/Callback_function "CallBack")

[Promise](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promesas")

[Cómo escribir una promesa de JavaScript](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/ "Promesas")

#### Firebase

[Documentación oficial Firebase](https://firebase.google.com/docs/firestore?hl=es "Firebase")

[Reglas de seguridad Firebase](https://firebase.google.com/docs/rules?hl=es "Firebase")

[Primeros pasos con Firebase-Autenticación](https://firebase.google.com/docs/auth/web/start?hl=es "Firebase")

[Administra usuarios en Firebase](https://firebase.google.com/docs/auth/web/manage-users?hl=es#get_the_currently_signed-in_user "Firebase")

[Agregar datos a Cloud Firebase](https://firebase.google.com/docs/firestore/manage-data/add-data "Firebase")

[Obtén actualizaciones en tiempo real-Firebase](https://firebase.google.com/docs/firestore/query-data/listen?hl=es "Firebase")

#### Control de versiones(Git y GitHub)

[Página Oficial GitHub](https://pages.github.com/ "Página Oficial GitHub")

[Ramas en GitHub](https://www.atlassian.com/es/git/tutorials/using-branches)

[GitHub Project](https://docs.github.com/en/issues/trying-out-the-new-projects-experience/about-projects)
## 6. Despliegue

[La Burguesa🍔](https://boisterous-squirrel-2b3a14.netlify.app/log-in)

<img src="https://i.pinimg.com/originals/29/68/f9/2968f995e93c22f75b89fa0f15ac33ed.gif" style="width: 200px">

## 7. Autoras
- [Areliz Oyarce](https://github.com/Arelizoyarce)
- [Cinthia Velásquez](https://github.com/CinthiaVB)
