import React, { useState } from "react";
const FormTest = () => {
  const [positionCount, setPositionCount] = useState<any[]>([1]);
  const addPosition = () => {
    setPositionCount((prev) => [...prev, prev.length + 1]);
  };
  const removePosition = () => {
    if (positionCount.length > 1) {
      setPositionCount((prev) => prev.slice(0, -1));
    } else {
      alert("Position ít nhất là 1");
    }
  };
  const totalPositions = positionCount.length;
  return (
    <div>
      <button onClick={addPosition}>Thêm position</button>
      <button onClick={removePosition}>Bớt position</button>
      <div style={{ overflowX: "auto" }}>
        <table>
          <tbody>
            {/* Header */}
            <tr className="header">
              <th colSpan={1 + totalPositions}>Description for recruitment</th>
              <th rowSpan={1} className="highlight">
                HR answer
              </th>
            </tr>
            <tr className="sub-header">
              <th>Rec. Code</th>
              {positionCount.map((_, index) => (
                <th key={`header-${index}`}>
                  <input />
                </th>
              ))}
              <th className=""></th>
            </tr>
            <tr className="sub-header">
              <th>Category</th>
              {positionCount.map((_, index) => (
                <th key={`header-${index}`}>Position {index + 1}:</th>
              ))}
              <th rowSpan={5}> Date of adoption (entry date basis):</th>
            </tr>
            {/* Data Rows */}
            <tr>
              <td>Quantity rec</td>
              {positionCount.map((_, index) => (
                <th key={`header-${index}`}></th>
              ))}
            </tr>
            <tr>
              <td>Total</td>
              <th colSpan={0 + totalPositions}>{positionCount.length}</th>
            </tr>
            <tr>
              <td>Position</td>
              {positionCount.map((_, index) => (
                <td key={`position-${index}`}></td>
              ))}
            </tr>
            <tr>
              <td>Grade</td>
              {positionCount.map((_, index) => (
                <td key={`grade-${index}`}></td>
              ))}
            </tr>
            {/* Reason Section */}
            <tr>
              <td className="">Reason</td>
              {positionCount.map((_, index) => (
                <td key={`grade-${index}`}></td>
              ))}
              <td rowSpan={5} className="highlight">
                No. of adoption:
              </td>
            </tr>
            <tr>
              <td className="yellow">Requirement</td>
              {positionCount.map((_, index) => (
                <td key={`requirement-${index}`}></td>
              ))}
            </tr>
            {[
              "+ Work shift",
              "+ Gender & Age",
              "+ Education",
              "+ Experience",
              "+ Language",
              "+ Computer",
            ].map((label, labelIndex) => (
              <tr key={`requirement-${labelIndex}`}>
                <td className="yellow">{label}</td>
                {positionCount.map((_, index) => (
                  <td key={`row-${labelIndex}-${index}`}></td>
                ))}
                {labelIndex == 3 && (
                  <td rowSpan={3} className="highlight">
                    No. of adoption:
                  </td>
                )}
              </tr>
            ))}
            <tr>
              <td className="yellow">Job description</td>
              {positionCount.map((_, index) => (
                <td key={`description-${index}`} className="light-blue">
                  Attached
                </td>
              ))}
              <td className="highlight" />
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>Resign information (reference)</h2>
        <div className="filters">
          <select>
            <option>FY</option>
          </select>
          <select>
            <option>DIV.</option>
          </select>
          <select>
            <option>Dept.</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Div</th>
              <th>Sec</th>
              <th>Position</th>
              <th>Grade</th>
              <th>Entry date</th>
              <th>Actual leave date</th>
              <th>Replacement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
          </tbody>
        </table>
        <div className="buttons">
          <button className="submit-btn">Submit</button>
          <button className="save-btn">Save</button>
          <button className="revise-btn">Revise</button>
        </div>
      </div>
    </div>
  );
};
export default FormTest;
