insert into estacion (id, nombre) values (-1, 'Calle 45');
insert into estacion (id, nombre) values (-2, 'Marly');
insert into estacion (id, nombre) values (-3, 'Heroes');
insert into estacion (id, nombre) values (-4, 'Calle 39');
insert into estacion (id, nombre) values (-5, 'Cardio Infantil');
insert into estacion (id, nombre) values (-6, 'Salitre el Greco');

insert into dia (id, dia) values (-1, 'Lunes');
insert into dia (id, dia) values (-2, 'Martes');
insert into dia (id, dia) values (-3, 'Miercoles');
insert into dia (id, dia) values (-4, 'Jueves');
insert into dia (id, dia) values (-5, 'Viernes');
insert into dia (id, dia) values (-6, 'Sabado');
insert into dia (id, dia) values (-7, 'Domingo');

insert into ruta (id, codigo, horaI, horaF) values (-1, 'F19', TO_TIMESTAMP('04:00:00', 'HH24:MI:SS'), TO_TIMESTAMP('16:00:00', 'HH24:MI:SS'));
insert into ruta (id, codigo, horaI, horaF) values (-2, 'H15', TO_TIMESTAMP('05:00:00', 'HH24:MI:SS'), TO_TIMESTAMP('17:00:00', 'HH24:MI:SS'));
insert into ruta (id, codigo, horaI, horaF) values (-3, 'B11', TO_TIMESTAMP('06:00:00', 'HH24:MI:SS'), TO_TIMESTAMP('18:00:00', 'HH24:MI:SS'));
insert into ruta (id, codigo, horaI, horaF) values (-4, 'C14', TO_TIMESTAMP('07:00:00', 'HH24:MI:SS'), TO_TIMESTAMP('19:00:00', 'HH24:MI:SS'));
insert into ruta (id, codigo, horaI, horaF) values (-5, 'G45', TO_TIMESTAMP('08:00:00', 'HH24:MI:SS'), TO_TIMESTAMP('20:00:00', 'HH24:MI:SS'));
insert into ruta (id, codigo, horaI, horaF) values (-6, 'B10', TO_TIMESTAMP('09:00:00', 'HH24:MI:SS'), TO_TIMESTAMP('23:00:00', 'HH24:MI:SS'));

insert into conductor (id, nombre, cedula, telefono, direccion) values (-1, 'Pablo Manrrique', 'E4547667', 3114547, 'Conjunto cerrado La Rosita f2');
insert into conductor (id, nombre, cedula, telefono, direccion) values (-2, 'Juan Camacho', 'N5453223', 3245453, 'Conjunto cerrado El Espinal a5');
insert into conductor (id, nombre, cedula, telefono, direccion) values (-3, 'Julian David', 'N1231122', 3241231, 'Conjunto cerrado El Cartucho c45');
insert into conductor (id, nombre, cedula, telefono, direccion) values (-4, 'Esteban Sito', 'E2331245', 3672331, 'Conjunto cerrado La Estacion 4-101');

insert into bus (id, placa, modelo) values (-1, 'aASD123', 'Chevrolet 1928');
insert into bus (id, placa, modelo) values (-2, 'QWE345', 'Nissan 19');
insert into bus (id, placa, modelo) values (-3, 'TYU667', 'Toyota Turbo');
insert into bus (id, placa, modelo) values (-4, 'TFD378', 'Ferrari Cargo');