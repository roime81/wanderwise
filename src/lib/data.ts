import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  slug: string;
  description: string;
  longDescription: string;
  image: ImagePlaceholder;
  reviews: Review[];
}

const getImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find(img => img.id === id);
  if (!image) {
    throw new Error(`Image with id "${id}" not found.`);
  }
  return image;
};

const reviews: { [key: string]: Review[] } = {
  paris: [
    { id: 1, author: 'Alex Johnson', avatar: 'https://i.pravatar.cc/40?u=alex', rating: 5, comment: 'Absolutely magical! The Eiffel Tower at night is a must-see.', date: '2023-10-15' },
    { id: 2, author: 'Maria Garcia', avatar: 'https://i.pravatar.cc/40?u=maria', rating: 4, comment: 'Great city with amazing food and art. A bit crowded, though.', date: '2023-09-22' },
  ],
  kyoto: [
    { id: 1, author: 'Kenji Tanaka', avatar: 'https://i.pravatar.cc/40?u=kenji', rating: 5, comment: 'Peaceful and beautiful. The temples are serene.', date: '2023-11-01' },
  ],
  'new-york': [
     { id: 1, author: 'Samantha Miller', avatar: 'https://i.pravatar.cc/40?u=samantha', rating: 5, comment: 'The city that never sleeps! So much energy and so many things to do.', date: '2023-08-30' },
  ],
  santorini: [
    { id: 1, author: 'Chloe Dubois', avatar: 'https://i.pravatar.cc/40?u=chloe', rating: 5, comment: 'Picture perfect sunsets. Truly a romantic getaway.', date: '2023-07-18' },
  ],
  'machu-picchu': [
    { id: 1, author: 'Javier Rossi', avatar: 'https://i.pravatar.cc/40?u=javier', rating: 5, comment: 'A breathtaking experience. The hike was worth it.', date: '2023-06-05' },
  ],
  bali: [
     { id: 1, author: 'Ayu Lestari', avatar: 'https://i.pravatar.cc/40?u=ayu', rating: 4, comment: 'A beautiful island with a rich culture. Can be touristy in some areas.', date: '2023-09-10' },
  ]
};

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Paris',
    country: 'France',
    slug: 'paris',
    description: 'The city of love, art, and fashion.',
    longDescription: 'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.',
    image: getImage('paris'),
    reviews: reviews.paris,
  },
  {
    id: '2',
    name: 'Kyoto',
    country: 'Japan',
    slug: 'kyoto',
    description: 'Ancient temples and tranquil gardens.',
    longDescription: 'Kyoto, once the capital of Japan, is a city on the island of Honshu. It\'s famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses. It’s also known for formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes, and geisha, female entertainers often found in the Gion district.',
    image: getImage('kyoto'),
    reviews: reviews.kyoto,
  },
  {
    id: '3',
    name: 'New York City',
    country: 'USA',
    slug: 'new-york',
    description: 'The iconic, bustling metropolis.',
    longDescription: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.',
    image: getImage('new-york'),
    reviews: reviews['new-york'],
  },
  {
    id: '4',
    name: 'Santorini',
    country: 'Greece',
    slug: 'santorini',
    description: 'Stunning sunsets over the Aegean Sea.',
    longDescription: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.',
    image: getImage('santorini'),
    reviews: reviews.santorini,
  },
  {
    id: '5',
    name: 'Machu Picchu',
    country: 'Peru',
    slug: 'machu-picchu',
    description: 'Mysterious Incan citadel in the Andes.',
    longDescription: 'Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it’s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views. Its exact former use remains a mystery.',
    image: getImage('machu-picchu'),
    reviews: reviews['machu-picchu'],
  },
  {
    id: '6',
    name: 'Bali',
    country: 'Indonesia',
    slug: 'bali',
    description: 'Volcanic mountains and idyllic beaches.',
    longDescription: 'Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns. The island is also known for its yoga and meditation retreats.',
    image: getImage('bali'),
    reviews: reviews.bali,
  },
];

export const getDestinationBySlug = (slug: string): Destination | undefined => {
  return destinations.find(dest => dest.slug === slug);
};
