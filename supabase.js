// =============================================================
// supabase.js - Supabase Client Configuration
// วิธีใช้: แก้ค่า SUPABASE_URL และ SUPABASE_ANON_KEY ด้านล่าง
// =============================================================

const SUPABASE_URL      = 'https://hizoturzmhmofthskhny.supabase.co/rest/v1/';   // ← แก้ตรงนี้
const SUPABASE_ANON_KEY = 'sb_publishable_j3uOb9Omb5iNxQX5WfRCWg_Qdevjz9a';                   // ← แก้ตรงนี้

// สร้าง Supabase client ด้วย CDN (ไม่ต้อง npm)
const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
