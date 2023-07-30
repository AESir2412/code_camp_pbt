/* eslint-disable react/prop-types */
// VIM MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import colors from "assets/theme/base/colors";

function Author({ image, name, email }) {
  return (
    <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
      <ArgonBox mr={2}>
        <ArgonAvatar src={image} alt={name} size="sm" variant="rounded" />
      </ArgonBox>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonTypography variant="button" fontWeight="medium">
          {name}
        </ArgonTypography>
        <ArgonTypography variant="caption" color="secondary">
          {email}
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

function Function({ job, org }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </ArgonTypography>
      <ArgonTypography variant="caption" color="secondary">
        {org}
      </ArgonTypography>
    </ArgonBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "user", align: "left" },
    { name: "department", align: "left" },
    { name: "status", align: "center" },
    { name: "joined", align: "center" },
    { name: "score", align: "center" },
  ],

  rows: [
    {
      user: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
      department: <Function job="Công nghệ thông tin" org="K--66 CA-CLC2" />,
      status: (
        <ArgonBadge variant="gradient" badgeContent="1st" color="info" size="xs" container />
      ),
      joined: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </ArgonTypography>
      ),
      score: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          1000
        </ArgonTypography>
      ),
    },
    {
      user: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
      department: <Function job="Điện tử viễn thông" org="K66 ĐA-CLC" />,
      status: (
        <ArgonBadge variant="gradient" badgeContent="2nd" color="light" size="xs" container />
      ),
      joined: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </ArgonTypography>
      ),
      score: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          1000
        </ArgonTypography>
      ),
    },
    {
      user: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
      department: <Function job="Executive" org="Projects" />,
      status: (
        <ArgonBadge variant="gradient" badgeContent="3rd" color="warning" size="xs" container />
      ),
      joined: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/17
        </ArgonTypography>
      ),
      // action: (
      //   <ArgonTypography
      //     component="a"
      //     href="#"
      //     variant="caption"
      //     color="secondary"
      //     fontWeight="medium"
      //   >
      //     Edit
      //   </ArgonTypography>
      // ),
      score: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          1000
        </ArgonTypography>
      ),
    },
    {
      user: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
      department: <Function job="Programator" org="Developer" />,
      status: (
        <ArgonBadge variant="gradient" badgeContent="4th" color="dark" size="xs" container />
      ),
      joined: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          24/12/08
        </ArgonTypography>
      ),
      // action: (
      //   <ArgonTypography
      //     component="a"
      //     href="#"
      //     variant="caption"
      //     color="secondary"
      //     fontWeight="medium"
      //   >
      //     Edit
      //   </ArgonTypography>
      // ),
      score: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          1000
        </ArgonTypography>
      ),
    },
    {
      user: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
      department: <Function job="Manager" org="Executive" />,
      status: (
        <ArgonBadge variant="gradient" badgeContent="5th" color="dark" size="xs" container />
      ),
      joined: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          04/10/21
        </ArgonTypography>
      ),
      // action: (
      //   <ArgonTypography
      //     component="a"
      //     href="#"
      //     variant="caption"
      //     color="secondary"
      //     fontWeight="medium"
      //   >
      //     Edit
      //   </ArgonTypography>
      // ),
      score: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          1000
        </ArgonTypography>
      ),
    },
    {
      user: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
      department: <Function job="Programtor" org="Developer" />,
      status: (
        <ArgonBadge variant="gradient" badgeContent="6th" color="dark" size="xs" container />
      ),
      joined: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/20
        </ArgonTypography>
      ),
      // action: (
      //   <ArgonTypography
      //     component="a"
      //     href="#"
      //     variant="caption"
      //     color="secondary"
      //     fontWeight="medium"
      //   >
      //     Edit
      //   </ArgonTypography>
      // ),
      score: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          1000
        </ArgonTypography>
      ),
    },
  ],
};

export default authorsTableData;
