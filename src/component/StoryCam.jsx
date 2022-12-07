import { useState, useEffect } from "react";
import Story from "./Story";
import { Link } from "react-router-dom";
import { instance } from "../App";
import "../App.css";
import UserProfile from "./UserProfile";

const StoryContainer = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const rosponse = await instance.get(``);
    setData(rosponse.data.users);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="storyBox">
      {data &&
        data.map((users) => {
          return <Story users={users} />;
        })}
    </div>
  );
};
export default StoryContainer;
