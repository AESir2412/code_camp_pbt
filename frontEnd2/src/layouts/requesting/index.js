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
        {/* <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}>
                  <MasterCard number={4562112245947852} holder="jack peterson" expires="11/22" />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="account_balance"
                    title="salary"
                    description="Belong Interactive"
                    value="+$2000"
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="paypal"
                    title="paypal"
                    description="Freelance Payment"
                    value="$455.00"
                  />
                </Grid>
                <Grid item xs={12}>
                  <PaymentMethod />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Invoices />
            </Grid>
          </Grid>
        </ArgonBox> */}
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <RequestingInformation />
            </Grid>
            {/* <Grid item xs={12} md={5}>
              <Transactions />
            </Grid> */}
          </Grid>
        </ArgonBox>
      </ArgonBox>
    </BaseLayout>
  );
}

export default Requesting;
