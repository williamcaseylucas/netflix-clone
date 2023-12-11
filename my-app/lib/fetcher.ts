import axios from "axios";

const fetcher = (url: string) =>
  axios
    .get(url)
    .then((res) => res.data)
    .catch((e) => console.log("error from fetcher ", e));

export default fetcher;
