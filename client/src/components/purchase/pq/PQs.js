import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { getPurchaseQuotations } from "../../../_actions/purchaseQuotationAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";

const PQs = ({ getPurchaseQuotations, pqs }) => {
  useEffect(() => {
    getPurchaseQuotations();
  }, []);
  return (
    <div className='container'>
      <Link to='/create-pq' className='btn btn-primary'>
        Create PQ
      </Link>
      <br />
      <h2>Accordion Example</h2>
      <p>
        <strong>Note:</strong> The <strong>data-parent</strong> attribute makes
        sure that all collapsible elements under the specified parent will be
        closed when one of the collapsible item is shown.
      </p>

      {pqs.map((pq) => (
        <div className='card my-4'>
          <div className='card-header'>
            <Moment format='DD/MM/YYYY, h:mm:ss a'>{pq.date}</Moment>
            <p>{pq.supplier.name}</p>
            <p>{pq.total}</p>
            <p>{pq.status}</p>
          </div>
          {pq.pqItems.map((p) => (
            <div className='card-body'>
              {p.quantity}
              {p.unitPrice}
              {p.tax}
              {p.total}
              {p.item.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

PQs.propTypes = {
  getPurchaseQuotations: PropTypes.func.isRequired,
  pqs: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  pqs: state.purchaseQuotation.purchaseQuotations,
});

export default connect(mapStateToProps, {
  getPurchaseQuotations,
})(withRouter(PQs));
