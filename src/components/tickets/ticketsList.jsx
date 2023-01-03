import React, { useEffect, useState } from "react";
import { Button, Pagination } from "antd";
import TaskComments from "./TaskComments";
import { Table } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import TicketReopenModal from "./ticketReopenModal";
import DateSortingSelect from "./DateSortingSelect";
import TicketDetailsModal from "./ticketDetailsModal";

const TicketsList = (props) => {
  const [tickets, setTickets] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [showComments, setShowComments] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalTaskId, setModalTaskId] = useState(0);
  const [showAddCommentsBtn, setShowAddCommentsBtn] = useState(true);
  const [ticketInModal, setTicketInModal] = useState(null);
  const [showReopenModal, setShowReopenModal] = useState(false);
  const [reopenTicketId, setReopenTicketId] = useState(null);
  const [newestFirst, setNewestFirst] = useState(true);

  const { openAddTaskModal } = props;

  const token = localStorage.token;

  const setTicketsStates = () => {
    let request = new Request(
      window.ApiUrl +
        `/ticket?pageIndex=${pageIndex}&itemsPerPage=${itemsPerPage}&sortByNewest=${newestFirst}`,
      {
        headers: {
          authorization: `bearer ${token}`,
        },
      }
    );
    fetch(request)
      .then(async (res) => {
        if (res.ok) {
          const response = await res.json();
          setTickets(response.tickets);
          setTotalPages(response.totalPages);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setTicketsStates();
  }, [props.newlyCreatedTicket, pageIndex, itemsPerPage, newestFirst]);

  const onPaginationChange = (page, pageSize) => {
    setPageIndex(page);
    setItemsPerPage(pageSize);
  };

  const openCommentsModal = (ticket) => {
    setModalTitle(ticket.title);
    setModalTaskId(ticket.taskId);
    setShowComments(true);
    setShowAddCommentsBtn(!ticket.isClosed);
  };
  const closeCommentsModal = () => {
    setShowComments(false);
  };

  const openAddComment = () => {
    //this.setState({ showAddComment: true });
    setShowComments(false);
  };
  const closeAddComment = () => {
    //this.setState({ showAddComment: false });
    setShowComments(true);
  };

  const openTicketReopenModal = (t) => {
    setReopenTicketId(t.id);
    setShowReopenModal(true);
  };

  const partiallyUpdateTicket = (ticketId, updatedProps) => {
    let updatedTicket = tickets.filter((t) => t.id === ticketId)[0];
    updatedTicket = { ...updatedTicket, ...updatedProps };
    let updatedTicketIndex = tickets.findIndex((t) => t.id === ticketId);
    tickets.splice(updatedTicketIndex, 1, updatedTicket);
    setTickets([...tickets]);
  };

  return (
    <>
      {tickets.length > 0 ? (
        <div className="searchBack">
          <Table className="mt-2 engTable ownerTable runTicketTable ">
            <thead>
              <tr>
                <th>اسم التذكرة </th>
                <th>حالة التذكرة </th>
                <th>تفاصيل التذكرة </th>
                <th>التعليقات </th>
                <th style={{ position: "relative" }}>
                  <DateSortingSelect
                    newestFirst={newestFirst}
                    getNewestTicketsFirst={(isNewestFirst) => {
                      setNewestFirst(isNewestFirst);
                    }}
                  />
                  أنشئت بتاريخ
                </th>

                <th>عرض</th>
                <th>  إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((t) => (
                <tr
                  key={`ticket-${t.id}`}
                  style={{
                    borderBottom: "1px solid #d4d6de",
                  }}
                >
                  <td>{t.title}</td>
                  <td>
                    {t.isClosed
                      ? "تم الإغلاق"
                      : t.willCloseAfter === null
                      ? "قيد المعالجة"
                      : "صوب الإغلاق"}
                  </td>
                  <td>{String(t.description).slice(0, 20)}</td>
                  <td>
                    <Button onClick={() => openCommentsModal(t)}>
                      التعليقات
                    </Button>
                  </td>
                  <td>{t.createdOn}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      style={{ fontSize: "20px", color: "#176d73" }}
                      onClick={() => setTicketInModal(t)}
                    />
                  </td>
                  <td>
                    {t.willCloseAfter ? (
                      <Button onClick={() => openTicketReopenModal(t)}>
                        إعادة فتح
                      </Button>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination
            defaultCurrent={pageIndex}
            total={itemsPerPage * totalPages}
            pageSize={itemsPerPage}
            onChange={onPaginationChange}
          />
        </div>
      ) : (
        <p className="noTickets mt-4">ليس لديك تذاكر</p>
      )}

      {showComments ? (
        <TaskComments
          name={modalTitle}
          taskId={modalTaskId}
          onHide={closeCommentsModal}
          //show={showComments}
          // showAddComment={this.state.showAddComment}
          closeAddComment={closeAddComment}
          openAddComment={openAddComment}
          showAddCommentsBtn={showAddCommentsBtn}
        />
      ) : null}

      <TicketDetailsModal
        ticket={ticketInModal}
        onHide={() => setTicketInModal(null)}
      />

      <TicketReopenModal
        showModal={showReopenModal}
        ticketId={reopenTicketId}
        onModalClose={() => {
          setShowReopenModal(false);
          setReopenTicketId(null);
        }}
        openAddTaskModal={openAddTaskModal}
        updateTicket={partiallyUpdateTicket}
      />
    </>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  user: state.auth.user,
});

export default connect(mapStateToProps)(withRouter(TicketsList));
