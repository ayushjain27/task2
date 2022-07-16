import React from 'react'
import styles from './Box.module.css'

const Box = () => {
    const style = {
      width: '80%',
      height: '100%',
      margin: '0px auto',
      borderRadius: '12px',
      backgroundImage: "url('./images/site.jpg')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  return (
    <>
        <div className={styles.rf}>
            <div style={style}>
                <div className={styles.heading}>
                  <h3>$20 OFF $100 PLUS,</h3>
                  <h3>GET FREE NEXT_DAY DELIVERY</h3>
                  <button type="button" class="btn btn-danger">Go</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Box
