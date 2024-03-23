const Form =({handleSubmit,newName,handleChange,newNumber,handleChange2,addNewName})=> {
    return(
      <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleChange2} />
      </div>
      <div>
        <button type="submit" onClick={addNewName}>
          add
        </button>
      </div>
    </form>
    )
  }

  export default Form