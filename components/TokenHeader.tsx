export const TokenHeader = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
};
