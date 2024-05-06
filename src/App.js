// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import LoginCom from './LoginCom';
import Home from './Home';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = ({ username, password }) => {
    // 本来はサーバーに送信し、認証処理を行う
    // ここでは仮の処理として、usernameが"test"、passwordが"testpass"の場合にログイン成功とする
    if (username === 'test' && password === 'testpass') {
      setLoggedIn(true);
      setUser(username);
    } else {
      alert('ユーザー名またはパスワードが間違っています。');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUser(null);
  };

  return (
    <div className=''>
      {loggedIn ? (
        <div>
          <div className='w-[290px] bg-[white] absolute bottom-0 h-[120px] flex flex-col justify-center fixed'>
            <p className='self-center pb-2 text-sm text-[#A3AED0]'>{user}としてログイン中</p>
            <button onClick={handleLogout} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2  px-4 mx-8 border border-blue-500 hover:border-transparent rounded">ログアウト</button>
          </div> 
          <Home />
        </div>
       
      ) : (
        <LoginCom onLogin={handleLogin} />
      )}
    
    </div>
  );
}

export default App;