import React, { useState, useEffect } from 'react'
import Card from '../Components/Card'
import { useGlobalContext } from '../context'
import { FaSearch } from 'react-icons/fa'

const Products = () => {
  const [filteredData, setFilteredData] = useState('')
  const [search, setSearch] = useState('')

  const { data } = useGlobalContext()

  const handleSearch = (value) => {
    if (value) {
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
      setFilteredData(filtered)
      setSearch(value)
    } else {
      setFilteredData(data)
    }
  }

  return (
    <div
      className="container mx-auto"
      style={{
        marginTop: '72px',
        minHeight: `calc(100vh - 500px)`,
        paddingTop: '30px',
      }}
    >
      <div className="input-group rounded">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <span className="input-group-text border-0" id="search-addon">
          <FaSearch />
        </span>
      </div>
      <div className="row">
        {filteredData
          ? filteredData.map((item) => {
              if (
                item.category !== 'electronics' &&
                item.category !== 'jewelery'
              ) {
                return <Card key={item.id} data={item} />
              }
            })
          : data.map((item) => {
              if (
                item.category !== 'electronics' &&
                item.category !== 'jewelery'
              ) {
                return <Card key={item.id} data={item} />
              }
            })}
      </div>
    </div>
  )
}

export default Products
