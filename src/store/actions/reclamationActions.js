export const addReclamation = (reclamation) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to db
        const firestore = getFirestore();
        firestore.collection('reclamations').add({
            ...reclamation,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'ADD_RECLAMATION', reclamation});
        }).catch((err) => {
            dispatch({ type: 'ADD_RECLAMATION_ERROR', err });
        })
        
    }
};