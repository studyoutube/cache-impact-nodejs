import Sequelize from 'sequelize';
export async function setDbModel() {
  const sequelize = new Sequelize('heroes', 'reese', '@!darkmode0', {
    host: 'localhost',
    dialect: 'postgres'
  });

  await sequelize.authenticate();
  console.log('postgres is running');

  const Hero = sequelize.define('heroes', {
    name: Sequelize.STRING,
    power: Sequelize.STRING
  });

  await Hero.sync({ force: true });

  return Hero;
}
