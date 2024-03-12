import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import 'firebase/auth';





const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(email, password);
      console.log('User created successfully!');
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  };

  return (
    <div>
      <h2>회원가입 페이지</h2>
      <input type="email" placeholder="이메일" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>회원가입</button>
    </div>
  );
};

export default SignUpPage;
