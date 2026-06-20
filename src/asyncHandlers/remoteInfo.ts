import { ResponseMessage } from '../message.js'
import { parseBool } from '../util.js'
import { IHandler } from './iHandler.js'
import { AsynchronousCode } from '../codes.js'
import { RemoteInfoChangeResponse } from '../events.js'

export class RemoteInfoChange implements IHandler<'notify.remote'> {
	responseCode = AsynchronousCode.RemoteInfo
	eventName = 'notify.remote' as const

	deserialize(msg: ResponseMessage): RemoteInfoChangeResponse {
		const res: RemoteInfoChangeResponse = {
			enabled: parseBool(msg.params['enabled']),
		}
		return res
	}
}
