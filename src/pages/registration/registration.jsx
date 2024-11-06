import React from "react";
import TextInput from "../../components/textInput";
import Button from "../../components/button";

export default function RegistrationPage() {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "#eee", height: "100svh" }}>
                <div className="bg-light w-25 p-3 text-center rounded-3" style={{ boxShadow: "0px 0px 10px 5px #aaa" }}>
                    <p className="fs-3 fw-semibold text-primary">Registration</p>
                    <TextInput type={"text"} placeholder={"*name*"} />
                    <TextInput type={"email"} placeholder={"*email*"} />
                    <TextInput type={"password"} placeholder={"*password*"} />
                    <Button label={"Register"} />
                </div>
            </div>
        </React.Fragment >
    )
}
