/**
=========================================================
* VIM MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Puppy's Brains Terminators - PBT (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// VIM MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Billing page components
import Request from "layouts/requesting/components/Request";
import React, { useEffect, useState } from "react"

function RequestingInformation() {

  // My definition :< ---------------------------------------------------
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("/users", {method: "GET", headers: {'Content-Type': 'application/json'}})
      .then(response => {
        return response.json()
      })
      .then(dataUsers => {
        setUsers(dataUsers)
      })
  }
 
  useEffect(() => {
    fetchUserData()
  }, [])

  //  ---------------------------------------------------------------------
  
  // chi co 5 yeu to nhu duoi cua user

  return (
    <Card id="delete-account">
      <ArgonBox pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Request Information
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pt={1} pb={2} px={2}>
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {users.map((user, index) => (
            <Request
              key={index} // Make sure to add a unique key for each iteration
              name={user.name}
              department={user.department}
              email={user.email}
              link={user.link}
              type={user.type}
            />
          ))}
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default RequestingInformation;
