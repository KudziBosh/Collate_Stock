import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "../components/List";

function ListItems() {
  const [list, setListNotes] = useState(null);
  const [formNote, setFormNote] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    getList();
  }, []);
  function getList() {
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/list_item/?format=api",
    })
      .then((response) => {
        const data = response.data;
        setListNotes(data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }
  return (
    <div>
      {list &&
        list.map((data) => (
          <List
            category={data.category}
            label={data.label}
            item_name={data.item_name}
            quantity={data.quantity}
            size={data.size}
            created_by={data.created_by}
            reorder_level={data.reorder_level}
          />
        ))}
    </div>
  );
}

export default ListItems;
