"use strict";(self.webpackChunkALLPasstival=self.webpackChunkALLPasstival||[]).push([[898],{38678:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);const o=e=>{const[t,n]=(0,r.useState)(e);return[t,(0,r.useCallback)((e=>{n(e.target.value)}),[]),n]}},68479:(e,t,n)=>{n.d(t,{II:()=>c,Rj:()=>m,Th:()=>s,bU:()=>i,h4:()=>l,im:()=>o,l0:()=>a,xH:()=>d});var r=n(74461);const o=r.Z.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffb763;
`,l=r.Z.div`
  font-weight: bolder;
  font-size: 3em;
  letter-spacing: -0.75px;
  margin-bottom: 0.3rem;
`,i=r.Z.div`
  font-weight: bolder;
  font-size: 1.2rem;
  letter-spacing: -0.75px;
  margin-bottom: 0.3rem;
`,a=r.Z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,d=r.Z.div`
  margin-bottom: 0.8rem;

  & span {
    text-align: left;
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;
    width: 7rem;
  }
`,c=r.Z.input`
  background-color: #d9d9d9;
  position: relative;
  box-sizing: border-box;
  border: 1px solid #ebebeb;
  width: 20rem;
  height: 3rem;
  outline: none;
  font-size: 1rem;
  padding: 10px 0 12px;
  margin-top: 0.6rem;
  :focus {
    border-bottom: 2px solid black;
  }
  ::placeholder {
    padding: 1rem 1rem;
    font-size: 0.8rem;
    font-weight: bolder;
  }
`,m=r.Z.div`
  display: flex;
  justify-content: space-between;
  width: 20rem;
  font-size: 0.6rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
  & span {
    padding: 0.5rem;
    color: #7d5a31;
    & a {
      text-decoration: none;
      color: inherit;
    }
  }
`,s=r.Z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  text-align: center;
  width: 9rem;
  height: 2.7rem;
  background-color: #fe9010;
  color: black;
  border-radius: 25px;
  outline: none;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  cursor: pointer;
  &:hover {
    background-color: #f93011;
    border: none;
  }
`},61898:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(67294),o=n(68479),l=n(9669),i=n.n(l),a=n(38678),d=n(74461);const c=d.Z.div`
  position: relative;
`,m=d.Z.label`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 2rem;

  & div:first-child {
    text-align: left;
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;

    width: 7rem;
  }
`,s=d.Z.input`
  background-color: #d9d9d9;
  position: relative;
  box-sizing: border-box;
  border: 1px solid #ebebeb;
  width: 25rem;
  height: 3rem;
  outline: none;
  font-size: 1rem;
  padding: 10px 0 12px;
  margin-top: 0.6rem;
  :focus {
    border: 1px solid #e89735;
  }
  ::placeholder {
    padding: 1rem 1rem;
    font-size: 0.8rem;
    font-weight: bolder;
  }
`,p=d.Z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  text-align: center;
  width: 9rem;
  height: 2.7rem;
  background-color: #fe9010;
  color: black;
  border-radius: 25px;
  outline: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background-color: #f93011;
    border: none;
  }
`,u=d.Z.div`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  width: 6.5rem;
  height: 1.7rem;

  background-color: #fe9010;
  color: black;
  border-radius: 25px;
  outline: none;
  font-size: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;

  position: absolute;
  top: 1.2rem;
  right: 1rem;

  &:hover {
    background-color: #f93011;
    border: none;
  }
`,g=()=>{const[e,t,n]=(0,a.Z)(""),[l,d,g]=(0,a.Z)(""),[b,h,f]=(0,a.Z)(""),[x,v,w]=(0,a.Z)(""),[E,k,y]=(0,a.Z)(""),Z=(0,r.useCallback)((t=>{t.preventDefault(),i().post("",{id:e,password:b},{}).then((e=>{alert("성공")})).catch((e=>{alert("에러")}))}),[e,b]);return r.createElement("div",null,r.createElement(o.im,null,r.createElement(o.h4,null,"ALLPASSTIVAL"),r.createElement(o.bU,null,"계정 만들기"),r.createElement(o.l0,{onSubmit:Z},r.createElement(c,null,r.createElement(m,null,r.createElement("div",null,"아이디"),r.createElement(s,{type:"text",id:"id",name:"id",value:e,onChange:t,placeholder:"아이디"}),r.createElement(u,{onClick:Z},"아이디 중복 확인"))),r.createElement(c,null,r.createElement(m,null,r.createElement("div",null,"닉네임"),r.createElement(s,{type:"text",id:"password",name:"password",value:l,onChange:d,placeholder:"닉네임"}),r.createElement(u,{onClick:Z},"닉네임 중복 확인"))),r.createElement(m,null,r.createElement("div",null,"나이"),r.createElement(s,{type:"text",id:"age",name:"age",value:x,onChange:v,placeholder:"나이"})),r.createElement(m,null,r.createElement("div",null,"비밀번호"),r.createElement(s,{type:"text",id:"password",name:"password",value:b,onChange:h,placeholder:"비밀번호"})),r.createElement(m,null,r.createElement("div",null,"비밀번호 확인"),r.createElement(s,{type:"text",id:"password",name:"password",value:E,onChange:k,placeholder:"비밀번호 확인"})),r.createElement(p,{onClick:Z},"회원가입"))))}}}]);