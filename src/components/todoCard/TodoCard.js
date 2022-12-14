import React from "react";
import "./style.css";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TodoCard = ({ item }) => {
  const onremove = () => {
    if (window.confirm("μ΄ π₯λ§μ μ­μ ν κΊΌλ?")) {
      alert("μ­μ μ.");
      axios.delete(
        "https://young-chamber-90300.herokuapp.com/todos/" + item.id
      );
    } else {
      alert("μ·¨μμ.");
    }
  };

  const navigate = useNavigate();
  const showDtail = () => {
    navigate(`/detail/${item.id}`);
  };

  return (
    <div className="todo-container">
      <div onClick={showDtail}>
        <div>μμ±μ : {item?.writer}</div>
        <div>{item?.title}</div>
      </div>
      <Button onClick={onremove}>π</Button>
    </div>
  );
};

export default TodoCard;
