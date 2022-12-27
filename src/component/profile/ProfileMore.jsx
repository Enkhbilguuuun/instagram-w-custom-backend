import { useState } from "react";
import { instance } from "../../App";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import UsersOfMore from "./UsersOfMore";
const ProfileMore = () => {
  const [data, setData] = useState([]);
  const [pic, setPic] = useState([]);

  const getData = async () => {
    const response = await instance.get(``);
    setData(response.data.users);
    setPic(response.data.users[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="profile">
      <div className="myProfile">
        <div className="profileMain">
          <img src={pic.image} alt="" className="myProfileImg" />
          <Link
            to="./1"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "600",
            }}
          >
            {" "}
            <div className="myUserName">PROJECT</div>
          </Link>
        </div>
        <div className="Switch">Switch</div>
      </div>
      <div className="suggest">
        <div className="suggestText">Suggestions for you</div>
        {data &&
          data.map((user) => {
            return (
              <div>
                <UsersOfMore userName={user} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ProfileMore;
