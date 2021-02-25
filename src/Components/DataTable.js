import React from "react";

const DataTable = ({ DataTables, setDataTables }) => {
  const sortByDate = (e) => {
    const sorted = [...DataTables].sort((b, a) => {
      return b.ID - a.ID;
    });
    setDataTables(sorted);
    e.target.innerHTML = "ID 	&#8593;";
  };

  return (
    <div>
      <br />
      <table className="tg">
        <thead>
          <tr>
            <th className="tg-0pky">DATE</th>
            <th className="tg-0pky">PRODUCT</th>
            <th className="tg-0pky">SIZE</th>
            <th className="tg-0pky">WEBSITE</th>
            <th className="tg-0pky">PRICE</th>
            <th className="tg-0pky">STATUS</th>
            <th
              style={{ cursor: "pointer" }}
              onClick={sortByDate}
              className="tg-0pky tableHeadId"
            >
              ID &#8595;
            </th>
          </tr>
        </thead>
        <tbody>
          {DataTables.map((DataRow) => (
            <tr key={DataRow.ID}>
              <td className="tg-0pky">{DataRow.DATE}</td>
              <td className="tg-0pky">{DataRow.PRODUCT}</td>
              <td className="tg-0pky">{DataRow.SIZE}</td>
              <td className="tg-0pky">{DataRow.WEBSITE}</td>
              <td className="tg-0pky">{DataRow.PRICE}</td>
              <td className="tg-0pky">
                {DataRow.STATUS === "SUCCESS" ? (
                  <span className="success">{DataRow.STATUS}</span>
                ) : (
                  <span className="fail">{DataRow.STATUS}</span>
                )}
              </td>
              <td className="tg-0pky">{DataRow.ID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
