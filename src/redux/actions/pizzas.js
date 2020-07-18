const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});

const setCategory = (index) => ({
    type: 'SET_CATEGORY',
    payload: index
});