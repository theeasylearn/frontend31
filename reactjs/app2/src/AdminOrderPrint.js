import React, { useEffect } from 'react'
import VerifyLogin from "./authenticate";

export default function AdminOrderPrint() {
  VerifyLogin();
  return (<div>
    <h2 style={{ "width": "80%", "margin": "auto", "margin-top": "20px", "margin-bottom": "20px" }}>Bill</h2>
    <table width="80%" border={2} cellPadding={10} align="center">
      <tbody><tr>
        <td width="25%">Id</td>
        <td width="25%" />
        <td width="25%">Name</td>
        <td width="25%" />
      </tr>
        <tr>
          <td width="25%">Date</td>
          <td width="25%" />
          <td width="25%">Address 1</td>
          <td width="25%" />
        </tr>
        <tr>
          <td width="25%">Amount</td>
          <td width="25%" />
          <td width="25%">Address 2</td>
          <td width="25%" />
        </tr>
        <tr>
          <td width="25%">Status</td>
          <td width="25%" />
          <td width="25%">City</td>
          <td width="25%" />
        </tr>
        <tr>
          <td width="25%">Payment Mode</td>
          <td width="25%" />
          <td width="25%">Pincode</td>
          <td width="25%" />
        </tr>
        <tr>
          <td width="25%">Payment Status</td>
          <td width="25%" />
          <td width="25%">Mobile</td>
          <td width="25%" />
        </tr>
        <tr>
          <td width="25%">Remarks</td>
          <td colSpan={3} />
        </tr>
      </tbody></table>
    <h4 style={{ "width": "80%", "margin": "auto", "margin-top": "20px", "margin-bottom": "20px" }}>Products</h4>
    <table width="80%" border={2} cellPadding={10} align="center">
      <thead>
        <tr>
          <th width="10%">Sr No</th>
          <th>Name</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>IPhone 16</td>
          <td>1,25,000</td>
          <td>2</td>
          <td>2,50,000</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}
