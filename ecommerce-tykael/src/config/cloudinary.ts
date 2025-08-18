import { v2 as cloudinary } from 'cloudinary';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig({ path: '.env.development' });

// dotenvConfig({ path: '.env.development' });
// // Verificar que las variables de entorno se carguen correctamente
// console.log('Cloudinary Environment Variables:');
// console.log('CLOUD_NAME:', process.env.CLOUDINARY_CLOUD_NAME);
// console.log('API_KEY:', process.env.CLOUDINARY_API_KEY);
// console.log(
//   'API_SECRET:',
//   process.env.CLOUDINARY_API_SECRET ? '****' : 'undefined',
// );

if (
  !process.env.CLOUDINARY_CLOUD_NAME ||
  !process.env.CLOUDINARY_API_KEY ||
  !process.env.CLOUDINARY_API_SECRET
) {
  throw new Error('Faltan variables de entorno de Cloudinary');
}

export const CloudinaryConfig = {
  provide: 'CLOUDINARY',
  useFactory: () => {
    return cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  },
};
