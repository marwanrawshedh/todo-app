import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form.js";
import { v4 as uuid } from "uuid";

const ContextHandle = React.createContext();
export { ContextHandle };
const ContextData = (props) => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
  const get=localStorage.getItem("num");
  const [changeSetting, setChangeSetting] = useState(get?get:2);
  let [isTrue, setIsTrue] = useState(false);
  localStorage.setItem("num",changeSetting);
  


  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <ContextHandle.Provider
        value={{
          incomplete,
          list,
          handleChange,
          toggleComplete,
          deleteItem,
          handleSubmit,
          setChangeSetting,isTrue, setIsTrue,changeSetting
        }}
      >
        {props.children}
      </ContextHandle.Provider>
    </>
  );
};

export default ContextData;
