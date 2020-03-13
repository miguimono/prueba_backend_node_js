import Sequelize from 'sequelize';

export const sequelize = new Sequelize("peak_u", "postgres", "", {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: false,
    freezeTableName: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false,
  port: 5432
});


