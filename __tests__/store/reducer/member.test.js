import { member }  from '../../../client/reducers';
describe('Member reducer', () => {
	it('NAVIGATE_TOMEMBER sucess', () => {
		const state = {};
		const action = {
			type: 'NAVIGATE_MEMBER',
			member: {
				id: 'XPTO',
			},
		};
		const results = member(state, action);
		expect(results)
			.toEqual({
				id: 'XPTO'
			});
	});
});