import { NamedMessage } from '../message'
import { AbstractCommandNoResponse } from './abstractCommand'

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

		if (this.speed) res.params.speed = this.speed + ''

		return res
	}
}
