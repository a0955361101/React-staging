# 筆記 todoList
    1.拆分組件、實現靜態組件,注意:className、style的寫法
    2.動態初始化列表,如何確定將數據放在哪個組件的state中?
        -某個組件使用: 放在其自身的state中
        -某些組件使用: 放在他們的共同父組件state中 (官方稱此操作為 : 狀態提升)
    3.關於父子之間的通信:
        1.[父組件]給[子組件]傳遞數據: 通過props傳遞
        2.[子組件]給[父組件]傳遞數據: 通過props傳遞, 要求父提前給子傳遞一個函數
    4.注意defaultChecked(只有第一次執行有作用,第二次沒用) 和 checked的區別, 類似的還有: defaultValue 和 value
    5.狀態在哪裡,操作狀態的方法就在哪裡

---
# github 搜尋案例 筆記
    1.設計狀態時要考慮全面,例如帶有網路請求的組件,要考慮請求失敗怎麼辦
    2.ES6小知識: 解構賦值+重命名
```js
        let obj = {a:{b:1}}
        const {a} = obj; //傳統解構賦值
        const {a:{b}} = obj; //連續解構賦值
        const {a:{b:value}} = obj; //連續解構賦值+命名
```
    3.消息訂閱與發佈機制
        1.先訂閱,再發布 (理解:有一種隔空對話的感覺)
        2.適用於任意組件間通信
        3.要在組件的componentWillUnmount中取消訂閱
    4.fetch發送請求 (關注分離的設計思想)
```js
search =  async () =>{
    try {
            const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
            const data = await response.json()
            console.log(data);
            PubSub.publish('states',{isLoading:false,users:data.items})
            
        } catch (error){
            console.log('請求失敗',error);
            PubSub.publish('states',{isLoading:false,err:error.message})
        }
    }
```

# 路由的基本使用 筆記
    1.明確好介面中的導航區、展示區
    2.導航區的a標籤改為Link標籤
```js
    <Link to="/Demo">Demo</Link>
```
    3.展示區寫Route標籤進行路徑的匹配
```js
    <Route path="/demo" component={Demo} />
``` 
    4.<App>的最外側包裹了一個<BrowerRouter>或<HashRouter>

# 路由組件與一般組件
    1.寫法不同:
        一般組件: <Demo/>
        路由組件: <Route path="/demo" component={Demo}/>
    2.存放位子不同:
        一般組件: components
        路由組件: pages
    3.接收到的props不同:
        一般組件: 寫組件標籤時傳遞了什麼, 就能收到什麼
        路由組件: 接收到三個固定的屬性
```js
        history:
                go: ƒ go(n)
                goBack: ƒ goBack()
                goForward: ƒ goForward()
                push: ƒ push(path, state)
                replace: ƒ replace(path, state)
        location:
                pathname: "/about"
                search: ""
                state: undefined
        match:
                params: {}
                path: "/about"
                url: "/about"
```

# NavLink與封裝NavLink
    1.NavLink可以實現路由連接的高亮,通過activeClassName指定樣式名
    2.標籤體內容是一個特殊的標籤屬性
    3.通過this.props.children可以獲取標籤體內容

# Switch的使用
    1.通常情況下,path和component是一一對應的關係
    2.Switch可以提高路由匹配的效率(單一匹配)

# 解決多級路徑刷新頁面樣式消失的問題
    1.public/index.html 中 引入樣式時不寫 ./ 寫 / (常用)
    2.public/index.html 中 引入樣式時不寫 ./ 寫 %PUBLIC_URL% (常用)
    3.使用HashRouter

# 路由的嚴格匹配與模糊匹配
    1.默認使用的是模糊匹配 (簡單記: [輸入的路徑]必須包含要[匹配的路徑] 且順序要一致)
    2.開啟嚴格匹配: <Route exact={true} path="/about" component={About} />
    3.嚴格匹配不要隨便開啟, 需要再開, 有些時候開啟會導致無法繼續匹配二級路由 

# 嵌套路由
    1.註冊子路由時要寫上父路由的path值
    2.路由的匹配是按照註冊路由的順序進行的

# 向路由組件傳遞參數
    1.params參數
        路由連結(攜帶參數): <Link to="/demo/test/tom/18">詳情</Link>
        註冊路由(聲明接收): <Route path="/demo/test/:name/:age" component={Test}/>
        接收參數 const {name,age} = this.props.match.params
    2.search參數
        路由連結(攜帶參數): <Link to="/demo/test/tom/18">詳情</Link>
        註冊路由(無須聲明,正常註冊即可): <Route path="/demo/test" component={Test}/> 
        接收參數: const {search} = this.props.location
        備註:獲取到的search是urlencoded編碼字符串,需要借助querystring解析
    3.state參數
        路由連結(攜帶參數): <Link to="{{path:'/demo/test',state:{name:'tom',age:18}}}}">詳情</Link>
        註冊路由(無須聲明,正常註冊即可): <Route path="/demo/test" component={Test}/> 
        接收參數: const {name,age} = this.props.location.state
        備註:刷新也可以保留住參數

# 編程式路由導航
    借助this.props.history對象上的API對操作路由跳轉、前進、後退
        -this.props.history.push()
        -this.props.history.replace()
        -this.props.history.goBack()
        -this.props.history.goForward()
        -this.props.history.go()

# BrowserRouter與HashRouter的區別
    1.底層原理不一樣:
        BrowserRouter使用的是H5的history API , 不兼容IE9及以下版本
        HashRouter使用的是URL的哈希值
    2.url表現形式不一樣
        BrowserRouter的路徑中沒有#,例如: localhost:3000/demo/test
        HashRouter的路徑中包含#,例如: localhost:3000/#/demo/test
    3.刷新後對路由state參數的影響
        BrowserRouter沒有任何影響,因為state保存在history對象中
        HashRouter刷新後會導致路由state參數的丟失
    4.備註: HashRouter可以用於解決一些路徑錯誤相關的問題
    