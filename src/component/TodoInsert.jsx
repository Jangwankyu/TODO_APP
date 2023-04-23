import React, { useCallback, useState } from 'react';
import {MdAdd} from 'react-icons/md';
import '../css/TodoInsert.scss';


const TodoInsert = ({onInsert}) => {

    const[insertValue, setInsertValue] = useState('');

    const onChange = useCallback( e => {
        setInsertValue(e.target.value);
    }, []);
    
    const onSubmit = useCallback( 
            e=> {
                if(insertValue === '')
                {
                    alert('입력하신 문자열이 없습니다.');

                    // 페이지 렌더링 방지
                    e.preventDefault();
                    return;
                }
                onInsert(insertValue);
                setInsertValue('');

            e.preventDefault();
        },[onInsert, insertValue]
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder='할일을 입력하세요'
                value ={insertValue}
                onChange ={onChange} 
            />
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;