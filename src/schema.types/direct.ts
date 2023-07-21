import { ModelOptions, Prop, getModelForClass } from "@typegoose/typegoose";
import { Schema } from "mongoose";

@ModelOptions({})
export class File {
    @Prop({ type: Schema.Types.Mixed })
    public metadata!: Record<string, unknown>;
}

export namespace File {
    export const Model = getModelForClass(File);
}
