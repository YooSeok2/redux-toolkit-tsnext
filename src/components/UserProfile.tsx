import React from 'react';
import { RootState } from '../store'
import { useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'

function UserProfile () {
  const {user} = useSelector((state:RootState) => state.count);

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