import React, { useState } from "react";
import styles from './FilledBox.module.css'

const FilledBox = (props) => {
    const [boxStyle, setBoxStyle] = useState('fill')

    const dragStartHandler = (e) => {
        console.log('drag Start')
        const target = e.target;
        setBoxStyle('hold')

        e.dataTransfer.setData('card_id', target.id);
    }

    const dragOverHandler = (event) => {
        event.preventDefault();
        console.log('dragOver')
        event.stopPropagation();
        setBoxStyle('fill')

    }

    return <div className={styles[`${boxStyle}`]} draggable="true"
        id={props.id}
        onDragStart={dragStartHandler}
        onDragOver={dragOverHandler}
    ></div>
}

export default FilledBox;