export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // POST /usage - 记录使用数据
    if (url.pathname === '/usage' && request.method === 'POST') {
      try {
        const body = await request.json();
        
        // 保存到 KV
        const key = `usage_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        await env.AI_PET_USAGE.put(key, JSON.stringify({
          ...body,
          createdAt: new Date().toISOString(),
          ip: request.headers.get('CF-Connecting-IP') || 'unknown',
        }));

        // 更新计数器
        let count = await env.AI_PET_USAGE.get('total_count');
        count = count ? parseInt(count) + 1 : 1;
        await env.AI_PET_USAGE.put('total_count', String(count));

        return new Response(JSON.stringify({ 
          success: true, 
          totalCount: count 
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    }

    // GET /stats - 获取统计数据
    if (url.pathname === '/stats' && request.method === 'GET') {
      const count = await env.AI_PET_USAGE.get('total_count') || '0';
      return new Response(JSON.stringify({ 
        totalGenerations: parseInt(count),
        updatedAt: new Date().toISOString()
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // 首页
    return new Response(`AI Pet Portal API
    POST /usage - Record usage
    GET /stats - Get stats`, {
      headers: { ...corsHeaders, 'Content-Type': 'text/plain' }
    });
  }
};
