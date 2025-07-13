export const cityData = {
  tokyo: {
    name: "Tokyo",
    subtitle: "The Vibrant Metropolis",
    costIndex: 8.5,
    population: "13.9M",
    topAttractions: [
      "Shibuya Crossing",
      "Tokyo Tower",
      "Senso-ji Temple",
      "Imperial Palace",
      "Harajuku"
    ],
    foodScene: "Diverse global cuisine with countless Michelin-starred restaurants",
    transport: "Extensive subway and rail network covering the entire metropolitan area",
    culture: "Perfect blend of ultra-modern and traditional Japanese culture",
    nightlife: "World-class nightlife with entertainment districts like Shinjuku and Shibuya",
    bestFor: ["First-time visitors", "Food enthusiasts", "Night owls", "Shopping lovers"],
    description: "Japan's bustling capital offers an incredible mix of traditional temples and cutting-edge technology. From the serene gardens of the Imperial Palace to the neon-lit streets of Shinjuku, Tokyo provides endless discoveries for every type of traveler.",
    image: "/images/tokyo.jpg",
    categories: {
      cost: { score: 8.5, description: "High cost but excellent value for experiences" },
      attractions: { score: 9.5, description: "Endless world-class attractions and landmarks" },
      food: { score: 9.8, description: "Unparalleled dining scene from street food to Michelin stars" },
      transport: { score: 9.0, description: "World's most efficient public transportation system" },
      culture: { score: 9.0, description: "Dynamic fusion of traditional and ultra-modern culture" },
      nightlife: { score: 9.5, description: "24/7 entertainment districts and vibrant nightlife" }
    }
  },
  osaka: {
    name: "Osaka",
    subtitle: "Japan's Kitchen",
    costIndex: 7.0,
    population: "2.7M",
    topAttractions: [
      "Osaka Castle",
      "Dotonbori District",
      "Universal Studios Japan",
      "Kuromon Ichiba Market",
      "Sumiyoshi Taisha"
    ],
    foodScene: "Street food paradise and birthplace of many Japanese comfort foods",
    transport: "Efficient subway system and excellent connections to other Kansai cities",
    culture: "Down-to-earth merchant culture with friendly locals and comedy traditions",
    nightlife: "Lively izakaya culture and entertainment in Dotonbori and Shinsekai",
    bestFor: ["Food lovers", "Budget travelers", "Comedy fans", "Authentic experiences"],
    description: "Known as 'Japan's Kitchen,' Osaka is famous for its incredible food culture, friendly locals, and more affordable prices. The city offers a more relaxed atmosphere while still providing rich cultural experiences and modern attractions.",
    image: "/images/osaka.jpg",
    categories: {
      cost: { score: 7.0, description: "More affordable than Tokyo with great value dining" },
      attractions: { score: 8.0, description: "Historic castle, modern theme parks, and vibrant districts" },
      food: { score: 9.5, description: "Street food capital with amazing local specialties" },
      transport: { score: 8.5, description: "Good subway system with easy access to Kyoto and Nara" },
      culture: { score: 8.5, description: "Authentic merchant culture with comedy and food traditions" },
      nightlife: { score: 8.5, description: "Famous izakaya scene and entertainment districts" }
    }
  },
  kyoto: {
    name: "Kyoto",
    subtitle: "The Cultural Heart",
    costIndex: 6.5,
    population: "1.5M",
    topAttractions: [
      "Fushimi Inari Shrine",
      "Kinkaku-ji (Golden Pavilion)",
      "Arashiyama Bamboo Grove",
      "Gion District",
      "Kiyomizu-dera Temple"
    ],
    foodScene: "Traditional kaiseki cuisine and refined Kyoto specialties",
    transport: "Comprehensive bus system and limited subway connecting major districts",
    culture: "Traditional Japanese culture preserved with geisha districts and ancient temples",
    nightlife: "Quieter evening scene focused on traditional tea houses and intimate bars",
    bestFor: ["History buffs", "Culture seekers", "Temple enthusiasts", "Traditional experiences"],
    description: "The former imperial capital preserves Japan's traditional culture like nowhere else. With over 2,000 temples and shrines, traditional geisha districts, and stunning gardens, Kyoto offers a serene escape into Japan's cultural heritage.",
    image: "/images/kyoto.jpg",
    categories: {
      cost: { score: 6.5, description: "Most affordable of the three cities with reasonable accommodation" },
      attractions: { score: 9.0, description: "Incredible temples, shrines, and traditional districts" },
      food: { score: 8.5, description: "Refined traditional cuisine and unique Kyoto specialties" },
      transport: { score: 7.0, description: "Good bus network but fewer subway lines than Tokyo/Osaka" },
      culture: { score: 10.0, description: "Best preserved traditional Japanese culture and heritage" },
      nightlife: { score: 6.5, description: "Quieter scene with traditional tea houses and cozy bars" }
    }
  }
};

export const comparisonCategories = [
  {
    id: 'cost',
    name: 'Cost',
    description: 'Overall cost of living and travel expenses',
    icon: '💰'
  },
  {
    id: 'attractions',
    name: 'Attractions',
    description: 'Tourist sites, landmarks, and points of interest',
    icon: '🏯'
  },
  {
    id: 'food',
    name: 'Food',
    description: 'Dining scene, local specialties, and culinary experiences',
    icon: '🍜'
  },
  {
    id: 'transport',
    name: 'Transport',
    description: 'Public transportation quality and accessibility',
    icon: '🚅'
  },
  {
    id: 'culture',
    name: 'Culture',
    description: 'Traditional and modern cultural experiences',
    icon: '⛩️'
  },
  {
    id: 'nightlife',
    name: 'Nightlife',
    description: 'Evening entertainment, bars, and nighttime activities',
    icon: '🌃'
  }
];
