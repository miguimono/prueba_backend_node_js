import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const driver = sequelize.define('driver', {
    id_driver:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    //status = true (disponible); status = false (no disponible)
    status: {
      type: Sequelize.BOOLEAN
    },
    name: {
      type: Sequelize.STRING
    },
    fk_id_order: {
      type: Sequelize.INTEGER
    },
  }, {
  });
  module.exports = driver ;
