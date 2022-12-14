import React from "react";

const StudentDetail = () => {
	let { id } = useParams();
    
	return <div>{id}</div>;
};

export default StudentDetail;
