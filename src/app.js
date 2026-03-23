const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

// Middlewares
app.use(express.json());

// Documentação
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rota Principal (Redireciona para o Swagger para não dar erro aos alunos)
app.get('/', (req, res) => {
    res.redirect('/api-docs');
});

// Rotas da Aplicação
app.use('/usuarios', usuarioRoutes);

module.exports = app;