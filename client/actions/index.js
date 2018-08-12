import Axios from "axios";

export const navigateToMember = (dispatch, id) => {
    Axios.get("/api/members/"+ id)
                .then((res) => {
                    dispatch({
                        type: "NAVIGATE_MEMBER",
                        member: res.data,
                    }) 
                    dispatch(dataComplete())

                });
    return loadData();          
}

export const loadData = () => ({
    type: "LOAD_DATA",
    isLoading: true,
})

export const dataComplete = () => ({
    type: "DATA_COMPLETE",
    isLoading: false,
})

export const listMembers = dispatch => {
    Axios.get("/api/members")
                .then((res)=> {
                    const members = res.data.map((m) => {
                        return {id: m.id, name: m.pessoa.nome, completeName: `${m.pessoa.nome} ${m.pessoa.sobrenome}`};
                    })
                    .sort( (m1, m2) => m1.name > m2.name);
                    dispatch({
                        type: "LIST_MEMBERS",
                        members: members,
                    })               
                    dispatch(dataComplete())
                });
    return loadData();          
}