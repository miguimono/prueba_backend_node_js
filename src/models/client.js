import Sequelize from 'sequelize';
import {sequelize} from '../database/database';
import address from './address';
import my_order from './order';

const client = sequelize.define('client', {
    id_client:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      
    },
    lastname: {
      type: Sequelize.STRING,
      
    },
    email: {
      type: Sequelize.TEXT,
      
    },
    phone: {
      type: Sequelize.STRING,
      
    }
  }, {
  });
  client.hasMany(address, {foreignKey:'fk_id_client', sourceKey:'id_client'});
  address.belongsTo(client, {foreignKey:'fk_id_client', sourceKey:'id_client'});

  client.hasMany(my_order, {foreignKey:'fk_id_client', sourceKey:'id_client'});
  my_order.belongsTo(client, {foreignKey:'fk_id_client', sourceKey:'id_client'});
  module.exports = client ;
