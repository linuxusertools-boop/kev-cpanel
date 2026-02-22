'use client';

import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState('');

  async function createServer() {
    const username = document.getElementById('username').value;
    const memory = document.getElementById('package').value;

    if (!username) {
      setResult('Username wajib diisi!');
      return;
    }

    try {
      const res = await fetch('/api/create-server', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, memory })
      });

      const data = await res.json();

      if (data.success) {
        setResult(`𝗗𝗮𝘁𝗮 𝗣𝗮𝗻𝗲𝗹 𝗞𝗮𝗺𝘂 🎉 !
┏━━━━━━━⬣
│• Username: ${data.username}
│• Email : ${data.email}
│• Password : ${data.password}
┗━━━━━━━━━━━━━━━━━━⬣
> ©𝗞𝗘𝗩.TEAM`);
      } else {
        setResult('Gagal membuat server');
      }
    } catch (err) {
      setResult('Terjadi error koneksi API');
    }
  }

  return (
    <div style={{background:'#0d0d0d',minHeight:'100vh',display:'flex',justifyContent:'center',alignItems:'center',color:'white'}}>
      <div style={{width:'350px',background:'#141414',padding:'20px',borderRadius:'10px',border:'1px solid red'}}>
        <h2 style={{color:'red',textAlign:'center'}}>Create Panel</h2>
        <input id="username" placeholder="Username" style={{width:'100%',marginBottom:'10px',padding:'8px'}} />
        <select id="package" style={{width:'100%',marginBottom:'10px',padding:'8px'}}>
          <option value="1024">1GB</option>
          <option value="2048">2GB</option>
          <option value="4096">4GB</option>
          <option value="-1">Unlimited</option>
        </select>
        <button onClick={createServer} style={{width:'100%',background:'red',color:'white',padding:'10px',border:'none',cursor:'pointer'}}>Buat Server</button>
        <pre style={{marginTop:'15px',whiteSpace:'pre-wrap'}}>{result}</pre>
      </div>
    </div>
  );
}
