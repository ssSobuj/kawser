"use client";

import React from "react";

export default function Catagory({ filterSubCat, cat, getfilterdua }) {
  // {
  //   filterSubCat &&
  //     filterSubCat.map((sc) => <p key={sc.id}>{sc.subcat_name_bn}</p>);
  // }
  console.log(filterSubCat);
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
          {
            // <ul>
            //   {filterSubCat.map((sc, i) => (
            //     <li key={i}>{sc}</li>
            //   ))}
            // </ul>
          }
        </div>
      ))}
      {/* <div>
        {filterSubCat &&
          filterSubCat.map((sc) => <p key={sc.id}>{sc.subcat_name_bn}</p>)}
      </div> */}
    </div>
  );
}
