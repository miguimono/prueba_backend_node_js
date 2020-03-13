/* SQLEditor (Postgres)*/


CREATE TABLE Client
(
id_client SERIAL NOT NULL,
name VARCHAR(40) NOT NULL,
lastname VARCHAR(40),
email TEXT NOT NULL,
phone VARCHAR(10),
CONSTRAINT Client_pkey PRIMARY KEY (id_client)
);

CREATE TABLE Address
(
id_address SERIAL NOT NULL UNIQUE ,
address TEXT NOT NULL,
fk_id_client INTEGER NOT NULL,
CONSTRAINT Address_pkey PRIMARY KEY (id_address)
);

CREATE TABLE "Order"
(
id_order SERIAL NOT NULL,
date DATE NOT NULL,
min_hour TIME NOT NULL,
max_hour TIME NOT NULL,
fk_id_client INTEGER NOT NULL,
CONSTRAINT Order_pkey PRIMARY KEY (id_order)
);

CREATE TABLE Driver
(
id_driver SERIAL NOT NULL UNIQUE ,
status BOOLEAN NOT NULL,
fk_id_order INTEGER,
name VARCHAR(30),
CONSTRAINT Driver_pkey PRIMARY KEY (id_driver)
);

ALTER TABLE Address ADD FOREIGN KEY (fk_id_client) REFERENCES Client (id_client);

ALTER TABLE "Order" ADD FOREIGN KEY (fk_id_client) REFERENCES Client (id_client);

ALTER TABLE Driver ADD FOREIGN KEY (fk_id_order) REFERENCES "Order" (id_order);
