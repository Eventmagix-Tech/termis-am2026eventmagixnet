import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jhpdaiyjaemnnsxomgmq.supabase.co';
const supabaseAnonKey = 'sb_publishable_s3lbgfgECM0NJ9p81ME0PQ__nUtzSc2';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
