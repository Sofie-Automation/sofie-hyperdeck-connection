import { describe, expect, test } from 'vitest'
import { ShuttleCommand } from '../commands/shuttle.js'

describe('Commands', () => {
	describe('ShuttleCommand', () => {
		test('serializes a speed of 0', () => {
			expect(new ShuttleCommand(0).serialize()).toEqual({
				name: 'shuttle',
				params: { speed: '0' },
			})
		})

		test('serializes a positive speed', () => {
			expect(new ShuttleCommand(100).serialize()).toEqual({
				name: 'shuttle',
				params: { speed: '100' },
			})
		})

		test('omits speed when unset', () => {
			expect(new ShuttleCommand().serialize()).toEqual({
				name: 'shuttle',
				params: {},
			})
		})
	})
})
