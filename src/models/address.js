import Sequelize from 'sequelize';
import {sequelize} from '../database/database';


const my_address = sequelize.define('address', {
    id_address:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    address: {
      type: Sequelize.TEXT,
    },
    fk_id_client: {
      type: Sequelize.INTEGER
    },
  }, {
  });
  module.exports = my_address ;
