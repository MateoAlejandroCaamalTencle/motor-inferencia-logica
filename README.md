# Motor de Inferencia Lógica como Servicio

## Descripción

Este proyecto implementa un servicio web basado en lógica declarativa que permite ejecutar consultas Prolog mediante una API REST desarrollada con Node.js y Express.

El sistema funciona como un motor de inferencia simbólica, evaluando hechos y reglas definidos en una base de conocimiento escrita en Prolog usando Tau Prolog.

## Tecnologías utilizadas

- Node.js
- Express
- Tau Prolog
- JavaScript
- Prolog

## Instalación local

Para ejecutar el proyecto de manera local, primero se debe clonar el repositorio:

```bash
git clone https://github.com/MateoAlejandroCaamalTencle/motor-inferencia-logica.git

Después se entra a la carpeta del proyecto:
cd motor-inferencia-logica

Luego se instalan las dependencias necesarias:
npm install

## 3. Busca la sección “Ejecución”

Reemplázala por esto:

```md
## Instrucciones de ejecución

Para iniciar el servidor localmente, ejecutar:

```bash
node src/server.js

Si todo funciona correctamente, en consola aparecerá:
Servidor corriendo en puerto 3000

El servidor quedará disponible en:
http://localhost:3000

Para probar el endpoint principal, se debe enviar una petición POST a:
http://localhost:3000/query

Con un cuerpo JSON como el siguiente:
{
  "query": "penalty_applicable(contract1)."
}