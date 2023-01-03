import { handleError, handleResponse } from "./apiCommonUtils";

const ticketsBaseUrl = window.ApiUrl + "/ticket/";

const token = localStorage.token;

export function getTickets() {
  const request = new Request(`${ticketsBaseUrl}?isManaged=false`, {
    headers: {
      authorization: `bearer ${token}`,
    },
  });
  return fetchRequest(request);
}

export function reopenTicket(ticketId, reason) {
  const request = new Request(ticketsBaseUrl + ticketId + "/reopen/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify(reason),
  });
  return fetchRequest(request);
}

export function getTaskComments(taskId) {
  const request = new Request(ticketsBaseUrl + taskId + "/comments", {
    headers: {
      authorization: `bearer ${token}`,
    },
  });
  return fetchRequest(request);
}

export function getTaskCommentsStats(taskId) {
  const request = new Request(ticketsBaseUrl + taskId + "/comments-stats", {
    headers: {
      authorization: `bearer ${token}`,
    },
  });
  return fetchRequest(request);
}

export function deleteTaskComment(taskId, commentId) {
  const request = new Request(
    ticketsBaseUrl + taskId + "/comments/" + commentId,
    {
      method: "DELETE",
      headers: {
        authorization: `bearer ${token}`,
      },
    }
  );
  return fetchRequest(request);
}

export function saveTaskComment(taskId, comment) {
  const request = new Request(
    ticketsBaseUrl + taskId + "/comments/" + (comment.id || ""),
    {
      method: comment.id ? "PUT" : "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${token}`,
      },
      body: JSON.stringify(comment),
    }
  );

  return fetchRequest(request);
}

async function fetchRequest(request) {
  return await fetch(request).then(handleResponse).catch(handleError);
}
