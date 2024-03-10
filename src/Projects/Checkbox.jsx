import React, { useState } from "react";

export const Checkbox = () => {
  const [check, setCheck] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  });

  return (
    <div
      style={{
        marginTop: "100px",
        marginLeft: "100px",
        width: "500px",
        display: "flex",
        // justifyContent: "space-between",
      }}
    >
      <input
        type="checkbox"
        id="1"
        checked={check.check1}
        onChange={() => setCheck({ ...check, check1: !check.check1 })}
      />
      <label htmlFor="1" style={{ margin: "5px" }}>
        1
      </label>
      <input
        type="checkbox"
        id="2"
        checked={check.check2}
        onChange={() => setCheck({ ...check, check2: !check.check2 })}
      />
      <label htmlFor="2" style={{ margin: "5px" }}>
        2
      </label>
      <input
        type="checkbox"
        id="3"
        checked={check.check3}
        onChange={() => setCheck({ ...check, check3: !check.check3 })}
      />
      <label htmlFor="3" style={{ margin: "5px" }}>
        3
      </label>
      <input
        type="checkbox"
        id="4"
        checked={check.check4}
        onChange={() => setCheck({ ...check, check4: !check.check4 })}
      />
      <label htmlFor="4" style={{ margin: "5px" }}>
        4
      </label>
      <input
        type="checkbox"
        id="all"
        checked={check.check1 && check.check2 && check.check3 && check.check4}
        onChange={() => {
          setCheck({
            check1: !check.check1,
            check2: !check.check2,
            check3: !check.check3,
            check4: !check.check4,
          });
        }}
      />
      <label htmlFor="all" style={{ margin: "5px" }}>
        Select All
      </label>
    </div>
  );
};
