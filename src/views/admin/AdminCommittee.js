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
    Col,
    Row,
    UncontrolledTooltip,
  } from "reactstrap";
  // core components
  import React, { useEffect, useState } from 'react'
 
  
  import { toast } from 'react-toastify';
  import axios from 'axios';

  import Header from "components/Headers/Header.js";
  import { useNavigate } from "react-router-dom";
  const AdminCommittee = () => {
    const [ token, setToken ] = useState(JSON.parse(localStorage.getItem("auth")) || "");
    const [ data, setData ] = useState({});

    const navigate = useNavigate();
    const onLoad = async () => {

      let axiosConfig = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
    
        try {
          const response = await axios.get("http://localhost:3000/api/v1/allCommittee", axiosConfig);
          console.log(response);
          setData({ msg: response.data.msg, allCommittees: response.data.committees, len: response.data.committees.length });
        
        } catch (error) {
          toast.error(error.message);
        }
    }
  
  
    
    useEffect(() => {
      
      onLoad();
      if(token === ""){
        navigate("/auth/login");
        toast.warn("Please login first to access dashboard");
      }
      
    });
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
            <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
            <CardHeader className="bg-transparent border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                  <h3 className="text-white mb-0">Committee</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      type="button"
                      onClick={(e) => navigate("/admin/createCalendar")}
                      size="sm"
                    >
                      Create Committee
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                  <th scope="col">Session</th>
                  <th scope="col">Head</th>
                  <th scope="col">Member 1</th>
                  <th scope="col">Member 2</th>
                  <th scope="col">External</th>
                   <th scope="col"> Action</th>
                  </tr>
                </thead>
                <tbody>
                {data.len > 0 ? (data.allCommittees.map((committee) => {
                    return (
                        <tr key={committee._id}>
                            <td>{committee.session}</td>
                            <td>{committee.committeeHead.name}</td>
                            <td>{committee.member1.name}</td>
                            <td>{committee.member2.name}</td>
                            <td>{committee.external.name}</td>
                            <td><UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown></td>
                        </tr>
                    )
                })) : (<tr>
                  <td colSpan={5}>no committee data available</td>
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

export default AdminCommittee;