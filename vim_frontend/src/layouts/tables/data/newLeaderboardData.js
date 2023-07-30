// /* eslint-disable react/prop-types */
// // VIM MUI components
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import ArgonAvatar from "components/ArgonAvatar";
// import ArgonBadge from "components/ArgonBadge";

// // Images
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

// import colors from "assets/theme/base/colors";
// import React, { useEffect, useState } from "react"
// import axios from 'axios'


// function Author({ image, name, email }) {
//   return (
//     <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
//       <ArgonBox mr={2}>
//         <ArgonAvatar src={image} alt={name} size="sm" variant="rounded" />
//       </ArgonBox>
//       <ArgonBox display="flex" flexDirection="column">
//         <ArgonTypography variant="button" fontWeight="medium">
//           {name}
//         </ArgonTypography>
//         <ArgonTypography variant="caption" color="secondary">
//           {email}
//         </ArgonTypography>
//       </ArgonBox>
//     </ArgonBox>
//   );
// }

// function Function({ dep, cls }) {
//   return (
//     <ArgonBox display="flex" flexDirection="column">
//       <ArgonTypography variant="caption" fontWeight="medium" color="text">
//         {dep}
//       </ArgonTypography>
//       <ArgonTypography variant="caption" color="secondary">
//         {cls}
//       </ArgonTypography>
//     </ArgonBox>
//   );
// }

// // My definition :< ---------------------------------------------------
// const [users, setUsers] = useState([])

// const fetchUserData = () => {
//   axios.get('http://localhost:8000/dashboard/users').then(function(res){
//     setUsers(res.data);
//   }).catch(function(error){
//     console.log(error)
//   })
// }

// useEffect(() => {
//   fetchUserData()
// }, [])
// // --------------------------------------------------------------------
// // Cac thanh phan can cua user nam o duoi

// const newLeaderboardData = {
//   columns: [
//     { name: "user", align: "left" },
//     { name: "department", align: "left" },
//     { name: "rank", align: "center" },
//     { name: "joined", align: "center" },
//     { name: "score", align: "center" },
//   ],

// //   rows: [
// //     {
// //       user: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
// //       department: <Function job="Công nghệ thông tin" org="K--66 CA-CLC2" />,
// //       status: (
// //         <ArgonBadge variant="gradient" badgeContent="1st" color="info" size="xs" container />
// //       ),
// //       joined: (
// //         <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
// //           23/04/18
// //         </ArgonTypography>
// //       ),
// //       score: (
// //         <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
// //           1000
// //         </ArgonTypography>
// //       ),
// //     },
// //   ],
//     rows: users.map((user) => ({
//         user: (
//         <Author
//             image={team1}
//             name={user.name}
//             email={user.email}
//         />
//         ),
//         department: (
//         <Function
//             dep={user.dep}  
//             cls={user.cls} 
//         />
//         ),
//         rank: (
//         <ArgonBadge variant="gradient" badgeContent={user.rank} color="info" size="xs" container />
//         ),
//         joined: (
//         <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
//             {user.joined}
//         </ArgonTypography>
//         ),
//         score: (
//         <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
//             {user.score}
//         </ArgonTypography>
//         ),
//     })),
// };

// export default newLeaderboardData;
