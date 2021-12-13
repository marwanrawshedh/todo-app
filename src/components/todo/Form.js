import React, { useContext, useState,useEffect } from "react";
import { ContextHandle } from "./Context";
import { Button, Card, Elevation } from "@blueprintjs/core";
import "./header.css";

function Form(props) {
  const data = useContext(ContextHandle);
  const get=localStorage.getItem("num");
  
  const [pageNumber, setPageNumber] = useState({
    start: 0,
    end:  get,
    numPages: 1,
    cure: 1,
  });
  useEffect(() => {
    setPageNumber({
      ...pageNumber,
      numPages: Math.ceil(data.list.length / get),
    });
  }, [Math.ceil(data.list.length / get)]);
  function handelNext() {
    if (pageNumber.cure <= pageNumber.numPages - 1) {
      setPageNumber({
        ...pageNumber,
        start: pageNumber.start + get,
        end: pageNumber.end + get,
        cure: pageNumber.cure + 1,
      });
    }
  }
  function handelPrev() {
    if (pageNumber.cure - 1 > 0) {
      setPageNumber({
        ...pageNumber,
        start: pageNumber.start - get,
        end: pageNumber.end - get,
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
{/* <button onClick={()=>{data.setChangecomplete(data.changecomplete?false:true)}}> {`${data.changecomplete}`}</button> */}
        <div>
          <button onClick={() => handelPrev()}>prev</button>
          <label>
            {pageNumber.cure}/{pageNumber.numPages}
          </label>
          <button onClick={() => handelNext()}>next</button>
        </div>
      </Card>
    
      {data.isTrue&&data.list.slice(pageNumber.start, pageNumber.end).map((item) => (
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
            <Button onClick={() => data.toggleComplete(item.id)}>
              complete
            </Button>

          </Card>
        </div>
      ))}
        {!data.isTrue&&data.list.filter(word => word.complete === false).slice(pageNumber.start, pageNumber.end).map((item) => (
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
            <Button onClick={() => data.toggleComplete(item.id)}>
              complete
            </Button>
            
          </Card>
        </div>
      ))}
    </>
  );
}

export default Form;
