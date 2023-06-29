import { PrismaClient } from '@prisma/client';

interface PrismaConfig {
  [key: string]: {
    url: string;
  };
}

const prismaConfig: PrismaConfig = {
  development: {
    // Configuração para o ambiente de desenvolvimento local
    // Coloque aqui as configurações específicas para o ambiente local
    url: process.env.DATABASE_URL || 'postgresql://<username>:<password>@localhost:5432/mgs',
  },
  production: {
    // Configuração para o ambiente de produção (servidor)
    // Coloque aqui as configurações específicas para o ambiente de produção
    url: process.env.DATABASE_URL!,
  },
};

// Verifica o valor da variável de ambiente NODE_ENV para determinar o ambiente atual
const nodeEnv: string = process.env.NODE_ENV || 'development';

// Seleciona a configuração adequada com base no ambiente atual
const selectedConfig = prismaConfig[nodeEnv];

// Cria uma instância do PrismaClient com a configuração selecionada
const prisma = new PrismaClient({
  datasources: {
    db: selectedConfig,
  },
});

export default prisma;