import { Injectable } from '@nestjs/common';

type Product = {
  id: string;

  name: string;

  description: string;

  price: number;

  stock: boolean;

  imgUrl: string;
};

const products: Product[] = [
  {
    id: 'p1',
    name: 'Fender Stratocaster',
    description:
      'Guitarra eléctrica icónica con cuerpo de aliso, mástil de arce y tres pastillas simples.',
    price: 1299.99,
    stock: true,
    imgUrl: 'https://example.com/images/fender-stratocaster.jpg',
  },
  {
    id: 'p2',
    name: 'Yamaha P-125',
    description:
      'Piano digital de 88 teclas con acción de martillo graduado y sonidos realistas.',
    price: 649.99,
    stock: true,
    imgUrl: 'https://example.com/images/yamaha-p125.jpg',
  },
  {
    id: 'p3',
    name: 'Pearl Roadshow Drum Set',
    description:
      'Batería acústica completa de 5 piezas, ideal para principiantes y estudiantes.',
    price: 499.0,
    stock: false,
    imgUrl: 'https://example.com/images/pearl-roadshow.jpg',
  },
  {
    id: 'p4',
    name: 'Selmer Alto Saxophone',
    description:
      'Saxofón alto profesional con sonido cálido y mecanismo suave.',
    price: 1899.5,
    stock: true,
    imgUrl: 'https://example.com/images/selmer-saxophone.jpg',
  },
  {
    id: 'p5',
    name: 'Ibanez SR300E',
    description:
      'Bajo eléctrico activo de 4 cuerdas con ecualizador de 3 bandas y cuerpo ergonómico.',
    price: 349.99,
    stock: false,
    imgUrl: 'https://example.com/images/ibanez-sr300e.jpg',
  },
];
@Injectable()
export class ProductsRepository {
  async getProducts() {
    return await products;
  }
}
