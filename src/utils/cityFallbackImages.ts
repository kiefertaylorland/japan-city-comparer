/**
 * Provides unique fallback images for each city when the primary image fails to load
 */

// City-specific fallback images from Unsplash
const CITY_FALLBACK_IMAGES = {
  tokyo: {
    url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=100&h=100&fit=crop&auto=format&q=75',
    alt: 'Tokyo skyline at sunset with Mount Fuji in the background'
  },
  osaka: {
    url: 'https://images.unsplash.com/photo-1555652458-0a5808d7c8c5?w=100&h=100&fit=crop&auto=format&q=75', // Updated URL depicting Osaka Castle
    alt: 'Osaka Castle surrounded by cherry blossoms during spring'
  },
  kyoto: {
    url: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=100&h=100&fit=crop&auto=format&q=75',
    alt: 'Fushimi Inari shrine with thousands of red torii gates'
  }
};

/**
 * Get a city-specific fallback image URL
 * @param cityId - The ID of the city (tokyo, osaka, kyoto)
 * @returns The fallback image URL and alt text for the city
 */
export const getCityFallbackImage = (cityId: string) => {
  const fallback = CITY_FALLBACK_IMAGES[cityId.toLowerCase() as keyof typeof CITY_FALLBACK_IMAGES];
  
  // Return city-specific fallback if available, otherwise use Tokyo as default
  return fallback || CITY_FALLBACK_IMAGES.tokyo;
};