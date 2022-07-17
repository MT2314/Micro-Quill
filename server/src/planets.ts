export interface Planet {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

const planets: Planet[] = [
  {
    id: 1,
    name: 'Mercury',
    description:
      "Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon.",
    image: 'http://localhost:8080/mercury.png',
    price: 10.99,
  },
  {
    id: 2,
    name: 'Venus',
    description:
      'Venus is the second planet from the Sun and is Earth’s closest planetary neighbor.',
    image: 'http://localhost:8080/venus.png',
    price: 12.99,
  },
  {
    id: 3,
    name: 'Earth',
    description:
      'Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things.',
    image: 'http://localhost:8080/earth.png',
    price: 121.99,
  },
  {
    id: 4,
    name: 'Mars',
    description:
      'Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere.',
    image: 'http://localhost:8080/mars.png',
    price: 32.99,
  },
  {
    id: 5,
    name: 'Jupiter',
    description:
      'Jupiter has a long history of surprising scientists – all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe.',
    image: 'http://localhost:8080/jupiter.png',
    price: 33.99,
  },
  {
    id: 6,
    name: 'Saturn',
    description:
      'Saturn is the sixth planet from the Sun and the second-largest planet in our solar system.',
    image: 'http://localhost:8080/saturn.png',
    price: 122.99,
  },
  {
    id: 7,
    name: 'Uranus',
    description:
      'Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system.',
    image: 'http://localhost:8080/uranus.png',
    price: 32.99,
  },
  {
    id: 8,
    name: 'Neptune',
    description:
      'Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.',
    image: 'http://localhost:8080/neptune.png',
    price: 64.99,
  },
];

export default planets;
