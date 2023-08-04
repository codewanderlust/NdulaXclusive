const BASE_URL = 'http://localhost:8000';

export async function getSneakers() {
  const res = await fetch(`${BASE_URL}/sneakers`);
  const data = await res.json();
  return data;
}

export async function getSneakerDetails(id) {
  const res = await fetch(`${BASE_URL}/sneakers/${id}`);
  const data = await res.json();
  return data;
}
