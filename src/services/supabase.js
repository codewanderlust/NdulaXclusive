//after running npm install we created this file and pasted the code from supabase
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fgfppclstifnqgadpqux.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZnBwY2xzdGlmbnFnYWRwcXV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExNzMyNzksImV4cCI6MjAwNjc0OTI3OX0.N65nrumA797K5pdfPriMiX1giQoozuRjkoFiId1urt0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
