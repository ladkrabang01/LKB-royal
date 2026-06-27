/**
 * Vercel Serverless Function — Visitor Counter
 *
 * Uses Upstash Redis REST API to atomically increment and read a counter.
 *
 * Required environment variables (set in Vercel dashboard):
 *   UPSTASH_REDIS_REST_URL   — e.g. https://abc-123.upstash.io
 *   UPSTASH_REDIS_REST_TOKEN — the bearer token from Upstash console
 */

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

const COUNTER_KEY = 'visitor_total_count';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Guard: Upstash not configured
  if (!UPSTASH_URL || !UPSTASH_TOKEN) {
    return res.status(200).json({ count: 0, error: 'Counter not configured' });
  }

  try {
    if (req.method === 'POST') {
      // Atomically increment the counter by 1
      const response = await fetch(`${UPSTASH_URL}/incr/${COUNTER_KEY}`, {
        headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
      });
      const data = await response.json();
      return res.status(200).json({ count: data.result });
    }

    // GET — read current count without incrementing
    const response = await fetch(`${UPSTASH_URL}/get/${COUNTER_KEY}`, {
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
    });
    const data = await response.json();
    return res.status(200).json({ count: parseInt(data.result || '0', 10) });
  } catch (err) {
    console.error('Visitor counter error:', err);
    return res.status(500).json({ count: 0, error: 'Counter unavailable' });
  }
}
