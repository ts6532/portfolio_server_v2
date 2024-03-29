import { Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type BaseDocument = Base & Document;

@Schema({
  toJSON: {
    virtuals: true,
    versionKey: false,
    flattenObjectIds: true,
    transform: function (doc: any, ret: any) {
      delete ret._id;
      return ret;
    },
  },
})
export class Base {
  id: string;
}

const BaseSchema = SchemaFactory.createForClass(Base);

BaseSchema.virtual('id').get(function (this: BaseDocument) {
  return this._id;
});

export { BaseSchema };
