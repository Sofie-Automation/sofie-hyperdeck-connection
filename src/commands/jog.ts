import type { NamedMessage } from '../message.js'
import { AbstractCommandNoResponse } from './abstractCommand.js'

export class JogCommand extends AbstractCommandNoResponse {
	timecode?: string

	constructor(timecode?: string) {
		super()

		this.timecode = timecode
	}

	serialize(): NamedMessage {
		const res: NamedMessage = {
			name: 'jog',
			params: {},
		}

		if (this.timecode === undefined) throw new Error('JogCommand needs timecode')

		res.params.timecode = this.timecode

		return res
	}
}
