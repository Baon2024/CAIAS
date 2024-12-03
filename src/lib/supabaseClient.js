import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase credentials
const supabaseUrl = 'https://rxbqkevghsjdhbotyadk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4YnFrZXZnaHNqZGhib3R5YWRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxMjgxMTcsImV4cCI6MjA0NzcwNDExN30.bwWTkxOfLCm42tREMKD5R5a7J-R2EYkgBtNboyUx45Q';

export const supabase = createClient(supabaseUrl, supabaseKey);
