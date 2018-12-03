const INCREMENT = 'INCREMENT'

export const increment=()=>({
    type:INCREMENT
});





export default (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return (state + 1)
        default:
            return state;
    }
}