import { supabase } from "@/lib/supabaseClient";


export async function fetchEventsToDisplaySupabase() {
  
  
let { data: event, error } = await supabase
.from('event')
.select('*')
        
  

  if (error) {
    console.error('Error fetching events:', error);
    return [];
  }

  return data;
}
