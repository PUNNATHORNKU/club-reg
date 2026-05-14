// =============================================================
// supabase.js - Supabase Client Configuration
// วิธีใช้: แก้ค่า SUPABASE_URL และ SUPABASE_ANON_KEY ด้านล่าง
// =============================================================

const SUPABASE_URL      = 'https://hizoturzmhmofthskhny.supabase.co/rest/v1/';   // ← แก้ตรงนี้
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhpem90dXJ6bWhtb2Z0aHNraG55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3Mzg4MTksImV4cCI6MjA5NDMxNDgxOX0.hWUMk_4U2QCE6UD5FyO7xAcHJUv-Rurl7e9Ikw4iomM';                   // ← แก้ตรงนี้

// สร้าง Supabase client ด้วย CDN (ไม่ต้อง npm)
const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
