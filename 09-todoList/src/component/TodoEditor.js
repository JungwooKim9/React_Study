import './TodoEditor.css';
import { useState, useRef } from 'react';

const TodoEdittor = ({onCreate}) => {

    // useState 생성: 할 일 내용: content
    const [content, setContent] = useState("");

    // 값을 전송 이후에 포커스 위치를 해당 input 엘리멘트에 위치
    // userRef()    : 특정 엘리멘트에 focus하도록 쓰임
    // useRef()     : 컴포넌트 생성(mount) 이후에 초기값 설정

    const inputRef = useRef();

    // content 값이 수정 되었을 때
    const onChangeContent = (e) => {
        // console.log(e.target.value);
        setContent (e.target.value);
    };

    // input 박스에서 enter 이벤트 처리
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    }

    // onSubmit() 함수: input의 값을 받아서 onCreate 메소드 호출(App 컴포넌트)
    const onSubmit = () => {
        if (!content) {
            inputRef.current.focus();
            return ;
        }
        onCreate(content);      // onCreate(content): App 컴포넌트
        setContent("");
    }

    return (
        <div className="TodoEditor">
            <h4> 새로운 todo 작성 하기 🐱‍👓🐱‍🚀 </h4>
            <div className="editor_wrapper">
                <input
                    ref={inputRef}  // 포커스를 input 엘리멘트에 위치
                    value={content}
                    onChange={onChangeContent}      // 값이 추가 되거나 삭제
                    onKeyDown={onKeyDown}           // onKeyDown: 엔터(키코드 13)
                    placeholder="새로운 todo..." />

                <button onClick={onSubmit}>추가</button>
            </div>

        </div>
    );

}

export default TodoEdittor;