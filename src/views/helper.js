export const getUserData = async () => {
  return await fetch("https://gdsc-mpstme-leaderboard-api.herokuapp.com/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
