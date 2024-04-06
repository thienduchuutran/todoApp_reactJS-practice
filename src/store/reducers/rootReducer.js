const initState = {
    users: [
        {id: 1, name: 'Eric'},
        {id: 2, name: 'Eric IT'},
        {id: 3  , name: 'Eric IT'},
    ],
    posts: []
}
const rootReducer = (state = initState, action) => {

    switch(action.type){
        case 'DELETE_USER':
           let users = state.users
           users = users.filter(item => item.id !== action.payload.id)
           console.log(action)
           return {
                ...state, users
            };
        case 'CREATE_USER':
            let id = Math.floor(Math.random()*10000)
            let user = {id: id, name: `random ${id}`}
            return {
                ...state, users: [...state.users ,user]
            } 
        default:
            return state;
            }

}

export default rootReducer;