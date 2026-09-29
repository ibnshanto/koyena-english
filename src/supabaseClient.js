import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zugpygykxghwisikckmt.supabase.co'
const supabaseAnonKey = 'sb_publishable_tiyEkhA1BpCRHrIvP2LS0A_VMpHDerj'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
