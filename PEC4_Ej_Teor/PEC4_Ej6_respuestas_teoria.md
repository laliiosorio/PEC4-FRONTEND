### 1. Style Encapsulation de los Componentes

Angular ofrece a sus usuarios varios componentes que hacen del desarrollo una tarea fácil y rápida, entre estos destaca en view encapsulation, o vista encapsulada según su traducción al español, sobre esta explican en la página del framework.

Allí nos dicen “En Angular, los estilos de un componente se pueden encapsular dentro del elemento host del componente para que no afecten al resto de la aplicación. El decorador del componente proporciona la opción de encapsulación que se puede usar para controlar cómo se aplica la encapsulación por componente”.

 
El desarrollador puede escoger de entre los siguientes modos:

 
- **ShadowDom:** Angular usa la API Shadow DOM integrada del navegador para encerrar la vista del componente dentro de un ShadowRoot (usado como elemento host del componente) y aplicar los estilos provistos de manera aislada.

```
@Component({
  selector: 'app-shadow-dom-encapsulation',
  template: `
    <h2>ShadowDom</h2>
    <div class="shadow-message">Shadow DOM encapsulation</div>
    <app-emulated-encapsulation></app-emulated-encapsulation>
    <app-no-encapsulation></app-no-encapsulation>
  `,
  styles: ['h2, .shadow-message { color: blue; }'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowDomEncapsulationComponent { }
```

- **Emulated:** Angular modifica los selectores de CSS del componente para que solo se apliquen a la vista del componente y no afecten a otros elementos de la aplicación (emula el comportamiento de Shadow DOM).

```
@Component({
  selector: 'app-emulated-encapsulation',
  template: `
    <h2>Emulated</h2>
    <div class="emulated-message">Emulated encapsulation</div>
    <app-no-encapsulation></app-no-encapsulation>
  `,
  styles: ['h2, .emulated-message { color: green; }'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EmulatedEncapsulationComponent { }
```

- **None:** None: Angular no aplica ningún tipo de encapsulación de vista, lo que significa que cualquier estilo especificado para el componente se aplica globalmente y puede afectar cualquier elemento HTML presente dentro de la aplicación. Este modo es esencialmente el mismo que incluir los estilos en el propio HTML.
  
```
@Component({
  selector: 'app-no-encapsulation',
  template: `
    <h2>None</h2>
    <div class="none-message">No encapsulation</div>
  `,
  styles: ['h2, .none-message { color: red; }'],
  encapsulation: ViewEncapsulation.None,
})
export class NoEncapsulationComponent { }
```

### 2. ¿Qué es el shadow DOM?

El Shadow DOM es una característica de los navegadores web que permite encapsular la estructura del DOM y los estilos asociados a un componente web, de manera que no se vean afectados por los estilos definidos en la página principal ni afecten a los estilos de otros componentes. Es una forma de crear componentes web autocontenidos y reutilizables, con su propio árbol DOM y sus propios estilos, evitando posibles conflictos con el resto de la página.

En términos simples, el Shadow DOM permite crear un "DOM dentro del DOM", donde los elementos internos de un componente están ocultos y aislados del DOM principal, lo que proporciona una mejor encapsulación y modularidad.

El Shadow DOM se utiliza comúnmente en tecnologías web modernas, como Web Components, para construir componentes personalizados con funcionalidades y estilos encapsulados. Esto facilita la creación de aplicaciones web más mantenibles, escalables y modularizadas.

### 3. ¿Qué es el changeDetection?


El changeDetection es un mecanismo fundamental en Angular que se encarga de detectar y responder a los cambios en los datos de la aplicación. Cuando los datos cambian, Angular utiliza el changeDetection para determinar qué partes de la interfaz de usuario deben actualizarse en consecuencia.

El ciclo de detección de cambios se ejecuta automáticamente en segundo plano después de que se producen eventos como clics de usuario, peticiones HTTP, temporizadores, etc. Durante este ciclo, Angular compara el estado actual del modelo de datos con su estado anterior y actualiza la vista en consecuencia.

El changeDetection en Angular utiliza una técnica llamada "detección de cambios unidireccional". Esto significa que la propagación de cambios se produce desde los componentes principales hacia abajo en la jerarquía de componentes. Cuando se detecta un cambio en un componente, Angular actualiza ese componente y sus descendientes de manera eficiente.


### 4. ¿Qué diferencias existen entre las estrategias Default y OnPush? ¿Cuándo debes usar una y otra? Ventajas e inconvenientes.


#### Estrategia Default:
- **Descripción:** En esta estrategia, Angular ejecuta el ciclo de detección de cambios cada vez que se produce un evento que puede afectar al estado de la aplicación, como clics de usuario, peticiones HTTP, etc.
- **Uso recomendado:** Es útil cuando tienes una aplicación pequeña o cuando los datos cambian frecuentemente y no puedes predecir cuándo ocurrirán esos cambios.
- **Ventajas:** Es la estrategia más simple de usar y entender. Funciona bien para aplicaciones pequeñas o cuando no necesitas optimizar el rendimiento.
- **Inconvenientes:** Puede resultar costoso en términos de rendimiento en aplicaciones grandes o complejas, ya que puede ejecutar el ciclo de detección de cambios más frecuentemente de lo necesario, lo que puede afectar al rendimiento.

#### Estrategia OnPush:
- **Descripción:** En esta estrategia, Angular solo ejecuta el ciclo de detección de cambios cuando las entradas de un componente (valores pasados a través de `@Input`) cambian de referencia. No detectará los cambios si los datos internos del componente cambian, a menos que se realice manualmente mediante métodos como `ChangeDetectorRef.markForCheck()`.
- **Uso recomendado:** Es especialmente útil cuando tienes componentes grandes o complejos que reciben muchos datos, pero que no cambian con frecuencia. También es útil cuando deseas optimizar el rendimiento reduciendo la cantidad de ciclos de detección de cambios.
- **Ventajas:** Mejora el rendimiento al reducir la cantidad de ciclos de detección de cambios, lo que puede ser significativo en aplicaciones grandes o complejas. También promueve la inmutabilidad de los datos y el uso de observables.
- **Inconvenientes:** Puede resultar confuso al principio y puede requerir un diseño más cuidadoso de los componentes para garantizar que las entradas se pasen correctamente. Además, requiere un mayor nivel de atención para evitar problemas de detección de cambios incorrectos.

### 5. Ciclo de Vida de los Componentes en Angular

El ciclo de vida de los componentes en Angular consta de varios hooks que se ejecutan en diferentes etapas del ciclo de vida del componente. Aquí está una descripción detallada de los hooks más utilizados y cuándo se disparan:

- **OnInit:**
  - **Descripción:** Este hook se ejecuta una vez después de que Angular ha inicializado todas las propiedades de entrada del componente.
  - **Cuándo se dispara:** Se dispara después de que Angular haya inicializado todas las propiedades de entrada del componente.

- **OnChanges:**
  - **Descripción:** Este hook se ejecuta cada vez que cambian las propiedades de entrada del componente.
  - **Cuándo se dispara:** Se dispara cuando cambia el valor de una propiedad de entrada del componente.

- **AfterViewInit:**
  - **Descripción:** Este hook se ejecuta una vez después de que Angular haya inicializado todas las vistas niñas del componente.
  - **Cuándo se dispara:** Se dispara después de que Angular haya inicializado todas las vistas niñas del componente.

- **OnDestroy:**
  - **Descripción:** Este hook se ejecuta justo antes de que Angular destruya el componente y limpie los recursos asociados.
  - **Cuándo se dispara:** Se dispara justo antes de que Angular destruya el componente.

Estos hooks son fundamentales para realizar tareas específicas en diferentes etapas del ciclo de vida del componente, como inicializar datos, reaccionar a cambios en las entradas, acceder al DOM después de que se haya renderizado, y liberar recursos cuando el componente se destruye.
