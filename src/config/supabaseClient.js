import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ebktthjypikozcomiprt.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVia3R0aGp5cGlrb3pjb21pcHJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNTgyMzQsImV4cCI6MTk5MzkzNDIzNH0.HoPBO-EujbggQpgQIGv_UVIBS7kqKT303uQklOEojzQ';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
