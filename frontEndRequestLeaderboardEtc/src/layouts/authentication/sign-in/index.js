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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// VIM MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Image
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg";

const schoolBgImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Nha_dieu_hanh_144_Xuan_Thuy_26Jan2005-01s.jpg/1200px-Nha_dieu_hanh_144_Xuan_Thuy_26Jan2005-01s.jpg";

import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from 'E:/UET CodeCamp/Final/src/layouts/authentication/sign-in/google.tsx';

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <IllustrationLayout
    color=""
      title="Sign In"
      description="Sign in your account with"
      illustration={{
        image: schoolBgImage,
        title: 'Đại học Quốc gia Hà Nội',
        description:
          "Đổi mới sáng tạo - Trách nhiệm quốc gia - Phát triển bền vững",
      }}
    > 
      {/* <ArgonBox mb={2}>
        <GoogleOAuthProvider clientId="739106075686-o3iq57fl19qmf50planckptdekklb1du.apps.googleusercontent.com">
          <Google />
        </GoogleOAuthProvider>
        <Socials />
      </ArgonBox> */}

      {/* Google shit */}
      <GoogleOAuthProvider clientId="739106075686-o3iq57fl19qmf50planckptdekklb1du.apps.googleusercontent.com">
          <Google />
      </GoogleOAuthProvider>
      
      {/* <ArgonBox px={3}>
        <Separator />
      </ArgonBox> */}

      <ArgonBox component="form" role="form">
        {/* <ArgonBox mb={2}>
          <ArgonInput type="email" placeholder="Email" size="large" />
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonInput type="password" placeholder="Password" size="large" />
        </ArgonBox>
        <ArgonBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <ArgonTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </ArgonTypography>
        </ArgonBox> */}

        {/* <ArgonBox mt={4} mb={1}>
          <ArgonButton color="info" size="large" fullWidth>
            Sign In
          </ArgonButton>
        </ArgonBox> */}
        {/* <ArgonBox mt={3} textAlign="center">
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            You&apos;re an admin?{" "}
            <ArgonTypography
              component={Link}
              to="/authentication/sign-in-admin"
              variant="button"
              color="vnu_text_color"
              fontWeight="medium"
            >
              Sign In for Admin here
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox> */}
      </ArgonBox>
    </IllustrationLayout>
  );
}

export default Illustration;
