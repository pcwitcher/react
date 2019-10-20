// selectors
export const getSearchString = ({ searchString }) => searchString;

export const countVisibleCards = ({ cards, searchString }) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

export const countAllCards = ({ cards }) => cards.length;

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHANGE_CARDS = createActionName('CHANGE_CARDS');

// action creators
export const createAction_changeSearchString = payload => ({
  payload,
  type: CHANGE_CARDS,
});

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE_CARDS:
      return action.payload;
    default:
      return statePart;
  }
}

