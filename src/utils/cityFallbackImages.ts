/**
 * Provides unique fallback images for each city when the primary image fails to load
 */

// City-specific fallback images from Unsplash
const CITY_FALLBACK_IMAGES = {
  tokyo: {
    url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=100&h=100&fit=crop',
    alt: 'Tokyo skyline at sunset with Mount Fuji in the background'
  },
  osaka: {
    url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=100&h=100&fit=crop',
    alt: 'Osaka Castle with cherry blossoms and modern cityscape'
  },
  kyoto: {
    url: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=100&h=100&fit=crop',
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