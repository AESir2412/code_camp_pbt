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

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// VIM MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function PlatformSettings() {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [mentionsMe, setMentionsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <Card>
      <ArgonBox pt={2} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          platform settings
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
        <ArgonTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Notifications
        </ArgonTypography>
        <ArgonBox display="flex" py={1} mb={0.25}>
          <ArgonBox mt={0.25}>
            <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
          </ArgonBox>
          <ArgonBox width="80%" ml={2}>
            <ArgonTypography variant="button" fontWeight="regular" color="text">
              Notify me when someone replies to my post
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
        <ArgonBox display="flex" py={1} mb={0.25}>
          <ArgonBox mt={0.25}>
            <Switch checked={answersPost} onChange={() => setAnswersPost(!answersPost)} />
          </ArgonBox>
          <ArgonBox width="80%" ml={2}>
            <ArgonTypography variant="button" fontWeight="regular" color="text">
              Notify me when someone mentions me 
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
        {/* <ArgonBox display="flex" py={1} mb={0.25}>
          <ArgonBox mt={0.25}>
            <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} />
          </ArgonBox>
          <ArgonBox width="80%" ml={2}>
            <ArgonTypography variant="button" fontWeight="regular" color="text">
              Notify me when 
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox> */}
        <ArgonBox mt={3}>
          <ArgonTypography
            variant="caption"
            fontWeight="bold"
            color="text"
            textTransform="uppercase"
          >
            post settings
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox display="flex" py={1} mb={0.25}>
          <ArgonBox mt={0.25}>
            <Switch checked={newLaunches} onChange={() => setNewLaunches(!newLaunches)} />
          </ArgonBox>
          <ArgonBox width="80%" ml={2}>
            <ArgonTypography variant="button" fontWeight="regular" color="text">
              Get new posts from VNU 
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
        <ArgonBox display="flex" py={1} mb={0.25}>
          <ArgonBox mt={0.25}>
            <Switch checked={productUpdate} onChange={() => setProductUpdate(!productUpdate)} />
          </ArgonBox>
          <ArgonBox width="80%" ml={2}>
            <ArgonTypography variant="button" fontWeight="regular" color="text">
              Get new posts from your department
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
        <ArgonBox display="flex" py={1} mb={0.25}>
          <ArgonBox mt={0.25}>
            <Switch checked={newsletter} onChange={() => setNewsletter(!newsletter)} />
          </ArgonBox>
          <ArgonBox width="80%" ml={2}>
            <ArgonTypography variant="button" fontWeight="regular" color="text">
              Get new posts about scholarships
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default PlatformSettings;
