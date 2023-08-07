import supabase from './supabase';

export async function addSneakerToCart(sneakerId) {
  const { data, error } = await supabase
    .from('cart')
    .insert({ sneakerId: sneakerId });

  if (error) {
    console.error(error);
    throw new Error('Sneaker could not be added to cart');
  }
  return data;
}
