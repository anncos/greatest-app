const ns = "itemsList";

const shape = {};

const defaultState = {
  itemsList: [],
  isLoading: false,
  error: null
};

const root = state => state[ns];

const selectors = {
  root,
  itemsList: state => root(state).itemsList,
  isLoading: state => root(state).isLoading,
  error: state => root(state).error
};

const types = {
  fetchItemsList: "REQUEST_ITEMS_LIST"
};

const fetchItemsList = () => ({
  type: types.fetchItemsList,
  fetch: { url: "/rest/v2/all" }
});

const actions = {
  fetchItemsList
};

const rawReducer = (state = defaultState, action) => {
  switch (action.type) {
    case `${types.fetchItemsList} / start`:
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case `${types.fetchItemsList} / success`:
      return {
        ...state,
        itemsList: action.payload,
        isLoading: false,
        error: null
      };
    case `${types.fetchItemsList} / fail`:
      return {
        ...state,
        itemsList: {},
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

const reducer = {
  [ns]: rawReducer
};

export default {
  ns,
  shape,
  defaultState,
  types,
  selectors,
  actions,
  rawReducer,
  reducer
};
