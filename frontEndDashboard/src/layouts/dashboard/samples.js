var users = [
    {
        userID: "1",         
        lastOnline: "2022-12-3"
    },
    {
        userID: "2",          
        lastOnline: "2022-12-4"
    },
    {
        userID: "3",         
        lastOnline: "2022-12-4"
    },
    {
        userID: "4",         
        lastOnline: "2022-12-3"
    },
];

var uploads = [
    {
        uploadID: "1",
        userID: "2",
        uploadDay: "2022-8-4"
    },
    {
        uploadID: "2",
        userID: "2",
        uploadDay: "2022-8-5"
    },
    {
        uploadID: "3",
        userID: "1",
        uploadDay: "2022-8-5"
    },
    {
        uploadID: "4",
        userID: "4",
        uploadDay: "2022-8-5"
    }
];

var posts = [
    {
        postID: "1",
        userID: "4",
        postDay: "2022-8-5"
    },
    {
        postID: "2",
        userID: "1",
        postDay: "2022-8-6"
    },
    {
        postID: "3",
        userID: "1",
        postDay: "2022-8-6"
    },
    {
        postID: "4",
        userID: "2",
        postDay: "2022-8-6"
    }
];

var lineChartUser = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Users",
        color: "info",
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
      },
    ],
};

var lineChartUpload = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Uploads",
        color: "info",
        data: [510, 440, 3010, 2220, 5001, 2501, 4002, 1230, 5001],
      },
    ],
};

var lineChartPost = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Posts",
        color: "info",
        data: [51310, 1440, 30, 2120, 5101, 221, 4102, 10, 501],
      },
    ],
};



