import React from "react";
import { app, database } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
export default function Home() {
  const dbInstance = collection(database, "userName");
  const [name, setName] = React.useState("");
  const formHandler = (e) => {
    e.preventDefault();
    console.log(name);
    // setUser(name);
    addDoc(dbInstance, {
      userName: name,
    });
  };
  return (
    <>
      <form
        onSubmit={formHandler}
        className="flex flex-col items-center justify-center py-12 h-screen sm:px-0 px-4"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="sm:w-96 w-full py-3 border border--gray-600 rounded-md foucs:outline-none px-2"
          placeholder="Enter Name"
        />
        <button className="mt-4 py-2 px-4 sm:w-auto w-full bg-indigo-700 text-white rounded-md">
          Submit
        </button>
      </form>
    </>
  );
}
