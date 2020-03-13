import Sequelize from 'sequelize';
import {sequelize} from '../database/database';
import driver from './driver';

const my_order = sequelize.define('order', {
    id_order:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    date: {
      type: Sequelize.DATE,
    },
    min_hour: {
      type: Sequelize.TIME,
    },
    max_hour: {
      type: Sequelize.TIME,
    },
    fk_id_client: {
      type: Sequelize.INTEGER
    },
  }, {
  });

  my_order.hasOne(driver, {foreignKey:'fk_id_order', sourceKey:'id_order'});
  driver.belongsTo(my_order, {foreignKey:'fk_id_order', sourceKey:'id_order'});

  module.exports = my_order ;
 