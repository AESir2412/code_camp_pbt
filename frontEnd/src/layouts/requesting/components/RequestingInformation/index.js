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

function RequestingInformation() {
  return (
    <Card id="delete-account">
      <ArgonBox pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Request Information
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pt={1} pb={2} px={2}>
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Request
            name="oliver liam"
            company="Công nghệ thông tin"
            email="oliver@burrito.com"
            vat="K66 CA-CLC2"
          />
          <Request
            name="lucas harper"
            company="Điện tử viễn thông"
            email="lucas@stone-tech.com"
            vat="K67 DA-CLC"
          />
          <Request
            name="ethan james"
            company="Kĩ thuật nông nghiệp"
            email="ethan@fiber.com"
            vat="K68 AAFAFAMF"
            noGutter
          />
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default RequestingInformation;
