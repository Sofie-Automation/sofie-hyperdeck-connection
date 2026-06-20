import type { HyperdeckAsyncEvents } from '../events.js'
import { AsynchronousCode } from '../codes.js'
import type { ResponseMessage } from '../message.js'

export interface IHandler<TEvent extends keyof HyperdeckAsyncEvents> {
	responseCode: AsynchronousCode
	eventName: TEvent

	deserialize(msg: ResponseMessage): HyperdeckAsyncEvents[TEvent][0]
}
