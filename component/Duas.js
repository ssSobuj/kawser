import React from "react";

export default function Duas({ filterdua, duas }) {
  console.log(filterdua);
  //   console.log(duas);
  return (
    <div>
      {filterdua.length > 0
        ? filterdua?.map((dua) => (
            <div
              style={{ margin: "5px", background: "orange", width: "1000px" }}
              key={dua.id}
            >
              <p>{dua.dua_name_bn}</p>
              <p>{dua.cat_id}</p>
              <p>{dua.transliteration_bn}</p>
            </div>
          ))
        : duas
            ?.filter((dua) => dua.cat_id == 1)
            .map((dua) => (
              <div
                style={{ margin: "5px", background: "orange", width: "1000px" }}
                key={dua.id}
              >
                <p>{dua.dua_name_bn}</p>
                <p>{dua.cat_id}</p>
                <p>{dua.transliteration_bn}</p>
              </div>
            ))}
    </div>
  );
}
