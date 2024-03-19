import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://izctjgjzptzazmuubufy.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6Y3RqZ2p6cHR6YXptdXVidWZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3Nzk3ODksImV4cCI6MjAyMDM1NTc4OX0.fL0Hc3RtYmNBzBlm6KfjEMH3PyaiXLF0iUHzWZHb7E8';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
