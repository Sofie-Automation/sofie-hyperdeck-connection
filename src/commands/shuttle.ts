import type { NamedMessage } from '../message.js'
import { AbstractCommandNoResponse } from './abstractCommand.js'

export class ShuttleCommand extends AbstractCommandNoResponse {
	speed?: number

	constructor(speed?: number) {
		super()

		this.speed = speed
	}

	serialize(): NamedMessage {
		const res: NamedMessage = {
			name: 'shuttle',
			params: {},
		}

		if (this.speed !== undefined) res.params.speed = this.speed + ''

		return res
	}
}
