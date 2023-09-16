import { addItem, editItem, deleteItem } from "./TodoAction";
import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "./TodoType";

export const todoReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          { name: action.payload.name, id: Math.random(1000) },
        ],
      };

    case DELETE_ITEM:
      const data = state.items.filter((itm) => {
        return itm.id !== action.id;
      });
      return {
        ...state,
        items: data,
      };

    case EDIT_ITEM:
      return {
        ...state,
        items: state.items.map((itm) =>
          itm.id === action.payload.id ? { ...itm, name: action.payload.name } : itm
        ),
      };

    default:
      return state;
  }
};
