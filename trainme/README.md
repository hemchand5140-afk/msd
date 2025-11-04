# TrainMe - Fitness Training Platform

A comprehensive fitness platform that provides personalized workout plans, progress tracking, and real-time coaching support.

## Features

- User Authentication & Profiles
- Workout Management
- Nutrition Tracking
- Social & Community Features
- Analytics & Reporting

## Tech Stack

- Frontend: React with TypeScript, Material-UI, Redux Toolkit
- Backend: Node.js, Express.js, TypeScript
- Database: MongoDB
- Real-time: Socket.IO
- State Management: Redux Toolkit, React Query

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone <your-repo-url>
   cd trainme
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm run install-all
   \`\`\`

3. Set up environment variables:

Create a .env file in the server directory:
\`\`\`
PORT=5000
MONGODB_URI=mongodb://localhost:27017/trainme
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000
\`\`\`

4. Start the development servers:
   \`\`\`bash
   npm start
   \`\`\`

This will start both the frontend (port 3000) and backend (port 5000) servers.

## Project Structure

\`\`\`
trainme/
├── client/ # Frontend React application
│ ├── src/
│ │ ├── components/ # Reusable components
│ │ ├── features/ # Feature-based modules
│ │ ├── hooks/ # Custom hooks
│ │ └── store/ # Redux store configuration
│ └── public/ # Static files
└── server/ # Backend Node.js application
├── src/
│ ├── controllers/ # Route controllers
│ ├── models/ # Database models
│ ├── routes/ # API routes
│ └── middleware/ # Custom middleware
└── dist/ # Compiled TypeScript
\`\`\`

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the ISC License.
