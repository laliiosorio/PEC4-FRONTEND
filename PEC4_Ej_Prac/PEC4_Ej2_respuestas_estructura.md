Respuestas:
1. **Creación del proyecto Angular "ecommerce" utilizando Angular CLI:**
```bash
ng new ecommerce
```
### Estructura y archivos generados por Angular CLI:

#### Ficheros de configuración en la raíz del proyecto:
- tsconfig.spec.json: Configuración para las pruebas unitarias.
- tsconfig.json: Configuración TypeScript principal del proyecto.
- tsconfig.app.json: Configuración TypeScript específica de la aplicación.
- server.ts: Script de servidor (opcional).
- README.md: Documentación del proyecto.
- package.json: Descriptor de dependencias y scripts de npm.
- package-lock.json: Registra la versión exacta de cada dependencia instalada.
- angular.json: Configuración del proyecto Angular.
- .gitignore: Archivo para especificar archivos y directorios que Git debe ignorar.
- .editorconfig: Configuración para mantener la consistencia del estilo de codificación.

#### Directorio node_modules:
Contiene las dependencias del proyecto instaladas mediante npm.

#### Directorio src:
- index.html: Punto de entrada HTML de la aplicación.
- main.ts: Archivo de entrada de TypeScript que inicia la aplicación.
- styles.css: Archivo CSS global para estilos comunes de la aplicación.
  
#### Directorio assets:
Almacena archivos estáticos como imágenes, fuentes, etc.

#### Directorio app:
- Ficheros app.component.*: Componente principal de la aplicación.
- Fichero app.module.ts: Módulo principal de la aplicación que define los componentes, directivas y servicios utilizados en la aplicación.


### Decoradores generados por Angular CLI:

- **app.module.ts - @NgModule:**
  - declarations: Lista de los componentes, directivas y pipes que pertenecen al módulo.
  - imports: Lista de otros módulos cuyos exportadores se deben hacer disponibles para las plantillas de componentes en este módulo.
  - providers: Lista de proveedores de servicios que el inyector de dependencias utilizará para resolver dependencias para este módulo.
  - bootstrap: Componente principal que se iniciará al arrancar la aplicación.

- **app.component.ts - @Component:**
  - selector: Nombre del selector del componente que se utiliza para incrustar el componente en las plantillas.
  - templateUrl: Ruta al archivo HTML que define la plantilla del componente.
  - styleUrls: Lista de rutas a archivos CSS que definen los estilos del componente.

### ¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls? ¿Es recomendable hacer esto?:

Sí, es posible inyectar el template y los estilos directamente en el decorador `@Component` utilizando las propiedades `template` y `styles`, respectivamente. 

Sin embargo, no es recomendable hacerlo a menos que sea absolutamente necesario, ya que mezclar la lógica del componente con la presentación puede dificultar el mantenimiento y la legibilidad del código, especialmente en aplicaciones grandes. Es preferible mantener los archivos de template y estilos por separado para una mejor organización y mantenibilidad del código.

