import { createClient } from "@supabase/supabase-js";

const URL = "https://cbahvigsmwonrkeduaij.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiYWh2aWdzbXdvbnJrZWR1YWlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5Mzk0NTEsImV4cCI6MjAzOTUxNTQ1MX0.VSFeeLTOBUV9uxiQUmxPLOPCpykhIt2I3DohNBJtnxg";

export const supabase = createClient(URL, API_KEY);
