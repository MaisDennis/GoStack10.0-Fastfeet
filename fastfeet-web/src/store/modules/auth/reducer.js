import produce from 'immer'; // manipular o estado.

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  username: null,
  menuHighlight: '/deliveries',
  cover: false,
  data: null,
};

export default function auth(state= INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      })
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.username = action.payload.user.name;
        draft.loading = false;
      })
      case '@auth/SIGN_IN_FAILURE':
        return produce(state, draft => {
          draft.loading = false;
        })
      case '@auth/SIGN_OUT':
        return produce(state, draft => {
          draft.token = null;
          draft.signed = false;
        })
        case '@menu/HIGHLIGHT':
          return produce(state, draft => {
            // console.tron.log(action.payload)
            draft.menuHighlight = action.payload.num;
          })
        case '@cover/COVER':
          return produce(state, draft => {
            console.tron.log(action.payload)
            draft.cover = true;
            draft.data=action.payload.data;
          })
          case '@cover/UNCOVER':
            return produce(state, draft => {
              draft.cover = false;
              draft.data=null;
            })
    default:
      return state;
  }
}
