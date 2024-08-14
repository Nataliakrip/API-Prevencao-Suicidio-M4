import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { fileURLToPath } from 'url';
import path from 'path';

// Obter o diretório atual no contexto ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carregar a documentação YAML do Swagger
const swaggerDocument = YAML.load(path.join(__dirname, './yaml/professional.yaml'));

// Função para configurar o Swagger no app Express
export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
