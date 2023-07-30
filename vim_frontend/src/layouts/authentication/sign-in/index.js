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
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

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
import Google from './google.tsx';
import routes from 'routes'


const getRoutes = (allRoutes) =>
allRoutes.map((route) => {
  if (route.collapse) {
    return getRoutes(route.collapse);
  }

  if (route.route) {
    return <Route exact path={route.route} element={route.component} key={route.key} />;
  }

  return null;
});

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);


  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <IllustrationLayout
    color=""
      title="Sign In"
      description="Sign in your account with Google"
      illustration={{
        image: schoolBgImage,
        title: 'Đại học Quốc gia Hà Nội',
        description:
          "Đổi mới sáng tạo - Trách nhiệm quốc gia - Phát triển bền vững",
      }}
    > 
      <ArgonButton 
      route = "http://localhost:8000/auth/google"
      title = "Google" 
      name  = "Google"
      size = "large"
      >
      </ArgonButton>
      
    </IllustrationLayout>
  );
}

export default Illustration;
