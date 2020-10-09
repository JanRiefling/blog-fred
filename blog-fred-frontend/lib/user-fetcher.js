import fetch from "isomorphic-unfetch";

export default async function userFetcher(url) {
  const res = await fetch(url);
  return res.json();
}
