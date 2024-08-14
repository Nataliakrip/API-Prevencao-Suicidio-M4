import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { fileURLToPath } from 'url';
import path from 'path';

// Obter o diretório atual no contexto ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carregar a documentação YAML do Swagger
const pacientesDocument = YAML.load(path.join(__dirname, './yaml/pacientes.yaml'));
const professionalDocument = YAML.load(path.join(__dirname, './yaml/professional.yaml'));
const mentalHealthCheckDocument = YAML.load(path.join(__dirname, './yaml/answers.yaml'));
const questionnairesDocument = YAML.load(path.join(__dirname, './yaml/questionnaires.yaml'));
const resourcesDocument = YAML.load(path.join(__dirname, './yaml/resources.yaml'));
const sessionsDocument = YAML.load(path.join(__dirname, './yaml/session.yaml'));

// Combinar os documentos YAML em um só
const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'API de Prevenção ao Suicídio',
    version: '1.0.0',
    description: 'Documentação da API de Prevenção ao Suicídio'
  },
  paths: {
    ...pacientesDocument.paths,
    ...professionalDocument.paths,
    ...mentalHealthCheckDocument.paths,
    ...questionnairesDocument.paths,
    ...resourcesDocument.paths,
    ...sessionsDocument.paths,
  },
  components: {
    schemas: {
      ...pacientesDocument.components?.schemas,
      ...professionalDocument.components?.schemas,
      ...mentalHealthCheckDocument.components?.schemas,
      ...questionnairesDocument.components?.schemas,
      ...resourcesDocument.components?.schemas,
      ...sessionsDocument.components?.schemas,
    }
  }
};

// Função para configurar o Swagger no app Express
export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
