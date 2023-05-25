import React from "react";

const Form = ({
  name,
  setName,
  training,
  setTraining,
  companyName,
  setCompanyName,
  date_of_issue,
  setDate_of_issue,
}) => {
  return (
    <form className="h-[100%] w-[99%] mx-auto md:mx-0 md:w-[40%]">
      <div className="shadow  sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
          <p>Fill in the form below to generate your poster</p>

          <div>
            <label className="block text-sm font-medium te/xt-gray-700">
              Participant Name
            </label>
            <div className="mt-1">
              <input
                type={"text"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=" border border-gray-300   text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 "
                placeholder="John Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium te/xt-gray-700">
              Company Name
            </label>
            <div className="mt-1">
              <input
                type={"text"}
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className=" border border-gray-300   text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 "
                placeholder="Company Name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium te/xt-gray-700">
              Type of Training
            </label>
            <div className="mt-1">
              <select
                className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 "
                value={training}
                onChange={(e) => setTraining(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Gs1 basic training">Gs1 basic training</option>
                <option value="Gs1 advanced training">
                  {" "}
                  GS1 Standards Pack Serializatin Training
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium te/xt-gray-700">
              Date of Issue
            </label>
            <div className="mt-1">
              <input
                type={"date"}
                value={date_of_issue}
                onChange={(e) => setDate_of_issue(e.target.value)}
                className=" border border-gray-300   text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 "
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
