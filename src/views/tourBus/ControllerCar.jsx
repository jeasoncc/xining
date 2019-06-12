import React from "react";
// reactstrap components
import {
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Progress,
  Table,
  UncontrolledTooltip,
  Button
} from "reactstrap";

class Tables extends React.Component {
  render() {
    return (
      <>
        <Table className="align-items-center" style={{width: '100vw'}}>
          <thead className="thead-light">
            <tr>
              <th scope="col"  className="blockquote text-center">租车状态</th>
              <th scope="col"  className="blockquote text-center">租车时间</th>
              <th scope="col"  className="blockquote text-center">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
               <td  className="blockquote text-center">21</td>
               <td  className="blockquote text-center">21</td>
               <td  className="blockquote text-center">
               <Button color="primary" size="sm" type="button">
                换车
                </Button>
                <Button color="secondary" size="sm" type="button">
                未还
                </Button>
               </td>
             </tr>
          </tbody>
          </Table>
      </>
    );
  }
}

export default Tables