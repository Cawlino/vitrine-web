import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

const KEY_FILE = path.resolve('google-credentials.json');
const SITE_URL = 'sc-domain:agenciavitrineweb.com.br';
const SITE_URL_PREFIX = 'https://agenciavitrineweb.com.br/';

if (!fs.existsSync(KEY_FILE)) {
  console.error(`Erro: Arquivo de credenciais não encontrado em: ${KEY_FILE}`);
  process.exit(1);
}

const auth = new google.auth.GoogleAuth({
  keyFile: KEY_FILE,
  scopes: [
    'https://www.googleapis.com/auth/webmasters',
    'https://www.googleapis.com/auth/webmasters.readonly',
  ],
});

const searchconsole = google.searchconsole({ version: 'v1', auth });

async function main() {
  console.log('====================================================');
  console.log('🤖 VITRINE WEB - GOOGLE SEARCH CONSOLE AUTOMATION CLI');
  console.log('====================================================\n');

  try {
    // 1. Listar Sites para verificar qual propriedade está registrada
    console.log('📡 1. Verificando propriedades registradas na conta de serviço...');
    const sitesRes = await searchconsole.sites.list();
    const sites = sitesRes.data.siteEntry || [];

    if (sites.length === 0) {
      console.log('⚠️ Nenhuma propriedade encontrada diretamente para esta conta de serviço.');
      console.log('Lembre-se de adicionar no Search Console > Configurações > Usuários e Permissões o e-mail:');
      const keyData = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));
      console.log(`👉 ${keyData.client_email} (como Proprietário)\n`);
    } else {
      console.log('✅ Propriedades encontradas no Search Console:');
      sites.forEach(s => {
        console.log(`   - ${s.siteUrl} (Permissão: ${s.permissionLevel})`);
      });
      console.log('');
    }

    // Determine target site URL
    let targetSite = null;
    const foundExact = sites.find(s => s.siteUrl === SITE_URL_PREFIX || s.siteUrl === SITE_URL || s.siteUrl.includes('agenciavitrineweb'));
    if (foundExact) {
      targetSite = foundExact.siteUrl;
    } else {
      targetSite = SITE_URL_PREFIX;
    }

    console.log(`🎯 Operando sobre a propriedade: ${targetSite}\n`);

    // 2. Enviar Sitemap
    console.log('📤 2. Enviando e validando sitemap.xml no Google...');
    try {
      const sitemapUrl = 'https://agenciavitrineweb.com.br/sitemap.xml';
      await searchconsole.sitemaps.submit({
        siteUrl: targetSite,
        feedpath: sitemapUrl,
      });
      console.log(`✅ Sitemap enviado com sucesso: ${sitemapUrl}`);

      // Listar sitemaps
      const sitemapsRes = await searchconsole.sitemaps.list({ siteUrl: targetSite });
      const sitemapEntries = sitemapsRes.data.sitemap || [];
      console.log(`📋 Sitemaps registrados (${sitemapEntries.length}):`);
      sitemapEntries.forEach(sm => {
        console.log(`   - Caminho: ${sm.path}`);
        console.log(`     Último download: ${sm.lastDownloaded || 'Aguardando processamento'}`);
        console.log(`     Erros: ${sm.errors || 0}, Avisos: ${sm.warnings || 0}`);
      });
    } catch (err) {
      console.log(`⚠️ Alerta no envio de sitemap: ${err.message}`);
    }
    console.log('');

    // 3. Inspeção de Indexação de URLs (Search Console URL Inspection API)
    console.log('🔍 3. Inspecionando status de indexação das URLs...');
    const urlsToInspect = [
      'https://agenciavitrineweb.com.br/',
      'https://agenciavitrineweb.com.br/criacao-de-landing-page',
      'https://agenciavitrineweb.com.br/desenvolvimento-de-sistemas-web',
      'https://agenciavitrineweb.com.br/sistema-erp-sob-medida',
    ];

    for (const inspectionUrl of urlsToInspect) {
      try {
        const inspectRes = await searchconsole.urlInspection.index.inspect({
          requestBody: {
            inspectionUrl: inspectionUrl,
            siteUrl: targetSite,
          },
        });
        const result = inspectRes.data.inspectionResult?.indexStatusResult || {};
        console.log(`\n📄 URL: ${inspectionUrl}`);
        console.log(`   Status: ${result.coverageState || 'Desconhecido'}`);
        console.log(`   Veredito: ${result.verdict || 'Aguardando'}`);
        console.log(`   Último rastreamento: ${result.lastCrawlTime || 'Ainda não rastreado'}`);
        console.log(`   Indexado: ${result.indexingState || 'Pendente'}`);
      } catch (err) {
        console.log(`   URL: ${inspectionUrl} -> Status da inspeção: ${err.message}`);
      }
    }
    console.log('');

    // 4. Consultar Desempenho / Queries / Palavras-chave
    console.log('📊 4. Consultando dados de Desempenho & Palavras-chave (Search Analytics)...');
    try {
      const today = new Date();
      const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
      const startDate = thirtyDaysAgo.toISOString().split('T')[0];
      const endDate = today.toISOString().split('T')[0];

      const analyticsRes = await searchconsole.searchanalytics.query({
        siteUrl: targetSite,
        requestBody: {
          startDate: startDate,
          endDate: endDate,
          dimensions: ['query'],
          rowLimit: 20,
        },
      });

      const rows = analyticsRes.data.rows || [];
      if (rows.length === 0) {
        console.log(`ℹ️ Nenhuma query registrada nos últimos 30 dias (${startDate} a ${endDate}).`);
        console.log('   (Isso é normal para domínios novos nas primeiras 24 a 48h após a verificação).');
      } else {
        console.log(`🏆 Top ${rows.length} Palavras-chave encontradas:`);
        rows.forEach((r, idx) => {
          console.log(`   ${idx + 1}. "${r.keys[0]}" | Cliques: ${r.clicks} | Impressões: ${r.impressions} | CTR: ${(r.ctr * 100).toFixed(1)}% | Pos: ${r.position.toFixed(1)}`);
        });
      }
    } catch (err) {
      console.log(`⚠️ Alerta no relatório de pesquisa: ${err.message}`);
    }

    console.log('\n====================================================');
    console.log('🚀 EXECUÇÃO CONCLUÍDA');
    console.log('====================================================');

  } catch (error) {
    console.error('❌ Erro na execução do Search Console:', error);
  }
}

main();
