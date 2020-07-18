const initialState = {
    items: [],
    isLoaded: false,
}
const pizzas = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload,
                    isLoaded: true,
            }
            default:
                return state;
    }
}

export default pizzas;

// ...state(любое имя объекта) позволяет получить все св-ва этого обекта