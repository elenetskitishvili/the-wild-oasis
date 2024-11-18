import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fdynnqlewivodiidzfst.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkeW5ucWxld2l2b2RpaWR6ZnN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwMjg4OTIsImV4cCI6MjA0NTYwNDg5Mn0.WOGN0FLHOYVRJsHrUR6EDIkGdRGozqW7asbLxfOZtCU";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
