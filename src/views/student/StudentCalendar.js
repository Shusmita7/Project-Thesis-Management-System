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
    Button,
  } from "reactstrap";
  // core components
  import React, { useEffect, useState } from 'react'
  import Header from "components/Headers/Header.js";
  import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';
import Moment from 'moment';
  const StudentCalendar = () => {
  const [updateCalendarId, setUpdateCalendarId] = useState(null);
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
      const response = await axios.get("http://localhost:3000/api/v1/allCalendar", axiosConfig);
      setData({ msg: response.data.msg, allCalendars: response.data.calendars, length: response.data.calendars.length });
      toast.success(response.data.msg);
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
                <h3 className="text-white mb-0">Calendar</h3>
              </CardHeader>
              
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Session</th>
                    <th scope="col">Proposal Date</th>
                    <th scope="col">Progress Date</th>
                    <th scope="col">Predefense Date</th>
                    <th scope="col">Defense Date</th>
                    
                    {/* <th scope="col">Status</th>
                    <th scope="col">Completion</th> */}
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                {data.length > 0 ? (
                    data.allCalendars.map((calendar) => (
                      <tr key={calendar._id}>
                        <td>{calendar.session}</td>
                        <td>{Moment(calendar.proposalDate).format('DD MMM YYYY')}</td>
                        <td>{Moment(calendar.progressDate).format('DD MMM YYYY')}</td>
                        <td>{Moment(calendar.preDefenseDate).format('DD MMM YYYY')}</td>
                        <td>{Moment(calendar.defenseDate).format('DD MMM YYYY')}</td>
                        
                       
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5}>no calendar data available</td>
                    </tr>
                  )}
                  
                  
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default StudentCalendar;