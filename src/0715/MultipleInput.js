import { useState, Fragment } from 'react'

function MultipleInput() {
  const [userData, setUserData] = useState({
    fullName: '',
    phone: '',
    email: '',
    gender: '',
    transport: '',
    likeList: [],
  })

  const genderOptions = ['男', '女', '跨性別']
  const transportOptions = ['捷運', '公車', '汽車', '機車']
  const netOptions = ['電商', '討論區', '生活/設計', '知識', '音樂/娛樂']

  const handleChange = (e) => {
    console.log(e.target.type, e.target.name, e.target.value)
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <label>姓名</label>
      <input
        name="fullname"
        type="text"
        value={userData.fullName}
        onChange={handleChange}
      ></input>
      <br />
      <label>電話</label>
      <input
        name="phone"
        type="text"
        value={userData.phone}
        onChange={handleChange}
      ></input>
      <br />
      <label>Email</label>
      <input
        name="email"
        type="text"
        value={userData.email}
        onChange={handleChange}
      ></input>
      <br />
      <label>性別</label>
      {genderOptions.map((v, i) => {
        return (
          <Fragment key={i}>
            <input
              name="gender"
              type="radio"
              checked={userData.gender === v}
              value={v}
              onChange={handleChange}
            />
            <label>{v}</label>
          </Fragment>
        )
      })}
      <br />
      <label>交通工具</label>
      <select
        value={userData.transport}
        name="transport"
        onChange={handleChange}
      >
        <option value="">請選擇</option>
        {transportOptions.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          )
        })}
      </select>
      <br />
      <label>喜好網站</label>
      {netOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              checked={userData.likeList.includes(v)}
              name="likeList"
              value={v}
              onChange={(e) => {
                // 判斷是否在 likelist 陣列中
                if (userData.likeList.includes(e.target.value)) {
                  // if 有：移出陣列 (變回 unchecked?)
                  const newLikeList = userData.likeList.filter((v, i) => {
                    return v !== e.target.value
                  })

                  setUserData({ ...userData, likeList: newLikeList })
                } else {
                  const newLikeList = [...userData.likeList, e.target.value]

                  setUserData({ ...userData, likeList: newLikeList })
                }
              }}
            ></input>
            <label>{v}</label>
          </div>
        )
      })}
    </>
  )
}

export default MultipleInput
