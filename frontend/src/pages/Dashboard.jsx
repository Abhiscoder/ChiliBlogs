import React, { useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import Sidebar from '../dashboard/Sidebar'; // Correct the path and case
import MyProfile from '../dashboard/MyProfile'; // Fix the typo in "MyProfile"
import CreateBlog from '../dashboard/CreateBlog';
import UpdateBlog from '../dashboard/UpdateBlog';
import MyBlog from '../dashboard/MyBlog';
import { Navigate } from 'react-router-dom';

function Dashboard() {
  const { profile, isAuthenticated } = useAuth();
  const [component, setComponent] = useState("My Blog");

  // Check if the user is authenticated; if not, redirect to the homepage
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  // Render the appropriate component based on the selected option
  const renderComponent = () => {
    switch (component) {
      case "My Profile":
        return <MyProfile />;
      case "Create Blog":
        return <CreateBlog />;
      case "Update Blog":
        return <UpdateBlog />;
      default:
        return <MyBlog />;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <Sidebar component={component} setComponent={setComponent} />
      </div>
      <div className="content-container">
        {renderComponent()}
      </div>
    </div>
  );
}

export default Dashboard;


// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthProvider';
// import Sidebar from '../dashboard/Sidebar';
// import MyProfile from '../dashboard/MyProfile';
// import CreateBlog from '../dashboard/CreateBlog';
// import UpdateBlog from '../dashboard/UpdateBlog';
// import MyBlog from '../dashboard/MyBlog';
// import { Navigate } from 'react-router-dom';

// function Dashboard() {
//   const { profile, isAuthenticated } = useAuth();
//   const [ component, setComponent ] = useState("My Blog");
//   console.log("profile:", profile);
//   console.log("profile_Authenticate:", isAuthenticated);

  
//   if (!isAuthenticated) {
//     return <Navigate to={"/"} />;
//   }
//   return (
//     <div>
//       <div>
//         <Sidebar component={component} setComponent={setComponent} />
//         {
//           component === "My Profile" ? (<MyProflie />) : component === "Create Blog" ? (<CreateBlog />) : component === "Update Blog" ? (<UpdateBlog />) : (<MyBlog />)
//         }
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
