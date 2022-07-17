export default function APIAuthHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user ? user.token : "";
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + token,
    },
  };
  return config;
}
