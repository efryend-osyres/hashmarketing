Prueba tecnica para desarrollador Full Stack Developer jr.

## Preguntas

- ¿Cómo estructuraste el proyecto y por qué?

Los componentes comunes los coloqué en el directorio "/components/shared", esto para tener una mayor visibilidad y control de los mismos.
El proyecto lo coloqué en un directorio "/app/(dashboard)", esto por si se da el caso de contar con otro sistema o web en el mismo proyecto.
En el directorio "/app/(dashboard)", se creó un directorio (ads) por si se da el caso de contar con más secciones en el dashboard.
En el directorio "/app/(dashboard)", se creó un archivo layout, esto para que cualquier nueva sección comparta la misma estructura.
A la altura de la página principal de (ads), se creó un directorio "components", en donde se alojan los componentes específicos de la página.
A la altura de la página principal de (ads), se creó un directorio "data", en donde se aloja la información estática que se utiliza en la página.
En el directorio "/app/api/campaigns", se creó un servicio, el cual sirve el json con la información que se utiliza en la página.
En el directorio "/public" se creó un directorio "img" y "svg", donde se alojan las imágenes utilizadas en la página.

- ¿Qué métricas consideraste clave y cómo las jerarquizaste visualmente?

En la tabla principal se muestra la información útil para el usuario que esté utilizando el sistema:
=Cliente: El cliente con el que se está trabajando.
=Plataforma: La plataforma en donde se lleva a cabo la campaña.
=Nombre de la campaña.
=Estado: Estado en el que se encuentra la campaña.
=Costo: Costo de la campaña.
=ROAS: Cuánto se ha ganado en la campaña.

En el detalle se muestra la siguiente información.
Se separó en 3 secciones con el fin de que el usuario pueda identificar los bloques de información de forma rápida y jerarquizada por la más relevante.

===Primer bloque (Identificadores de la campaña)
=Nombre de la campaña
=Cliente: El cliente con el que se está trabajando.
=Plataforma: Plataforma en donde se está llevando a cabo la campaña.

===Segundo bloque (Datos de la campaña)
=Estado: Estado en el que se encuentra la campaña.
=Costo: El costo de la capaña.
=ROAS: Cuánto se ha ganado en la campaña.
=Conversiones: Acción valiosa realizada por el usuario.
=Tasa de conversión: Acción deseada realizada por el usuario.
= Valor de conversión: Valor asignado.
=Click: Número de clicks
=CTR: Tasa de clicks
=CPC: Costo por click
=Impresiones: Número de veces que se mostró el contenido.

===Tercer bloque (Grafico)
Se muestra un gráfico de relación entre los clicks y la tasa de conversión por cada mes.

- ¿Cómo te conectarías a las APIs reales de Google Ads, Meta Ads o Amazon Ads? ¿Qué necesitas?

Se puede abordar de dos formas:
==Primera forma
Una API (externa) consume la API de las plataformas, trata la información y retorna la información, para que simplemente el front consuma el servicio y muestre la información.

==Segunda forma
Una API (interna) consume la API de las plataformas, trata la información y retorna la información; esta es consumida por el mismo proyecto.

Para cualquiera de los casos, el punto crítico es configurar en cada una de las plataformas las llaves o accesos necesarios para consumir y obtener la información. Para lograr esto, se necesita que el propietario de las cuentas de cada una de las plataformas realice las configuraciones pertinentes o genere un acceso de desarrollador con los permisos necesarios para realizar las configuraciones pertinentes.

- ¿Qué problemas podrías enfrentar al integrar las APIs reales?

=Configuración de las llaves o accesos.
=Limitación en el número de peticiones por día.
=Homologar la información.

- ¿Cómo manejarías las diferencias entre plataformas (formatos,
  nomenclaturas)?

El servicio debe entregar la información limpia y homologada, por lo que en el servicio se realizarían clases y/o funciones para cumplir con esta tarea.
