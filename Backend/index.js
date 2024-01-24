
let { data: appointments, error } = await supabase
  .from('appointments')
  .select('*')
          


let { data: appointments, error } = await supabase
  .from('appointments')
  .select('some_column,other_column')
  


let { data: appointments, error } = await supabase
  .from('appointments')
  .select(`
    some_column,
    other_table (
      foreign_key
    )
  `)


let { data: appointments, error } = await supabase
  .from('appointments')
  .select('*')
  .range(0, 9)
          


let { data: appointments, error } = await supabase
  .from('appointments')
  .select("*")

  // Filters
  .eq('column', 'Equal to')
  .gt('column', 'Greater than')
  .lt('column', 'Less than')
  .gte('column', 'Greater than or equal to')
  .lte('column', 'Less than or equal to')
  .like('column', '%CaseSensitive%')
  .ilike('column', '%CaseInsensitive%')
  .is('column', null)
  .in('column', ['Array', 'Values'])
  .neq('column', 'Not equal to')

  // Arrays
  .cs('array_column', ['array', 'contains'])
  .cd('array_column', ['contained', 'by'])
          


const { data, error } = await supabase
  .from('appointments')
  .insert([
    { some_column: 'someValue', other_column: 'otherValue' },
  ])
  .select()
          


const { data, error } = await supabase
  .from('appointments')
  .insert([
    { some_column: 'someValue' },
    { some_column: 'otherValue' },
  ])
  .select()
          


const { data, error } = await supabase
  .from('appointments')
  .update({ other_column: 'otherValue' })
  .eq('some_column', 'someValue')
  .select()
          


const channels = supabase.channel('custom-all-channel')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'appointments' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()


const channels = supabase.channel('custom-insert-channel')
  .on(
    'postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'appointments' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()


const channels = supabase.channel('custom-update-channel')
  .on(
    'postgres_changes',
    { event: 'UPDATE', schema: 'public', table: 'appointments' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()


const channels = supabase.channel('custom-delete-channel')
  .on(
    'postgres_changes',
    { event: 'DELETE', schema: 'public', table: 'appointments' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()



const channels = supabase.channel('custom-filter-channel')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'appointments', filter: 'some_column=eq.some_value' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()