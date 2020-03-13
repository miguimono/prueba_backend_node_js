# prueba_backend_node_js
Desarrollo de prueba para Peak U

npm run dev: Ejecuta archivo index.js
npm run build: compila los archivos de babel

# Datos

Prueba creada con: 

node.js
express
postgresql
sequelize
babel

Servidor corriendo en localhost:3000
base de datos: peak_u 
usuario:  postgres
contraseña: sin_contraseña
puerto pase de datos: 5432

Los scripts de la bd se encuentran en src/database/database.sql

# Rutas
Las rutas asginadas a las apis son:
# '/api/order' direccion para operaciones a una orden
  
router.post('/', createOrder);
Crea una nueva orden, los parametros son: name,lastname,email,phone,address,date,min_hour,max_hour. Ejemplo date: 2020-03-12. Ejemplo min_hour: 08:00:00. Ejemplo max_hour: 12:00:00. La Api crea una orden, crea un cliente y una direccion

router.get('/', getOrder);
Obtiene todas las ordenes existentes

router.get('/:id', getOrderById);
Obtiene una orden segun el ID de esta

router.delete('/:id', deleteOrder);
Elimina una orden segun el ID de esta

router.get('/client', getClient);
Obtiene todos los clientes existentes

router.put('/:id', updateOrder); 
Actualiza un cliente segun ID de este
 
  
# '/api/driver' direccion para operaciones a un conductor

router.post('/', createDriver);
Crea un conductor, los parametros son:name. El status del conductor siempre sera true. status = true (disponible), status = false (no disponible)

router.get('/', getDriver);
Obtiene todos los conductores existentes

router.get('/:id', getDriverById);
Obtiene un conductor segun el ID de este

router.delete('/:id', deleteDriver);
Elimina un conductor segun el ID de este

router.get('/date/:date', getDriverByDate);
Obtiene el conductor que esta realizando la entrega segun una fecha

router.put('/:id', updateDriver); 
Actualiza un conductor por el ID de este

router.put('/asignDriver/:id', asignDriverToOrder); 
Asigna una orden a un conductor, el id del conductor se asigna en el parametro de la Api, y el ID de la orden en el cuerpo del mensaje. El estado del conductor pasa a ser false (no disponible)

router.put('/releaseDriver/:id', releaseDriver); 
Elimina la orden del conductor. El estado del conductor pasa a ser true (disponible)

