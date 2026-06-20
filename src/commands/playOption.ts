import { SynchronousCode } from '../codes.js'
import { NamedMessage, ResponseMessage } from '../message.js'
import { AbstractCommand, AbstractCommandNoResponse } from './abstractCommand.js'

export interface PlayOptionCommandResponse {
	stopMode: 'lastframe' | 'nextframe' | 'black'
}

export class PlayOptionGetCommand extends AbstractCommand<PlayOptionCommandResponse> {
	expectedResponseCode = SynchronousCode.PlayOption

	deserialize(msg: ResponseMessage): PlayOptionCommandResponse {
		const res: PlayOptionCommandResponse = {
			stopMode: msg.params['stop mode'] as PlayOptionCommandResponse['stopMode'],
		}
		return res
	}
	serialize(): NamedMessage {
		const res: NamedMessage = {
			name: 'play option',
			params: {},
		}

		return res
	}
}

export class PlayOptionSetCommand extends AbstractCommandNoResponse {
	constructor(public stopMode: 'lastframe' | 'nextframe' | 'black') {
		super()
	}

	serialize(): NamedMessage {
		const res: NamedMessage = {
			name: 'play option',
			params: {},
		}

		if (this.stopMode !== undefined) res.params['stop mode'] = this.stopMode

		return res
	}
}
