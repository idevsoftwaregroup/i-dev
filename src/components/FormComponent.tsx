function FormComponent() {
  return (
    <>
      <h4>User Information</h4>

      <div className="field label prefix border">
        <i>person</i>

        <input
          id="firstName"
          type="text"
          placeholder=" "
        />

        <label htmlFor="firstName">
          First Name
        </label>
      </div>

      <div className="space"></div>

      <div className="field label prefix border">
        <i>badge</i>

        <input
          id="lastName"
          type="text"
          placeholder=" "
        />

        <label htmlFor="lastName">
          Last Name
        </label>
      </div>

      <div className="large-space"></div>

      <nav className="right-align">
        <button className="primary">
          <i>save</i>
          <span>Save</span>
        </button>
      </nav>
    </>
  );
}

export default FormComponent;
