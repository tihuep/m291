import React from "react";
import { useParams } from "react-router-dom";

function Hello() {

    const nameParameter: any = useParams();

    return <div>Hello, {nameParameter.nameProperty}</div>;
}

export default Hello;