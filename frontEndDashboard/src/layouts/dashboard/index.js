/* eslint-disable no-unused-vars */
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
import Icon from "@mui/material/Icon";

// VIM MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// VIM MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import SalesTable from "examples/Tables/SalesTable";
import CategoriesList from "examples/Lists/CategoriesList";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// VIM MUI base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import Slider from "layouts/dashboard/components/Slider";

// Data
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import gradientLineChartData2 from "layouts/dashboard/data/gradientLineChartData2";
import gradientLineChartData3 from "layouts/dashboard/data/gradientLineChartData3";


import salesTableData from "layouts/dashboard/data/salesTableData";
import categoriesListData from "layouts/dashboard/data/categoriesListData";

import React, { useEffect, useState } from "react"


function Default() {
  const { size } = typography;

   // My definition :< ---------------------------------------------------
  const [users, setUsers] = useState([])
  const [uploads, setUploads] = useState([])
  const [posts, setPosts] = useState([])

  const [userChart, setUserChart] = useState([])
  const [uploadChart, setUploadChart] = useState([])
  const [postChart, setPostChart] = useState([])
 
  const fetchUserData = () => {
    fetch("/users", {method: "GET", headers: {'Content-Type': 'application/json'}})
      .then(response => {
        return response.json()
      })
      .then(dataUsers => {
        setUsers(dataUsers)
      })
  }
 
  const fetchUploadData = () => {
    fetch("127.0.0.1:8000/uploads", {method: "GET", headers: {'Content-Type': 'application/json'}})
      .then(response => {
        return response.json()
      })
      .then(dataUploads => {
        setUploads(dataUploads)
      })
  }

  const fetchPostData = () => {
    fetch("127.0.0.1:8000/posts", {method: "GET", headers: {'Content-Type': 'application/json'}})
      .then(response => {
        return response.json()
      })
      .then(dataPosts => {
        setPosts(dataPosts)
      })
  }
 
  const fetchUserChartData = () => {
    fetch("127.0.0.1:8000/userChart", {method: "GET", headers: {'Content-Type': 'application/json'}})
      .then(response => {
        return response.json()
      })
      .then(dataPostChart => {
        setPosts(dataPostChart)
      })
  }

  const fetchUploadChartData = () => {
    fetch("127.0.0.1:8000/uploadChart", {method: "GET", headers: {'Content-Type': 'application/json'}})
      .then(response => {
        return response.json()
      })
      .then(datauploadChart => {
        setPosts(datauploadChart)
      })
  }

  const fetchPostChartData = () => {
    fetch("127.0.0.1:8000/postChart", {method: "GET", headers: {'Content-Type': 'application/json'}})
      .then(response => {
        return response.json()
      })
      .then(dataPostChart => {
        setPosts(dataPostChart)
      })
  }
 
  useEffect(() => {
    fetchUserData()
  }, [])
 
  useEffect(() => {
    fetchUploadData()
  }, [])
 
  useEffect(() => {
    fetchPostData()
  }, [])

  useEffect(() => {
    fetchUserChartData()
  }, [])
 
  useEffect(() => {
    fetchUploadChartData()
  }, [])
 
  useEffect(() => {
    fetchPostChartData()
  }, [])

  // --------------------------------------------------------------------

  // Calculate the total number of users
  const totalUsers = users.length;

  // Calculate the number of users who have lastOnline on the same day as today
  const today = new Date().toISOString().split('T')[0]; // Get today's date in "YYYY-MM-DD" format
  const todayUsers = users.filter(user => user.lastOnline === today).length;

  //same with uploads and posts
  const todayUploads = uploads.filter(upload => upload.uploadDay === today).length;
  const todayPosts = posts.filter(post => post.postDay === today).length;

  // --------------------------------------------------------------------
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Total Users"
              count= {totalUsers}
              icon={{ color: "info", component: <i className="ni ni-money-coins" /> }}
              // percentage={{ color: "success", count: "+55%", text: "since yesterday" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Today's Users"
              count= {todayUsers}
              icon={{ color: "error", component: <i className="ni ni-world" /> }}
              // percentage={{ color: "success", count: "+3%", text: "since last week" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Today's Uploads"
              count= {todayUploads}
              icon={{ color: "success", component: <i className="ni ni-paper-diploma" /> }}
              // percentage={{ color: "error", count: "-2%", text: "since last quarter" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Today's Posts"
              count= {todayPosts}
              icon={{ color: "warning", component: <i className="ni ni-cart" /> }}
              // percentage={{ color: "success", count: "+5%", text: "than last month" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} lg={7}>
            <GradientLineChart
              title="Users Overview"
              description={
                <ArgonBox display="flex" alignItems="center">
                  <ArgonBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                    <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
                  </ArgonBox>
                  <ArgonTypography variant="button" color="text" fontWeight="medium">
                    4% more{" "}
                    <ArgonTypography variant="button" color="text" fontWeight="regular">
                      in 2022
                    </ArgonTypography>
                  </ArgonTypography>
                </ArgonBox>
              }
              chart={userChart} //gradientLineChartData
            />
          </Grid>
          <Grid item xs={12} lg={5}>
            <Slider />
          </Grid>
        </Grid>
        {/* <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <SalesTable title="Sales by Country" rows={salesTableData} />
          </Grid>
          <Grid item xs={12} md={4}>
            <CategoriesList title="categories" categories={categoriesListData} />
          </Grid>
        </Grid> */}


        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} lg={6}>
            <GradientLineChart
              title="Uploads Overview"
              description={
                <ArgonBox display="flex" alignItems="center">
                  <ArgonBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                    <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
                  </ArgonBox>
                  <ArgonTypography variant="button" color="text" fontWeight="medium">
                    4% more{" "}
                    <ArgonTypography variant="button" color="text" fontWeight="regular">
                      in 2022
                    </ArgonTypography>
                  </ArgonTypography>
                </ArgonBox>
              }
              chart={uploadChart}
            />
          </Grid>
          
          <Grid item xs={12} lg={6}>
            <GradientLineChart
              title="Posts Overview"
              description={
                <ArgonBox display="flex" alignItems="center">
                  <ArgonBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                    <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
                  </ArgonBox>
                  <ArgonTypography variant="button" color="text" fontWeight="medium">
                    4% more{" "}
                    <ArgonTypography variant="button" color="text" fontWeight="regular">
                      in 2022
                    </ArgonTypography>
                  </ArgonTypography>
                </ArgonBox>
              }
              chart={postChart}
            />
          </Grid>
          

        </Grid>




      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;
