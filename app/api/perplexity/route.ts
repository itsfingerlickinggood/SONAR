// Perplexity API handler
export async function GET() {
  const apiKey = process.env.PERPLEXITY_API_KEY;
  // Example: fetch from Perplexity API (replace with real endpoint)
  // const res = await fetch('https://api.perplexity.ai/news', { headers: { 'Authorization': `Bearer ${apiKey}` } });
  // const data = await res.json();
  return new Response(JSON.stringify({ message: 'Perplexity API', apiKey: !!apiKey }), { status: 200 });
}

export async function POST(req: Request) {
  const apiKey = process.env.PERPLEXITY_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Missing Perplexity API key' }), { status: 500 });
  }

  const body = await req.json();
  const userPrompt = body.prompt || 'How many stars are there in our galaxy?';

  const response = await fetch('https://api.perplexity.ai/chat/completions', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'sonar-pro',
      messages: [
        { role: 'system', content: 'Be precise and concise.' },
        { role: 'user', content: userPrompt },
      ],
    }),
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), { status: response.status });
}
