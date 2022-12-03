import React from "react";

function ObjectList() {
  const students = [
    { id: 1, name: "Gupta", cls: "B.tech" },
    { id: 2, name: "Srinu", cls: "Inter" },
    { id: 3, name: "Raghu", cls: "B.tech" },
  ];
  const studentsList = students.map((object) => (
    <h2>
      Hello this is {object.name} , studying {object.cls}
    </h2>
  ));

  return <>{studentsList}</>;
}

export default ObjectList;
