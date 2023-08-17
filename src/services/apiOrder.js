import supabase from './supabase';

export async function getOrder() {
  const { data, error } = await supabase
    .from('order')
    .select('*')
    .order('created_at', { ascending: false }) // Assuming 'created_at' is the timestamp field
    .limit(1);

  if (error) {
    console.error(error);
    throw new Error('Order could not be fetched');
  }
  return data;
}

// passing the newOrder as as an array will work since the field in the form are the same as the ones on the table
export async function createOrder(newOrder) {
  const { data, error } = await supabase.from('order').insert([newOrder]);

  if (error) {
    console.error(error);
    throw new Error('Order could not be created');
  }
  return data;
}
