import 'reflect-metadata';

import mongoose from 'mongoose';

import { File } from './object/direct';
// import { File } from './object/function';

// import { File } from './schema.types/direct';
// import { File } from './schema.types/function';

// import { File } from './schematypes/direct';
// import { File } from './schematypes/function';

void main();
async function main() {
    await mongoose.connect('mongodb+srv://apteryxxyz:sTS2puLyr258vHbi@testing.mb1ounz.mongodb.net');

    const data = { metadata: { foo: 'bar' } };
    console.log('data', data);

    const file = new File.Model(data);
    await file.save();
    console.log('file', file);

    const all = await File.Model.find();
    console.log('all', all);

    await File.Model.deleteMany();
}
