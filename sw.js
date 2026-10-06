// ============================================
// SERVICE WORKER - PWA Cadastro de Funcionários
// ============================================
// 
// Este Service Worker é mínimo - apenas o suficiente
// para permitir a instalação como PWA.
// 
// NÃO faz cache de arquivos porque o sistema precisa
// sempre de dados frescos do Supabase.
// 
// Se quiser adicionar cache offline no futuro,
// basta modificar o evento 'fetch' abaixo.
// ============================================

const CACHE_NAME = 'funcionarios-pwa-v1';

// Ativa imediatamente o novo Service Worker
// (sem esperar as abas antigas fecharem)
self.addEventListener('install', (event) => {
  console.log('✅ Service Worker: instalado');
  self.skipWaiting();
});

// Assume o controle de todas as abas abertas
self.addEventListener('activate', (event) => {
  console.log('✅ Service Worker: ativado');
  event.waitUntil(self.clients.claim());
});

// Não intercepta requisições - deixa passar direto para a rede
// Isso evita problemas com dados desatualizados do Supabase
self.addEventListener('fetch', (event) => {
  // Deixa o navegador fazer a requisição normal
  return;
});

// Log de erros (útil para debug)
self.addEventListener('error', (event) => {
  console.error('❌ Service Worker: erro', event.error);
});
