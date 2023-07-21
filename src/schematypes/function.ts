import { ModelOptions, Prop, getModelForClass } from "@typegoose/typegoose";
import { SchemaTypes } from "mongoose";

@ModelOptions({})
export class File {
    @Prop({ type: () => SchemaTypes.Mixed })
    public metadata!: Record<string, unknown>;
}

export namespace File {
    export const Model = getModelForClass(File);
}
