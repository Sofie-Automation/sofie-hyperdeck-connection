import { ResponseMessage } from '../message.js'
import { IHandler } from './iHandler.js'
import { AsynchronousCode } from '../codes.js'
import { TimelinePositionChangeResponse } from '../events.js'

export class TimelinePositionChange implements IHandler<'notify.timelinePosition'> {
	responseCode = AsynchronousCode.TimelinePosition
	eventName = 'notify.timelinePosition' as const

	deserialize(msg: ResponseMessage): TimelinePositionChangeResponse {
		const res: TimelinePositionChangeResponse = {
			timelinePosition: msg.params['timeline position'],
		}
		return res
	}
}
