import "./App.css";
import {
  exportComponentAsPNG,
  exportComponentAsPDF,
} from "react-component-export-image";
import React, { useState, createRef } from "react";
import logo from "./logo.png";
import footer from "./footer.png";
import seal from "./seal.png";
import eva from "./eva.png";
import odipo from "./odipo.png";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function MyComponent({
  name,

  setName,
  training,
  setTraining,
  companyName,
  setCompanyName,
  date_of_issue,
  setDate_of_issue,
}) {
  const [componentRef, setComponentRef] = useState(createRef());
  const notify = () =>
    toast.success("Certificate Downloaded Successfully", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <>
      <div className="flex my-8 justify-center items-center">
        <button
          className="bg-[#F26334] flex justify-center items-center my-2 text-white hover:scale-105 transition-all  text-2xl font-bold p-2 "
          onClick={() => {
            window.scrollTo(0, 0);
            setTimeout(() => {
              exportComponentAsPNG(componentRef, {
                fileName: `${name} Certificate.png`,
              });
            }, 1000);
            notify();
            setTimeout(() => {
              setName("");

              setTraining("");
              setCompanyName("");
              setDate_of_issue("");
            }, 2000);
          }}
        >
          Download Certificate Image
        </button>
      </div>
      <div className="w-[100%] mx-auto md:mx-0     ">
        <div
          ref={componentRef}
          className="flex flex-col w-[100%] justify-between mx-auto  items-center"
        >
          <div className="    flex h-[90vh]  justify-between">
            <div className="flex flex-col my-8 items-center gap-4  justify-between">
              <img src={logo} alt="logo" className="w-[250px] h-[250px]" />

              <img src={seal} alt="seal" className="h-[250px]" />

              <div clsasName="flex flex-col gap-2">
                <p>GS1 Kenya</p>
                <p>PO Box 3243-00200 , Nairobi</p>
                <p>Mombasa Road</p>
                <p>M +254 710 122 252 / 709226000</p>
                <p>W www.gs1kenya.org / </p>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="flex flex-col items-end gap-2">
                <p className="text-end">The Global Language of Business</p>

                <p className="bg-[#F26334] font-bold text-end h-[10px] w-[100%]" />
              </div>
              <p className="text-6xl text-[#F26334] items-start font-bold">
                CERTIFICATE OF PARTICIPATION
              </p>
              <div className="flex flex-col   w-[50%] mx-auto">
                <p>This is to certify that</p>
                <p className="text-4xl text-[#002060] font-bold my-1">
                  {name && <p>{name}</p>}
                  {!name && <p>participant name....</p>}
                </p>

                <p className="text-5xl text-[#002060]  font-bold  my-1">
                  {companyName && <p>{companyName}</p>}
                  {!companyName && <p>company Name....</p>}
                </p>

                <p>Has successfully completed the</p>

                <p className="text-2xl my-2 text-[#F26334]">
                  {training && <p className="my-2">{training}</p>}
                  {!training && <p>type of training....</p>}
                </p>
              </div>

              <div className="flex my-4 justify-around items-center">
                <div className="flex flex-col items-center gap-2">
                  <p>Joseph Odipo</p>
                  <img src={odipo} alt="odipo" className="w-[100px]" />

                  <p>Research And Data</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <p>Eva Buyu</p>
                  <img src={eva} alt="eva" className="w-[100px]" />

                  <p>Communications & Government Relations</p>
                </div>
              </div>

              <p className="border-t-2 flex gap-2  border-b-2 border-black py-2 w-[700px]">
                Issue Date:
                <p className="text-[#F26334]">
                  {date_of_issue && <p>{date_of_issue}</p>}
                  {!date_of_issue && <p>date of issue....</p>}
                </p>
              </p>
              <img src={footer} alt="footer" className="w-[100%]" />
            </div>
          </div>

          <div className="bg-white h-[100px] w-[100%] " />
        </div>

        <ToastContainer />
      </div>
    </>
  );
}

export default MyComponent;
