import React, { useState, useEffect } from "react";
import DashNav from "../components/DashNav";

const Index = () => {
  const [commentId, setCommentId] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleReply = () => {
    // Implement your reply logic here
  };

  const handleSendQuestion = () => {
    // Implement your send question logic here
  };

  useEffect(() => {
    // Fetch recent questions from the server and update the state
    // Replace the following lines with your actual API call or data retrieval logic
    const fetchData = async () => {
      // Example API call
      // const response = await fetch('your_api_endpoint');
      // const data = await response.json();

      // Example data (replace with actual data from your server)
      const data = [
        { id: 1, name: "User1", message: "Question 1" },
        { id: 2, name: "User2", message: "Question 2" },
        // Add more questions as needed
      ];

      setQuestions(data);
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <div id="wrapper">
        <DashNav />
        {/* /. NAV SIDE */}
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row"></div>
            <div id="ReplyModal" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                    <h4 className="modal-title">Reply Question</h4>
                  </div>
                  <div className="modal-body">
                    <form name="frm1" method="post">
                      <input type="hidden" id="commentid" name="Rcommentid" />
                      <div className="form-group">
                        <label htmlFor="usr">Write your name:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="Rname"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="comment">Write your reply:</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          name="Rmsg"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        ></textarea>
                      </div>
                      <input
                        type="button"
                        id="btnreply"
                        name="btnreply"
                        className="btn btn-primary"
                        value="Reply"
                        onClick={handleReply}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel panel-default" style={{ marginTop: "50px" }}>
              <div className="panel-body">
                <h3>Community forum</h3>
                <hr />
                <form name="frm" method="post">
                  <input
                    type="hidden"
                    id="commentid"
                    name="Pcommentid"
                    value={commentId}
                  />
                  <div className="form-group">
                    <label htmlFor="usr">Write your name:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="comment">Write your question:</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      name="msg"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <input
                    type="button"
                    id="butsave"
                    name="save"
                    className="btn btn-primary"
                    value="Send"
                    onClick={handleSendQuestion}
                  />
                </form>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-body">
                <h4>Recent questions</h4>
                <table
                  className="table"
                  id="MyTable"
                  style={{
                    backgroundColor: "#edfafa",
                    border: "0px",
                    borderRadius: "10px",
                  }}
                >
                  <tbody id="record">
                    {/* Render the questions from the state */}
                    {questions.map((question) => (
                      <tr key={question.id}>
                        <td>{question.name}</td>
                        <td>{question.message}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
