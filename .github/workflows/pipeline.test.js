// Importa a biblioteca 'fs' para lidar com o sistema de arquivos
const fs = require('fs');

// Teste para verificar se o arquivo de pipeline do GitHub Actions existe
test('Verifica se o arquivo de pipeline do GitHub Actions existe', () => {
  // Verifica se o arquivo main.yml existe no diretório .github/workflows
  expect(fs.existsSync('.github/workflows/main.yml')).toBe(true);
});

// Teste para verificar se o arquivo de pipeline do GitHub Actions contém as etapas corretas
test('Verifica se o arquivo de pipeline do GitHub Actions contém as etapas corretas', () => {
  // Carrega o conteúdo do arquivo main.yml
  const pipelineConfig = fs.readFileSync('.github/workflows/main.yml', 'utf8');
  
  // Verifica se o arquivo contém as etapas corretas
  expect(pipelineConfig).toContain('Install dependencies');
  expect(pipelineConfig).toContain('Run unit tests');
  expect(pipelineConfig).toContain('Build application');
  expect(pipelineConfig).toContain('Upload artifact');
  expect(pipelineConfig).toContain('Download artifact');
  expect(pipelineConfig).toContain('Deploy to test environment');
});
