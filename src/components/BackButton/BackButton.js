import React from 'react'
import { css } from '@emotion/css'
import { useHistory } from 'react-router'
// import backIcon from '../../assets/icon/back-icon.svg'

function BackButton() {
  const history = useHistory()
  return (
    <div className="back-button">
      <span className={css`
        text-decoration: underline;
        margin-left: 4px;
      `}
      onClick={() => history.goBack()}
      >Back</span>
    </div>
  )
}

export default BackButton
