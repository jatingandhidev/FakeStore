import React, { useState, useEffect } from 'react'

const EmployeesModal = ({
  setAllUsers,
  selectedUser,
  setSelectedUser,
  selectedKey,
}) => {
  useEffect(() => {
    if (selectedUser) {
      const { firstName, lastName, empID, designation, salary } = selectedUser
      setFirstName(firstName || '')
      setLastName(lastName || '')
      setEmpID(empID || '')
      setDesignation(designation || '')
      setSalary(salary || '')
    }
  }, [selectedUser])

  // State for input values
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [empID, setEmpID] = useState('')
  const [designation, setDesignation] = useState('')
  const [salary, setSalary] = useState('')

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target
    switch (id) {
      case 'firstName':
        setFirstName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      case 'EmpID':
        setEmpID(value)
        break
      case 'Designation':
        setDesignation(value)
        break
      case 'Salary':
        setSalary(value)
        break
      default:
        break
    }
  }

  //Function for validation and error handling
  const validation = () => {
    //selecting all fields for showing error
    const firstNameField = document.querySelector('#firstName')
    const lastNameField = document.querySelector('#lastName')
    const empIDField = document.querySelector('#EmpID')
    const designationField = document.querySelector('#Designation')
    const salaryField = document.querySelector('#Salary')

    const firstNameErrorMsg = document.querySelector('#firstNameError')
    const lastNameErrorMsg = document.querySelector('#lastNameError')
    const empIDErrorMsg = document.querySelector('#empIDError')
    const designationErrorMsg = document.querySelector('#designationError')
    const salaryErrorMsg = document.querySelector('#salaryError')

    // Validate input fields
    const inputErrors = {}
    if (!firstName.trim()) {
      firstNameField.style.border = 'solid 2px red'
      firstNameErrorMsg.style.display = 'block'
      firstNameErrorMsg.textContent = 'First Name is required'
      inputErrors.firstName = 'First Name is required'
    } else {
      firstNameField.style.border = 'none'
      firstNameErrorMsg.style.display = 'none'
    }
    if (!lastName.trim()) {
      lastNameField.style.border = 'solid 2px red'
      lastNameErrorMsg.style.display = 'block'
      lastNameErrorMsg.textContent = 'Last Name is required'
      inputErrors.lastName = 'Last Name is required'
    } else {
      lastNameField.style.border = 'none'
      lastNameErrorMsg.style.display = 'none'
    }
    if (!empID.trim()) {
      empIDField.style.border = 'solid 2px red'
      empIDErrorMsg.style.display = 'block'
      empIDErrorMsg.textContent = 'Employee ID is required'
      inputErrors.empID = 'Employee ID is required'
    } else {
      empIDField.style.border = 'none'
      empIDErrorMsg.style.display = 'none'
    }
    if (!designation.trim()) {
      designationField.style.border = 'solid 2px red'
      designationErrorMsg.style.display = 'block'
      designationErrorMsg.textContent = 'Designation is required'
      inputErrors.designation = 'Designation is required'
    } else {
      designationField.style.border = 'none'
      designationErrorMsg.style.display = 'none'
    }
    if (!salary.trim()) {
      salaryField.style.border = 'solid 2px red'
      salaryErrorMsg.style.display = 'block'
      salaryErrorMsg.textContent = 'Salary is required'
      inputErrors.salary = 'Salary is required'
    } else {
      salaryField.style.border = 'none'
      salaryErrorMsg.style.display = 'none'
    }

    if (Object.keys(inputErrors).length > 0) {
      console.log(inputErrors)
      return false
    } else {
      return true
    }
  }

  // Function to handle save changes
  const handleSaveChanges = () => {
    //calling this for validation
    if (!validation()) {
      return
    }
    // Generate a unique key
    const uniqueKey = 'myDataKey_' + new Date().getTime()
    // Save the data to local storage with the unique key
    localStorage.setItem(
      uniqueKey,
      JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        empID: empID,
        designation: designation,
        salary: salary,
      })
    )

    //closing modal
    var modal = document.getElementById('formModal')
    modal.querySelector('.btn-close').click()

    var allUsersData = {}
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).includes('myDataKey_')) {
        var key = localStorage.key(i)
        var user = localStorage.getItem(key)
        allUsersData[key] = JSON.parse(user)
      }
    }
    setAllUsers(allUsersData)
  }

  //Function to handle update changes
  const handleUpdateChanges = () => {
    //calling this for validation
    if (!validation()) {
      return
    }
    localStorage.setItem(
      selectedKey,
      JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        empID: empID,
        designation: designation,
        salary: salary,
      })
    )
    //closing modal
    var modal = document.getElementById('formModal')
    modal.querySelector('.btn-close').click()

    var allUsersData = {}
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).includes('myDataKey_')) {
        var key = localStorage.key(i)
        var user = localStorage.getItem(key)
        allUsersData[key] = JSON.parse(user)
      }
    }
    setAllUsers(allUsersData)
  }

  return (
    <div
      className="modal fade"
      id="formModal"
      tabIndex="-1"
      aria-labelledby="formModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header" style={{ background: 'silver' }}>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setSelectedUser(null)}
            ></button>
          </div>
          <div className="modal-body" style={{ background: 'lightgrey' }}>
            <form className="row g-3" style={{ fontWeight: 'bold' }}>
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <span
                  id="firstNameError"
                  style={{
                    display: 'none',
                    color: 'red',
                    fontSize: '14px',
                    marginBottom: '5px',
                  }}
                >
                  Error
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <span
                  id="lastNameError"
                  style={{
                    display: 'none',
                    color: 'red',
                    fontSize: '14px',
                    marginBottom: '5px',
                  }}
                >
                  Error
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="EmpID" className="form-label">
                  Employee ID
                </label>
                <span
                  id="empIDError"
                  style={{
                    display: 'none',
                    color: 'red',
                    fontSize: '14px',
                    marginBottom: '5px',
                  }}
                >
                  Error
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="EmpID"
                  value={empID}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="Designation" className="form-label">
                  Designation
                </label>
                <span
                  id="designationError"
                  style={{
                    display: 'none',
                    color: 'red',
                    fontSize: '14px',
                    marginBottom: '5px',
                  }}
                >
                  Error
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="Designation"
                  value={designation}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="Salary" className="form-label">
                  Salary
                </label>
                <span
                  id="salaryError"
                  style={{
                    display: 'none',
                    color: 'red',
                    fontSize: '14px',
                    marginBottom: '5px',
                  }}
                >
                  Error
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="Salary"
                  value={salary}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer" style={{ background: 'silver' }}>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => setSelectedUser(null)}
            >
              Close
            </button>
            {selectedUser ? (
              <button
                type="button"
                className="btn m-1 btn-dark text-white btn-floating"
                onClick={handleUpdateChanges}
              >
                Update
              </button>
            ) : (
              <button
                type="button"
                className="btn m-1 btn-dark text-white btn-floating"
                onClick={handleSaveChanges}
              >
                Save changes
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default EmployeesModal
