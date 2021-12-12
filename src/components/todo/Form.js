import React, { useContext, useState,useEffect } from "react";
import { ContextHandle } from "./Context";
import { Button, Card, Elevation } from "@blueprintjs/core";
import "./header.css";

function Form(props) {
  const data = useContext(ContextHandle);
  const [pageNumber, setPageNumber] = useState({
    start: 0,
    end: 5,
    numPages: 1,
    cure: 1,
  });
  useEffect(() => {
    setPageNumber({
      ...pageNumber,
      numPages: Math.ceil(data.list.length / 5),
    });
  }, [Math.ceil(data.list.length / 5)]);
  function handelNext() {
    if (pageNumber.cure <= pageNumber.numPages - 1) {
      setPageNumber({
        ...pageNumber,
        start: pageNumber.start + 5,
        end: pageNumber.end + 5,
        cure: pageNumber.cure + 1,
      });
    }
  }
  function handelPrev() {
    if (pageNumber.cure - 1 > 0) {
      setPageNumber({
        ...pageNumber,
        start: pageNumber.start - 5,
        end: pageNumber.end - 5,
        cure: pageNumber.cure - 1,
      });
    }
  }
  return (
    <>
      <Card className="form" interactive={true} elevation={Elevation.FOUR}>
        <form onSubmit={data.handleSubmit}>
          <h2>Add To Do Item</h2>

          <label>
            <span>To Do Item</span>
            <input
              onChange={data.handleChange}
              name="text"
              type="text"
              placeholder="Item Details"
            />
          </label>

          <label>
            <span>Assigned To</span>
            <input
              onChange={data.handleChange}
              name="assignee"
              type="text"
              placeholder="Assignee Name"
            />
          </label>

          <label>
            <span>Difficulty</span>
            <input
              onChange={data.handleChange}
              defaultValue={3}
              type="range"
              min={1}
              max={5}
              name="difficulty"
            />
          </label>

          <label>
            <button type="submit">Add Item</button>
          </label>
        </form>

        <div>
          <button onClick={() => handelPrev()}>prev</button>
          <label>
            {pageNumber.cure}/{pageNumber.numPages}
          </label>
          <button onClick={() => handelNext()}>next</button>
        </div>
      </Card>
      {/* {props.list.slice(pageNumber.start, pageNumber.end) */}
      {data.list.slice(pageNumber.start, pageNumber.end).map((item) => (
        <div className="card" key={item.id}>
          <Card interactive={true} elevation={Elevation.FOUR}>
            <p>{item.text}</p>
            <p>
              <small>Assigned to: {item.assignee}</small>
            </p>
            <p>
              <small>Difficulty: {item.difficulty}</small>
            </p>
            <div>Complete: {item.complete.toString()}</div>
            {/* <Button onClick={() => data.toggleComplete(item.id)}>
              complete
            </Button> */}
          </Card>
        </div>
      ))}
    </>
  );
}

export default Form;
