Project Dashboard – Angular + Tailwind

This is a single-page application built with Angular, TypeScript, and Tailwind CSS.
The goal was to recreate the provided dashboard design (see screenshot below) with a focus on layout accuracy, clean code structure, and responsive UI.

📌 Features

Sidebar navigation with dashboard, projects, team members, files, and activity links.

Top navigation bar with greeting message and search.

Create New Project form with fields:

Project Name

Project Assignee

Status

Start & End Date (calendar inputs)

Priority (High / Medium / Normal)

Description (textarea with ngModel binding)

Step indicator (Project Info → Select Scope → Scope Details).

Tailwind-based design for responsiveness & clean UI.

“Save & Continue” button to move forward.



🛠️ Tech Stack

Angular 17+
 – Standalone components approach

TypeScript

Tailwind CSS
 – Utility-first CSS framework

Angular FormsModule
 – Template-driven form handling



📂 Project Structure
src/
 ├── app/
 │   ├── navbar/       # Top navigation bar
 │   ├── sidebar/      # Sidebar navigation
 │   ├── body/         # Main body with project form
 │   └── app.ts        # Root component (standalone)
 ├── main.ts           # Bootstrap entry point
 ├── index.html        # Base HTML
 └── styles.css        # Tailwind setup



🚀 Getting Started
1️⃣ Clone the repo
git clone https://github.com/your-username/angular-dashboard.git
cd angular-dashboard

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm start


Then open 👉 http://localhost:4200



📸 Final Output

Here is the recreated design output:



✅ Submission Notes

Built as per given requirements (Angular + HTML + TypeScript + Tailwind).

Includes screenshot of final UI in assets/final-output.png.
