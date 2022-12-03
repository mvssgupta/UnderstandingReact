import React from "react";

function ObjectList() {
  const students = [
    { id: 1, name: "Gupta", cls: "B.tech" },
    { id: 2, name: "Srinu", cls: "Inter" },
    { id: 3, name: "Raghu", cls: "B.tech" },
  ];

//   every item in a map should have a unique value called key
// here the key should be unique , since here the student id is unique we can use it as key
  const studentsList = students.map((object) => (
    <h2 key = {object.id}>
      Hello this is {object.name} , studying {object.cls}
    </h2>
  ));

  return <>{studentsList}</>;
}

export default ObjectList;
