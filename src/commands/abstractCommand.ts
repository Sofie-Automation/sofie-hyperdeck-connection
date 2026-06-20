import { type ResponseCode, SynchronousCode } from '../codes.js'
import type { ResponseMessage, NamedMessage } from '../message.js'

export type ErrorResponse = ResponseMessage

export abstract class AbstractCommand<TResponse> {
	abstract expectedResponseCode: ResponseCode

	abstract deserialize(msg: ResponseMessage): TResponse
	abstract serialize(): NamedMessage | null
}

export abstract class AbstractCommandNoResponse extends AbstractCommand<void> {
	expectedResponseCode = SynchronousCode.OK

	deserialize(_msg: ResponseMessage): void {
		return
	}
}
