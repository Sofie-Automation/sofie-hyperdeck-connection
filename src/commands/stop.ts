import type { NamedMessage } from '../message.js'
import { AbstractCommandNoResponse } from './abstractCommand.js'

export class StopCommand extends AbstractCommandNoResponse {
	serialize(): NamedMessage {
		const res: NamedMessage = {
			name: 'stop',
			params: {},
		}

		return res
	}
}
