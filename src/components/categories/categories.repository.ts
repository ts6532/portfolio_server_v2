import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from '@database/entity.repository';
import { Category, CategoryDocument } from './schemas/category.schema';

export class CategoryRepository extends EntityRepository<CategoryDocument> {
  constructor(
    @InjectModel(Category.name) categoryModel: Model<CategoryDocument>,
  ) {
    super(categoryModel);
  }
}
