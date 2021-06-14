import React from 'react'

export default function SearchBox({searchValue,handleSearch}) {
    return (
        <div className="col">
            <input type="text"
                value={searchValue}
                onChange={handleSearch}
            className="form-control" placeholder='Type To Search' />
        </div>
    )
}
