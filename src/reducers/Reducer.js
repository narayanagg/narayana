let intialstate = {
  Products: [],
};

const reduer = (state = intialstate, actions) => {
  switch (actions.type) {
    case "RECORDS":
      return {
        ...state,
        Products: [
          { id: 1, name: "narayana", caste: "reddy" },
          { id: 2, name: "laxmi", caste: "bramin" },
          { id: 3, name: "narayana", caste: "reddy" },
        ],
      };
  }
  return state;
};
export default reduer;
