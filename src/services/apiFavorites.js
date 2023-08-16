import supabase from './supabase';

export async function getFavorites() {
  const { data, error } = await supabase.from('favorites').select('*');

  if (error) {
    console.error(error);
    throw new Error('Favorites could not be loaded');
  }

  console.log(data, 'data from getFavorites');
  return data;
}

export async function createFavorite(newFavorite) {
  const { data, error } = await supabase
    .from('favorites')
    .insert([newFavorite]);
  if (error) {
    console.log(error);

    //here since and item is already in the database, we want to update it instead of creating a new one, we targeted the exact error message
    //and we are throwing a new error to be handled in the component
    if (
      error?.message.includes('duplicate key value violates unique constraint')
    ) {
      throw new Error('DuplicateKeyError'); // Throw a specific error for duplicate key
    }

    throw new Error('Favorite could not be created');
  }

  return data;
}

export async function deleteFavorite(favoriteId) {
  const { data, error } = await supabase
    .from('favorites')
    .delete()
    .eq('favoriteId', favoriteId);

  if (error) {
    console.error(error);
    throw new Error('Favorite could not be deleted');
  }

  console.log * (data, 'data from deleteFavorite');
  return data;
}
