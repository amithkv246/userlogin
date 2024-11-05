import React from "react";

export default function LoginPage() {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "#eee", height: "100svh" }}>
                <form className="bg-light w-25 p-3 text-center rounded-3" style={{boxShadow:"0px 0px 10px 5px #aaa"}}>
                    <p className="fs-3 fw-semibold text-primary">Login</p>
                    <input type="email" placeholder="example@gmail.com" className="form-control mb-3"/>
                    <input type="password" placeholder="********" className="form-control mb-3"/>
                    <button className="btn btn-primary mb-4 w-100">Login</button>
                    <p style={{fontSize:"small"}}>Don't have an account? <span className="text-primary">Create an account</span></p>
                </form>
            </div>
        </React.Fragment>
    )
}