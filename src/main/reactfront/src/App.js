import './App.css';
import React, {useEffect, useState} from "react";
import axios from 'axios';
import './components/common/header/CommonHeader'
import CommonHeader from "./components/common/header/CommonHeader";


const Test4 = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
                setPosts(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchPosts();
    }, []);


    return(

        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <div>{post.title}</div>
                    <div><img src={post.thumbnailUrl}/></div>
                </li>
            ))}
        </ul>

    )
}


const RecordForm = ({numList, setNumList}) => {

    const [num, setNum] = useState(0);
    return (<div>
            <div>현재 숫자 : {num} </div>
            <button onClick={() => setNum(num + 1)}>숫자 증가</button>
            <button onClick={() => setNum(num - 1)}>숫자 감소</button>
            <button onClick={() => setNum(0)}>숫자 초기화</button>
            <hr/>
            <button onClick={() => setNumList([...numList, num])}>숫자 기록</button>
            <button onClick={() => setNumList([])}>기록 초기화</button>
        </div>
    )

}
const RecordList = ({numList}) => {

    return (
        <div>
            <h2>기록된 숫자</h2>
            {numList.length > 0 ? <div>기록 있음</div> : <div>기록 없음</div>}
            <ul>
                {numList.map((num) => (
                    <li>{num}</li>
                ))}
            </ul>
        </div>
    )
}
const Test2 = () => {

    const [numList, setNumList] = useState([]);

    return (
        <div style={{margin: "0 auto", width : "800px", textAlign : "center"}}>
           <RecordForm numList={numList} setNumList={setNumList}/>
            <RecordList numList={numList}/>
        </div>
    )
}


const Test3 = () => {

    const [text, setText] = useState("");
    const [edit, setEdit] = useState(false);

    let content = <div>
        {text}
        <button onClick={() => setEdit(true)}>수정</button>
    </div>

    if (edit) {
        content = <div>
            <input type="text"
                   value={text}
                   onChange={(e) => {
                       console.log(e.target.value);
                       setText(e.target.value)
                   }}
            />
            <button onClick={() => setEdit(false)}>수정</button>
        </div>
    }

    return (
        <>
            {content}
        </>

    );

}


function Test() {

    //let name = '정수정';
    let [name, setName] = useState('정수정');
    //let num = 1;
    // useState 주의사항 : 상단에 정의할 것, 바로 실행하면 안됨, 반복문안에서 정의하지 않기, if문 안에서 정의하지 않기.
    // 실행되는 순간 페이지가 다시 랜더링 된다.
    //let [num, setNum] = useState(1);

    const[num, setNum] = useState(0);
    const[numList, setNumList] = useState([]);
    //setTimeout(()=>{setNum(num = num + 1)},1000)

    function numRecording() {
        setNumList(([...numList, num])); // 배열에 있던 기존 데이터를 넣어주고 끝부분에 현재 숫자를 저장하겠다.

        setNum(0);
    }
  return (
    <div className="App">
        <header className="App-header">
            <div>현재 숫자 : {num}</div>
            <button onClick={() => {setNum(num + 1)}}>숫자 증가</button>
            <button onClick={() => {setNum(num - 1)}}>숫자 감소</button>
            <button onClick={numRecording}>숫자기록</button>
            <h1>저장된 숫자</h1>
            <ul>
                {numList.map((num) => (
                    <li>{num}</li>
                ))}
            </ul>
        </header>
    </div>


  );
}



export default function App() {

    return (
        <>
            <CommonHeader />
        <div className='main'>
            <div>메인 화면 입니다~</div>
        </div>
        </>

    );
}

