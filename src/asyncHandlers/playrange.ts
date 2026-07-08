import type { ResponseMessage } from '../message.js'
import type { IHandler } from './iHandler.js'
import { AsynchronousCode } from '../codes.js'
import type { PlayrangeChangeResponse } from '../events.js'

export class PlayrangeChange implements IHandler<'notify.playrange'> {
	responseCode = AsynchronousCode.Playrange
	eventName = 'notify.playrange' as const

	deserialize(msg: ResponseMessage): PlayrangeChangeResponse {
		const res: PlayrangeChangeResponse = {
			timelineIn: msg.params['timeline in'],
			timelineOut: msg.params['timeline out'],
		}
		return res
	}
}
