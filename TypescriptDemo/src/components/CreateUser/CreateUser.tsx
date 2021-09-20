import React from "react";

interface ICreateUser {
  user: any;
  onChangeForm: Function;
  createUser: Function;
}

const CreateUser = ({ user, onChangeForm, createUser }: ICreateUser) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 mrgnbtm">
          <h2>Create User</h2>
          <form>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputEmail1">First Name</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="firstname"
                  id="firstname"
                  aria-describedby="emailHelp"
                  placeholder="First Name"
                  data-testid="firstname"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputPassword1">Last Name</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  data-testid="lastname"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  data-testid="email"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => createUser()}
              className="btn btn-danger mrgnbtm"
              data-testid="create-user-button"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
