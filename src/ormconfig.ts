import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'mysql',
  host: '172.17.0.1',
  port: 3306,
  username: 'root',
  password: '#ccarj#',
  database: 'my_nestjs_project',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Obs: use synchronize: true somente em desenvolvimento.
};
