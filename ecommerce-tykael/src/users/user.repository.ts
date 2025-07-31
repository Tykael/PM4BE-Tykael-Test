import { Injectable } from '@nestjs/common';

type User = {
  id: string;

  email: string;

  name: string;

  password: string;

  address: string;

  phone: string;

  country?: string | undefined;

  city?: string | undefined;
};

const users: User[] = [
  {
    id: '1',
    email: 'freddie@queenmail.com',
    name: 'Freddie Mercury',
    password: 'bohemianRhapsody123',
    address: 'Garden Lodge, Logan Place 1',
    phone: '+44 20 7946 0958',
    country: 'United Kingdom',
    city: 'London',
  },
  {
    id: '2',
    email: 'beyonce@halo.com',
    name: 'Beyoncé Knowles',
    password: 'queenBee!2024',
    address: '1234 Music Blvd',
    phone: '+1 713 555 0198',
    country: 'USA',
    city: 'Houston',
  },
  {
    id: '3',
    email: 'mozart@classical.com',
    name: 'Wolfgang Amadeus Mozart',
    password: 'requiemK626',
    address: 'Getreidegasse 9',
    phone: '+43 662 84 31 81',
    country: 'Austria',
    city: 'Salzburg',
  },
  {
    id: '4',
    email: 'shakira@hipsdontlie.org',
    name: 'Shakira Mebarak',
    password: 'wakaWaka2022',
    address: 'Calle del Ritmo 45',
    phone: '+57 1 555 0199',
    country: 'Colombia',
    city: 'Barranquilla',
  },
  {
    id: '5',
    email: 'bob@marleyroots.com',
    name: 'Bob Marley',
    password: 'noWomanNoCry',
    address: '56 Hope Road',
    phone: '+1 876 555 0123',
    country: 'Jamaica',
    city: 'Kingston',
  },
];

@Injectable()
export class UsersRepository {
  async getUsers() {
    return await users;
  }
}
