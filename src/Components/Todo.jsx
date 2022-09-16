import axios from "axios";
import React, { useEffect, useState } from "react";

const Todo = () => {
  const [data, setdata] = useState({
    item: "",
  });

  const todoList = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };
  const addItem = (e) => {
    e.preventDefault();
    axios
      .post(`https://6299d3776f8c03a9784a99fb.mockapi.io/Todo`, data)
      .then((rev) => {
        console.log("todo ", rev);
        setdata({
          item: "",
        });
        getData();
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {};

  return (
    <>
      <div className="row g-0 mt-5">
        <div className="col-4"></div>
        <div className="col-4 mt-5">
          <div className="card ">
            <div className="card-hrader text-center  p-2 bg-dark text-white">
              TODO
            </div>
            <div className="card-body">
              <form onSubmit={addItem} className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder=" ✍️ Add items..."
                  name="item"
                  value={data.item}
                  onChange={todoList}
                />

                <i
                  className="fa-solid fa-plus btn btn-light"
                  title="add item"
                ></i>
              </form>
              <div className="position-relative">
                <div className="position-absolute top-0 start-0">yhfr</div>
                <div className="position-absolute top-0 end-0">fng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
