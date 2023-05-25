import React, { useState } from "react";
import MyComponent from "./MyComponent";
import Form from "./Form";

const App = () => {
  const [name, setName] = useState("");
  const [training, setTraining] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [date_of_issue, setDate_of_issue] = useState("");

  return (
    <>
      <p className="text-center cinzel text-xl p-4  font-bold my-4">
        This is a site to generate a GS1 certificate
      </p>
      <p className="h-[8px] my-2 w-[100%] bg-[#F26334]"></p>
      <div className="flex flex-col  gap-4  justify-around  items-center ">
        <Form
          name={name}
          setName={setName}
          training={training}
          setTraining={setTraining}
          companyName={companyName}
          setCompanyName={setCompanyName}
          date_of_issue={date_of_issue}
          setDate_of_issue={setDate_of_issue}
        />
        <MyComponent
          name={name}
          setName={setName}
          training={training}
          setTraining={setTraining}
          companyName={companyName}
          setCompanyName={setCompanyName}
          date_of_issue={date_of_issue}
          setDate_of_issue={setDate_of_issue}
        />
      </div>
    </>
  );
};

export default App;
