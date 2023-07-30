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
import Grid from "@mui/material/Grid";

// VIM MUI components
import ArgonBox from "components/ArgonBox";

// VIM MUI components
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import BaseLayout from "layouts/requesting/components/BaseLayout";
import PaymentMethod from "layouts/requesting/components/PaymentMethod";
import Invoices from "layouts/requesting/components/Invoices";
import RequestingInformation from "layouts/requesting/components/RequestingInformation";
import Transactions from "layouts/requesting/components/Transactions";

function Requesting() {
  return (
    <BaseLayout stickyNavbar>
      <ArgonBox mt={4}>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <RequestingInformation />
            </Grid>
          </Grid>
        </ArgonBox>
      </ArgonBox>
    </BaseLayout>
  );
}

export default Requesting;
