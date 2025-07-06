import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // <-- AÑADE ESTA LÍNEA
import { Ingrediente } from './entities/ingrediente.entity'; // <-- AÑADE ESTA LÍNEA
import { IngredientesService } from './ingredientes.service';
import { IngredientesController } from './ingredientes.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ingrediente])
  ],
  controllers: [IngredientesController],
  providers: [IngredientesService],
})
export class IngredientesModule {}
