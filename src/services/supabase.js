import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pfjamqblbexxdwqbbguk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmamFtcWJsYmV4eGR3cWJiZ3VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4MzAxNTIsImV4cCI6MjAwODQwNjE1Mn0.YKiQcRShHQNMWc3MJg9ZEBBQnz0ZVUYmy_Wo5C863A8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
