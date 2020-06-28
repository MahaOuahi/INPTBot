const initState = {
    reclamations: [
        {id: '1', email: 'dummy@mail.com', message: 'test test'},
        {id: '2', email: 'dummy@mail.com', message: 'test test'}
    ]
}
const messageReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_RECLAMATION':
            console.log('new reclamation added', action.reclamation);
            return state;
        case 'ADD_RECLAMATION_ERROR':
            console.log('add reclamation error', action.err);
            return state;
        default:
            return state;
    }   
}

export default messageReducer