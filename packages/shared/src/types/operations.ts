import { ComponentOptions } from 'vue';
import { Accountability } from './accountability';
import { ApiExtensionContext } from './extensions';
import { Field } from './fields';
import { DeepPartial } from './misc';

type OperationContext = ApiExtensionContext & {
	data: Record<string, unknown>;
	accountability: Accountability | null;
};

export type OperationHandler<Options = Record<string, unknown>> = (
	options: Options,
	context: OperationContext
) => unknown | Promise<unknown> | void;

export interface OperationAppConfig {
	id: string;
	name: string;
	icon: string;
	description?: string;
	preview: ((options: Record<string, any>) => { label: string; text: string }[]) | ComponentOptions | null;
	options: DeepPartial<Field>[] | ((options: Record<string, any>) => DeepPartial<Field>[]) | ComponentOptions | null;
}

export interface OperationApiConfig<Options = Record<string, unknown>> {
	id: string;

	handler: OperationHandler<Options>;
}