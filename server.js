import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './src/database/database.js'; 
import questionnaireRoutes from './src/routers/questionario.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rotas da API
app.use('/api', questionnaireRoutes);

app.get('/', (req, res) => {
  res.send('API de Saúde Mental e Prevenção ao Suicídio está funcionando!');
});

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor está rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });
