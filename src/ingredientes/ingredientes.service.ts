import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { Ingrediente } from './entities/ingrediente.entity';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';

@Injectable()
export class IngredientesService {
  constructor(
    @InjectRepository(Ingrediente)
    private readonly ingredienteRepository: Repository<Ingrediente>,
  ) {}
create (CreateIngredienteDto: CreateIngredienteDto) {
  const nuevo =  this.ingredienteRepository.create(CreateIngredienteDto);
  return this.ingredienteRepository.save(nuevo);
}
@Get()
findAll() {
  return this.ingredienteRepository.find();
  }

  async update(id: number, CreateIngredienteDto: UpdateIngredienteDto) {
    await this.ingredienteRepository.update(id, CreateIngredienteDto);
    return this.ingredienteRepository.findOneBy({ id });
  }

  remove(id: number) {
    return this.ingredienteRepository.delete(id);
  }

}