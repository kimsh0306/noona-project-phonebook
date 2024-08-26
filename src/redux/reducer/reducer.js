let initialState = {
  contactList: [],
  keyword: "",
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber
          }
        ]
      };
    case "SEARCH_BY_USERNAME":
      return { ...state, keyword: payload.keyword };
    case "DELETE_KEYWORD":
      return { ...state, keyword: "" };
    case "DELETE_ITEM":
      return { ...state, contactList: [...payload.list] }
    default:
      return { ...state };
  };

};

export default reducer;