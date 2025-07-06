import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { Ingrediente } from './ingredientes/entities/ingrediente.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'prueba 1',
      entities: [Ingrediente],
      synchronize: true, 
    }),
    UsersModule,
    AuthModule,
    IngredientesModule,
  ],
})
export class AppModule {}

