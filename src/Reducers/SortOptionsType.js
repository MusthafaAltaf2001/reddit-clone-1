const SortOptionType = (SortOptionType = {}, action) => {
  switch (action.type) {
    case "BEST":
      SortOptionType = "BEST";
      break;
    case "HOT":
      SortOptionType = "HOT";
      break;
    case "NEW":
      SortOptionType = "NEW";
      break;
    case "TOP":
      SortOptionType = "TOP";
      break;
    default:
      SortOptionType = SortOptionType;
      break;
  }
  return SortOptionType;
};

export default SortOptionType;
