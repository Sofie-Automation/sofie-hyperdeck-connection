import { TransportStatus, VideoFormat } from '../enums.js'
import { ResponseMessage } from '../message.js'
import { parseIdOrNone, parseIntIfDefined, parseBool, parseStringOrNone } from '../util.js'
import { IHandler } from './iHandler.js'
import { AsynchronousCode } from '../codes.js'
import { TransportInfoChangeResponse } from '../events.js'

export class TransportInfoChange implements IHandler<'notify.transport'> {
	responseCode = AsynchronousCode.TransportInfo
	eventName = 'notify.transport' as const

	deserialize(msg: ResponseMessage): TransportInfoChangeResponse {
		const res: TransportInfoChangeResponse = {
			status: msg.params['status'] as TransportStatus,
			speed: parseIntIfDefined(msg.params['speed']),
			slotId: parseIdOrNone(msg.params['active slot'] || msg.params['slot id']),
			clipId: parseIdOrNone(msg.params['clip id']),
			singleClip: parseBool(msg.params['single clip']),
			displayTimecode: msg.params['display timecode'],
			timecode: msg.params['timecode'],
			videoFormat: parseStringOrNone(msg.params['video format']) as VideoFormat | null | undefined,
			loop: parseBool(msg.params['loop']),
			inputVideoFormat: parseStringOrNone(msg.params['input video format']) as VideoFormat | null | undefined,
		}

		if (msg.params['active slot'] && !res.slotId) {
			// this is essentially off-spec but seems to be how BMD have implemented it
			res.slotId = parseIdOrNone(msg.params['active slot'])
		}

		return res
	}
}
