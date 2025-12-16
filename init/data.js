const sampleListings = [
    
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and direct access to the beach.",
    image: {
      filename: "listingimage1",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60"
    },
    price: 1500,
    location: "Malibu",
    country: "United States"
  },

  {
    title: "Modern Mountain Cabin",
    description: "A peaceful retreat surrounded by pine forests and mountain views. Perfect for hiking and relaxation.",
    image: {
      filename: "listingimage2",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 1200,
    location: "Aspen",
    country: "United States"
  },

  {
    title: "Urban Apartment Loft",
    description: "Stylish loft apartment located in the heart of the city with great nightlife and food spots nearby.",
    image: {
      filename: "listingimage3",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60"
    },
    price: 900,
    location: "New York",
    country: "United States"
  },

  {
    title: "Luxury Desert Villa",
    description: "A premium villa with a private pool in the middle of serene desert landscapes.",
    image: {
      filename: "listingimage4",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
    },
    price: 2500,
    location: "Dubai",
    country: "UAE"
  },

  {
    title: "Traditional Japanese Ryokan",
    description: "Experience authentic Japanese culture in this peaceful ryokan featuring hot springs.",
    image: {
      filename: "listingimage5",
      url: "https://images.unsplash.com/photo-1560464024-54e8a5d0c36c?auto=format&fit=crop&w=800&q=60"
    },
    price: 800,
    location: "Kyoto",
    country: "Japan"
  },

  {
    title: "Tropical Beach Hut",
    description: "A cozy bamboo hut just steps away from crystal-clear tropical waters.",
    image: {
      filename: "listingimage11",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    price: 950,
    location: "Goa",
    country: "India"
  },

  {
    title: "Elegant Riverside Villa",
    description: "A peaceful villa located beside a gentle flowing river, ideal for meditation and long walks.",
    image: {
      filename: "listingimage12",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 2000,
    location: "Kerala",
    country: "India"
  },

  {
    title: "Skyline Penthouse Suite",
    description: "A luxury penthouse with a breathtaking panoramic view of the entire city skyline.",
    image: {
      filename: "listingimage13",
      url: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    location: "Singapore",
    country: "Singapore"
  },

  {
    title: "Historic Castle Stay",
    description: "Live like royalty in this preserved medieval castle featuring stone halls and scenic landscapes.",
    image: {
      filename: "listingimage14",
      url: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Edinburgh",
    country: "Scotland"
  },

  {
    title: "Forest Treehouse Cabin",
    description: "A magical treehouse suspended among ancient trees with stunning elevated views.",
    image: {
      filename: "listingimage15",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60"
    },
    price: 1250,
    location: "Portland",
    country: "United States"
  },

  {
    title: "Traditional Moroccan Riad",
    description: "A colorful riad with mosaic tiles, a central courtyard, and authentic Moroccan cuisine.",
    image: {
      filename: "listingimage16",
      url: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=60"
    },
    price: 1100,
    location: "Marrakech",
    country: "Morocco"
  },

  {
    title: "Modern Glass House",
    description: "A futuristic home made entirely of glass, offering natural light and extreme style.",
    image: {
      filename: "listingimage17",
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=60"
    },
    price: 2800,
    location: "Los Angeles",
    country: "United States"
  },

  {
    title: "Cozy Scandinavian Cabin",
    description: "A warm cabin with minimalist Scandinavian interiors, surrounded by snow-covered trees.",
    image: {
      filename: "listingimage18",
      url: "https://images.unsplash.com/photo-1508330570230-742692dd0c1a?auto=format&fit=crop&w=800&q=60"
    },
    price: 1000,
    location: "Oslo",
    country: "Norway"
  },

  {
    title: "Mediterranean Cliff Villa",
    description: "A stunning villa perched on a cliff overlooking turquoise Mediterranean waters.",
    image: {
      filename: "listingimage19",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 2600,
    location: "Santorini",
    country: "Greece"
  },

  {
    title: "Modern Studio Apartment",
    description: "A clean and stylish studio perfect for business travelers wanting quick access to transport.",
    image: {
      filename: "listingimage20",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60"
    },
    price: 500,
    location: "Berlin",
    country: "Germany"
  },

  {
    title: "Safari Jungle Lodge",
    description: "Experience wildlife up close in a luxury lodge located deep inside the jungle.",
    image: {
      filename: "listingimage21",
      url: "https://images.unsplash.com/photo-1523395245563-47c1f4b0b078?auto=format&fit=crop&w=800&q=60"
    },
    price: 1800,
    location: "Nairobi",
    country: "Kenya"
  },

  {
    title: "Artistic Bohemian Home",
    description: "A colorful boho-style home filled with artwork, plants, and creative décor.",
    image: {
      filename: "listingimage22",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 850,
    location: "Barcelona",
    country: "Spain"
  },

  {
    title: "Quiet Countryside Cottage",
    description: "A peaceful cottage surrounded by open fields, ideal for digital detox.",
    image: {
      filename: "listingimage23",
      url: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800&q=60"
    },
    price: 650,
    location: "Yorkshire",
    country: "United Kingdom"
  },

  {
    title: "Mountain View Tent Stay",
    description: "A luxury tent with breathtaking mountain views and starry night skies.",
    image: {
      filename: "listingimage24",
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60"
    },
    price: 400,
    location: "Manali",
    country: "India"
  },

  {
    title: "Beachfront Glass Apartment",
    description: "A transparent glass-front apartment offering uninterrupted ocean views.",
    image: {
      filename: "listingimage25",
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=60"
    },
    price: 1700,
    location: "Sydney",
    country: "Australia"
  }



 

]

module.exports = { data: sampleListings };