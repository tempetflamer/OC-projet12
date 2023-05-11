import { useParams } from 'react-router-dom'
import UserKeyData from '../UserKeyData/UserKeyData'
import useUserInfos from '../../hooks/useUserInfos.jsx'
import './UserPerf.scss'
import iconEnergy from '../../assets/energy.svg'
import iconChicken from '../../assets/chicken.svg'
import iconApple from '../../assets/apple.svg'
import iconBurger from '../../assets/cheeseburger.svg'

/** Display of the section containing all userKeyDatas
 * @return {JSX}
 */
export default function userPerf() {
  const { userID } = useParams()
  const userInfo = useUserInfos(userID)

  return (
    <section className="perfs">
      <UserKeyData userInfo={userInfo?.data?.keyData?.calorieCount} unite="Calories" abbUnite="kCal" color="red" icon={iconEnergy} />
      <UserKeyData userInfo={userInfo?.data?.keyData?.proteinCount} unite="Proteines" abbUnite="g" color="blue" icon={iconChicken} />
      <UserKeyData userInfo={userInfo?.data?.keyData?.carbohydrateCount} unite="Glucides" abbUnite="g" color="yellow" icon={iconApple} />
      <UserKeyData userInfo={userInfo?.data?.keyData?.lipidCount} unite="Lipides" abbUnite="g" color="pink" icon={iconBurger} />
    </section>
  )
}
