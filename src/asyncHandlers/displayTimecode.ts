import type { ResponseMessage } from '../message.js'
import type { IHandler } from './iHandler.js'
import { AsynchronousCode } from '../codes.js'
import type { DisplayTimecodeChangeResponse } from '../events.js'

export class DisplayTimecodeChange implements IHandler<'notify.displayTimecode'> {
	responseCode = AsynchronousCode.DisplayTimecode
	eventName = 'notify.displayTimecode' as const

	deserialize(msg: ResponseMessage): DisplayTimecodeChangeResponse {
		const res: DisplayTimecodeChangeResponse = {
			displayTimecode: msg.params['display timecode'],
		}
		return res
	}
}
