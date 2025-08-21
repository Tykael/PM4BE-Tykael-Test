import ENV from './enviroment';
import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const config = {
  type: 'postgres',
  database: ENV.DB_NAME,
  host: ENV.DB_HOST || 'localhost',
  port: ENV.DB_PORT as unknown as number,
  username: ENV.DB_USERNAME,
  password: ENV.DB_PASSWORD,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  logging: false,
  synchronize: true,
  dropSchema: true,
};

export const typeOrmConfig = registerAs('typeorm', () => config);

export const connectionStatus = new DataSource(config as DataSourceOptions);

export const connectionSource = new DataSource(config as DataSourceOptions);
