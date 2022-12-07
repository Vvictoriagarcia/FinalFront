 const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_USER' : 
            return {dentists: [...state.dentists, action.payload]}
    default : 
        throw new Error()
    }
}
export default reducer