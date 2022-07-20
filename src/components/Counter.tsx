import React, {useCallback} from 'react';
import styles from '../styles/Home.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { useAppDispatch } from '../store'
import {increment, decrement} from '../slices/count';

function Counter () {
  const dispatch = useAppDispatch();
  const {val} = useSelector((state:RootState) => state.count);

  const onIncrement = useCallback(()=>dispatch(increment()),[])

  const onDecrement = useCallback(()=>dispatch(decrement()),[]) 
  return(
    <>
      <span>{val}</span>
      <div className={styles.btnBox}>
          <button onClick={onIncrement}>+</button>
          <button onClick={onDecrement}>-</button>
      </div>
    </>
  )
}

export default Counter;