import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { instance } from "../../App";
const PostTwo = () => {
  // const [value, setValue] = useState([]);
  // const getPic = async () => {
  //   const res = await instance.get("");
  //   setValue(res.data.users[0]);
  // };

  const  [data , setData] = useState([]) 
  const getData = async () => {
    const res = await instance.get("/posts")
    setData(res.data)

   }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="userDataContainer">
      {" "}
      <div className="userData">
        <img src={data.profile} alt="" className="userDataBox" />
        <div className="names">
          <Link
            to={`${data.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>{data.username}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PostTwo;
