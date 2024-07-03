# Por el Mati Diaz

# Requisitos
- Se debe tener node.js y npm instalados

# Instalacion

1. Clonar el repositorio
2. Abrir el proyecto en el terminal
3. Ejecutar "npm install" para instalar las dependencias

# Uso

1. Iniciar el servidor con "npm start", el servidor va a escuchar en el puerto 3000 (podes cambiarlo en el codigo)
3. Utilizar las siguientes operaciones para interactuar con la base de datos:

# Operaciones

- "GET /books" Para obtener todos los libros en la base de datos
- "GET /books/:id" Para obtener un libro especifico en base al id (Reemplazar ":id")
- "POST /books" Para crear un nuevo libro con los datos del cuerpo de la solicitud
- "PUT /books/:id" Para Actualizar un libro existente en base a su id con los datos del cuerpo de la solicitud (Reemplazar ":id")
- "DELETE /books/:id" Para eliminar un libro segun su id (Reemplazar ":id")
