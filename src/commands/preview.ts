import type { NamedMessage } from '../message.js'
import { AbstractCommandNoResponse } from './abstractCommand.js'

export class PreviewCommand extends AbstractCommandNoResponse {
	enable: boolean

	constructor(enable: boolean) {
		super()

		this.enable = enable
	}

	serialize(): NamedMessage | null {
		const res: NamedMessage = {
			name: 'preview',
			params: {},
		}

		res.params['enable'] = this.enable + ''

		return res
	}
}
