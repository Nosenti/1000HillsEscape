# 1000 Hills Escape

1000 Hills Escape is a small boutique hotel with luxurious cabins. They need a custom-built application to manage everything about the hotel like bookings, cabins and guests. This is an internal application to check in guests as they arrive.

## Technology Decisions

- **React Router** for Routing. it is standard for the React Single Page applications.
- **Styled Components** for writing component-scoped CSS, right inside Javascript.
- **React Query** The best way to manage remote state with features like caching, automatic re-fetching, pre-fetching and offline support.
- **Context API** for managing UI states.
- **React Hook Form** for managing complex forms.
- **Supabase** for building the backend

## Strategy for Project Completion

While I implemented the project alone, I will act as if it was developed with a team of developers, UI/UX professionals and accommodate different stakeholders. The strategy comprises of different stages of development, what to do in different stages and how to liaise with different stakeholders to make sure that the product delivery is on time and the product is solid.

### Initiation

- **Day 1-3: Requirements Gathering**
  - Engage with business units to understand the objectives and requirements.
  - Organize meetings with the design team for initial mockups and UI/UX considerations.
  - Liaise with the backend team to understand the data needs, API contracts, and any backend constraints.

### Planning

- **Day 4-6: Project Planning**
  - Create a detailed project timeline.
  - Define sprints and milestones based on the requirements gathered.
  - Assign roles and tasks within the engineering team.

### Execution

- **Day 7-20: Design Approval and Setup**

  - Collaborate with the design team to finalize designs and create a design system.
  - Set up the Vite project, including dependencies such as React, Supabase, react-query, and styled-components.
  - Configure environmental variables, and continuous integration (CI) for automated testing and deployment.

- **Day 21-50: Development**

  - Develop components iteratively, starting with atomic components and gradually building up to complex ones, ensuring they match the approved designs.
  - Write efficient queries with react-query to manage server state and integrate with Supabase APIs.
  - Implement robust error handling and data validation methods.
  - Continuously test components for functionality, responsiveness, and visual consistency.
  - Engage in regular code reviews to maintain code quality and adhere to best engineering practices.
  - Provide periodic progress updates to stakeholders and adjust plans based on feedback and changing requirements.

### Testing

- **Day 51-60: Testing Phase**
  - Perform rigorous unit, integration, and end-to-end testing.
  - Engage with the QA team for systematic testing and feedback.
  - Conduct usability testing sessions with select stakeholders to ensure the application's UI/UX is solid.
  - Fix reported bugs and retest to ensure the robustness of the application.

### Deployment

- **Day 61-65: Pre-Deployment & Documentation**

  - Prepare deployment pipelines.
  - Perform a security audit and resolve any outstanding issues.
  - Write comprehensive documentation for the application, including a user guide and technical documentation.

- **Day 66: Deployment**

  - Deploy the application to the production environment.
  - Monitor the application's performance and resolve any post-deployment issues.

### Closing

- **Day 67-70: Post-Deployment**
  - Gather feedback from end-users and stakeholders.
  - Conduct a retrospective meeting with the team to discuss what went well and potential areas for improvement.
  - Plan for future updates and feature enhancements.

## Running the project

### Notes

- The project has authentication and backed which is taken care of by Supabase. That means you need to login (does not have signup because the users are added by someone who is logged in). To access all parts of the app, I will give you login credentials if you are a recruiter (in my application) or want to learn more about it.
- This is a portfolio project, not deployed to work in the real world.
- To access its hosted version, go on https://1000-hills-escape-jtx095tw5-nosenti.vercel.app/login. You will need the same credentials where you are using local project or the hosted one. they both use the same backend. If you have any questions for difficulty, shoot me an email at innocentingabire01@gmail.com

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js](https://nodejs.org/).
- If you don't have Vite installed globally, the project will take care of installing it locally.

### Installing and Running the Project

To install the Project Name, follow these steps:

1. Clone the repository to your local machine: `git clone https://github.com/Nosenti/1000HillsEscape`
2. Navigate to the project
3. Install the project dependencies using `npm install`

### Running the project

Inside the project, run `npm run dev` and should start the project locally.
