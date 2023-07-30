

// // Gọi API "/forum"
//  fetch("./forum")
//  .then(response => {
//      if (!response.ok) {
//          throw new Error('Network response was not ok');
//      }
//      return response.json();
//  })
//  .then(data => {
//     console.log(data)
//      // Xử lý dữ liệu trả về
//     //  const forumDataElement = document.getElementById("forum-data");
//     //  forumDataElement.innerHTML = JSON.stringify(data, null, 2);
//  })
//  .catch(error => {
//      // Xử lý lỗi nếu có
//      console.error('There was a problem with the fetch operation:', error);
//  });


data = {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner', required: true })
        owner: av123gjhsdg123kjhasdhf 

    @Prop({unique: true, default: new mongoose.Types.ObjectId})
        id : mongoose.Types.ObjectId;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Upvoters"})
        upvoters: User[]
    
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Downvoters"})
        downvoters: User[]

    @Prop({ required: true })
        text: String
}



// Hàm để lấy giá trị của một cookie dựa trên tên
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  
  // Lấy tokens từ cookie
  const accessToken = getCookie("access_token");
  const refreshToken = getCookie("refresh_token");
  
  // Gửi tokens kèm trang request
  const requestOptions = {
    method: "GET", // Hoặc "POST", "PUT", "DELETE", tùy theo loại request bạn muốn gửi
    headers: {
      Authorization: `Bearer ${accessToken}`, // Thêm token vào header Authorization
      "X-Refresh-Token": refreshToken, // Thêm token cần thiết vào header khác (nếu cần)
      // Thêm các header khác nếu cần
    },
    // Thêm các thông tin request khác (nếu cần)
  };
  
  // Gửi request đến backend
  fetch("https://your-backend-api.com/endpoint", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      // Xử lý dữ liệu từ backend
      console.log(data);
    })
    .catch((error) => {
      // Xử lý lỗi (nếu có)
      console.error(error);
    });
  