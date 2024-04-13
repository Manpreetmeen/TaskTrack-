import React, { useEffect } from "react";
import { fetchApiUsers } from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";

export default function ApiData() {
  const dispatch = useDispatch();
  const apiUserData = useSelector((data) => data.apiusers);
  // console.log(apiUserData)
  useEffect(() => {
    dispatch(fetchApiUsers());
  }, []);
  return (
    <div className="body-of-apicontainer">
      <h1 className="heading-api">Some API Data</h1>
      <div class="card-container">
        {apiUserData.map((item) => (
          <div className="card" key={item.id}>
            <h3>Name :{item.name}</h3>
            <h3>Email : {item.email}</h3>
            <h3>Phone : {item.phone}</h3>
            <h4>Email : {item.website}</h4>
            About Company:
            <h5>Name : {item.company.name}</h5>
            <h5>CatchPhrase : {item.company.catchPhrase}</h5>
            <h5>BS : {item.company.bs}</h5>

          </div>
        ))}
      </div>
    </div>
  );
}
