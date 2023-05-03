import { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
//import DataUser from '../api/app/data.js'
import { getUserInfos, getUserActivity, getUserPerformance, getUserAverageSessions, getUserInfos2 } from '../utils/getDataApi.js'
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mock/dataMocked.js'

import Sidebar from '../components/Sidebar/Sidebar'
import Layout from '../components/Layout/Layout'
import HeroText from '../components/HeroText/HeroText'
import Charts from '../components/Charts/Charts.jsx'
import UserPerf from '../components/userPerf/userPerf'

import './Dashboard.scss'

export default function Dashboard() {
  console.log('render')
  let users = []
  let setData = []
  //const { setData } = useState([])
  //const [data, setData] = useState([]);
  const { userID } = useParams()

  //const request = getUserInfos(userID)
  //request == '' ? (setData = request.data) : (setData = null)

  // const request = getUserInfos(userID)
  // console.log(request)

  // const request = new Promise(getUserInfos)
  // console.log(request)

  // const request = Promise.resolve(getUserInfos(userID))
  // console.log(request)

  /*   const data = async () => {
    const request = await getUserInfos(userID)
    //setData(request.data)
    setData = await request.data
    console.log(request, setData)
  }
  console.log(setData) */

  // const data = async () => {
  //   const request = await Promise.resolve(getUserInfos(userID))
  //   //setData(request.data)
  //   setData = Promise.resolve(request.data)
  //   console.log(request, setData)
  //   console.log(Promise.resolve(request), Promise.resolve(setData))
  // }
  // console.log(setData)

  //setData = request.data

  // useEffect(() => {
  //   const data = async () => {
  //     const request = await getUserInfos(userID)
  //     //setData(request.data)
  //     setData = await request.data
  //     return request
  //   }
  //   data()
  // }, [userID])
  // console.log(setData)
  let data2 = []
  const getData = async (id) => {
    let data = []
    data = await getUserInfos(id)
    return data
  }
  // console.log(getData(userID))
  // console.log(Promise.resolve(getData(userID)))
  data2 = getData(userID)
  // console.log('data2 :', data2)
  //console.log(new Promise(getData))

  /*   useEffect(() => {
    const data = async () => {
      const request = await getUserInfos(userID)
      //if (!request) return alert('data error')
      if (!request) return console.log('data error')
      setData(request.data)
    }
    data()
  }, [userID]) */

  //ça marche, ah non - c bon
  let data = []
  const datas = async () => {
    // console.log('dernier test data')
    const request = await getUserInfos(userID)
    //console.log('request :', request)
    setData.push(request)
    // console.log('résultat du push tableau setData', await setData)
  }
  datas()
  // console.log(setData)

  const [data4, setData4] = useState([])

  useEffect(() => {
    const datas = async () => {
      const requestUserInfo = await getUserInfos(userID)
      const requestUserActivity = await getUserActivity(userID)
      const requestUserPerformance = await getUserPerformance(userID)
      const requestUserSession = await getUserAverageSessions(userID)
      //if (!request) return console.log('data error')
      setData4(requestUserInfo.data4, requestUserActivity.data4, requestUserPerformance.data4, requestUserSession.data4)
    }
    datas()
  }, [userID])
  //console.log(setData4)

  //Data temporaire
  //console.log(USER_MAIN_DATA)
  const userInfo = USER_MAIN_DATA.find((data) => data.id === parseInt(userID))
  const userActivity = USER_ACTIVITY.find((data) => data.userId === parseInt(userID))
  const userSession = USER_AVERAGE_SESSIONS.find((data) => data.userId === parseInt(userID))
  const userPerf = USER_PERFORMANCE.find((data) => data.userId === parseInt(userID))
  //console.log('dataID', userInfo, userActivity, userSession, userPerf)
  //div stats data aside>
  const userAllData = {
    userInfo,
    userActivity,
    userSession,
    userPerf,
  }
  return (
    <>
      <Sidebar />
      {/* <div className="layout-wrap"> */}
      <Layout className="dashboard">
        <HeroText firstname={userInfo.userInfos.firstName} />
        <div className="flex-wrap">
          <Charts userActivity={userActivity} userSession={userSession} user={userAllData} className="charts" userID={userID} />
          <UserPerf userInfo={userInfo} />
        </div>

        <div className="data"></div>
      </Layout>
      {/* </div> */}
    </>
  )
}
