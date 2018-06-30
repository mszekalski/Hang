import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

export default function modalReducer(state = { component: null }, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return { component: action.component };
    case CLOSE_MODAL:
      return { component: null };
    default:
      return state;
  }
}
