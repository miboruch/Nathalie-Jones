export const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        isOpen: !state.isOpen
      };
    default:
      throw new Error('Wrong reducer used');
  }
};
