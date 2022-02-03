import React from "react";
import "./productList.css";
import Badge from "../../components/badge/Badge";

import { productRows } from "../../assets/JsonData/dummyData";
import Table from "../../components/table/Table";

const customerTableHead = ["", "Product", "Stock", "Status", "Price"];
const activeStatus = {
  active: "success",
  inactive: "danger",
};

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>
      <div className="productListItem">
        <img className="productListImg" src={item.img} alt="" />
        {item.name}
      </div>
    </td>
    <td>{item.stock}</td>
    <td>
      <Badge type={activeStatus[item.status]} content={item.status} />
    </td>
    <td>{item.price}</td>
  </tr>
);

const ProductList = () => {
  return (
    <div>
      <h2 className="page-header">Products</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit="10"
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={productRows}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
