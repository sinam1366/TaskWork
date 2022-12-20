import React, { useState, useEffect } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import axios from "axios";
import { useSelector } from "react-redux";
const HeaderProducts = (props) => {
  const userValid = useSelector((state) => state.auth.isLogin);
  const [rowData, setRowData] = useState();
  const [colDefs, setColDefs] = useState([
    { field: "id" },
    { field: "title" },
    { field: "description" },
    { field: "price", editable: "true" },
    { field: "discountPercentage" },
    { field: "rating" },
    { field: "stock" },
    { field: "brand" },
    { field: "category" },
    { field: "thumbnail" },
    { field: "thumbnail" },
  ]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios("http://dummyjson.com/auth/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => {
            setRowData(response.data.products)
        })
        .catch((error) => {
          console.log(error);
        });
    }else{
        setRowData([])
    }
  }, []);
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact
        rowData={rowData}
        defaultColDef={{ sortable: true, filter: true }}
        pagination={true}
        columnDefs={colDefs}
      ></AgGridReact>
    </div>
  );
};

export default HeaderProducts;
