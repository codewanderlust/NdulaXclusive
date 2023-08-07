import supabase from './supabase';

export async function getSneakers() {
  const { data, error } = await supabase.from('sneakers').select('*');

  if (error) {
    console.error(error);
    throw new Error('Sneakers could not be loaded');
  }

  return data;
}

export async function getSneakerDetails(id) {
  const { data, error } = await supabase
    .from('sneakers')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Sneaker could not be loaded');
  }
  return data;
}
