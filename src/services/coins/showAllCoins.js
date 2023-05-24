import axios from "../axios";

// export const showAllCoins = async () => {
//   const headers = {
//     "X-RapidAPI-Key": "61acca7d3fmshf60a9ddf5f89a5ep1e0b5ejsn9aa7b8593262",
//     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//   };
//   try {
//     const response = await axios.get("/exchange/-zdvbieRdZ/coins", {
//       headers: headers,
//     });
//     return response;
//   } catch (error) {
//     return error.response;
//   }
// };

// redux toolkit using following method
const headers = {
  "X-RapidAPI-Key": "61acca7d3fmshf60a9ddf5f89a5ep1e0b5ejsn9aa7b8593262",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

export const getAllCoins = () =>
  axios.get("/exchange/-zdvbieRdZ/coins", {
    headers: headers,
  });
