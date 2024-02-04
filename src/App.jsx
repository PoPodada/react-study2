import { useState,useCallback,useMemo,useRef} from "react";
import "./styles.css";
import { ChildArea } from "./ChildArea";
export const App = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      emai: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="App">
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input id="password" name="password" ref={passwordRef} type="password" />
        </div>

        <div>
          <button type="submit">ログイン</button>
        </div>
      </form>
    </div>
  );
  // const [text,setText] = useState("");
  // const [open,setOpen] = useState(false);
  // const onClickCountUp = () =>{
  //   setCount(count+1)
  // }
  // const onClickOpen = () =>setOpen(!open)
  // const onChangeText = (e) => setText(e.target.value) 
  // const onClickClose = useCallback(() => setOpen(false),[]);
 
  // return (
  //   <div className="App">
  //     <input value={text} onChange={onChangeText}/>
  //     <br />
  //     <br />
  //     <button onClick={onClickOpen}>表示</button>
  //     <ChildArea open = {open} onClickClose = {onClickClose}/>
  //   </div>
  // );
}


