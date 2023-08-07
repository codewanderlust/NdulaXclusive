import supabase from './supabase';

export async function addSneakerToCart(sneakerDetails) {
  const { name, quantity, price } = sneakerDetails;
  const totalPrice = quantity * price;

  const { data, error } = await supabase
    .from('cart')
    .insert([
      {
        sneakerId: sneakerDetails.id,
        name,
        quantity,
        price,
        totalPrice,
      },
    ])
    .select();

  if (error) {
    console.error(error);
    throw new Error('Sneaker could not be added to cart');
  }

  return data;
}
