//useEffect 훅
    // useEffect( Function , deps );    
        //1. deps 의 인자의 값이 오지 않을 경우 : 컴포넌트가 mount (생성) 될때 호출
                //랜더링이 될때 마다 작동됨 

        //2. deps 의 인자에 [] 적용되었을 경우 : 
                // 처음 랜더링 시점에 한번만 작동됨 
        //3. deps 인자의 [count, name] 인 경우 : 
                // state(상태) 의 값이 변경되는 경우 작동이됨       


                import React, {useEffect, useState} from 'react'; 

                const UseEffect =() => {
                
                    //1. UseEffect 컴포넌트가 생성시에 호출 (deps 옵션이 생략된 경우)
                    useEffect(
                        () => {console.log(`컴포넌트 생성시에 호출됨 - 랜더링 될때마다 작돋됨`)}
                    );
                
                    //2.  UseEffect :deps 옵션에 [] 을 적용한 경우 
                    useEffect (() => {console.log("한번만 실행됨")}, []);
                
                    //3. useEffect : deps 옵션에 [count, name] : count, name 수정될때 함수가 작동됨 
                    const [count , setCount] = useState(0); 
                    const [name , setName] = useState(""); 
                
                    useEffect (
                        () => {console.log ("count 상태 변경됨 ....")}
                        , [count, name]
                    ); 
                
                    const countChange =() => {
                        setCount (count + 10); 
                    }
                
                
                    return (
                        <div> 
                            <h1> useEffect 사용 예제 </h1>
                            <hr /> 
                            <br />
                            <h1> {count}</h1>
                            <button onClick = {countChange}> 카운트값 변경 </button>
                        </div>
                    ); 
                }; 
                export default UseEffect;