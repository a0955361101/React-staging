const axios = require('axios').default;

// 獲取按鈕
const btns = document.querySelectorAll('button')
// 第一個
btns[0].onclick = function(){
    //發送AJAX請求
    axios({
        //請求類型
        method:'GET',
        //URL
        url:'http://localhost:3000/posts/'
    }).then(response=>{
        console.log(response);
    })
}