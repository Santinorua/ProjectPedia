import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mmcjkagazkotgxfjrckq.supabase.co";
const supabaseKey = "sb_publishable_T5b2mfKCRSRai7ynNNOvqQ_tRuu6C9f";
export const supabase = createClient(supabaseUrl, supabaseKey);
