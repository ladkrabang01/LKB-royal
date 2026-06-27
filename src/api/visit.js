const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

const COUNTER_KEY = 'visitor_total_count';
const FALLBACK_NAMESPACE = 'latkrabang-learning-exhibition';
const FALLBACK_KEY = 'visits';

export default async function handler(req, res) {
  // จัดการ CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'POST') {
      if (UPSTASH_URL && UPSTASH_TOKEN) {
        // อัปเดตยอดเพิ่มทีละ 1 บน Upstash Redis
        const response = await fetch(`${UPSTASH_URL}/incr/${COUNTER_KEY}`, {
          headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
        });
        const data = await response.json();
        return res.status(200).json({ count: data.result });
      } else {
        // อัปเดตยอดเพิ่มทีละ 1 บน CounterAPI.dev (ใช้งานได้ทันทีไม่ต้องตั้งค่าฐานข้อมูล)
        const response = await fetch(`https://api.counterapi.dev/v1/${FALLBACK_NAMESPACE}/${FALLBACK_KEY}/up`);
        const data = await response.json();
        return res.status(200).json({ count: data.count });
      }
    }

    // GET — ดึงข้อมูลยอดผู้เข้าชมปัจจุบันโดยไม่เพิ่มตัวเลข
    if (UPSTASH_URL && UPSTASH_TOKEN) {
      const response = await fetch(`${UPSTASH_URL}/get/${COUNTER_KEY}`, {
        headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
      });
      const data = await response.json();
      return res.status(200).json({ count: parseInt(data.result || '0', 10) });
    } else {
      const response = await fetch(`https://api.counterapi.dev/v1/${FALLBACK_NAMESPACE}/${FALLBACK_KEY}`);
      const data = await response.json();
      return res.status(200).json({ count: data.count || 0 });
    }
  } catch (err) {
    console.error('Visitor counter error:', err);
    return res.status(500).json({ count: 0, error: 'Counter unavailable' });
  }
}
