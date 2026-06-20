import { AbstractCommandNoResponse } from './abstractCommand.js'
import type { NamedMessage } from '../message.js'

export class IdentifyCommand extends AbstractCommandNoResponse {
	constructor(public enable: boolean) {
		super()
	}

	serialize(): NamedMessage {
		const res: NamedMessage = {
			name: 'identify',
			params: {},
		}

		if (this.enable) {
			res.params['enable'] = this.enable.toString()
		}

		return res
	}
}
