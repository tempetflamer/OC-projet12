import React from 'react'
import './UserKeyData.scss'

/** display icon with user infos
 * @param  {Object} userInfo
 * @param  {string} unite
 * @param  {string} abbUnite
 * @param  {string} color
 * @param  {string} icon url
 * @return {JSX}
 */
export default function UserKeyData({ userInfo, unite, abbUnite, color, icon }) {
  console.log('icon', icon)
  return (
    <article className="user-perf">
      <div className={'user-perf__container' + ' color--' + color}>
        <img src={icon} alt="" className="user-perf__container__img" />
      </div>
      <div className="user-perf__data">
        <p className="user-perf__data__quantity">{userInfo + abbUnite}</p>
        <p className="user-perf__data__unit">{unite}</p>
      </div>
    </article>
  )
}
