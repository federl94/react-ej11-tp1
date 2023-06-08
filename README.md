# Aplicación de Noticias con React

Esta es una aplicación web desarrollada con React que consume la API proporcionada por [newsdata.io](https://newsdata.io/docs) para obtener noticias. La aplicación tiene la siguiente estructura de componentes:

## Componentes

### Título
Este componente muestra el título de la aplicación, brindando una breve descripción de su funcionalidad.

### Formulario
El formulario contiene un select que permite al usuario elegir diferentes categorías de noticias. Estas categorías son proporcionadas por la API y se pueden encontrar en la documentación correspondiente. Al seleccionar una categoría, la aplicación cargará las noticias relacionadas a esa categoría.

### ListaNoticias
Este componente es responsable de mostrar una lista de noticias en forma de tarjetas. Utiliza la información obtenida de la API para generar las tarjetas de noticias correspondientes.

### Noticia
El componente Noticia representa una noticia individual en forma de tarjeta. Muestra información como el título, descripción, fuente y fecha de publicación de la noticia.

## Funcionamiento

Cuando el usuario accede a la aplicación, se mostrará el Título y el Formulario con el select de categorías. Al seleccionar una categoría en el select, se realizará una solicitud a la API para obtener las noticias relacionadas a esa categoría.

Una vez que se obtiene la respuesta de la API, se mostrarán las noticias en el componente ListaNoticias, donde cada noticia se representará mediante el componente Noticia.

Cada tarjeta de noticia mostrará información relevante de la noticia, como el título, descripción, fuente y fecha de publicación.

El usuario puede cambiar la categoría seleccionada en cualquier momento utilizando el select del Formulario. Esto actualizará la lista de noticias mostrada en la aplicación.

## Configuración

Para utilizar esta aplicación, es necesario tener instalado Node.js y npm (Node Package Manager) en tu sistema. Sigue los siguientes pasos para ejecutar la aplicación:

1. Clona este repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto en la línea de comandos.
3. Ejecuta el comando `npm install` para instalar las dependencias del proyecto.
4. Obtén una API key de [newsdata.io](https://newsdata.io/docs) siguiendo las instrucciones proporcionadas en su documentación.
5. Ejecuta el comando `npm run dev` para iniciar la aplicación.
6. La aplicación estará disponible en tu navegador en la dirección que aparezca luego del "npm run dev".

Ahora puedes disfrutar de la aplicación de noticias y explorar diferentes categorías para mantenerte actualizado con las últimas noticias.
