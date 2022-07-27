import React, { useEffect } from 'react';
import { RootState } from '../store'
import { useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'
import { useAppDispatch } from '../store';
import { loadUser } from '../actions/count';

function UserProfile () {
  const dispatch = useAppDispatch();
  const {user} = useSelector((state:RootState) => state.count);
  
  // useEffect(()=> {
  //   dispatch(loadUser());
  // }, []);

  return(
    <>
      <div className={styles.loadUser}>
          <div>
            <p>성 : </p>
            <span>{user?.first_name}</span>
          </div>
          <div>
            <p>이름 : </p>
            <span>{user?.last_name}</span>
          </div>
          <div>
            <p>이메일 : </p>
            <span>{user?.email}</span>
          </div>
      </div>
    </>
  );
}

export default UserProfile