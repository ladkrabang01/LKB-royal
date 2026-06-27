const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useState, useEffect } from 'react';

export default function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const sessionId = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

    // Increment the counter on every page load (+1)
    db.entities.Visitor.create({
      visit_date: today,
      session_id: sessionId,
    })
      .then(() => db.entities.Visitor.list('-created_date', 1000))
      .then((records) => {
        setCount(records.length);
      })
      .catch(() => setCount(null));
  }, []);

  if (count === null) return null;

  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
      style={{
        background: 'rgba(201,168,76,0.08)',
        border: '1px solid rgba(201,168,76,0.25)',
      }}
      aria-label="จำนวนผู้เข้าชมเว็บไซต์"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
      <span
        className="text-white/70 font-light tracking-wide"
        style={{ fontSize: '0.8rem' }}
      >
        ผู้เข้าชม
      </span>
      <span
        className="text-[#C9A84C] font-semibold tabular-nums"
        style={{ fontSize: '0.9rem', letterSpacing: '0.05em' }}
      >
        {count.toLocaleString('th-TH')}
      </span>
      <span className="text-white/70 font-light" style={{ fontSize: '0.8rem' }}>
        ครั้ง
      </span>
    </div>
  );
}