import React from "react";

export const TestingComponent = (props) => {
  const getLargeDataFromServer = () => {
    //gonna take 10 sec
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Getting data from database");
        let obj = { firstName: "Semion" };
        resolve(obj);
      }, 3000);
    });
  };
  const handleData = async () => {
    console.log("Starting getting data");
    let result = await getLargeDataFromServer();
    console.log(result);
    console.log("done");
  };

  return (
    <div>
      <h1>Testing component</h1>
      <button onClick={() => handleData()}>Load data</button>
    </div>
  );
};
