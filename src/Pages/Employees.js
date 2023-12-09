import React, { useEffect, useState } from 'react'
import EmployeesModal from '../Sections/EmployeesModal'

const Employees = () => {
  const [allUsers, setAllUsers] = useState({})
  const [selectedUser, setSelectedUser] = useState(null)
  const [selectedKey, setSelectedKey] = useState(null)

  useEffect(() => {
    const getFromLocalStorage = () => {
      var allUsersData = {}
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).includes('myDataKey_')) {
          var key = localStorage.key(i)
          var user = localStorage.getItem(key)
          allUsersData[key] = JSON.parse(user)
        }
      }
      return allUsersData
    }
    setAllUsers(getFromLocalStorage())
  }, [])

  const handleEdit = (user, key) => {
    // Set the selected user and open the modal for editing
    setSelectedUser(user)
    setSelectedKey(key)
  }

  const handleDelete = (key) => {
    // Ask for confirmation before deleting the record
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this record?'
    )
    if (isConfirmed) {
      // Delete the record from local storage and update the state
      localStorage.removeItem(key)
      const updatedUsers = { ...allUsers }
      delete updatedUsers[key]
      setAllUsers(updatedUsers)
    }
  }

  return (
    <div
      style={{
        minHeight: `calc(100vh - 200px)`,
        padding: '100px',
      }}
    >
      <button
        type="button"
        className="btn m-1 btn-dark text-white btn-floating ms-auto"
        data-bs-toggle="modal"
        data-bs-target="#formModal"
      >
        Add
      </button>

      {Object.keys(allUsers).length > 0 ? (
        <table className="table table-dark table-stripe text-center">
          <thead>
            <tr>
              <th scope="col">EMP ID </th>
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Salary</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(allUsers).map((key, index) => {
              const user = allUsers[key]
              return (
                <tr key={index}>
                  <th scope="row">{user.empID}</th>
                  <td>{user.firstName}</td>
                  <td>{user.designation}</td>
                  <td>{user.salary}</td>
                  <td>
                    <button
                      type="button"
                      className="btn m-1 btn-light btn-sm btn-floating"
                      data-bs-toggle="modal"
                      data-bs-target="#formModal"
                      onClick={() => handleEdit(user, key)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn m-1 btn-light btn-sm btn-floating"
                      onClick={() => handleDelete(key)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <div className="container-fluid bg-dark text-white p-4 text-center">
          NO DATA
        </div>
      )}

      <EmployeesModal
        setAllUsers={setAllUsers}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        selectedKey={selectedKey}
      />
    </div>
  )
}

export default Employees
