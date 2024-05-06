import React, { useState } from 'react';





function LoginCom({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // ログイン処理
    onLogin({ username, password });
  };

  return (
    <div className="flex flex-row">
  
    <form onSubmit={handleLogin} className='pl-[290px]'>
      <input
        type="text"
        placeholder="ユーザー名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">ログイン</button>
    </form>
    </div>
  );
}

export default LoginCom;