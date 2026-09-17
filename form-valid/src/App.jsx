import React, { useState } from 'react'

const App = () => {

  const [user, setUser] = useState({
    name: "",
    rollno: "",
    mail: "",
    phoneno: "",
    gender: "",
    course: "",
    address: ""
  })

  const [submittedUser, setSubmittedUser] = useState(null)

  const submitHandler = (e) => {
    e.preventDefault()

    setSubmittedUser(user)
    setUser({ name: "",
    rollno: "",
    mail: "",
    phoneno: "",
    gender: "",
    course: "",
    address: ""})
  }

  return (
    <div className='main'>

      <form  id={submittedUser?"hide":""} onSubmit={submitHandler}>

        <h1>Student Registration Data</h1>

        <div className="block">
          <label htmlFor='name'>Name :</label>

          <input
            type="text"
            name="name"
            id="name"
            placeholder='John'
            required
            value={user.name}
            onChange={(e) =>
              setUser({
                ...user,
                name: e.target.value
              })
            }
          />
        </div>


        <div className="block">
          <label htmlFor="rollno">Enrollment No :</label>

          <input
            type="tel"
            name="rollno"
            id="rollno"
            placeholder='240249312'
            required
            value={user.rollno}
            onChange={(e) =>
              setUser({
                ...user,
                rollno: e.target.value
              })
            }
          />
        </div>


        <div className="block">
          <label htmlFor="mail">Email id:</label>

          <input
            type="email"
            name="mail"
            id="mail"
            placeholder='john@gmail.com'
            required
            value={user.mail}
            onChange={(e) =>
              setUser({
                ...user,
                mail: e.target.value
              })
            }
          />
        </div>


        <div className="block">
          <label htmlFor="phone">Phone Number:</label>

          <input
            type="tel"
            name="phoneno"
            id="phone"
            required
            placeholder='+91 XXXXXXXX'
            value={user.phoneno}
            onChange={(e) =>
              setUser({
                ...user,
                phoneno: e.target.value
              })
            }
          />
        </div>


        <div className="block">
          <span>Gender :</span>

          <input
            type="radio"
            name="gender"
            id="male"
            value="Male"
            checked={user.gender === "Male"}
            onChange={(e) =>
              setUser({
                ...user,
                gender: e.target.value
              })
            }
          />

          <label htmlFor="male">Male</label>


          <input
            type="radio"
            name="gender"
            id="female"
            value="Female"
            checked={user.gender === "Female"}
            onChange={(e) =>
              setUser({
                ...user,
                gender: e.target.value
              })
            }
          />

          <label htmlFor="female">Female</label>
        </div>


        <div className="block">
          <label htmlFor="course">Course :</label>

          <select
            name="course"
            id="course"
            value={user.course}
            required
            onChange={(e) =>
              setUser({
                ...user,
                course: e.target.value
              })
            }
          >
            <option value="">Select Course</option>
            <option value="BTech">BTech</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="BBA">BBA</option>
            <option value="MBA">MBA</option>
          </select>
        </div>


        <div className="block">
          <label htmlFor="add">Address :</label>

          <textarea
            name="address"
            rows={5}
            cols={30}
            id="add"
            placeholder='XYZ Street'
            required
            value={user.address}
            onChange={(e) =>
              setUser({
                ...user,
                address: e.target.value
              })
            }
          />
        </div>


        <button type="submit">Submit</button>

      </form>


      {/* Submitted information */}
      {submittedUser && (
        <div className="submitted-data">
          <h3>Form has been submitted successfully!</h3>
          <h2>Student Details</h2>

          <p>Name: {submittedUser.name}</p>
          <p>Enrollment No: {submittedUser.rollno}</p>
          <p>Email: {submittedUser.mail}</p>
          <p>Phone: {submittedUser.phoneno}</p>
          <p>Gender: {submittedUser.gender}</p>
          <p>Course: {submittedUser.course}</p>
          <p>Address: {submittedUser.address}</p>

        </div>
      )}

    </div>
  )
}

export default App