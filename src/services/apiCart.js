import supabase from './supabase';

export async function createCart(newCartItem) {
  const { data, error } = await supabase.from('cart').insert([newCartItem]);

  if (error) {
    console.error(error);
    throw new Error('Sneaker could not be added to cart');
  }

  return data;
}
