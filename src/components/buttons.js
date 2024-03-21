import React from "react";

export default function Button(props) {
    const { onClick, children, loading } = props;
    return (
        <button className="submits" onClick={onClick} {...props}>
            {loading ? "loading" : children}
        </button>
    );
}
