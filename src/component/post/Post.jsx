import { useEffect } from "react";
import { useState } from "react";
import PostOne from "./PostOne";
import { instance, instanceTwo } from "../../App";

const Post = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await instance.get(`/posts`);
    setData(res.data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="postContainer">
      {data &&
        data.map((data) => {
          return <PostOne data={data} />;
        })}
    </div>
  );
};
export default Post;
