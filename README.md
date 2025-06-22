BrainForge is a fully functional Learning Management System that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.<br/>
<h1>System Architecture</h1><br/>
The BrainForge EdTech platform consists of three main components: the front-end, the back-end, and the database. The platform follows a client-server architecture, with the front-end serving as the client and the back-end and database serving as the server.<br/>
<h2>Front-end</h2>
The front-end of the platform is built using ReactJS, which allows for the creation of dynamic and responsive user interfaces, crucial for providing an engaging learning experience to students. The front-end communicates with the back-end using RESTful API calls.<br/>
<h4>Front End Features</h4>

<h5>For Students:</h5>

-> Homepage: A brief introduction to the platform with links to the course list and user details.<br/>
-> Course List: A list of all the courses available on the platform, along with their descriptions and ratings.<br/>
-> Wishlist: Displays all the courses that a student has added to their wishlist.<br/>
-> Cart Checkout: Allows the user to complete course purchases.<br/>
-> Course Content: Presents the course content for a particular course, including videos and related material.<br/>
-> User Details: Provides details about the student's account, including their name, email, and other relevant information.<br/>
-> User Edit Details: Allows students to edit their account details.

<h5>For Instructors:</h5>

-> Dashboard: Offers an overview of the instructor's courses, along with ratings and feedback for each course.<br/>
-> Insights: Provides detailed insights into the instructor's courses, including the number of views, clicks, and other relevant metrics.<br/>
-> Course Management Pages: Enables instructors to create, update, and delete courses, as well as manage course content and pricing.<br/>
-> View and Edit Profile Details: Allows instructors to view and edit their account details.

<h4>Front-end Tools and Libraries</h4>
To build the front-end, we use frameworks and libraries such as ReactJS, CSS, and Tailwind for styling, and Redux for state management.

<h2>Back-end</h2>
The back-end of the platform is built using NodeJS and ExpressJS, providing APIs for the front-end to consume. These APIs include functionalities such as user authentication, course creation, and course consumption. The back-end also handles the logic for processing and storing the course content and user data.

<h4>Back-end Features</h4>
-> User Authentication and Authorization: Students and instructors can sign up and log in to the platform using their email addresses and passwords. The platform also supports OTP (One-Time Password) verification and forgot password functionality for added security.<br/>
-> Course Management: Instructors can create, read, update, and delete courses, as well as manage course content and media. Students can view and rate courses.<br/>
-> Payment Integration: Students will purchase and enroll in courses by completing the checkout flow, followed by Razorpay integration for payment handling.<br/>
-> Cloud-based Media Management: BrainForge uses Cloudinary, a cloud-based media management service, to store and manage all media content, including images, videos, and documents.<br/>
-> Markdown Formatting: Course content in document format is stored in Markdown format, allowing for easier display and rendering on the front-end.

<h4>Back-end Frameworks, Libraries, and Tools</h4>
The back-end of BrainForge uses various frameworks, libraries, and tools to ensure its functionality and performance, including:

Node.js: Used as the primary framework for the back-end.<br/>
Express.js: Used as a web application framework, providing a range of features and tools for building web applications.<br/>
MongoDB: Used as the primary database, providing a flexible and scalable data storage solution.<br/>
JWT (JSON Web Tokens): Used for authentication and authorization, providing a secure and reliable way to manage user credentials.<br/>
Bcrypt: Used for password hashing, adding an extra layer of security to user data.<br/>
Mongoose: Used as an Object Data Modeling (ODM) library, providing a way to interact with MongoDB using JavaScript.<br/>

<h4>Data Models and Database Schema</h4>
The back-end of BrainForge uses several data models and database schemas to manage data, including:

Student Schema: Includes fields such as name, email, password, and course details for each student.<br/>
Instructor Schema: Includes fields such as name, email, password, and course details for each instructor.<br/>
Course Schema: Includes fields such as course name, description, instructor details, and media content.

<h2>Database</h2>
The database for the platform is built using MongoDB, a NoSQL database that provides a flexible and scalable data storage solution. MongoDB allows for the storage of unstructured and semi-structured data. The database stores the course content, user data, and other relevant information related to the platform.
