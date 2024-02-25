"use client";
import Catagory from "@/component/Catagory";
import Duas from "@/component/Duas";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

export default function Home() {
  const [duas, setDuas] = useState([]);
  const [cat, setCat] = useState([]);
  const [subCat, setSubCat] = useState([]);
  const [filterSubCat, setFilterSubCat] = useState([]);
  const [isOpenCat, setIsOpenCat] = useState(false);
  const [filterdua, setFilterdua] = useState([]);
  useEffect(() => {
    fetchDua();
    fetchCatagory();
    fetchSubCatagory();
  }, []); // empty dependency array for running the effect only once

  const fetchDua = async () => {
    try {
      const res = await fetch("/duajson/duas.json");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setDuas(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getfilterdua = (cat_id) => {
    flushSync(() => setFilterdua([]));
    // const filterddua = ;
    flushSync(() =>
      setFilterdua(() => {
        return duas.filter((dua) => dua.cat_id === cat_id);
      })
    );
    flushSync(() =>
      setFilterSubCat(() => {
        return subCat.filter((sc) => sc.cat_id === cat_id);
      })
    );
    // const filterSubCata = subCat.filter((sc) => sc.cat_id === cat_id);
    // setFilterSubCat(filterSubCata);
  };

  const fetchCatagory = async () => {
    try {
      const res = await fetch("/duajson/category.json");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setCat(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchSubCatagory = async () => {
    try {
      const res = await fetch("/duajson/sub_category.json");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setSubCat(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  return (
    <>
      <div className="flex gap-20">
        <Catagory
          filterSubCat={filterSubCat}
          getfilterdua={getfilterdua}
          cat={cat}
        />
        {filterdua.length}
        <Duas duas={duas} filterdua={filterdua} />
      </div>
    </>
  );
}
