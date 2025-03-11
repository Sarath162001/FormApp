import { useState } from "react"
import "./App.css"

export const App = () => {
  const [user, setUser]=useState({
    name:"Sarath",
    age: 24,
    gender:"Male",
    isMarried: "true",
    country:"India",
    bio: "About You"
  })
  function change(e) {
    const name= e.target.name
    const value=e.target.type === "checkbox" ? e.target.checked : e.target.value
    setUser({...user,[name]:value })

  }
  return (
  <div className="input_container">
    <> 
    <h2>Personal Form </h2>
    <div>
      <table>
          <tr></tr><td>Name</td><td>{user.name}</td>
          <tr></tr><td>Age</td><td>{user.age}</td>
          <tr></tr><td>Gender</td><td>{user.gender}</td>
          <tr></tr><td>MaritalStatus</td><td>{user.isMarried ? "Married" : "Single"}</td>
          <tr></tr><td>Country</td><td>{user.country}</td>
          <tr></tr><td>Bio</td><td>{user.bio}</td>
      </table>
      <form>
        <input type="text" placeholder="Full Name" value={user.name} name="name" onChange={change}/>
        <input type="number" placeholder="Age" value={user.age} name="age" onChange={change}/>
        <div className="gender">
          <label htmlFor="gender">
            <input type="radio" id="male" name="gender" checked={user.gender=='Male'} value="Male" onChange={change}/>Male
          </label>
          <label htmlFor="gender">
            <input type="radio" id="Female" name="gender" checked={user.gender=='Female'} value="Female" onChange={change}/>Female
          </label>
        </div>
        <label htmlFor="isMarried">
          <input type="checkbox" id="ismarried" checked={user.isMarried} onChange={change} name="isMarried"/>isMarried
        </label>
        <div className="container">
          <label htmlFor="country">Select Country: </label>
            <select name="country" id="Country" value={user.country} onChange={change}>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="China">China</option>
              <option value="Srilanka">Srilanka</option>
            </select>
            <textarea className="bio" name="bio"  cols="30" rows="5"  value={user.bio} onChange={change} maxLength="200"></textarea>
        </div>
      </form>
    </div>
    </>
  </div>
  )
}
