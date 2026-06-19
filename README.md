# horarios_crud
El API provee la gestion de las diferentes procesos que requiere los horarios para el sistema de gestion academica de la universidad Distrital Francisco Jose de Caldas



## Especificaciones Técnicas

### Tecnologías Implementadas y Versiones

* [NestJS](https://github.com/nestjs/nest)
* [MongoDB](https://github.com/mongodb/mongo)

**Entorno Local:** NodeJS Version: v20.11.1 | NPM Version: 10.2.4 | Nest CLI Version: 10.3.2 | MongoDB version: v7.0.6

### Variables de Entorno
```shell
HORARIOS_CRUD_DB=[nombre de la base de datos]
HORARIOS_CRUD_PASS=[password del usuario]
HORARIOS_CRUD_HOST=[direccion de la base de datos]
HORARIOS_CRUD_PORT=[Puerto de conexión con la base de datos]
HORARIOS_CRUD_USER=[usuario con acceso a la base de datos]
HORARIOS_CRUD_AUTH_DB=[base de datos de autorizacion]
HORARIOS_CRUD_HTTP_PORT=[puerto de ejecucion]
```

**NOTA:** Las variables se pueden ver en el fichero src/config/configuration.ts y están identificadas con HORARIOS_CRUD_...

### Ejecución del Proyecto
```shell
#1. Clonar el repositorio
git clone git@github.com:udistrital/horarios_crud.git #Opcion 1: Via SSH
git clone https://github.com/udistrital/horarios_crud.git #Opcion 2: Via HTTPS

#2. Moverse a la carpeta del repositorio
cd horarios_crud

#3. Moverse a la rama **develop**
git pull origin develop && git checkout develop

#4. Instalar dependencias
npm install

#5. Alimentar todas las variables de entorno que utiliza el proyecto.
export HORARIOS_CRUD_HTTP_PORT='3000' ...

#6. Ejecutar en develop mode para hotreloading
npm run start:dev
```

### Ejecución Pruebas

Pruebas unitarias
```shell
# En Proceso
```
## Estado CI

| Develop | Relese 0.0.1 | Master |
| -- | -- | -- |
| [![Build Status](https://hubci.portaloas.udistrital.edu.co/api/badges/udistrital/horarios_crud/status.svg?ref=refs/heads/develop)](https://hubci.portaloas.udistrital.edu.co/udistrital/horarios_crud/) | [![Build Status](https://hubci.portaloas.udistrital.edu.co/api/badges/udistrital/horarios_crud/status.svg?ref=refs/heads/release/0.0.1)](https://hubci.portaloas.udistrital.edu.co/udistrital/horarios_crud/) | [![Build Status](https://hubci.portaloas.udistrital.edu.co/api/badges/udistrital/horarios_crud/status.svg)](https://hubci.portaloas.udistrital.edu.co/udistrital/horarios_crud/) |


## Modelo de Datos

![Modelo de Datos API CRUD Horarios](/database/horarios_crud.png)

## Licencia

This file is part of horarios_crud.

horarios_crud is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

horarios_crud is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with novedades_crud. If not, see https://www.gnu.org/licenses/.