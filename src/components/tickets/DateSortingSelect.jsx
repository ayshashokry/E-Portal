import { Col, Row, Select } from "antd";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown,faCaretUp } from "@fortawesome/free-solid-svg-icons";
const DateSortingSelect = (props) => {
  const { Option } = Select;
  const { getNewestTicketsFirst } = props;

  return (
    <p className="ticketDateFilter">
      <FontAwesomeIcon style={{cursor:'pointer'}} className={props.newestFirst?'activeDateSort':''} icon={faCaretUp}onClick={()=>    getNewestTicketsFirst(true)} /><br/>
      <FontAwesomeIcon style={{cursor:'pointer'}}  className={!props.newestFirst ? 'activeDateSort' : ''} icon={faCaretDown}onClick={()=>    getNewestTicketsFirst(false)} />


     
    </p>
  );
};

export default DateSortingSelect;
