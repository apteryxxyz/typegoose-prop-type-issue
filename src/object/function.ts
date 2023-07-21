import { ModelOptions, Prop, getModelForClass } from "@typegoose/typegoose";

@ModelOptions({})
export class File {
    @Prop({ type: () => Object })
    public metadata!: Record<string, unknown>;
}

export namespace File {
    export const Model = getModelForClass(File);
}
