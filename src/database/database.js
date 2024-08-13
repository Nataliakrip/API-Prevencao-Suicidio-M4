import { Sequelize } from 'sequelize';

// Definindo a conexão com o banco de dados
const sequelize = new Sequelize('projeto_m4', 'postgres', '99159021', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  logging: false,
});

// Testando a conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

export default sequelize;
