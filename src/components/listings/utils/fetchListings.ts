export interface Property {
  id: number;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area_sqft: number;
  image: string;
  description: string;
  type: string;
  garages: number;
}

export async function fetchAllListings(): Promise<Property[]> {
  const response = await fetch("/properties.json");
  if (!response.ok) {
    throw new Error("Failed to fetch property listings");
  }
  return response.json();
}

export async function fetchListingById(
  id: number
): Promise<Property | undefined> {
  const listings = await fetchAllListings();
  return listings.find((property) => property.id === id);
}
