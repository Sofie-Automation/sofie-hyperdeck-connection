import { VideoFormat, SlotStatus } from '../enums.js'
import { ResponseMessage } from '../message.js'
import { parseIntIfDefined } from '../util.js'
import { IHandler } from './iHandler.js'
import { AsynchronousCode } from '../codes.js'
import { SlotInfoChangeResponse } from '../events.js'

export class SlotInfoChange implements IHandler<'notify.slot'> {
	responseCode = AsynchronousCode.SlotInfo
	eventName = 'notify.slot' as const

	deserialize(msg: ResponseMessage): SlotInfoChangeResponse {
		const res: SlotInfoChangeResponse = {
			slotId: parseInt(msg.params['slot id'], 10),
			status: msg.params['status'] as SlotStatus,
			volumeName: msg.params['volume name'],
			recordingTime: parseIntIfDefined(msg.params['recording time']),
			videoFormat: msg.params['video format'] as VideoFormat,
		}
		return res
	}
}
