import React from "react";
import { Link } from "react-router-dom";

const PQs = () => {
  return (
    <div>
      <Link to='/create-pq' className='btn btn-primary'>
        Create PQ
      </Link>
      <br />
      Purchase Quotations
    </div>
  );
};

export default PQs;
