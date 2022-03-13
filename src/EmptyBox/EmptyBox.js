import React, { useState } from "react";
import styles from './EmptyBox.module.css'

const EmptyBox = (props) => {
    const [boxStyle, setBoxStyle] = useState('empty')


    const mouseEnterHandler = () => {
        setBoxStyle('hovered')
    }

    const dragOverHandler = (event) => {
        event.preventDefault();
        console.log('dragOver')
    }

    const dragLeaveHandler = () => {
        setBoxStyle('empty')
    }

    function dropHandler(e) {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id')
        setBoxStyle('empty')

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);
    }

    return <div className={styles[`${boxStyle}`]}
        id={props.id}
        onDragEnter={mouseEnterHandler}
        onDragLeave={dragLeaveHandler}
        onDragOver={dragOverHandler}
        onDrop={dropHandler}
    >{props.children}</div>
}

export default EmptyBox;