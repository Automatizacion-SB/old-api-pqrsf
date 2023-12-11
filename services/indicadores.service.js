const boom = require('@hapi/boom');
// const { models } = require('../libs/sequelize');
const sequelize = require('../libs/sequelize');
const { QueryTypes } = require('sequelize');

class PeticionService {
  async findForTipoSolicitudes({ startDate, endDate }) {
    const query = `
      SELECT  YEAR(p.fecha_recepcion) AS 'year',
              MONTH(p.fecha_recepcion) AS 'mounth',
              DATENAME(MONTH, p.fecha_recepcion) AS 'mounth_name',
              tp.nombre AS 'tipo',
              COUNT(p.tipo_peticion_id) AS 'total'
      FROM    peticiones AS p INNER JOIN tipos_peticion AS tp
              ON tp.id = p.tipo_peticion_id
      WHERE   p.fecha_recepcion BETWEEN '${startDate}' AND '${endDate}'
      GROUP BY
              YEAR(p.fecha_recepcion), MONTH(p.fecha_recepcion), DATENAME(MONTH, p.fecha_recepcion), tp.nombre
`;

    const resultado = await sequelize.query(query, { type: QueryTypes.SELECT });

    if (!resultado) throw boom.notFound('No se encontró el resultado');

    return resultado;
  }

  async findForServicio({ startDate, endDate }) {
    const query = `
      SELECT  YEAR(p.fecha_recepcion) AS 'year',
              MONTH(p.fecha_recepcion) AS 'mounth',
              DATENAME(MONTH, p.fecha_recepcion) AS 'mounth_name',
              tp.nombre AS 'servicio',
              COUNT(p.tipo_peticion_id) AS 'total'
      FROM    peticiones AS p INNER JOIN servicios AS tp
              ON tp.id = p.servicio_id
      WHERE p.fecha_recepcion BETWEEN '${startDate}' AND '${endDate}'
      GROUP BY YEAR(p.fecha_recepcion), MONTH(p.fecha_recepcion), DATENAME(MONTH, p.fecha_recepcion), tp.nombre
    `;

    const resultado = await sequelize.query(query, { type: QueryTypes.SELECT });

    if (!resultado) throw boom.notFound('No se encontró el resultado');

    return resultado;
  }

  async findForEps({ startDate, endDate }) {
    const query = `
      SELECT  YEAR(p.fecha_recepcion) AS 'year',
              MONTH(p.fecha_recepcion) AS 'mounth',
              DATENAME(MONTH, p.fecha_recepcion) AS 'mounth_name',
	            e.nombre AS 'eps',
	            COUNT(p.tipo_peticion_id) AS 'total'
      FROM    peticiones AS p INNER JOIN pacientes AS pa
              ON pa.peticion_id = p.id INNER JOIN eps AS e
              ON e.id = pa.eps_id
      WHERE   p.fecha_recepcion BETWEEN '${startDate}' AND '${endDate}'
      GROUP BY
              YEAR(p.fecha_recepcion), MONTH(p.fecha_recepcion), DATENAME(MONTH, p.fecha_recepcion), e.nombre
    `;

    const resultado = await sequelize.query(query, { type: QueryTypes.SELECT });

    if (!resultado) throw boom.notFound('No se encontró el resultado');

    return resultado;
  }

  async findForEpsAndType({ startDate, endDate }) {
    const query = `
    SELECT  tp.nombre AS 'tipo',
            eps.nombre AS 'eps',
            COUNT(p.tipo_peticion_id) AS 'total'
    FROM peticiones p INNER JOIN tipos_peticion tp
            ON tp.id = p.tipo_peticion_id
            INNER JOIN pacientes pa
            ON pa.peticion_id = p.id
            INNER JOIN eps eps
            ON eps.id = pa.eps_id
    WHERE   p.fecha_recepcion BETWEEN '${startDate}' AND '${endDate}'
    GROUP BY
            tp.nombre, eps.nombre;
    `;

    const resultado = await sequelize.query(query, { type: QueryTypes.SELECT });

    if (!resultado) throw boom.notFound('No se encontró el resultado');

    return resultado;
  }

  async findPromedioRespuesta({ startDate, endDate }) {
    const query = `

      SELECT  YEAR(p.fecha_recepcion) AS 'year',
              MONTH(p.fecha_recepcion) AS 'mounth',
              DATENAME(MONTH, p.fecha_recepcion) AS 'mounth_name',
              tp.nombre AS 'tipo_peticion',
              ROUND(AVG(DATEDIFF(DAY, p.fecha_recepcion, p.fecha_respuesta) * 1.0), 2) AS 'promedio_respuesta'
      FROM	  peticiones AS p INNER JOIN tipos_peticion AS tp
              ON tp.id = p.tipo_peticion_id
      WHERE	  (p.fecha_respuesta IS NOT NULL)
              AND (p.fecha_respuesta <> '1899-12-30 00:00:00.0000000 +00:00')
          		AND (p.fecha_recepcion BETWEEN '${startDate}' AND '${endDate}')
      GROUP BY
              YEAR(p.fecha_recepcion), MONTH(p.fecha_recepcion), DATENAME(MONTH, p.fecha_recepcion), tp.nombre
    `;

    const resultado = await sequelize.query(query, { type: QueryTypes.SELECT });

    if (!resultado) throw boom.notFound('No se encontró el resultado');

    return resultado;
  }
}

module.exports = PeticionService;
