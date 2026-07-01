<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Onco Mitra AI</title>
  <link rel="stylesheet" href="style.css" />
  <img src="C:\Users\Dr Shubham Gandhi\OneDrive\Desktop\WhatsApp Image 2026-06-29 at 22.42.54.jpeg" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  {/* Splash Screen */}
  <div id="splash">
    <div className="particles" />
    <img src="logo.png" className="logo" />
    <h2>Care • Connect • Conquer</h2>
    <div className="loader" />
  </div>
  {/* Language Screen */}
  <div id="language">
    <div className="container">
      <h1>Welcome to Onco Mitra AI</h1>
      <p>Select Your Preferred Language</p>
      <div className="grid">
        <div className="lang">🇮🇳 English</div>
        <div className="lang">🇮🇳 हिन्दी</div>
        <div className="lang">🇮🇳 मराठी</div>
        <div className="lang">🇮🇳 ગુજરાતી</div>
        <div className="lang">🇮🇳 বাংলা</div>
        <div className="lang">🇮🇳 தமிழ்</div>
        <div className="lang">🇮🇳 తెలుగు</div>
        <div className="lang">🇮🇳 ಕನ್ನಡ</div>
        <div className="lang">🇮🇳 മലയാളം</div>
        <div className="lang">🇮🇳 ਪੰਜਾਬੀ</div>
      </div>
      <button id="continue">Continue →</button>
    </div>
  </div>
  {/* Language Confirmation Popup */}
  <div id="confirmBox" className="popup">
    <div className="popup-card">
      <h2>Language Confirmation</h2>
      <p id="confirmText" />
      <div className="popup-buttons">
        <button id="changeBtn" className="grayBtn">
          Change Language
        </button>
        <button id="yesBtn">Continue</button>
      </div>
    </div>
  </div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Select Role</title>
  <link rel="stylesheet" href="role.css" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
    rel="stylesheet"
  />
  <div className="container">
    <img src="logo.png" className="logo" />
    <h1>Welcome to Onco Mitra AI</h1>
    <p>Select your role to continue</p>
    <div className="grid">
      <div className="card" data-role="Patient">
        <div className="icon">👤</div>
        <h2>Patient</h2>
        <p>Cancer journey, reports, appointments</p>
      </div>
      <div className="card" data-role="Doctor">
        <div className="icon">🩺</div>
        <h2>Doctor</h2>
        <p>Clinical dashboard &amp; AI assistant</p>
      </div>
      <div className="card" data-role="Caregiver">
        <div className="icon">👨‍👩‍👧</div>
        <h2>Caregiver</h2>
        <p>Monitor treatment &amp; reminders</p>
      </div>
      <div className="card" data-role="Hospital">
        <div className="icon">🏥</div>
        <h2>Hospital</h2>
        <p>Patient management</p>
      </div>
      <div className="card" data-role="ASHA Worker">
        <div className="icon">👩‍⚕️</div>
        <h2>ASHA Worker</h2>
        <p>Screening &amp; follow-up</p>
      </div>
      <div className="card" data-role="Government">
        <div className="icon">🏛</div>
        <h2>Government</h2>
        <p>Cancer registry &amp; analytics</p>
      </div>
    </div>
    <button id="continue">Continue →</button>
  </div>
  <div className="card selected" id="newUser">
    <h2>🆕 New User</h2>
    <p>Register as a new patient</p>
  </div>
  <div className="card" id="oldUser">
    <h2>👤 Existing User</h2>
    <p>Already have an account</p>
  </div>
  <button id="continue">Continue</button>
  <div className="container">
    <img src="logo.png" className="logo" />
    <h2>Patient Registration</h2>
    <input type="text" id="name" placeholder="Full Name" />
    <input type="number" id="age" placeholder="Age" />
    <select id="gender">
      <option>Select Gender</option>
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </select>
    <input type="text" id="state" placeholder="State" readOnly="" />
    <input type="text" id="district" placeholder="District" readOnly="" />
    <input type="text" id="city" placeholder="City / Taluka" readOnly="" />
    <input type="text" placeholder="Village (Optional)" />
    <div className="mobileBox">
      <input
        type="tel"
        maxLength={10}
        placeholder="Mobile Number"
        id="mobile"
      />
      <button onclick="sendOTP()">Send OTP</button>
    </div>
    <div id="otpSection" style={{ display: "none" }}>
      <input type="text" maxLength={6} placeholder="Enter OTP" id="otp" />
      <button onclick="verifyOTP()">Verify OTP</button>
    </div>
    <button id="continue" disabled="">
      Continue
    </button>
  </div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Onco Mitra AI - AI Assessment</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="style.css" />
  <div className="container">
    {/* Header */}
    <header>
      <img src="logo.png" className="logo" />
      <h2>Onco Mitra AI</h2>
      <p>Your Intelligent Cancer Health Assistant</p>
    </header>
    {/* AI Chat Card */}
    <div className="chat-card">
      <div className="ai-message">
        🤖 <strong>Onco Mitra AI</strong>
        <p>
          Hello <b>Rahul</b> 👋 I will ask you a few questions to understand
          your health concerns. This assessment usually takes 3–5 minutes. You
          can type or speak in your preferred language.
        </p>
      </div>
      {/* Conversation */}
      <div id="chatArea">
        <div className="question">
          🤖 What health problem brings you here today?
        </div>
      </div>
      {/* User Input */}
      <div className="input-box">
        <input
          type="text"
          id="userInput"
          placeholder="Type your symptoms here..."
        />
        <button id="voiceBtn">🎤</button>
        <button id="sendBtn">Send</button>
      </div>
    </div>
    {/* Upload Reports */}
    <div className="upload-card">
      <h3>Medical Reports (Optional)</h3>
      <p>Upload previous reports, prescriptions, biopsy reports or scans.</p>
      <input type="file" />
    </div>
    {/* AI Summary */}
    <div className="summary">
      <h3>AI Extracted Information</h3>
      <ul>
        <li>Primary Complaint : --</li>
        <li>Duration : --</li>
        <li>Severity : --</li>
        <li>Associated Symptoms : --</li>
        <li>Risk Factors : --</li>
      </ul>
    </div>
    {/* Continue */}
    <button className="continue">Continue Assessment →</button>
  </div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Onco Mitra AI - Risk Assessment</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="style.css" />
  <div className="container">
    <img src="logo.png" className="logo" />
    <h1>AI Health Assessment</h1>
    <p>Your assessment has been completed successfully.</p>
    {/* LOW RISK */}
    <div className="risk-card low" id="lowRisk">
      <div className="risk-icon">🟢</div>
      <h2>Low Priority</h2>
      <p>
        Based on your responses, your symptoms do not currently indicate an
        urgent need for evaluation.
      </p>
      <div className="action-box">
        <h3>Next Steps</h3>
        <ul>
          <li>✔ Monitor your symptoms.</li>
          <li>
            ✔ You will receive an app reminder after <b>7 days</b>.
          </li>
          <li>✔ An SMS reminder will also be sent.</li>
          <li>✔ Complete the follow-up questionnaire when notified.</li>
        </ul>
      </div>
      <button className="continue">Go to Dashboard</button>
    </div>
    {/* INTERMEDIATE */}
    <div
      className="risk-card medium"
      id="mediumRisk"
      style={{ display: "none" }}
    >
      <div className="risk-icon">🟡</div>
      <h2>Intermediate Priority</h2>
      <p>Your symptoms should be evaluated by a healthcare professional.</p>
      <div className="action-box">
        <h3>Actions Initiated</h3>
        <ul>
          <li>✔ Hospital consultation recommended.</li>
          <li>✔ Assigned ASHA Worker has been notified.</li>
          <li>✔ Appointment booking available.</li>
          <li>✔ SMS notification sent.</li>
        </ul>
      </div>
      <button>Find Nearby Hospitals</button>
      <button>Book Appointment</button>
    </div>
    {/* HIGH */}
    <div className="risk-card high" id="highRisk" style={{ display: "none" }}>
      <div className="risk-icon">🔴</div>
      <h2>High Priority</h2>
      <p>Prompt medical evaluation is recommended based on the assessment.</p>
      <div className="hospital">
        <h3>Nearest Registered Cancer Centre</h3>
        <p>
          <strong>ABC Cancer Hospital</strong>
        </p>
        <p>Distance : 5.4 km</p>
        <p>MG Road, Pune</p>
      </div>
      <div className="action-box">
        <h3>Automatic Actions Completed</h3>
        <ul>
          <li>✔ Hospital Alert Sent</li>
          <li>✔ ASHA Worker Alerted</li>
          <li>✔ SMS Notification Sent</li>
          <li>✔ Referral ID Generated</li>
        </ul>
      </div>
      <button>Navigate to Hospital</button>
      <button>Call Hospital</button>
    </div>
    {/* Referral Information */}
    <div className="referral">
      <h3>Referral Information</h3>
      <table>
        <tbody>
          <tr>
            <td>Referral ID</td>
            <td>OMAI-2026-001245</td>
          </tr>
          <tr>
            <td>Assessment Date</td>
            <td>01 July 2026</td>
          </tr>
          <tr>
            <td>Assessment Mode</td>
            <td>AI Symptom Assessment</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="disclaimer">
      ⚠ This assessment is intended to support symptom triage and care
      navigation. It does not provide a medical diagnosis and does not replace
      evaluation by a qualified healthcare professional.
    </div>
  </div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Intermediate Risk - Onco Mitra AI</title>
  <link rel="stylesheet" href="style.css" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
    rel="stylesheet"
  />
  <div className="container">
    <img src="logo.png" className="logo" />
    <h1>Assessment Completed</h1>
    <div className="risk-card medium">
      <div className="icon">🟡</div>
      <h2>Intermediate Priority</h2>
      <p>
        Your responses indicate that you should consult a healthcare
        professional for further evaluation. This assessment does not provide a
        diagnosis.
      </p>
    </div>
    <div className="status">
      <h3>Actions Completed</h3>
      <ul>
        <li>✅ Your assessment has been saved.</li>
        <li>✅ Assigned ASHA Worker has been notified.</li>
        <li>✅ SMS reminder sent to your mobile.</li>
        <li>✅ In-app notification generated.</li>
      </ul>
    </div>
    <div className="recommendation">
      <h3>Recommended Next Step</h3>
      <p>
        Please visit a registered hospital within the next few days for clinical
        evaluation.
      </p>
    </div>
    <button>🏥 Find Nearby Hospitals</button>
    <br />
    <br />
    <button>📅 Book Appointment</button>
    <br />
    <br />
    <button>Continue to Dashboard</button>
    <div className="note">
      <strong>Reminder:</strong>
      If your symptoms worsen before your appointment, seek medical care
      immediately.
    </div>
  </div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Intermediate Priority | Onco Mitra AI</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="style.css" />
  <div className="container">
    <img src="logo.png" className="logo" />
    <h1>AI Health Assessment</h1>
    <div className="riskCard yellow">
      <div className="riskCircle">🟡</div>
      <h2>Intermediate Priority</h2>
      <p>
        Based on your assessment, a medical consultation is recommended. Our
        healthcare network has been informed to help facilitate your care.
      </p>
    </div>
    {/* Assessment Status */}
    <div className="statusCard">
      <h3>Assessment Status</h3>
      <table>
        <tbody>
          <tr>
            <td>Status</td>
            <td>
              <span className="badge yellow">Under Evaluation</span>
            </td>
          </tr>
          <tr>
            <td>Referral ID</td>
            <td>OMAI-2026-001245</td>
          </tr>
          <tr>
            <td>Assessment Date</td>
            <td>01 July 2026</td>
          </tr>
          <tr>
            <td>Risk Level</td>
            <td>Intermediate</td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* ASHA Worker */}
    <div className="ashaCard">
      <h3>Assigned ASHA Worker</h3>
      <hr />
      <p>
        <strong>Name</strong>
        <br />
        Mrs. Patil
      </p>
      <p>
        <strong>Mobile Number</strong>
        <br />
        +91 **********
      </p>
      <p>
        <strong>Village / Area</strong>
        <br />
        Rural
      </p>
      <p>
        <strong>Primary Health Centre</strong>
        <br />
        PHC{" "}
      </p>
      <p>
        <strong>Status</strong>
        <br />
        <span className="badge green">Notification Delivered</span>
      </p>
      <button>📞 Call ASHA Worker</button>
    </div>
    {/* Hospital Recommendation */}
    <div className="hospitalCard">
      <h3>Recommended Hospital</h3>
      <hr />
      <p>🏥 Civil Hospital</p>
      <p>📍 12 km from your current location</p>
      <button>📍 View on Map</button>
      <button>📅 Book Appointment</button>
    </div>
    {/* Timeline */}
    <div className="timeline">
      <h3>Referral Progress</h3>
      <ul>
        <li>✅ AI Assessment Completed</li>
        <li>✅ Patient Registered</li>
        <li>✅ ASHA Worker Notified</li>
        <li>🟡 Under Evaluation</li>
        <li>⬜ Hospital Consultation Pending</li>
        <li>⬜ Doctor Review Pending</li>
      </ul>
    </div>
    {/* Patient Instructions */}
    <div className="instructions">
      <h3>What should you do now?</h3>
      <ul>
        <li>Visit the recommended hospital within the next few days.</li>
        <li>Carry any previous medical reports or prescriptions.</li>
        <li>Your assigned ASHA Worker may contact you for guidance.</li>
        <li>If your symptoms worsen, seek immediate medical attention.</li>
      </ul>
    </div>
    <button className="dashboard">Continue to Dashboard</button>
    <div className="footer">
      This AI assessment supports symptom triage and care navigation. It does
      not provide a medical diagnosis.
    </div>
  </div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>High Risk - Onco Mitra AI</title>
  <link rel="stylesheet" href="style.css" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
    rel="stylesheet"
  />
  <div className="container">
    <img src="logo.png" className="logo" />
    <h1>Urgent Assessment</h1>
    <div className="risk-card high">
      <div className="icon">🔴</div>
      <h2>High Priority</h2>
      <p>
        Based on your assessment, prompt medical evaluation is recommended.
        Please visit a registered hospital as soon as possible.
      </p>
    </div>
    <div className="hospital-card">
      <h3>Nearest Registered Cancer Hospital</h3>
      <hr />
      <p>
        🏥 <strong>xyz Hospital</strong>
      </p>
      <p>📍 abc location</p>
      <p>📏 Distance : 6.2 km</p>
      <p>☎ +91-22-24177000</p>
    </div>
    <div className="status">
      <h3>Automatic Alerts Sent</h3>
      <ul>
        <li>✅ Hospital notified.</li>
        <li>✅ Assigned ASHA Worker notified.</li>
        <li>✅ SMS sent to patient.</li>
        <li>✅ In-app notification generated.</li>
        <li>✅ Referral ID generated.</li>
      </ul>
    </div>
    <div className="referral">
      <h3>Referral Details</h3>
      <table>
        <tbody>
          <tr>
            <td>Referral ID</td>
            <td>OMAI-2026-001245</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>Pending Hospital Review</td>
          </tr>
          <tr>
            <td>Priority</td>
            <td>High</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button>🧭 Navigate to Hospital</button>
    <br />
    <br />
    <button>📞 Call Hospital</button>
    <br />
    <br />
    <button>🚑 Request Assistance</button>
    <div className="warning">
      ⚠ This assessment is intended to support symptom triage and care
      navigation. It is not a medical diagnosis.
    </div>
  </div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>High Priority Referral | Onco Mitra AI</title>
  <link rel="stylesheet" href="style.css" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <div className="container">
    <img src="logo.png" className="logo" />
    <h1>High Priority Referral</h1>
    <p>Your assessment has been completed successfully.</p>
    {/* Risk Card */}
    <div className="riskCard high">
      <div className="icon">🔴</div>
      <h2>High Priority</h2>
      <p>
        Based on your assessment, prompt medical evaluation is recommended. Your
        referral has been initiated automatically.
      </p>
    </div>
    {/* Referral Status */}
    <div className="statusCard">
      <h3>Referral Status</h3>
      <table>
        <tbody>
          <tr>
            <td>Status</td>
            <td>
              <span className="badge yellow">Under Evaluation</span>
            </td>
          </tr>
          <tr>
            <td>Referral ID</td>
            <td>OMAI-2026-001245</td>
          </tr>
          <tr>
            <td>Assessment Time</td>
            <td>01 July 2026 | 10:35 AM</td>
          </tr>
          <tr>
            <td>Priority</td>
            <td>
              <span className="badge red">High Priority</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* Hospital Details */}
    <div className="hospitalCard">
      <h3>🏥 Registered Hospital Notified</h3>
      <hr />
      <p>
        <strong>Hospital Name</strong>
        <br />
        Tata Memorial Hospital
      </p>
      <p>
        <strong>Department</strong>
        <br />
        Medical Oncology OPD
      </p>
      <p>
        <strong>Distance</strong>
        <br />
        5.8 km
      </p>
      <p>
        <strong>Address</strong>
        <br />
        Dr. Ernest Borges Road, Parel, Mumbai - 400012
      </p>
      <p>
        <strong>Hospital Contact</strong>
        <br />
        +91-22-24177000
      </p>
      <p>
        <strong>Notification Status</strong>
        <br />
        <span className="badge green">Hospital Alert Delivered</span>
      </p>
      <button>📍 Navigate to Hospital</button>
      <button>📞 Call Hospital</button>
    </div>
    {/* ASHA Worker */}
    <div className="ashaCard">
      <h3>👩‍⚕️ Assigned ASHA Worker</h3>
      <hr />
      <p>
        <strong>Name</strong>
        <br />
        Mrs. Patil
      </p>
      <p>
        <strong>Mobile Number</strong>
        <br />
        +91 ********
      </p>
      <p>
        <strong>Village</strong>
        <br />
        Rural
      </p>
      <p>
        <strong>Primary Health Centre</strong>
        <br />
        PHC
      </p>
      <p>
        <strong>Status</strong>
        <br />
        <span className="badge green">ASHA Worker Notified</span>
      </p>
      <button>📞 Contact ASHA Worker</button>
    </div>
    {/* Timeline */}
    <div className="timeline">
      <h3>Referral Progress</h3>
      <ul>
        <li>✅ AI Health Assessment Completed</li>
        <li>✅ High Priority Identified</li>
        <li>✅ Registered Hospital Notified</li>
        <li>✅ ASHA Worker Notified</li>
        <li>🟡 Under Evaluation</li>
        <li>⬜ Hospital Registration Pending</li>
        <li>⬜ Doctor Consultation Pending</li>
        <li>⬜ Diagnosis Confirmation Pending</li>
        <li>⬜ Treatment Plan Pending</li>
      </ul>
    </div>
    {/* Instructions */}
    <div className="instructions">
      <h3>What should you do now?</h3>
      <ul>
        <li>Visit the notified hospital as soon as possible.</li>
        <li>Carry previous reports and prescriptions if available.</li>
        <li>Your ASHA Worker may contact you to assist with your visit.</li>
        <li>
          If your symptoms become severe before reaching the hospital, seek
          emergency medical care immediately.
        </li>
      </ul>
    </div>
    <button className="dashboard">Continue to Dashboard</button>
    <div className="footer">
      This AI assessment supports symptom triage and care navigation. It is not
      a medical diagnosis and does not replace evaluation by a qualified
      healthcare professional.
    </div>
  </div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Onco Mitra AI | Patient Dashboard</title>
  <link rel="stylesheet" href="style.css" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <div className="container">
    <img src="logo.png" className="logo" />
    <h1>Welcome Back</h1>
    <h2>Rahul Sharma</h2>
    <p>Patient ID : OM-2026-000123</p>
    {/* Current Status */}
    <div className="statusCard">
      <h2>Current Status</h2>
      <div className="statusBadge yellow">🟡 Under Evaluation</div>
      <p>Your case is currently being evaluated by the assigned hospital.</p>
    </div>
    {/* Assigned Hospital */}
    <div className="hospitalCard">
      <h2>🏥 Assigned Hospital</h2>
      <hr />
      <p>
        <strong>Hospital</strong>
        <br />
        xyz Hospital
      </p>
      <p>
        <strong>Department</strong>
        <br />
        Medical Oncology
      </p>
      <p>
        <strong>Address</strong>
        <br />
        address
      </p>
      <p>
        <strong>Contact</strong>
        <br />
        +91 *********
      </p>
      <button>📍 Navigate</button>
      <button>📞 Call Hospital</button>
    </div>
    {/* Assigned ASHA */}
    <div className="ashaCard">
      <h2>👩‍⚕️ Assigned ASHA Worker</h2>
      <hr />
      <p>
        <strong>Name</strong>
        <br />
        Patil
      </p>
      <p>
        <strong>Mobile</strong>
        <br />
        +91 ***********
      </p>
      <p>
        <strong>Primary Health Centre</strong>
        <br />
        PHC
      </p>
      <p>
        <strong>Status</strong>
        <br />
        Available
      </p>
      <button>📞 Contact ASHA Worker</button>
    </div>
    {/* Referral Progress */}
    <div className="timeline">
      <h2>Referral Progress</h2>
      <ul>
        <li>✅ AI Assessment Completed</li>
        <li>✅ Risk Stratification Completed</li>
        <li>✅ Hospital Allocated</li>
        <li>✅ ASHA Worker Allocated</li>
        <li>🟡 Under Evaluation</li>
        <li>⬜ Diagnosis Pending</li>
        <li>⬜ Treatment Planning</li>
        <li>⬜ Treatment Started</li>
      </ul>
    </div>
    {/* Final Outcome */}
    <div className="outcomeCard">
      <h2>Final Outcome</h2>
      <hr />
      <p>
        Outcome will be updated by the treating hospital after clinical
        evaluation.
      </p>
      <div className="outcomeBox">
        Status :<b>Pending Hospital Evaluation</b>
      </div>
    </div>
    {/* Dashboard */}
    <div className="dashboardButtons">
      <button>📄 My Reports</button>
      <button>📅 My Appointments</button>
      <button>💊 Treatment Plan</button>
      <button>💬 Chat with Hospital</button>
      <button>🤖 AI Follow-up</button>
    </div>
  </div>
  <div className="caseStatus">
    <h2>📊 Case Progress</h2>
    <div className="step completed">
      <div className="circle">✓</div>
      <div className="content">
        <h3>Registration Completed</h3>
        <p>01 Jul 2026 | 10:15 AM</p>
      </div>
    </div>
    <div className="step completed">
      <div className="circle">✓</div>
      <div className="content">
        <h3>AI Assessment Completed</h3>
        <p>01 Jul 2026 | 10:20 AM</p>
      </div>
    </div>
    <div className="step completed">
      <div className="circle">✓</div>
      <div className="content">
        <h3>Risk Stratification</h3>
        <p>High Priority</p>
      </div>
    </div>
    <div className="step completed">
      <div className="circle">✓</div>
      <div className="content">
        <h3>Hospital Allocated</h3>
        <p> xyz Hospital</p>
      </div>
    </div>
    <div className="step completed">
      <div className="circle">✓</div>
      <div className="content">
        <h3>ASHA Worker Assigned</h3>
        <p>Mrs Patil</p>
      </div>
    </div>
    <div className="step active">
      <div className="circle">🟡</div>
      <div className="content">
        <h3>Under Evaluation</h3>
        <p>Hospital reviewing your case.</p>
      </div>
    </div>
    <div className="step">
      <div className="circle">○</div>
      <div className="content">
        <h3>Appointment Scheduled</h3>
      </div>
    </div>
    <div className="step">
      <div className="circle">○</div>
      <div className="content">
        <h3>Hospital Registration</h3>
      </div>
    </div>
    <div className="step">
      <div className="circle">○</div>
      <div className="content">
        <h3>Clinical Examination</h3>
      </div>
    </div>
    <div className="step">
      <div className="circle">○</div>
      <div className="content">
        <h3>Investigations Ordered</h3>
      </div>
    </div>
    <div className="step">
      <div className="circle">○</div>
      <div className="content">
        <h3>Reports Uploaded</h3>
      </div>
    </div>
    <div className="step">
      <div className="circle">○</div>
      <div className="content">
        <h3>Diagnosis Confirmed</h3>
      </div>
    </div>
    <div className="step">
      <div className="circle">○</div>
      <div className="content">
        <h3>Tumor Board Review</h3>
      </div>
    </div>
    <div className="step">
      <div className="circle">○</div>
      <div className="content">
        <h3>Treatment Plan Finalized</h3>
      </div>
    </div>
    <div className="step">
      <div className="circle">○</div>
      <div className="content">
        <h3>Financial Counselling</h3>
      </div>
    </div>
    <div className="step">
      <div className="circle">○</div>
      <div className="content">
        <h3>Treatment Started</h3>
      </div>
    </div>
    <div className="step">
      <div className="circle">○</div>
      <div className="content">
        <h3>Ongoing Treatment</h3>
      </div>
    </div>
    <div className="step">
      <div className="circle">○</div>
      <div className="content">
        <h3>Treatment Completed</h3>
      </div>
    </div>
    <div className="step">
      <div className="circle">○</div>
      <div className="content">
        <h3>Follow-up</h3>
      </div>
    </div>
    <div className="step">
      <div className="circle">○</div>
      <div className="content">
        <h3>Survivorship Program</h3>
      </div>
    </div>
  </div>
  <div className="currentStatus">
    <h2>Current Case Status</h2>
    <div className="statusBox">
      <h1>🟡 Investigations Ordered</h1>
      <p>Updated 2 minutes ago</p>
      <p>
        Updated By
        <strong>Dr SS</strong>
      </p>
      <p>Department Medical Oncology</p>
      <p>Hospital XYZ Hospital</p>
    </div>
    <div className="onco-card">
      <div className="title">
        <h1>Onco Card</h1>
      </div>
      <div className="profile">
        <img
          id="patientPhoto"
          src="images/default-patient.png"
          alt="Patient Photo"
        />
        <h2 id="patientName">Rahul Sharma</h2>
        <p id="oncoId">
          <strong>Onco ID:</strong> OMAI-2026-000123
        </p>
        <p id="abhaId">
          <strong>ABHA ID:</strong> 12XX-34XX-56XX-78XX
        </p>
        <img id="qrCode" src="images/qrcode.png" alt="QR Code" />
      </div>
    </div>
    <div className="section">
      <h3>Personal Information</h3>
      <p>
        <b>Age</b> <span id="age" />
      </p>
      <p>
        <b>Gender</b> <span id="gender" />
      </p>
      <p>
        <b>Blood Group</b> <span id="bloodGroup" />
      </p>
      <p>
        <b>Weight</b> <span id="weight" />
      </p>
      <p>
        <b>Height</b> <span id="height" />
      </p>
      <p>
        <b>Mobile</b> <span id="mobile" />
      </p>
      <p>
        <b>Emergency Contact</b> <span id="emergency" />
      </p>
    </div>
    <div className="section">
      <h3>Allergies</h3>
      <ul id="allergyList" />
    </div>
    <div className="section">
      <h3>Comorbidities</h3>
      <ul id="comorbidityList" />
    </div>
    <div className="section">
      <h3>Cancer Details</h3>
      <p>
        Status : <span id="status" />
      </p>
      <p>
        Cancer Type : <span id="cancerType" />
      </p>
      <p>
        Stage : <span id="stage" />
      </p>
      <p>
        Histology : <span id="histology" />
      </p>
      <p>
        Biomarkers : <span id="biomarkers" />
      </p>
    </div>
    <div className="section">
      <h3>Care Team</h3>
      <p>
        Hospital : <span id="hospital" />
      </p>
      <p>
        Doctor : <span id="doctor" />
      </p>
      <p>
        ASHA Worker : <span id="asha" />
      </p>
    </div>
    <div className="section">
      <h3>Current Treatment</h3>
      <p id="treatmentStatus" />
    </div>
    <div className="section">
      <h3>Next Appointment</h3>
      <p id="appointment" />
    </div>
    <div className="section">
      <h3>Latest Update</h3>
      <p id="latestUpdate" />
    </div>
  </div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dynamic Onco Card | Onco Mitra AI</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="style.css" />
  <div className="oncoCard">
    <div className="header">
      <img src="logo.png" className="logo" />
      <h1>ONCO MITRA AI</h1>
      <p>Dynamic Digital Onco Card</p>
    </div>
    {/* Patient Details */}
    <div className="profile">
      <img src="patient.png" className="photo" />
      <div>
        <h2 id="patientName"> Sharma</h2>
        <p>
          <strong>Onco ID :</strong> <span id="oncoId">OMAI-2026-000123</span>
        </p>
        <p>
          <strong>adhar ID :</strong> <span id="abha">14XX-XXXX-XXXX</span>
        </p>
      </div>
      <img src="qr.png" className="qr" />
    </div>
    <hr />
    {/* Personal Information */}
    <div className="section">
      <h2>Personal Information</h2>
      <table>
        <tbody>
          <tr>
            <td>Age</td>
            <td id="age">45 Years</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td id="gender">Male</td>
          </tr>
          <tr>
            <td>Blood Group</td>
            <td id="blood">B+</td>
          </tr>
          <tr>
            <td>Height</td>
            <td id="height">172 cm</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td id="weight">68 kg</td>
          </tr>
          <tr>
            <td>Mobile</td>
            <td id="mobile">9876543210</td>
          </tr>
          <tr>
            <td>Emergency Contact</td>
            <td id="emergency">9876500000</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />
    {/* Allergies */}
    <div className="section">
      <h2>Allergies</h2>
      <ul id="allergies">
        <li>❌ Penicillin</li>
        <li>❌ Contrast Dye</li>
        <li>❌ Paclitaxel</li>
      </ul>
    </div>
    <hr />
    {/* Comorbidities */}
    <div className="section">
      <h2>Comorbidities</h2>
      <ul id="comorbidity">
        <li>Diabetes Mellitus</li>
        <li>Hypertension</li>
      </ul>
    </div>
    <hr />
    {/* Diagnosis */}
    <div className="section">
      <h2>Confirmed Diagnosis</h2>
      <table>
        <tbody>
          <tr>
            <td>Status</td>
            <td>
              <span style={{ color: "green", fontWeight: "bold" }}>
                ✅ Diagnosis Confirmed
              </span>
            </td>
          </tr>
          <tr>
            <td>Cancer Type</td>
            <td id="cancerType">Invasive Ductal Carcinoma</td>
          </tr>
          <tr>
            <td>Primary Site</td>
            <td id="primarySite">Left Breast</td>
          </tr>
          <tr>
            <td>Stage</td>
            <td id="stage">Stage IIA</td>
          </tr>
          <tr>
            <td>Histology</td>
            <td id="histology">Grade II</td>
          </tr>
          <tr>
            <td>Date of Diagnosis</td>
            <td id="diagnosisDate">05 Jul 2026</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />
    {/* Biomarkers */}
    <div className="section">
      <h2>Biomarkers</h2>
      <table>
        <tbody>
          <tr>
            <td>ER</td>
            <td>Positive</td>
          </tr>
          <tr>
            <td>PR</td>
            <td>Positive</td>
          </tr>
          <tr>
            <td>HER2</td>
            <td>Negative</td>
          </tr>
          <tr>
            <td>Ki-67</td>
            <td>22%</td>
          </tr>
          <tr>
            <td>PD-L1</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>NGS</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />
    {/* Confirmed By */}
    <div className="section">
      <h2>Diagnosis Confirmation</h2>
      <table>
        <tbody>
          <tr>
            <td>Confirmed By</td>
            <td>Dr ss</td>
          </tr>
          <tr>
            <td>Speciality</td>
            <td>Medical Oncologist</td>
          </tr>
          <tr>
            <td>Medical Registration No.</td>
            <td>MMC-123456</td>
          </tr>
          <tr>
            <td>Hospital</td>
            <td>xyz Hospital</td>
          </tr>
          <tr>
            <td>Confirmation Date</td>
            <td>05 Jul 2026</td>
          </tr>
          <tr>
            <td>Confirmation Time</td>
            <td>11:40 AM</td>
          </tr>
          <tr>
            <td>Digital Signature</td>
            <td>✔ Verified</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />
    {/* Treatment */}
    <div className="section">
      <h2>Treatment Status</h2>
      <table>
        <tbody>
          <tr>
            <td>Current Status</td>
            <td>🟢 Chemotherapy Started</td>
          </tr>
          <tr>
            <td>Protocol</td>
            <td>Dose Dense AC-T</td>
          </tr>
          <tr>
            <td>Current Cycle</td>
            <td>Cycle 1 of 6</td>
          </tr>
          <tr>
            <td>Next Appointment</td>
            <td>12 Jul 2026 09:30 AM</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />
    {/* Care Team */}
    <div className="section">
      <h2>Care Team</h2>
      <table>
        <tbody>
          <tr>
            <td>Medical Oncologist</td>
            <td>Dr ss</td>
          </tr>
          <tr>
            <td>Surgical Oncologist</td>
            <td>Dr ABC</td>
          </tr>
          <tr>
            <td>Radiation Oncologist</td>
            <td>Dr XYZ</td>
          </tr>
          <tr>
            <td>ASHA Worker</td>
            <td>Patil</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />
    {/* Live Status */}
    <div className="section">
      <h2>Live Case Status</h2>
      <p>🟢 Treatment Ongoing</p>
      <p>Last Updated 05 Jul 2026 12:15 PM</p>
      <p>Updated By Dr ss</p>
    </div>
    <hr />
    {/* Footer */}
    <div className="footer">
      This Onco Card is generated by Onco Mitra AI and reflects the latest
      verified clinical information available. It is intended to support
      continuity of care and should be used alongside the treating clinician's
      medical records.
    </div>
  </div>
  <div className="card" id="resultCard" style={{ display: "none" }}>
    <h2>🤖 AI Toxicity Assessment</h2>
    <table>
      <tbody>
        <tr>
          <td>Highest CTCAE Grade</td>
          <td id="gradeResult" />
        </tr>
        <tr>
          <td>Primary Toxicity</td>
          <td id="primaryToxicity" />
        </tr>
      </tbody>
    </table>
    <h3>Notifications Generated</h3>
    <ul id="alertList" />
    <button onclick="location.href='dashboard.html'">
      Return to Dashboard
    </button>
  </div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Onco Mitra AI | Survivorship</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="style.css" />
  <div className="container">
    <img src="logo.png" className="logo" />
    <h1>🎉 Cancer Survivorship Program</h1>
    <p>Congratulations on completing your planned treatment.</p>
    <div className="statusCard">
      <h2>Current Status</h2>
      <h3 style={{ color: "green" }}>🟢 No Active Treatment</h3>
      <p>Treatment Completed Successfully</p>
      <p>
        <strong>Completion Date :</strong> 18 Jan 2027
      </p>
    </div>
    <hr />
    <div className="section">
      <h2>Cancer Summary</h2>
      <table>
        <tbody>
          <tr>
            <td>Cancer Type</td>
            <td>Breast Cancer</td>
          </tr>
          <tr>
            <td>Stage</td>
            <td>Stage IIA</td>
          </tr>
          <tr>
            <td>Treatment</td>
            <td>Surgery + Chemotherapy + Radiation</td>
          </tr>
          <tr>
            <td>Treating Hospital</td>
            <td>Tata Memorial Hospital</td>
          </tr>
          <tr>
            <td>Treating Oncologist</td>
            <td>Dr Rahul Gandhi</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />
    <div className="section">
      <h2>Next Follow-up</h2>
      <p>
        <strong>Date :</strong> 25 August 2027
      </p>
      <p>
        <strong>Time :</strong> 10:30 AM
      </p>
      <p>
        <strong>Department :</strong> Medical Oncology
      </p>
      <button>View Appointment</button>
    </div>
    <hr />
    <div className="section">
      <h2>AI Symptom Check</h2>
      <p>Report any new symptoms between follow-up visits.</p>
      <button>Start AI Assessment</button>
    </div>
    <hr />
    <div className="section">
      <h2>Recurrence Monitoring</h2>
      <ul>
        <li>✔ Persistent pain</li>
        <li>✔ New swelling or lump</li>
        <li>✔ Weight loss</li>
        <li>✔ Persistent cough</li>
        <li>✔ Bleeding</li>
        <li>✔ Difficulty swallowing</li>
      </ul>
      <button>Report Symptoms</button>
    </div>
    <hr />
    <div className="section">
      <h2>Late Side Effects</h2>
      <ul>
        <li>□ Fatigue</li>
        <li>□ Neuropathy</li>
        <li>□ Lymphedema</li>
        <li>□ Cardiac Symptoms</li>
        <li>□ Bone Pain</li>
        <li>□ Memory Problems</li>
      </ul>
      <button>Report Side Effects</button>
    </div>
    <hr />
    <div className="section">
      <h2>Lifestyle Score</h2>
      <table>
        <tbody>
          <tr>
            <td>Smoking</td>
            <td>🚭 Non Smoker</td>
          </tr>
          <tr>
            <td>Alcohol</td>
            <td>None</td>
          </tr>
          <tr>
            <td>BMI</td>
            <td>24.1</td>
          </tr>
          <tr>
            <td>Physical Activity</td>
            <td>150 min/week</td>
          </tr>
          <tr>
            <td>Diet</td>
            <td>Healthy</td>
          </tr>
        </tbody>
      </table>
      <button>Improve Lifestyle</button>
    </div>
    <hr />
    <div className="section">
      <h2>Mental Health</h2>
      <button>Emotional Wellbeing Questionnaire</button>
      <button>Talk to Counsellor</button>
    </div>
    <hr />
    <div className="section">
      <h2>Vaccinations</h2>
      <ul>
        <li>Influenza</li>
        <li>COVID-19</li>
        <li>Pneumococcal</li>
        <li>HPV (if applicable)</li>
      </ul>
    </div>
    <hr />
    <div className="section">
      <h2>Health Documents</h2>
      <button>Treatment Summary</button>
      <button>Survivorship Care Plan</button>
      <button>Medical Reports</button>
    </div>
    <hr />
    <div className="section">
      <h2>Current Care Team</h2>
      <p>Medical Oncologist : Dr ss</p>
      <p>Hospital : xyz Hospital</p>
      <p>ASHA Worker : Patil</p>
    </div>
    <hr />
    <div className="section">
      <h2>Achievements</h2>
      🏅 Treatment Completed 🏅 One-Year Follow-up Completed 🏅 Regular
      Follow-up Maintained
    </div>
    <hr />
    <div className="section">
      <h2>Current Status</h2>
      <h3 style={{ color: "green" }}>🟢 Survivorship</h3>
      <p>
        No evidence of active disease based on the latest available clinical
        update.
      </p>
    </div>
  </div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Onco Mitra AI - Post Treatment Assessment</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\n*{\nmargin:0;\npadding:0;\nbox-sizing:border-box;\nfont-family:Poppins,sans-serif;\n}\n\nbody{\nbackground:#eef5fb;\n}\n\nheader{\nbackground:#0D47A1;\ncolor:white;\npadding:18px;\ndisplay:flex;\njustify-content:space-between;\nalign-items:center;\n}\n\n.logo{\nfont-size:26px;\nfont-weight:bold;\n}\n\n.patient{\ntext-align:right;\n}\n\n.container{\nwidth:95%;\nmax-width:900px;\nmargin:25px auto;\n}\n\n.card{\nbackground:white;\npadding:20px;\nborder-radius:15px;\nmargin-bottom:20px;\nbox-shadow:0 5px 15px rgba(0,0,0,.08);\n}\n\n.progress{\nwidth:100%;\nheight:14px;\nbackground:#ddd;\nborder-radius:30px;\noverflow:hidden;\nmargin-top:15px;\n}\n\n.bar{\nwidth:30%;\nheight:100%;\nbackground:#0D47A1;\n}\n\n.ai{\nbackground:#E3F2FD;\nborder-left:6px solid #1976D2;\n}\n\n.question{\nmargin-top:20px;\n}\n\n.question label{\nfont-weight:600;\ndisplay:block;\nmargin-bottom:8px;\n}\n\nselect,input[type=text],textarea{\n\nwidth:100%;\npadding:12px;\nborder-radius:10px;\nborder:1px solid #ccc;\nfont-size:15px;\n\n}\n\n.voice{\n\nbackground:#28a745;\ncolor:white;\npadding:12px;\nborder:none;\nborder-radius:10px;\nmargin-top:10px;\ncursor:pointer;\n\n}\n\n.next{\n\nmargin-top:30px;\nbackground:#1565C0;\ncolor:white;\npadding:15px 35px;\nborder:none;\nborder-radius:12px;\nfont-size:18px;\ncursor:pointer;\n\n}\n\n.symptomCard{\n\nbackground:#fafafa;\npadding:18px;\nborder-radius:12px;\nmargin-top:18px;\n\n}\n\n"
    }}
  />
  <header>
    <div className="logo">🩺 Onco Mitra AI</div>
    <div className="patient">
      <b>Rahul Sharma</b>
      <br />
      Cycle 2 of 6
    </div>
  </header>
  <div className="container">
    <div className="card">
      <h2>Post Treatment Symptom Assessment</h2>
      <p>
        This assessment helps your healthcare team monitor treatment-related
        side effects. Estimated time: 4 minutes.
      </p>
      <div className="progress">
        <div className="bar" />
      </div>
      <p style={{ marginTop: 10 }}>Question 1 of 18</p>
    </div>
    <div className="card ai">
      <h3>🤖 Onco Mitra AI</h3>
      <p>
        Hello Rahul 👋 How have you been feeling since your last treatment? You
        may answer by typing or using voice.
      </p>
      <textarea
        rows={4}
        placeholder="Describe how you are feeling..."
        defaultValue={""}
      />
      <button className="voice">🎤 Speak in your preferred language</button>
    </div>
    <div className="card">
      <h2>General Symptoms</h2>
      <div className="symptomCard">
        <div className="question">
          <label>1. Do you have fever?</label>
          <select>
            <option>No</option>
            <option>99-100°F</option>
            <option>100-102°F</option>
            <option>Above 102°F</option>
          </select>
        </div>
      </div>
      <div className="symptomCard">
        <div className="question">
          <label>2. How tired do you feel?</label>
          <select>
            <option>No fatigue</option>
            <option>Mild</option>
            <option>Moderate</option>
            <option>Severe</option>
          </select>
        </div>
      </div>
      <div className="symptomCard">
        <div className="question">
          <label>3. Appetite</label>
          <select>
            <option>Normal</option>
            <option>Reduced</option>
            <option>Eating only liquids</option>
            <option>Unable to eat</option>
          </select>
        </div>
      </div>
      <div className="symptomCard">
        <div className="question">
          <label>4. Weight loss since last visit?</label>
          <select>
            <option>No</option>
            <option>1-2 kg</option>
            <option>3-5 kg</option>
            <option>&gt;5 kg</option>
          </select>
        </div>
      </div>
    </div>
    <div className="card">
      <h2>Gastrointestinal Symptoms</h2>
      <div className="symptomCard">
        <div className="question">
          <label>5. Nausea</label>
          <select>
            <option>None</option>
            <option>Mild</option>
            <option>Moderate</option>
            <option>Severe</option>
          </select>
        </div>
      </div>
      <div className="symptomCard">
        <div className="question">
          <label>6. Vomiting</label>
          <select>
            <option>None</option>
            <option>1 Episode</option>
            <option>2-5 Episodes</option>
            <option>More than 5</option>
          </select>
        </div>
      </div>
      <div className="symptomCard">
        <div className="question">
          <label>7. Diarrhea</label>
          <select>
            <option>No</option>
            <option>1-3 stools/day</option>
            <option>4-6 stools/day</option>
            <option>&gt;6 stools/day</option>
          </select>
        </div>
      </div>
      <div className="symptomCard">
        <div className="question">
          <label>8. Constipation</label>
          <select>
            <option>No</option>
            <option>1 Day</option>
            <option>2-3 Days</option>
            <option>More than 3 Days</option>
          </select>
        </div>
      </div>
      <div className="symptomCard">
        <div className="question">
          <label>9. Mouth ulcers</label>
          <select>
            <option>No</option>
            <option>Mild</option>
            <option>Painful</option>
            <option>Unable to Eat</option>
          </select>
        </div>
      </div>
    </div>
    <center>
      <button className="next">Continue →</button>
    </center>
    <br />
    <br />
  </div>
  {/* Respiratory Symptoms */}
  <div className="card">
    <h2>Respiratory Symptoms</h2>
    <div className="symptomCard">
      <div className="question">
        <label>10. Shortness of Breath</label>
        <select id="sob">
          <option value="">Select</option>
          <option>No</option>
          <option>Only while walking</option>
          <option>Even at rest</option>
          <option>Unable to speak full sentences</option>
        </select>
      </div>
    </div>
    <div className="symptomCard">
      <div className="question">
        <label>11. Cough</label>
        <select id="cough">
          <option>No</option>
          <option>Mild</option>
          <option>Persistent</option>
          <option>Associated with Blood</option>
        </select>
      </div>
    </div>
  </div>
  {/* Skin */}
  <div className="card">
    <h2>Skin &amp; Hair</h2>
    <div className="symptomCard">
      <div className="question">
        <label>12. Skin Rash</label>
        <select id="rash">
          <option>No</option>
          <option>Mild</option>
          <option>Moderate</option>
          <option>Severe / Blisters</option>
        </select>
      </div>
    </div>
    <div className="symptomCard">
      <div className="question">
        <label>13. Hand Foot Syndrome</label>
        <select id="hfs">
          <option>No</option>
          <option>Redness</option>
          <option>Painful</option>
          <option>Unable to Walk / Use Hands</option>
        </select>
      </div>
    </div>
    <div className="symptomCard">
      <div className="question">
        <label>14. Hair Loss</label>
        <select>
          <option>No</option>
          <option>Mild</option>
          <option>Complete Hair Loss</option>
        </select>
      </div>
    </div>
  </div>
  {/* Neurology */}
  <div className="card">
    <h2>Nervous System</h2>
    <div className="symptomCard">
      <div className="question">
        <label>15. Tingling or Numbness</label>
        <select id="neuropathy">
          <option>No</option>
          <option>Mild</option>
          <option>Difficulty in Daily Activities</option>
          <option>Unable to Perform Daily Activities</option>
        </select>
      </div>
    </div>
    <div className="symptomCard">
      <div className="question">
        <label>16. Headache</label>
        <select>
          <option>No</option>
          <option>Mild</option>
          <option>Moderate</option>
          <option>Severe</option>
        </select>
      </div>
    </div>
  </div>
  {/* Urinary */}
  <div className="card">
    <h2>Urinary Symptoms</h2>
    <div className="symptomCard">
      <div className="question">
        <label>17. Burning While Passing Urine</label>
        <select>
          <option>No</option>
          <option>Mild</option>
          <option>Moderate</option>
          <option>Severe</option>
        </select>
      </div>
    </div>
    <div className="symptomCard">
      <div className="question">
        <label>18. Blood in Urine</label>
        <select>
          <option>No</option>
          <option>Few Drops</option>
          <option>Visible Blood</option>
          <option>Heavy Bleeding</option>
        </select>
      </div>
    </div>
  </div>
  {/* Pain */}
  <div className="card">
    <h2>Pain Assessment</h2>
    <div className="question">
      <label>Rate your pain (0–10)</label>
      <input type="range" min={0} max={10} defaultValue={0} id="pain" />
      <p>
        Pain Score :<span id="painValue">0</span>/10
      </p>
    </div>
  </div>
  {/* Other Symptoms */}
  <div className="card">
    <h2>Other Symptoms</h2>
    <textarea
      rows={5}
      placeholder="Please describe any other symptoms..."
      defaultValue={""}
    />
    <br />
    <br />
    <button className="voice">🎤 Record Voice Message</button>
  </div>
  {/* Submit */}
  <center>
    <button className="next">Submit Assessment</button>
  </center>
  {/* =======================================
AI TOXICITY ANALYSIS
======================================= */}
  <div className="card" id="aiResult">
    <h2>🤖 Onco Mitra AI Assessment</h2>
    <div className="statusBox">
      <h3>Assessment Completed Successfully</h3>
      <p>
        Assessment Date
        <b>03 July 2026 | 09:45 AM</b>
      </p>
    </div>
    <hr />
    <h3>AI Toxicity Summary</h3>
    <table>
      <tbody>
        <tr>
          <td>Primary Toxicity</td>
          <td id="toxicity">Moderate Diarrhea</td>
        </tr>
        <tr>
          <td>Secondary Toxicity</td>
          <td>Grade 1 Fatigue</td>
        </tr>
        <tr>
          <td>Highest CTCAE Grade</td>
          <td>
            <span className="grade2">🟡 Grade 2</span>
          </td>
        </tr>
        <tr>
          <td>Overall Severity</td>
          <td>Moderate</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <h3>AI Recommendation</h3>
    <div className="recommendation">
      ✔ Continue adequate hydration
      <br />
      <br />
      ✔ Contact your treating hospital within 24 hours.
      <br />
      <br />
      ✔ Your symptoms should be reviewed by a healthcare professional.
      <br />
      <br />✔ Repeat assessment if symptoms worsen.
    </div>
  </div>
  {/* ===========================
Notification Status
=========================== */}
  <div className="card">
    <h2>Notification Status</h2>
    <table>
      <tbody>
        <tr>
          <th>Recipient</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Patient</td>
          <td>✅ Notification Sent</td>
        </tr>
        <tr>
          <td>ASHA Worker</td>
          <td>✅ Alert Sent</td>
        </tr>
        <tr>
          <td>Caregiver</td>
          <td>❌ Not Required</td>
        </tr>
        <tr>
          <td>Treating Hospital</td>
          <td>❌ Not Required</td>
        </tr>
        <tr>
          <td>Treating Doctor</td>
          <td>Available in Dashboard</td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* ===========================
Next Assessment
=========================== */}
  <div className="card">
    <h2>Next Assessment</h2>
    <div className="nextAssessment">
      📅 05 July 2026
      <br />
      09:00 AM
      <br />
      <br />
      You will receive ✔ App Notification ✔ SMS Reminder
    </div>
  </div>
  {/* ===========================
Symptom History
=========================== */}
  <div className="card">
    <h2>Previous Assessments</h2>
    <table>
      <tbody>
        <tr>
          <th>Date</th>
          <th>Treatment</th>
          <th>CTCAE</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>01 Jul</td>
          <td>Cycle 2</td>
          <td>🟢 Grade 1</td>
          <td>Resolved</td>
        </tr>
        <tr>
          <td>03 Jul</td>
          <td>Cycle 2</td>
          <td>🟡 Grade 2</td>
          <td>Monitoring</td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* ===========================
Action Buttons
=========================== */}
  <div className="card">
    <center>
      <button className="primary">🏥 Contact Hospital</button>
      <button className="secondary">📄 Download Assessment</button>
      <button className="secondary">📊 View Toxicity History</button>
      <button className="secondary">🏠 Return to Dashboard</button>
    </center>
  </div>
  {/* ===========================
Disclaimer
=========================== */}
  <div className="card">
    <p style={{ fontSize: 14, color: "#666" }}>
      This assessment supports symptom monitoring and CTCAE-based toxicity
      triage. It does not replace evaluation by your treating oncologist. If
      symptoms worsen suddenly or you develop severe symptoms such as high
      fever, difficulty breathing, severe bleeding, or altered consciousness,
      seek emergency medical care immediately.
    </p>
  </div>
  <div className="card" id="resultCard" style={{ display: "none" }}>
    <h2>🤖 AI Toxicity Assessment</h2>
    <table>
      <tbody>
        <tr>
          <td>Highest CTCAE Grade</td>
          <td id="gradeResult" />
        </tr>
        <tr>
          <td>Primary Toxicity</td>
          <td id="primaryToxicity" />
        </tr>
      </tbody>
    </table>
    <h3>Notifications Generated</h3>
    <ul id="alertList" />
    <button onclick="location.href='dashboard.html'">
      Return to Dashboard
    </button>
  </div>
  {/* ===========================================
AI HEALTH MONITOR
=========================================== */}
  <div className="card">
    <h2>📊 AI Health Monitor</h2>
    <div className="status green" id="overallStatus">
      🟢 Stable
    </div>
    <p>
      Current Treatment
      <b>Cycle 2 of 6</b>
    </p>
    <p>
      Current CTCAE Grade
      <span id="currentGrade">Grade 2</span>
    </p>
    <p>
      Today's Assessment Score
      <span id="riskScore">34/100</span>
    </p>
  </div>
  {/* ===========================================
SYMPTOM TREND
=========================================== */}
  <div className="card">
    <h2>📈 Symptom Trend</h2>
    <table>
      <tbody>
        <tr>
          <th>Date</th>
          <th>Cycle</th>
          <th>CTCAE</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>01 Jul</td>
          <td>2</td>
          <td>🟢 Grade 1</td>
          <td>Improved</td>
        </tr>
        <tr>
          <td>03 Jul</td>
          <td>2</td>
          <td>🟡 Grade 2</td>
          <td>Monitoring</td>
        </tr>
        <tr>
          <td>05 Jul</td>
          <td>2</td>
          <td id="todayGrade">--</td>
          <td id="todayStatus">Pending</td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* ===========================================
NEXT ACTION
=========================================== */}
  <div className="card">
    <h2>📌 Next Action</h2>
    <div id="nextAction">Waiting for AI Assessment...</div>
  </div>
  {/* ===========================================
WHO HAS BEEN NOTIFIED
=========================================== */}
  <div className="card">
    <h2>📨 Notification Centre</h2>
    <table>
      <tbody>
        <tr>
          <th>Recipient</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Patient</td>
          <td id="notifyPatient">Pending</td>
        </tr>
        <tr>
          <td>Caregiver</td>
          <td id="notifyCaregiver">Pending</td>
        </tr>
        <tr>
          <td>ASHA Worker</td>
          <td id="notifyAsha">Pending</td>
        </tr>
        <tr>
          <td>Hospital</td>
          <td id="notifyHospital">Pending</td>
        </tr>
        <tr>
          <td>Medical Oncologist</td>
          <td id="notifyDoctor">Pending</td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* ===========================================
EMERGENCY
=========================================== */}
  <div className="card">
    <h2>🚨 Emergency Help</h2>
    <p>
      If you develop severe symptoms before your hospital visit, seek emergency
      medical care immediately.
    </p>
    <button>📞 Call Hospital</button>
    <button>🚑 Emergency Services</button>
  </div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Onco Mitra AI - Doctor Dashboard</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="style.css" />
  {/* Sidebar */}
  <div className="sidebar">
    <img src="logo.png" className="logo" />
    <h2>Onco Mitra AI</h2>
    <ul>
      <li className="active">🏠 Dashboard</li>
      <li>👥 My Patients</li>
      <li>🆕 New Referrals</li>
      <li>📅 Today's OPD</li>
      <li>🤖 AI Alerts</li>
      <li>📄 Reports</li>
      <li>🧬 Diagnosis Confirmation</li>
      <li>💊 Treatment Planning</li>
      <li>💉 Chemotherapy</li>
      <li>🧬 Immunotherapy</li>
      <li>☢ Radiation Therapy</li>
      <li>🏥 Admissions</li>
      <li>🧠 Tumor Board</li>
      <li>📈 Survivorship</li>
      <li>📊 Analytics</li>
      <li>⚙ Settings</li>
    </ul>
  </div>
  {/* Main */}
  <div className="main">
    <div className="topbar">
      <h1>Doctor Dashboard</h1>
      <div>
        Welcome,
        <b>Dr Rahul Gandhi</b>
      </div>
    </div>
    {/* Statistics */}
    <div className="cards">
      <div className="card">
        <h2>128</h2>
        <p>Total Patients</p>
      </div>
      <div className="card">
        <h2>18</h2>
        <p>Today's OPD</p>
      </div>
      <div className="card red">
        <h2>5</h2>
        <p>High Priority</p>
      </div>
      <div className="card yellow">
        <h2>9</h2>
        <p>Under Evaluation</p>
      </div>
      <div className="card green">
        <h2>23</h2>
        <p>On Treatment</p>
      </div>
      <div className="card blue">
        <h2>61</h2>
        <p>Follow-up</p>
      </div>
    </div>
    {/* AI Alerts */}
    <div className="section">
      <h2>🤖 AI Alerts</h2>
      <table>
        <tbody>
          <tr>
            <th>Patient</th>
            <th>Alert</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>Rahul Sharma</td>
            <td>Suspected Febrile Neutropenia</td>
            <td>🔴 High</td>
            <td>Pending Review</td>
          </tr>
          <tr>
            <td>Amit Patil</td>
            <td>Missed Chemotherapy</td>
            <td>🟡 Medium</td>
            <td>Reminder Sent</td>
          </tr>
          <tr>
            <td>Sneha Joshi</td>
            <td>Possible Recurrence Symptoms</td>
            <td>🔴 High</td>
            <td>Needs Evaluation</td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* Today's Appointments */}
    <div className="section">
      <h2>Today's OPD</h2>
      <table>
        <tbody>
          <tr>
            <th>Time</th>
            <th>Patient</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>09:00</td>
            <td>Rahul Sharma</td>
            <td>Waiting</td>
            <td>
              <button>Open</button>
            </td>
          </tr>
          <tr>
            <td>09:20</td>
            <td>Sneha Joshi</td>
            <td>Completed</td>
            <td>
              <button>View</button>
            </td>
          </tr>
          <tr>
            <td>09:40</td>
            <td>Amit Patil</td>
            <td>Waiting</td>
            <td>
              <button>Open</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* Pending Diagnosis */}
    <div className="section">
      <h2>Diagnosis Confirmation Pending</h2>
      <table>
        <tbody>
          <tr>
            <th>Patient</th>
            <th>Hospital</th>
            <th>Reports</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Rahul Sharma</td>
            <td>Tata Memorial Hospital</td>
            <td>Histopathology Uploaded</td>
            <td>
              <button>Confirm</button>
            </td>
          </tr>
          <tr>
            <td>Priya Shah</td>
            <td>AIIMS Delhi</td>
            <td>Biopsy Pending</td>
            <td>
              <button>Review</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* Treatment */}
    <div className="section">
      <h2>Treatment Dashboard</h2>
      <table>
        <tbody>
          <tr>
            <th>Patient</th>
            <th>Diagnosis</th>
            <th>Treatment</th>
            <th>Cycle</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>Rahul Sharma</td>
            <td>Breast Cancer</td>
            <td>Dose Dense AC-T</td>
            <td>Cycle 2/8</td>
            <td>Ongoing</td>
          </tr>
          <tr>
            <td>Sneha Joshi</td>
            <td>Colon Cancer</td>
            <td>FOLFOX</td>
            <td>Cycle 5/12</td>
            <td>Ongoing</td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* Quick Actions */}
    <div className="section">
      <h2>Quick Actions</h2>
      <div className="quick">
        <button>➕ New Patient</button>
        <button>🧬 Confirm Diagnosis</button>
        <button>💊 Start Treatment</button>
        <button>📄 Upload Report</button>
        <button>🧠 Tumor Board</button>
        <button>📈 Survivorship</button>
      </div>
    </div>
    {/* Recent Activities */}
    <div className="section">
      <h2>Recent Activities</h2>
      <ul>
        <li>✅ Rahul Sharma - Diagnosis Confirmed</li>
        <li>✅ Amit Patil - Chemotherapy Cycle 3 Completed</li>
        <li>✅ Sneha Joshi - PET CT Uploaded</li>
        <li>✅ New Referral Received</li>
        <li>✅ AI Generated High Risk Alert</li>
      </ul>
    </div>
    {/* Footer */}
    <div className="footer">Onco Mitra AI • Doctor Portal • Version 1.0</div>
  </div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Onco Mitra AI | Caregiver Portal</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\nbody{\nmargin:0;\nbackground:#F5F9FF;\nfont-family:Poppins,sans-serif;\n}\n\n.container{\nwidth:95%;\nmax-width:500px;\nmargin:40px auto;\nbackground:white;\npadding:30px;\nborder-radius:20px;\nbox-shadow:0 10px 30px rgba(0,0,0,.1);\n}\n\nh1{\ntext-align:center;\ncolor:#0D47A1;\n}\n\n.card{\npadding:18px;\nborder:2px solid #ddd;\nborder-radius:15px;\nmargin:20px 0;\ncursor:pointer;\ntransition:.3s;\n}\n\n.card:hover{\nborder-color:#1565C0;\nbackground:#EAF3FF;\n}\n\n.selected{\nborder-color:#1565C0;\nbackground:#EAF3FF;\n}\n\nbutton{\nwidth:100%;\npadding:15px;\nbackground:#1565C0;\ncolor:white;\nborder:none;\nborder-radius:10px;\nfont-size:16px;\ncursor:pointer;\n}\n\n"
    }}
  />
  <div className="container">
    <h1>👨‍👩‍👧 Caregiver Portal</h1>
    <p align="center">Please choose an option</p>
    <div className="card" onclick="location.href='caregiver-register.html'">
      <h2>🆕 New Caregiver</h2>
      <p>Register as a caregiver for the first time.</p>
    </div>
    <div className="card" onclick="location.href='caregiver-old.html'">
      <h2>👤 Existing Caregiver</h2>
      <p>Login using your registered mobile number.</p>
    </div>
  </div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>New Caregiver Registration</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\nbody{\nbackground:#F5F9FF;\nfont-family:Poppins,sans-serif;\n}\n\n.container{\nmax-width:700px;\nmargin:30px auto;\nbackground:white;\npadding:30px;\nborder-radius:20px;\n}\n\ninput,select{\n\nwidth:100%;\npadding:12px;\nmargin:10px 0;\nborder-radius:10px;\nborder:1px solid #ccc;\n\n}\n\nbutton{\n\npadding:12px 20px;\nbackground:#1565C0;\ncolor:white;\nborder:none;\nborder-radius:10px;\ncursor:pointer;\n\n}\n\n"
    }}
  />
  <div className="container">
    <h2>🆕 New Caregiver Registration</h2>
    <label>Full Name</label>
    <input type="text" />
    <label>Age</label>
    <input type="number" />
    <label>Gender</label>
    <select>
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </select>
    <label>Relationship to Patient</label>
    <select>
      <option>Spouse</option>
      <option>Parent</option>
      <option>Child</option>
      <option>Sibling</option>
      <option>Relative</option>
      <option>Friend</option>
      <option>Other</option>
    </select>
    <label>Patient Onco Mitra ID</label>
    <input type="text" placeholder="OMAI-2026-000123" />
    <button>Verify Patient</button>
    <hr />
    <label>Patient's Registered Mobile Number</label>
    <input type="tel" />
    <button>Send OTP</button>
    <input type="text" placeholder="Enter Patient OTP" />
    <button>Verify Patient OTP</button>
    <hr />
    <label>Your Mobile Number</label>
    <input type="tel" />
    <button>Send OTP</button>
    <input type="text" placeholder="Enter Your OTP" />
    <button>Verify Your OTP</button>
    <hr />
    <button>Register Caregiver</button>
  </div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Existing Caregiver Login</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\nbody{\nbackground:#F5F9FF;\nfont-family:Poppins,sans-serif;\n}\n\n.container{\nmax-width:450px;\nmargin:50px auto;\nbackground:white;\npadding:30px;\nborder-radius:20px;\n}\n\ninput{\n\nwidth:100%;\npadding:12px;\nmargin:12px 0;\nborder-radius:10px;\nborder:1px solid #ccc;\n\n}\n\nbutton{\n\nwidth:100%;\npadding:14px;\nbackground:#1565C0;\ncolor:white;\nborder:none;\nborder-radius:10px;\n\n}\n\n"
    }}
  />
  <div className="container">
    <h2>👤 Existing Caregiver Login</h2>
    <label>Full Name</label>
    <input type="text" />
    <label>Registered Mobile Number</label>
    <input type="tel" />
    <button>Send OTP</button>
    <input type="text" placeholder="Enter OTP" />
    <button>Login</button>
  </div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Onco Mitra AI | Caregiver Dashboard</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\n*{\nmargin:0;\npadding:0;\nbox-sizing:border-box;\nfont-family:Poppins,sans-serif;\n}\n\nbody{\nbackground:#F4F8FC;\n}\n\nheader{\n\nbackground:#0D47A1;\ncolor:white;\npadding:18px 30px;\n\ndisplay:flex;\n\njustify-content:space-between;\n\nalign-items:center;\n\n}\n\n.logo{\n\nfont-size:24px;\n\nfont-weight:700;\n\n}\n\n.container{\n\nwidth:95%;\n\nmax-width:1300px;\n\nmargin:25px auto;\n\n}\n\n.grid{\n\ndisplay:grid;\n\ngrid-template-columns:repeat(auto-fit,minmax(320px,1fr));\n\ngap:20px;\n\n}\n\n.card{\n\nbackground:white;\n\npadding:20px;\n\nborder-radius:18px;\n\nbox-shadow:0 5px 18px rgba(0,0,0,.08);\n\n}\n\n.card h2{\n\ncolor:#0D47A1;\n\nmargin-bottom:15px;\n\n}\n\ntable{\n\nwidth:100%;\n\nborder-collapse:collapse;\n\n}\n\ntd{\n\npadding:8px;\n\nborder-bottom:1px solid #eee;\n\n}\n\nbutton{\n\nmargin-top:12px;\n\npadding:12px 18px;\n\nborder:none;\n\nborder-radius:10px;\n\nbackground:#1565C0;\n\ncolor:white;\n\ncursor:pointer;\n\n}\n\n.alert{\n\nbackground:#FFF8E1;\n\nborder-left:6px solid orange;\n\n}\n\n.red{\n\nbackground:#FFEBEE;\n\nborder-left:6px solid red;\n\n}\n\n.green{\n\nbackground:#E8F5E9;\n\nborder-left:6px solid green;\n\n}\n\nul{\n\npadding-left:20px;\n\n}\n\n"
    }}
  />
  <header>
    <div className="logo">🩺 Onco Mitra AI</div>
    <div>
      Welcome,
      <b>Mrs Sunita Sharma</b>
    </div>
  </header>
  <div className="container">
    <div className="grid">
      {/* Patient Overview */}
      <div className="card">
        <h2>Patient Overview</h2>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Rahul Sharma</td>
            </tr>
            <tr>
              <td>Onco ID</td>
              <td>OMAI-2026-000123</td>
            </tr>
            <tr>
              <td>Diagnosis</td>
              <td>Carcinoma Breast</td>
            </tr>
            <tr>
              <td>Stage</td>
              <td>IIA</td>
            </tr>
            <tr>
              <td>Treatment</td>
              <td>Cycle 2 of Chemotherapy</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>🟢 Stable</td>
            </tr>
          </tbody>
        </table>
        <button>View Dynamic Onco Card</button>
      </div>
      {/* Today's Tasks */}
      <div className="card">
        <h2>Today's Tasks</h2>
        <ul>
          <li>💊 Morning Medicines</li>
          <li>💉 Injection at 2 PM</li>
          <li>🥗 Encourage High Protein Diet</li>
          <li>🚶 20 Minutes Walk</li>
          <li>💧 Hydration Goal : 2.5 L</li>
          <li>📝 Complete AI Symptom Assessment</li>
        </ul>
      </div>
      {/* AI Alerts */}
      <div className="card alert">
        <h2>AI Symptom Alerts</h2>
        <p>Latest Assessment</p>
        <h3>🟡 CTCAE Grade 2</h3>
        <p>Moderate Diarrhea</p>
        <button>View Details</button>
      </div>
      {/* Treatment Calendar */}
      <div className="card">
        <h2>Treatment Calendar</h2>
        <ul>
          <li>12 Jul - Chemotherapy</li>
          <li>19 Jul - CBC</li>
          <li>26 Jul - Review</li>
          <li>02 Aug - Cycle 3</li>
        </ul>
      </div>
      {/* Medicines */}
      <div className="card">
        <h2>Medicine Reminder</h2>
        <table>
          <tbody>
            <tr>
              <td>Ondansetron</td>
              <td>08:00 AM</td>
            </tr>
            <tr>
              <td>Pantoprazole</td>
              <td>09:00 AM</td>
            </tr>
            <tr>
              <td>Filgrastim</td>
              <td>08:00 PM</td>
            </tr>
          </tbody>
        </table>
        <button>Mark as Given</button>
      </div>
      {/* Hospital */}
      <div className="card">
        <h2>Upcoming Hospital Visit</h2>
        <p>🏥 Tata Memorial Hospital</p>
        <p>12 July 2026 09:30 AM</p>
        <button>Navigate</button>
      </div>
      {/* Emergency */}
      <div className="card red">
        <h2>Emergency Contacts</h2>
        <p>👨‍⚕️ Dr Rahul Gandhi</p>
        <p>📞 9876543210</p>
        <hr />
        <p>🏥 Tata Memorial Hospital</p>
        <p>📞 02224177000</p>
        <hr />
        <p>👩‍⚕️ ASHA Worker Sunita Patil</p>
        <p>📞 9898989898</p>
      </div>
      {/* Reports */}
      <div className="card">
        <h2>Medical Reports</h2>
        <ul>
          <li>Histopathology.pdf</li>
          <li>PET CT.pdf</li>
          <li>CBC.pdf</li>
          <li>Biochemistry.pdf</li>
        </ul>
        <button>View Reports</button>
      </div>
      {/* Financial */}
      <div className="card">
        <h2>Financial Assistance</h2>
        <p>Ayushman Bharat</p>
        <p>Status 🟢 Approved</p>
        <p>Remaining Coverage ₹3,20,000</p>
        <button>View Details</button>
      </div>
      {/* Chat */}
      <div className="card">
        <h2>Chat With Hospital</h2>
        <p>Medical Oncology Department</p>
        <button>Open Chat</button>
      </div>
      {/* AI Assistant */}
      <div className="card green">
        <h2>AI Caregiver Assistant</h2>
        <p>
          Ask about ✔ Diet ✔ Side Effects ✔ Home Care ✔ Follow-up ✔ Emergency
          Signs
        </p>
        <button>Ask AI</button>
      </div>
      {/* Education */}
      <div className="card">
        <h2>Caregiver Education</h2>
        <ul>
          <li>Nutrition</li>
          <li>Neutropenic Precautions</li>
          <li>Mouth Care</li>
          <li>Exercise</li>
          <li>Psychological Support</li>
          <li>Emergency Symptoms</li>
        </ul>
        <button>Learn More</button>
      </div>
    </div>
  </div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Onco Mitra AI | ASHA Worker Dashboard</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\n*{\nmargin:0;\npadding:0;\nbox-sizing:border-box;\nfont-family:Poppins,sans-serif;\n}\n\nbody{\nbackground:#F5F8FC;\n}\n\nheader{\n\nbackground:#0D47A1;\ncolor:white;\n\npadding:18px 25px;\n\ndisplay:flex;\n\njustify-content:space-between;\n\nalign-items:center;\n\n}\n\n.logo{\n\nfont-size:24px;\nfont-weight:700;\n\n}\n\n.container{\n\nwidth:95%;\nmax-width:1400px;\n\nmargin:20px auto;\n\n}\n\n.cards{\n\ndisplay:grid;\n\ngrid-template-columns:repeat(auto-fit,minmax(220px,1fr));\n\ngap:20px;\n\nmargin-bottom:25px;\n\n}\n\n.card{\n\nbackground:white;\n\npadding:20px;\n\nborder-radius:18px;\n\nbox-shadow:0 5px 15px rgba(0,0,0,.08);\n\ntext-align:center;\n\n}\n\n.card h2{\n\nfont-size:34px;\n\ncolor:#1565C0;\n\n}\n\n.section{\n\nbackground:white;\n\npadding:20px;\n\nborder-radius:18px;\n\nbox-shadow:0 5px 15px rgba(0,0,0,.08);\n\nmargin-top:20px;\n\n}\n\ntable{\n\nwidth:100%;\n\nborder-collapse:collapse;\n\n}\n\nth{\n\nbackground:#1565C0;\n\ncolor:white;\n\npadding:12px;\n\n}\n\ntd{\n\npadding:12px;\n\nborder-bottom:1px solid #ddd;\n\n}\n\nbutton{\n\npadding:10px 18px;\n\nborder:none;\n\nborder-radius:8px;\n\nbackground:#1565C0;\n\ncolor:white;\n\ncursor:pointer;\n\n}\n\n.red{\n\ncolor:red;\n\nfont-weight:bold;\n\n}\n\n.orange{\n\ncolor:#ff9800;\n\nfont-weight:bold;\n\n}\n\n.green{\n\ncolor:green;\n\nfont-weight:bold;\n\n}\n\n"
    }}
  />
  <header>
    <div className="logo">🩺 Onco Mitra AI</div>
    <div>
      Welcome
      <b>ASHA Worker - Sunita Patil</b>
    </div>
  </header>
  <div className="container">
    {/* Statistics */}
    <div className="cards">
      <div className="card">
        <h2>48</h2>
        <p>Assigned Patients</p>
      </div>
      <div className="card">
        <h2 className="red">4</h2>
        <p>High Priority</p>
      </div>
      <div className="card">
        <h2 className="orange">11</h2>
        <p>Intermediate</p>
      </div>
      <div className="card">
        <h2 className="green">33</h2>
        <p>Follow-up</p>
      </div>
      <div className="card">
        <h2>8</h2>
        <p>Today's Home Visits</p>
      </div>
    </div>
    {/* High Priority */}
    <div className="section">
      <h2>🔴 High Priority Patients</h2>
      <br />
      <table>
        <tbody>
          <tr>
            <th>Patient</th>
            <th>Village</th>
            <th>Status</th>
            <th>Hospital</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Rahul Sharma</td>
            <td>Shrirampur</td>
            <td className="red">Grade 3 Toxicity</td>
            <td>Tata Memorial Hospital</td>
            <td>
              <button>View</button>
            </td>
          </tr>
          <tr>
            <td>Sneha Joshi</td>
            <td>Rahata</td>
            <td className="red">High Risk Referral</td>
            <td>AIIMS Nagpur</td>
            <td>
              <button>View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* Intermediate */}
    <div className="section">
      <h2>🟡 Intermediate Risk Patients</h2>
      <br />
      <table>
        <tbody>
          <tr>
            <th>Patient</th>
            <th>Assessment</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Amit Patil</td>
            <td>02 Jul 2026</td>
            <td className="orange">Hospital Consultation Pending</td>
            <td>
              <button>Call Patient</button>
            </td>
          </tr>
          <tr>
            <td>Riya Shah</td>
            <td>03 Jul 2026</td>
            <td className="orange">Home Visit Required</td>
            <td>
              <button>Schedule Visit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* Home Visits */}
    <div className="section">
      <h2>🏠 Today's Home Visits</h2>
      <br />
      <table>
        <tbody>
          <tr>
            <th>Time</th>
            <th>Patient</th>
            <th>Village</th>
            <th>Purpose</th>
          </tr>
          <tr>
            <td>10:00 AM</td>
            <td>Rahul Sharma</td>
            <td>Shrirampur</td>
            <td>CTCAE Follow-up</td>
          </tr>
          <tr>
            <td>02:00 PM</td>
            <td>Amit Patil</td>
            <td>Rahata</td>
            <td>Treatment Education</td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* AI Tasks */}
    <div className="section">
      <h2>🤖 AI Tasks</h2>
      <ul>
        <li>✔ Assist patient in completing symptom assessment</li>
        <li>✔ Verify medication adherence</li>
        <li>✔ Check nutrition and hydration</li>
        <li>✔ Review appointment compliance</li>
        <li>✔ Report new symptoms</li>
      </ul>
    </div>
    {/* Referral Tracking */}
    <div className="section">
      <h2>🏥 Referral Tracking</h2>
      <table>
        <tbody>
          <tr>
            <th>Patient</th>
            <th>Hospital</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>Rahul Sharma</td>
            <td>Tata Memorial Hospital</td>
            <td>Under Evaluation</td>
          </tr>
          <tr>
            <td>Sneha Joshi</td>
            <td>AIIMS Nagpur</td>
            <td>Treatment Started</td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* Quick Actions */}
    <div className="section">
      <h2>Quick Actions</h2>
      <br />
      <button>➕ Register New Patient</button>
      <button>📋 Start AI Assessment</button>
      <button>📞 Contact Hospital</button>
      <button>🚑 Emergency Referral</button>
      <button>📊 Monthly Report</button>
      <button>🎓 Cancer Awareness</button>
    </div>
  </div>
  ...
  <div className="container">...</div>
  {/* ===========================
Hospital Verification Section
=========================== */}
  <div className="section">
    <h2>🏥 Hospital Verification</h2>
    <div className="verificationBox">
      <label>Hospital Name</label>
      <input type="text" placeholder="Hospital Name" />
      <label>Hospital Registration ID</label>
      <input type="text" placeholder="OMAI-HSP-00001" />
      <label>Official Hospital Email</label>
      <input type="email" placeholder="hospital@email.com" />
      <button>Verify Hospital</button>
    </div>
  </div>
  {/* ==========================================
PATIENT MANAGEMENT
========================================== */}
  <div className="section">
    <h2>👥 Patient Management</h2>
    <br />
    <div
      style={{ display: "flex", gap: 15, flexWrap: "wrap", marginBottom: 20 }}
    >
      <input
        type="text"
        placeholder="🔍 Search by Onco ID / ABHA ID / Mobile / Patient Name"
        style={{
          flex: 1,
          padding: 12,
          borderRadius: 8,
          border: "1px solid #ccc"
        }}
      />
      <select style={{ padding: 12, borderRadius: 8 }}>
        <option>All Status</option>
        <option>Under Evaluation</option>
        <option>High Priority</option>
        <option>On Treatment</option>
        <option>Follow-up</option>
        <option>Survivorship</option>
      </select>
      <select style={{ padding: 12, borderRadius: 8 }}>
        <option>All Doctors</option>
        <option>Dr Rahul Gandhi</option>
        <option>Dr Amit Sharma</option>
        <option>Dr Sneha Joshi</option>
      </select>
      <select style={{ padding: 12, borderRadius: 8 }}>
        <option>All Departments</option>
        <option>Medical Oncology</option>
        <option>Surgical Oncology</option>
        <option>Radiation Oncology</option>
        <option>Hematology</option>
      </select>
      <button>Search</button>
    </div>
    <table>
      <tbody>
        <tr>
          <th>Onco ID</th>
          <th>Patient</th>
          <th>Status</th>
          <th>Doctor</th>
          <th>Nurse</th>
          <th>ASHA</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>OMAI-000123</td>
          <td>
            <b>Rahul Sharma</b>
            <br />
            45 Y / Male
          </td>
          <td>
            <span style={{ color: "red", fontWeight: "bold" }}>
              🔴 High Priority
            </span>
          </td>
          <td>Dr Rahul Gandhi</td>
          <td>Nurse Priya</td>
          <td>Sunita Patil</td>
          <td>
            <button>Open</button>
          </td>
        </tr>
        <tr>
          <td>OMAI-000124</td>
          <td>
            Sneha Joshi
            <br />
            39 Y / Female
          </td>
          <td>
            <span style={{ color: "orange", fontWeight: "bold" }}>
              🟡 Under Evaluation
            </span>
          </td>
          <td>Dr Amit Sharma</td>
          <td>Nurse Kavita</td>
          <td>Anjali More</td>
          <td>
            <button>Open</button>
          </td>
        </tr>
        <tr>
          <td>OMAI-000125</td>
          <td>
            Amit Patil
            <br />
            58 Y / Male
          </td>
          <td>
            <span style={{ color: "green", fontWeight: "bold" }}>
              💉 On Treatment
            </span>
          </td>
          <td>Dr Rahul Gandhi</td>
          <td>Nurse Seema</td>
          <td>Sunita Patil</td>
          <td>
            <button>Open</button>
          </td>
        </tr>
        <tr>
          <td>OMAI-000126</td>
          <td>
            Meena Shah
            <br />
            61 Y / Female
          </td>
          <td>
            <span style={{ color: "#1565C0", fontWeight: "bold" }}>
              📅 Follow-up
            </span>
          </td>
          <td>Dr Sneha Joshi</td>
          <td>Nurse Rekha</td>
          <td>Pratibha Kale</td>
          <td>
            <button>Open</button>
          </td>
        </tr>
        <tr>
          <td>OMAI-000127</td>
          <td>
            Ramesh Patil
            <br />
            70 Y / Male
          </td>
          <td>
            <span style={{ color: "green", fontWeight: "bold" }}>
              🏆 Survivorship
            </span>
          </td>
          <td>Dr Rahul Gandhi</td>
          <td>Nurse Priya</td>
          <td>Sunita Patil</td>
          <td>
            <button>Open</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* ==========================================
PATIENT QUICK ACTIONS
========================================== */}
  <div className="section">
    <h2>⚡ Patient Quick Actions</h2>
    <br />
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: 15
      }}
    >
      <button>📄 Dynamic Onco Card</button>
      <button>🧬 Confirm Diagnosis</button>
      <button>💊 Treatment Plan</button>
      <button>📈 CTCAE Toxicity History</button>
      <button>📅 Appointments</button>
      <button>👨‍⚕️ Assign Doctor</button>
      <button>👩‍⚕️ Assign Nurse</button>
      <button>👩‍⚕️ Assign ASHA Worker</button>
      <button>📂 Medical Reports</button>
      <button>💰 Financial Counselling</button>
      <button>🏥 Admit Patient</button>
      <button>📤 Refer to MDT</button>
    </div>
  </div>
  {/* ==========================================
PATIENT SUMMARY PANEL
========================================== */}
  <div className="section">
    <h2>📋 Selected Patient Summary</h2>
    <br />
    <table>
      <tbody>
        <tr>
          <td>
            <b>Patient Name</b>
          </td>
          <td>Rahul Sharma</td>
        </tr>
        <tr>
          <td>
            <b>Onco ID</b>
          </td>
          <td>OMAI-000123</td>
        </tr>
        <tr>
          <td>
            <b>ABHA ID</b>
          </td>
          <td>14XX-XXXX-XXXX</td>
        </tr>
        <tr>
          <td>
            <b>Current Status</b>
          </td>
          <td>
            <span style={{ color: "red" }}>🔴 High Priority</span>
          </td>
        </tr>
        <tr>
          <td>
            <b>Diagnosis</b>
          </td>
          <td>Carcinoma Breast</td>
        </tr>
        <tr>
          <td>
            <b>Stage</b>
          </td>
          <td>Stage IIA</td>
        </tr>
        <tr>
          <td>
            <b>Treatment</b>
          </td>
          <td>Dose Dense AC-T (Cycle 2/4)</td>
        </tr>
        <tr>
          <td>
            <b>Assigned Doctor</b>
          </td>
          <td>Dr Rahul Gandhi</td>
        </tr>
        <tr>
          <td>
            <b>Assigned Nurse</b>
          </td>
          <td>Nurse Priya</td>
        </tr>
        <tr>
          <td>
            <b>ASHA Worker</b>
          </td>
          <td>Sunita Patil</td>
        </tr>
        <tr>
          <td>
            <b>Next Appointment</b>
          </td>
          <td>12 Jul 2026 | 09:30 AM</td>
        </tr>
        <tr>
          <td>
            <b>Financial Counselling</b>
          </td>
          <td>✅ Ayushman Bharat Approved</td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* ==============================
HOSPITAL WORK QUEUE
================================ */}
  <div className="section">
    <h2>📋 Hospital Work Queue</h2>
    <br />
    <table>
      <tbody>
        <tr>
          <th>Department</th>
          <th>Pending</th>
          <th>Completed Today</th>
          <th>Priority</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>Medical Oncology OPD</td>
          <td>18</td>
          <td>24</td>
          <td className="orange">Medium</td>
          <td>
            <button>Open</button>
          </td>
        </tr>
        <tr>
          <td>Chemotherapy Day Care</td>
          <td>12</td>
          <td>31</td>
          <td className="green">Normal</td>
          <td>
            <button>Open</button>
          </td>
        </tr>
        <tr>
          <td>Radiation Oncology</td>
          <td>9</td>
          <td>14</td>
          <td className="green">Normal</td>
          <td>
            <button>Open</button>
          </td>
        </tr>
        <tr>
          <td>Surgical Oncology</td>
          <td>6</td>
          <td>8</td>
          <td className="orange">Medium</td>
          <td>
            <button>Open</button>
          </td>
        </tr>
        <tr>
          <td>Pathology</td>
          <td>21 Reports</td>
          <td>39 Reports</td>
          <td className="red">Urgent</td>
          <td>
            <button>Review</button>
          </td>
        </tr>
        <tr>
          <td>Radiology</td>
          <td>15 Reports</td>
          <td>26 Reports</td>
          <td className="orange">Pending</td>
          <td>
            <button>Review</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* ==============================
PATIENT SEARCH
================================ */}
  <div className="section">
    <h2>🔍 Search Patient</h2>
    <br />
    <input
      type="text"
      placeholder="Search by Onco ID / ABHA ID / Mobile / Patient Name"
      style={{
        width: "55%",
        padding: 12,
        borderRadius: 8,
        border: "1px solid #ccc"
      }}
    />
    <button>Search</button>
    <button>Advanced Search</button>
  </div>
  {/* =====================================
GOVERNMENT DASHBOARD
====================================== */}
  <div className="topbar">
    <div>
      <h1>🏛 Government Dashboard</h1>
      <p>Onco Mitra AI National Cancer Surveillance Platform</p>
    </div>
    <div>
      <b>Government Health Officer</b>
    </div>
  </div>
  {/* Statistics */}
  <div className="cards">
    <div className="card">
      <h2>2,48,531</h2>
      <p>Total Registered Patients</p>
    </div>
    <div className="card">
      <h2>1,02,412</h2>
      <p>Patients on Treatment</p>
    </div>
    <div className="card">
      <h2 style={{ color: "red" }}>18,245</h2>
      <p>High Risk Cases</p>
    </div>
    <div className="card">
      <h2 style={{ color: "#ff9800" }}>42,106</h2>
      <p>Under Evaluation</p>
    </div>
    <div className="card">
      <h2 style={{ color: "green" }}>71,554</h2>
      <p>Cancer Survivors</p>
    </div>
    <div className="card">
      <h2>5,432</h2>
      <p>Registered Hospitals</p>
    </div>
  </div>
  {/* National Summary */}
  <div className="section">
    <h2>🇮🇳 National Cancer Summary</h2>
    <br />
    <table>
      <tbody>
        <tr>
          <th>Indicator</th>
          <th>Today</th>
          <th>This Month</th>
        </tr>
        <tr>
          <td>New AI Referrals</td>
          <td>438</td>
          <td>13,254</td>
        </tr>
        <tr>
          <td>Confirmed Diagnoses</td>
          <td>126</td>
          <td>3,845</td>
        </tr>
        <tr>
          <td>Treatment Started</td>
          <td>92</td>
          <td>2,614</td>
        </tr>
        <tr>
          <td>Completed Treatment</td>
          <td>74</td>
          <td>1,965</td>
        </tr>
        <tr>
          <td>Survivorship Enrolled</td>
          <td>53</td>
          <td>1,224</td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* AI Alerts */}
  <div className="section">
    <h2>🚨 National AI Alerts</h2>
    <br />
    <table>
      <tbody>
        <tr>
          <th>State</th>
          <th>District</th>
          <th>Alert</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Maharashtra</td>
          <td>Ahmednagar</td>
          <td>High Referral Volume</td>
          <td style={{ color: "red" }}>Attention Needed</td>
        </tr>
        <tr>
          <td>Karnataka</td>
          <td>Bengaluru</td>
          <td>Hospital Capacity Reached</td>
          <td style={{ color: "red" }}>Critical</td>
        </tr>
        <tr>
          <td>Gujarat</td>
          <td>Surat</td>
          <td>Drug Stock Running Low</td>
          <td style={{ color: "#ff9800" }}>Monitor</td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* Quick Actions */}
  <div className="section">
    <h2>⚡ Government Actions</h2>
    <br />
    <button>📊 National Analytics</button>
    <button>🗺 State Dashboard</button>
    <button>🏥 Hospital Performance</button>
    <button>💊 Drug Availability</button>
    <button>👩‍⚕️ ASHA Performance</button>
    <button>📄 Generate Report</button>
    <button>📈 Cancer Registry</button>
    <button>📢 Public Health Alerts</button>
  </div>
  {/* State Performance */}
  <div className="section">
    <h2>🏛 State Performance</h2>
    <br />
    <table>
      <tbody>
        <tr>
          <th>State</th>
          <th>Patients</th>
          <th>Hospitals</th>
          <th>Treatment Rate</th>
          <th>Performance</th>
        </tr>
        <tr>
          <td>Maharashtra</td>
          <td>42,381</td>
          <td>312</td>
          <td>91%</td>
          <td>★★★★★</td>
        </tr>
        <tr>
          <td>Gujarat</td>
          <td>25,415</td>
          <td>184</td>
          <td>89%</td>
          <td>★★★★☆</td>
        </tr>
        <tr>
          <td>Karnataka</td>
          <td>23,144</td>
          <td>171</td>
          <td>92%</td>
          <td>★★★★★</td>
        </tr>
        <tr>
          <td>Tamil Nadu</td>
          <td>31,445</td>
          <td>266</td>
          <td>94%</td>
          <td>★★★★★</td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* =====================================================
PART 2 : NATIONAL CANCER REGISTRY
====================================================== */}
  <div className="section">
    <h2>📊 National Cancer Registry</h2>
    <br />
    <div
      style={{ display: "flex", gap: 15, flexWrap: "wrap", marginBottom: 20 }}
    >
      <select>
        <option>All States</option>
        <option>Maharashtra</option>
        <option>Gujarat</option>
        <option>Karnataka</option>
        <option>Tamil Nadu</option>
        <option>Delhi</option>
      </select>
      <select>
        <option>All Districts</option>
      </select>
      <select>
        <option>All Cancer Types</option>
        <option>Breast</option>
        <option>Lung</option>
        <option>Colorectal</option>
        <option>Cervix</option>
        <option>Head &amp; Neck</option>
        <option>Prostate</option>
        <option>Leukemia</option>
        <option>Lymphoma</option>
      </select>
      <button>Apply Filter</button>
    </div>
    <table>
      <tbody>
        <tr>
          <th>Cancer Type</th>
          <th>Total Cases</th>
          <th>New Cases</th>
          <th>On Treatment</th>
          <th>Survivors</th>
        </tr>
        <tr>
          <td>Breast Cancer</td>
          <td>42,815</td>
          <td>612</td>
          <td>18,425</td>
          <td>15,281</td>
        </tr>
        <tr>
          <td>Lung Cancer</td>
          <td>31,552</td>
          <td>480</td>
          <td>13,241</td>
          <td>7,642</td>
        </tr>
        <tr>
          <td>Head &amp; Neck</td>
          <td>36,802</td>
          <td>523</td>
          <td>15,884</td>
          <td>11,524</td>
        </tr>
        <tr>
          <td>Colorectal</td>
          <td>18,912</td>
          <td>244</td>
          <td>7,522</td>
          <td>6,318</td>
        </tr>
        <tr>
          <td>Cervix</td>
          <td>27,542</td>
          <td>398</td>
          <td>12,031</td>
          <td>8,114</td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* =====================================================
HOSPITAL PERFORMANCE
====================================================== */}
  <div className="section">
    <h2>🏥 Hospital Performance</h2>
    <br />
    <table>
      <tbody>
        <tr>
          <th>Hospital</th>
          <th>Patients</th>
          <th>Treatment Completion</th>
          <th>Average Waiting</th>
          <th>Rating</th>
        </tr>
        <tr>
          <td>Tata Memorial Hospital</td>
          <td>15,822</td>
          <td>96%</td>
          <td>5 Days</td>
          <td>★★★★★</td>
        </tr>
        <tr>
          <td>AIIMS Delhi</td>
          <td>10,458</td>
          <td>94%</td>
          <td>7 Days</td>
          <td>★★★★★</td>
        </tr>
        <tr>
          <td>Kidwai Memorial</td>
          <td>7,514</td>
          <td>91%</td>
          <td>6 Days</td>
          <td>★★★★☆</td>
        </tr>
        <tr>
          <td>GCRI Ahmedabad</td>
          <td>8,122</td>
          <td>92%</td>
          <td>6 Days</td>
          <td>★★★★★</td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* =====================================================
ASHA PERFORMANCE
====================================================== */}
  <div className="section">
    <h2>👩‍⚕️ ASHA Worker Performance</h2>
    <br />
    <table>
      <tbody>
        <tr>
          <th>State</th>
          <th>ASHA Workers</th>
          <th>Patients Monitored</th>
          <th>Follow-up Rate</th>
        </tr>
        <tr>
          <td>Maharashtra</td>
          <td>18,524</td>
          <td>42,211</td>
          <td>94%</td>
        </tr>
        <tr>
          <td>Karnataka</td>
          <td>15,224</td>
          <td>31,554</td>
          <td>91%</td>
        </tr>
        <tr>
          <td>Tamil Nadu</td>
          <td>16,188</td>
          <td>36,511</td>
          <td>95%</td>
        </tr>
        <tr>
          <td>Gujarat</td>
          <td>14,211</td>
          <td>28,991</td>
          <td>92%</td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* =====================================================
QUICK ACTIONS
====================================================== */}
  <div className="section">
    <h2>⚡ Government Quick Actions</h2>
    <br />
    <button>📄 Generate Monthly Report</button>
    <button>📊 Download Registry</button>
    <button>🏥 Hospital Audit</button>
    <button>💊 Drug Stock Review</button>
    <button>📢 Public Health Advisory</button>
    <button>👩‍⚕️ ASHA Report</button>
    <button>📈 Cancer Trends</button>
    <button>🗺 National Heat Map</button>
  </div>
  {/* =====================================================
PART 3 : NATIONAL ANALYTICS & RESOURCE MONITORING
====================================================== */}
  <div className="section">
    <h2>📈 National Cancer Analytics</h2>
    <br />
    <div className="cards">
      <div className="card">
        <h3>82%</h3>
        <p>Overall Screening Coverage</p>
      </div>
      <div className="card">
        <h3>91%</h3>
        <p>Treatment Completion Rate</p>
      </div>
      <div className="card">
        <h3>87%</h3>
        <p>Follow-up Compliance</p>
      </div>
      <div className="card">
        <h3>93%</h3>
        <p>AI Referral Accuracy</p>
      </div>
    </div>
  </div>
  {/* =====================================================
AI HOTSPOT MONITOR
====================================================== */}
  <div className="section">
    <h2>🗺 AI Cancer Hotspot Monitor</h2>
    <br />
    <table>
      <tbody>
        <tr>
          <th>State</th>
          <th>District</th>
          <th>Cancer Type</th>
          <th>Trend</th>
          <th>Risk</th>
        </tr>
        <tr>
          <td>Maharashtra</td>
          <td>Ahmednagar</td>
          <td>Oral Cancer</td>
          <td>↑ 14%</td>
          <td style={{ color: "red" }}>High</td>
        </tr>
        <tr>
          <td>Punjab</td>
          <td>Bathinda</td>
          <td>Breast Cancer</td>
          <td>↑ 9%</td>
          <td style={{ color: "orange" }}>Moderate</td>
        </tr>
        <tr>
          <td>Karnataka</td>
          <td>Bengaluru</td>
          <td>Lung Cancer</td>
          <td>Stable</td>
          <td style={{ color: "green" }}>Normal</td>
        </tr>
        <tr>
          <td>Tamil Nadu</td>
          <td>Chennai</td>
          <td>Colorectal Cancer</td>
          <td>↑ 6%</td>
          <td style={{ color: "orange" }}>Monitor</td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* =====================================================
AI PREDICTIONS
====================================================== */}
  <div className="section">
    <h2>🤖 AI Predictive Insights</h2>
    <br />
    <table>
      <tbody>
        <tr>
          <th>Prediction</th>
          <th>Confidence</th>
          <th>Recommendation</th>
        </tr>
        <tr>
          <td>Increase in Oral Cancer Cases in Western Maharashtra</td>
          <td>94%</td>
          <td>Conduct targeted screening camps</td>
        </tr>
        <tr>
          <td>Radiotherapy demand expected to rise in South India</td>
          <td>89%</td>
          <td>Allocate additional treatment slots</td>
        </tr>
        <tr>
          <td>Pembrolizumab stock shortage likely in 3 weeks</td>
          <td>91%</td>
          <td>Initiate procurement process</td>
        </tr>
        <tr>
          <td>High survivorship clinic demand in Metro Cities</td>
          <td>87%</td>
          <td>Expand survivorship services</td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* =====================================================
MONTHLY REPORTS
====================================================== */}
  <div className="section">
    <h2>📄 Automated Reports</h2>
    <br />
    <button>📊 National Cancer Report</button>
    <button>📈 State Performance Report</button>
    <button>🏥 Hospital Audit Report</button>
    <button>👩‍⚕️ ASHA Performance Report</button>
    <button>📄 Download PDF</button>
    <button>📧 Email Report</button>
  </div>
</>
