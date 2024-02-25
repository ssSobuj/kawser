"use client";

import Swr from "@/component/Swr";
import useSWR from "swr";

const fetcher = async (...args) => {
  const res = await fetch(...args);
  const data = await res.json();
  return data;
};

export default function Quote() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) {
    return <h1>There was an error!</h1>;
  }

  return (
    <div>
      <h1>Get quotes using fetch API</h1>

      <Swr data={data} />
    </div>
  );
}
