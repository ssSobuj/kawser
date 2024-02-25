"use client";

import React from "react";

export default function Catagory({ filterSubCat, cat, getfilterdua }) {
  return (
    <div>
      {cat?.map((c) => (
        <div
          onClick={() => getfilterdua(c.cat_id)}
          style={{ margin: "5px", background: "red", width: "200px" }}
          key={c.id}
        >
          <p>{c.cat_name_bn}</p>
          <p>{c.cat_id}</p>
        </div>
      ))}
    </div>
  );
}
