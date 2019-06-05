import Axios from 'axios';

export const navigateToMember = (id) => {
	return function(dispatch) {
		dispatch(loadData());
		return Axios.get('/api/members/' + id)
		.then((res) => {
			dispatch({
				type: 'NAVIGATE_MEMBER',
				member: res.data,
			});
			dispatch(dataComplete());

		});
	
	}
};

export const loadData = () => ({
	type: 'LOAD_DATA',
	isLoading: true,
});

export const dataComplete = () => ({
	type: 'DATA_COMPLETE',
	isLoading: false,
});

export function listMembers(){
	return function (dispatch) {
		const query = `
		{
			member(active:true){
				id
				pessoa{
					nome
					sobrenome
				}
			}
		}
        `;
        dispatch(loadData());
		return Axios.post('/api/members/search', { query })
			.then((res) => {
				const members = res.data.data.member.map((m) => {
					return { id: m.id, name: m.pessoa.nome, completeName: `${m.pessoa.nome} ${m.pessoa.sobrenome}` };
				})
					.sort((m1, m2) => m1.name > m2.name);
				dispatch({
					type: 'LIST_MEMBERS',
					members: members,
				});
				dispatch(dataComplete());
			});
		
	};
};