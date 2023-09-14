-- Corrección en los campos derivados

-- Al usar el ORM Sequelize, este no cuenta con la funcionalidad de agregar campos derivados en una tabla
-- y su alternativa, DataType VIRTUAL, no aplica en SQL Server.
-- Por lo que se a optado por definir dichos campos manualmente en la tabla PETICIONES, conservando el tipo de dato en Sequelize


-- fecha_envio_responsable_area
CASE WHEN lider_id IS NOT NULL THEN CONVERT(DATE, GETDATE()) END

-- Formateo para su comprensión:
--   CASE
--    WHEN lider_id IS NOT NULL
--    THEN CONVERT(DATE, GETDATE())
--   END


-- dias_restantes
  DATEDIFF(DAY, fecha_recepcion, due_date)


-- total_dias
CASE WHEN fecha_respuesta IS NULL THEN DATEDIFF(DAY, fecha_recepcion, GETDATE()) ELSE DATEDIFF(DAY, fecha_recepcion, fecha_respuesta) END
-- CASE
--    WHEN fecha_respuesta IS NULL THEN DATEDIFF(DAY, fecha_recepcion, GETDATE())
--    ELSE DATEDIFF(DAY, fecha_recepcion, fecha_respuesta)
-- END
