
export const saveName = (name) => ({
    type: 'SAVE_NAME',
    payload: name,
});

export const increment = () => ({
    type: 'INCREMENT',
});

export const decrement = () => ({
    type: 'DECREMENT',
});