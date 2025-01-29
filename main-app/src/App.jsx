// src/App.jsx
import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ChatApp = React.lazy(() => import("../../chat-app/src/component/Chat"));
const EmailApp = React.lazy(() =>
  import("../../email-app/src/component/EmailApp")
);

function App() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold text-primary">Main Application</h1>
        <p className="text-muted">
          A micro-frontend integration of Chat and Email
        </p>
      </div>

      <div className="row">
        {/* Chat Section */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Chat Application</h4>
            </div>
            <div className="card-body">
              <Suspense
                fallback={
                  <div className="text-center text-muted">Loading Chat...</div>
                }
              >
                <ChatApp />
              </Suspense>
            </div>
          </div>
        </div>

        {/* Email Section */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-lg">
            <div className="card-header bg-success text-white">
              <h4 className="mb-0">Email Application</h4>
            </div>
            <div className="card-body">
              <Suspense
                fallback={
                  <div className="text-center text-muted">Loading Email...</div>
                }
              >
                <EmailApp />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
