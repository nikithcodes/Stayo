import React from 'react';
import { createClient } from '@supabase/supabase-js';

const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxja2VuamtmZHlyb3Vxc2d1dm91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NDkwNzgsImV4cCI6MjA2NTEyNTA3OH0.-9uOUmIRKQYFSYtfNMz8HOuwU-4nyPwSULuaul8HG5Y"
const supabaseUrl = 'https://lckenjkfdyrouqsguvou.supabase.co';
const supabase = createClient(supabaseUrl, anon_key);
export default supabase;