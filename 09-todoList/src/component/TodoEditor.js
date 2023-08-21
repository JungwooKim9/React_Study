import './TodoEditor.css';

const TodoEdittor = () => {

    return (
        <div className="TodoEditor">
            <h4> 새로운 todo 작성 하기 🐱‍👓🐱‍🚀 </h4>
            <div className="editor_wrapper">
                <input placeholder="새로운 todo..." />
                <button>추가</button>
            </div>

        </div>
    );

}

export default TodoEdittor;