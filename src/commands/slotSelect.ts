import { AbstractCommandNoResponse } from './abstractCommand.js'
import type { NamedMessage } from '../message.js'
import { VideoFormat } from '../enums.js'

export class SlotSelectCommand extends AbstractCommandNoResponse {
	slotId?: number
	format?: VideoFormat

	serialize(): NamedMessage {
		const res: NamedMessage = {
			name: 'slot select',
			params: {},
		}

		if (this.slotId) {
			res.params['slot id'] = this.slotId + ''
		}
		if (this.format) {
			res.params['video format'] = this.format
		}

		return res
	}
}

export class SlotUnblockCommand extends AbstractCommandNoResponse {
	constructor(public slotId: string) {
		super()
	}

	serialize(): NamedMessage {
		const res: NamedMessage = {
			name: 'slot unblock',
			params: {},
		}

		if (this.slotId) {
			res.params['slot id'] = this.slotId
		}

		return res
	}
}
