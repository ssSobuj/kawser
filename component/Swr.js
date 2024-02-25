import React from "react";

export default function Swr({ data }) {
  return (
    <div>
      {data?.map((d) => (
        <p key={d.id}>{d.title}</p>
      ))}
    </div>
  );
}
