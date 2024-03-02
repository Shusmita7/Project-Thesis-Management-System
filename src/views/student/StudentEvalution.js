/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// reactstrap components
import {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";

import {
    Badge,
    Button,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
  import { useNavigate } from "react-router-dom";
  const StudentEvaluation = () => {
    const [ token, setToken ] = useState(JSON.parse(localStorage.getItem("auth")) || "");
    const [ data, setData ] = useState({msg: "", evaluations: [], len: -1});

    const location = useLocation();
    const role = localStorage.getItem('role');

  const onLoad = async () => {

    let axiosConfig = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
  
      try {
        const response = await axios.get("http://localhost:3000/api/v1/evaluations", axiosConfig);
        console.log(response);
        setData({ msg: response.data.msg, evaluations: response.data.evaluations, len: response.data.evaluations.length });
      
      } catch (error) {
        toast.error(error.message);
      }
  }
    useEffect(() => {
      if(data.len == -1){
        console.log("request");
        onLoad();
      }
      
    })
    const navigate = new useNavigate();
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
            <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <h3 className="text-white mb-0">Evaluation</h3>
              </CardHeader>
              {/* <Button className="my-4" color="primary" type="button" onClick={(e) => navigate("/admin/createEvaluation")}>
                  Create Evaluation
                </Button> */}
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                  <th scope="col">Group Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Evaluator</th>
                  <th scope="col">Comment</th>
                    {/* <th scope="col">Project</th> */}
                    {/* <th scope="col">Budget</th>
                    <th scope="col">Status</th>
                    <th scope="col">Users</th>
                    <th scope="col">Completion</th>
                    <th scope="col" /> */}
                  </tr>
                </thead>
                <tbody>
                {data.len > 0 ? (data.evaluations.map((evaluation) => {
                    return (
                        <tr key={evaluation._id}>
                            <td>{evaluation.eventType}</td>
                            <td>{evaluation.evaluatorId.name}</td>
                            <td>{evaluation.comment}</td>
                        </tr>
                    )
                })) : (<tr>
                  <td colSpan={5}>no evaluation data available</td>
              </tr>)}
                  
                  
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default StudentEvaluation;