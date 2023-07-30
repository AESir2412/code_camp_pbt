// var datas = [
//     {
//         id: string,
//         owner: string,
//         text: string,
//         timestamp: date,
//         upvoters: [string]
//         downvoters: [string]
//         comments: [string]
//     }
// ]


var posts = [
    {
        postId: "1",
        ownerName: "Duy",
        text: "Ai thay toi dep trai khong",
        timestamp: '2023-07-28 11:00:00',
        upvoters: ["2", "3"],
        downvoters: ["4"],
        comments: ["2", "4"]
    },
    {
        postId: "2",
        ownerName: "Long",
        text: "Lam codecamp chan doi qua",
        timestamp: '2023-07-29 12:00:00',
        upvoters: ["1", "3"],
        downvoters: ["4"],
        comments: ["4", "1"]
    }
]

var comments = [
    {
        ownerId: "1",  // Duy
        postId: "2",
        text: "Tao cung thay the",
        time: "2023-08-15 15:30:00"
    },
    {
        ownerId: "2",  // Long
        postId: "1",
        text: "Deo",
        time: "2023-08-15 16:30:00"
    },
    {
        ownerId: "4",  // Huân
        postId: "1",
        text: "Ne luon",
        time: "2023-08-15 16:40:00"
    },
    {
        ownerId: "4",  // Huân
        postId: "2",
        text: "chan vai",
        time: "2023-08-15 16:40:10"
    },
]

var owners = [
    {
        ownerId: "1",
        ownerName: "Duy",
        email: "1234r5@fdgklj",
        score: "1000"
    },
    {
        ownerId: "2",
        ownerName: "Long",
        email: "1dfsynt5@fdgklj",
        score: "1004"
    },
    {
        ownerId: "3",
        ownerName: "Quan",
        email: "quan@fdgklj",
        score: "1002"
    },
    {
        ownerId: "4",
        ownerName: "Huan",
        email: "huan@fdgklj",
        score: "1001"
    },
]

let html = ''

// Profile
MY_ID = "4"
var filteredOwner = owners.filter(owner => owner.ownerId === MY_ID);
// Find rank
// Sắp xếp mảng owners theo điểm số giảm dần
owners.sort((a, b) => b.score - a.score);
var index = owners.findIndex(owner => owner.ownerId === MY_ID);

html = ''
temp = `
<h4 class="w3-center">My Profile</h4>
<p class="w3-center"><img src="./img/avatar.jpg" class="w3-circle"
        style="height:106px;width:106px" alt="Avatar"></p>
<hr>
<p><i class="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>ID: ${filteredOwner[0].ownerId}</p>
<p><i class="fa fa-book fa-fw w3-margin-right w3-text-theme"></i>Name: ${filteredOwner[0].ownerName}</p>
<p><i class="fa fa-mail-forward fa-fw w3-margin-right w3-text-theme"></i>Email: ${filteredOwner[0].email}</p>
<p><i class="fa fa-star fa-fw w3-margin-right w3-text-theme"></i>Score: ${filteredOwner[0].score}</p>
<p><i class="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>Rank: ${index+1}</p>

`
html += temp
const parentDiv = document.querySelector('.w3-card.w3-round.w3-white');
const containerDiv = parentDiv.querySelector('.w3-container');
containerDiv.innerHTML = html;


// Ranking

// Lấy 10 người có điểm số cao nhất
let top10 = [];
for (let i = 0; i < Math.min(10, owners.length); i++) {
  top10.push(owners[i]);
}
// Tạo HTML cho bảng xếp hạng
html = ''
html = top10.map((owner, index) => `
  <div class="w3-card w3-round w3-white w3-center">
    <div class="w3-container">
      <h4>Xếp hạng ${index + 1}</h4>
      <p>Tên: ${owner.ownerName}</p>
      <p>Điểm số: ${owner.score}</p>
    </div>
  </div>
  <br>
`).join('');

const container = document.querySelector('.w3-col.m2');
container.innerHTML = html;


// Post
posts.forEach(post => {
    html = ''
    const postDiv = document.createElement('div');
    postDiv.classList.add('w3-container', 'w3-card', 'w3-white', 'w3-round', 'w3-margin');
    temp = `
      <br>
      <img src="./img/avatar.jpg" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
      <span class="w3-right w3-opacity">${post.timestamp}</span>
      <h4>${post.ownerName}</h4><br>
      <hr class="w3-clear">
      <p>${post.text}</p>

      <div class="comment-box">
      `
    html += temp

    // thêm comment
    post.comments.forEach(cmt => {
        var filteredComments = comments.filter(comment => comment.ownerId === cmt && comment.postId === post.postId);

        temp = `
        <div class="comment">
            <span class="comment-content">${filteredComments[0].text}</span>
            <span class="comment-time">${filteredComments[0].time}</span>
        </div>
        `
        html += temp
    })

    temp =  `
    </div>
      <div class="w3-row-padding" style="margin:16px 16px">
          <div class="w3-half">
              ${post.upvoters.length} &#x1F44D
          </div>
          <div class="w3-half">
              ${post.downvoters.length} &#x1F44E
          </div>
      </div>
      <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i> Like</button>
      <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-down"></i> Dislike</button>
      <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i> Comment</button>
    `;
    html+=temp

    postDiv.innerHTML = html
    // Thêm phần tử HTML vào <div class="w3-col m7">
    document.getElementById('postContainer').appendChild(postDiv);
  });
















// Accordion
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-theme-d1";
    } else {
        x.className = x.className.replace("w3-show", "");
        x.previousElementSibling.className =
            x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}



// Lấy danh sách các button có class "w3-button w3-theme-d2 w3-margin-bottom"
const buttons = document.querySelectorAll(".w3-button.w3-theme-d2.w3-margin-bottom");

// Lặp qua từng button trong danh sách và thêm event listener cho chúng
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Kiểm tra nếu đã có textbox và nút "Enter" trong container
        if (button.parentElement.querySelector(".textbox") && button.parentElement.querySelector(".enter-button")) {
            return; // Nếu đã có, thì không tạo thêm nữa và kết thúc sự kiện
        }

        // Hàm xử lý khi bấm vào button
        // Tạo một container chứa textbox và nút "Enter"
        const container = document.createElement("div");
        container.classList.add("w3-input-container");

        // Tạo một element input là textbox
        const textBox = document.createElement("input");
        textBox.type = "text";
        textBox.className = "w3-input w3-border textbox"; // Thêm các class của w3.css để style cho textbox
        textBox.placeholder = "Nhập nội dung"; // Thêm placeholder cho textbox

        // Tạo một element button là nút "Enter"
        const enterButton = document.createElement("button");
        enterButton.className = "w3-button w3-theme-d2 w3-margin-bottom enter-button";
        enterButton.textContent = "Enter";

        // Thêm textbox và nút "Enter" vào container
        container.appendChild(textBox);
        container.appendChild(enterButton);

        // Lấy thẻ cha để thêm container vào
        const parentContainer = button.parentElement; // Lấy thẻ cha của button

        // Thêm container vào thẻ cha
        parentContainer.appendChild(container);
    });
});

// Xử lý sự kiện khi nhấn nút "Enter"
document.addEventListener("click", (event) => {
    if (event.target.matches(".enter-button")) {
        const container = event.target.parentElement;
        const textBox = container.querySelector(".textbox");
        const inputValue = textBox.value;
        alert('Nội dung đã nhập: ' + inputValue);
        // Xóa container sau khi đã xử lý
        container.remove();
    }
});

