const Filter = ({handleFilter}) => {
    return(
      <div>
          Filter with name:
          <input type="text" onChange={handleFilter} />
        </div>
    )
  }

  export default Filter;