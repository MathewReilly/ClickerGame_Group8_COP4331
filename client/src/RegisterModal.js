import React from 'react' 
import "./RegisterModal.css"

function RegisterModal({closeModal}){
    return (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  closeModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className="title">
              <h1>Register an account to keep track of your score!</h1>
            </div>
            <div className="body">
                <form>
                    <p>Create Account: <br></br>
                        <input type="text" name="username" placeholder="Enter Username"></input> <br></br>
                        <input type="text" name="password" placeholder="Enter Password"></input> <br></br>
                        <input type="text" name="email" placeholder="Enter Email Adress"></input>
                    </p>
                </form>
            </div>
            <div className="footer">
              <button
                onClick={() => {
                  closeModal(false);
                }}
                id="cancelBtn"
              >
                Cancel
              </button>
              <button>Create Acount</button>
            </div>
          </div>
        </div>
      );
    }

export default RegisterModal;