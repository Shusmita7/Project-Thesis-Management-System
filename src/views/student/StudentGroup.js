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
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Button,
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
  const StudentGroup = () => {
    const [ token, setToken ] = useState(JSON.parse(localStorage.getItem("auth")) || "");
    const [ data, setData ] = useState({});
    const navigate = new useNavigate();

    const onLoad = async () => {

      let axiosConfig = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
    
        try {
          const response = await axios.get("http://localhost:3000/api/v1/myGroup", axiosConfig);
          console.log(response);
          setData({ msg: response.data.msg, allGroups: response.data.groups, len: response.data.groups.length });
        
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
      
    }, [token]);
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
            <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <h3 className="text-white mb-0">Group</h3>
              </CardHeader>
              {/* <Button className="my-4" color="primary" type="button" onClick={(e) => navigate("/admin/createGroup")}>
                  Create Group
                </Button> */}
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Title</th>
                    <th scope="col">Supervisor</th>
                    {/* <th scope="col">Budget</th>
                    <th scope="col">Status</th>
                    <th scope="col">Users</th>
                    <th scope="col">Completion</th> */}
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                
                  {data.len > 0 ? (data.allGroups.map((group) => {
                    return (
                        <tr key={group._id}>
                            <td>{group.groupName}</td>
                            <td>{group.groupType}</td>
                            <td>{group.title}</td>
                            <td>{group.teacherId.name}</td>
                            <td className="text-right">
                              <UncontrolledDropdown>
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
                              </UncontrolledDropdown>
                            </td>
                        </tr>
                    )
                })) : (<tr>
                  <td colSpan={5}>no group data available</td>
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

export default StudentGroup;