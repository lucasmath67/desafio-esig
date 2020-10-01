import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
const MasterPageList = (props) => {
  const { title, children, buttonTitle, ...rest } = props;
  return (

      <div className="container h-100">
        <div className="row justify-content-center align-items-center h-100 " style={{marginTop:"10%"}}>
          <div >
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" >
              <Card.Title
                style={{
                  fontWeight: 500,
                  textShadow: "9px 10px 1px rgba(0,0,0,0.08)",
                  color: "#464D69",
                }}
              >
                {title}
              </Card.Title>
              <Card.Body>{children}</Card.Body>
            </Card>
          </div>
        </div>
   
    </div>
  );
};
MasterPageList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
export default MasterPageList;
