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

-- TRIGGER para la generación del radicado
CREATE TRIGGER tr_peticiones_insert
ON dbo.peticiones
AFTER INSERT
AS
BEGIN
    SET NOCOUNT ON;

    -- Calcular el valor máximo actual de "radicado"
    DECLARE @max_radicado INT;
    SELECT @max_radicado = ISNULL(MAX(radicado), 0) FROM dbo.peticiones;

    -- Declarar una variable para mantener el valor de ROW_NUMBER
    DECLARE @row_number INT;
    SET @row_number = @max_radicado;

    -- Actualizar las filas recién insertadas que cumplen con la condición
    UPDATE p
    SET
        @row_number = @row_number + 1,
        radicado = @row_number
    FROM dbo.peticiones p
    JOIN inserted i ON p.id = i.id
    WHERE i.se_gestiono = 1 AND i.radicado IS NULL AND p.radicado IS NULL;
END;



CREATE TRIGGER tr_peticiones_update
ON dbo.peticiones
AFTER UPDATE
AS
BEGIN
    IF (SELECT COUNT(*) FROM inserted WHERE se_gestiono = 1 AND radicado IS NULL) > 0
    BEGIN
        DECLARE @max_radicado int;
        SELECT @max_radicado = ISNULL(MAX(radicado), 0) FROM dbo.peticiones;

        WITH UpdateCTE AS
        (
            SELECT p.id, ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) AS RowNum
            FROM dbo.peticiones p
            INNER JOIN inserted i ON p.id = i.id
            WHERE i.se_gestiono = 1 AND i.radicado IS NULL AND p.radicado IS NULL
        )
        UPDATE p
        SET p.radicado = @max_radicado + u.RowNum
        FROM dbo.peticiones p
        INNER JOIN UpdateCTE u ON p.id = u.id;
    END
END;



select * from peticiones
where radicado is not null
order by radicado asc
