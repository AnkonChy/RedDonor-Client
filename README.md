# 🩸 RedDonor – Blood Donation Application

RedDonor is a MERN stack-based blood donation platform that connects **donors, recipients, volunteers, and admins** in a seamless way. It ensures smooth donor registration, blood request management, funding, and content management, making the donation process efficient and user-friendly.  

---

## 🌐 Live Site
[RedDonor Live Website](https://your-live-site-url.com)

---

## 👤 Admin Credentials
- **Username/Email:** admin@reddonor.com  
- **Password:** admin123  

---

## 🚀 Features
- 🔐 **Role-based access control** – Admin, Donor, Volunteer with different permissions.  
- 📝 **User registration & login** – Donors can sign up, upload avatar (ImageBB), and manage profiles.  
- 📊 **Responsive dashboards** – Separate dashboards for Admin, Donor, and Volunteer.  
- 🩸 **Donation request system** – Create, view, edit, filter, paginate, and manage donation requests.  
- 📑 **Content management system** – Admins and volunteers can manage blogs with draft/publish toggle.  
- 🔍 **Advanced donor search** – Search by blood group, district, and upazila.  
- 💰 **Funding system** – Secure funding via Stripe with total funds tracking.  
- 🔔 **SweetAlert / Toast notifications** – For CRUD operations, login, signup, and donations.  
- 🔒 **JWT authentication** – Protects private routes and APIs, persistent login after reload.  
- ⚡ **TanStack Query integration** – Efficient GET requests with caching and synchronization.  
- 🌍 **Responsive design** – Optimized for mobile, tablet, and desktop.  

---

## 🧑‍🤝‍🧑 User Roles
1. **Admin 🌐**
   - Full access: Manage users, roles, donation requests, blogs, and funds.  
2. **Donor 🩸**
   - Register, request blood, update profile, manage their own requests.  
3. **Volunteer 🤝**
   - Manage donation requests (limited permissions), manage blog content (without delete/publish).  

---

## 🛠️ Tech Stack
- **Frontend:** React, React Router, TailwindCSS, DaisyUI, TanStack Query, Axios  
- **Backend:** Node.js, Express.js, MongoDB (Atlas)  
- **Authentication:** Firebase Auth + JWT  
- **Payment:** Stripe API  
- **File Upload:** ImageBB API  
- **Editor:** Jodit-react (Rich Text Editor)  
