# 🌟 Ankita Sadhukhan - Portfolio Website

Welcome to the personal portfolio website of **Ankita Sadhukhan**, a passionate **Healthcare AI & Software Engineer** specializing in full-stack healthcare applications, machine learning diagnostics, and clinical decision support systems.

---

## 🚀 Features

- **Hero Section**: Interactive hero banner featuring customized character avatar graphics, real-time typing role titles, and animated orbiting tech stacks.
- **About Me**: In-depth professional summary, core values, research interests, and academic background in Healthcare & AI.
- **Featured Projects**: Filterable project gallery with category tags, detailed technical specs, GitHub repository links, and live application URLs.
- **Interactive Resume**: Embedded resume viewer and modal download option.
- **Education & Credentials**: Detailed overview of B.Tech & Diploma qualifications with CGPA metrics and key coursework.
- **Contact Hub**: Contact form integrated with EmailJS, social channel links, and interactive feedback triggers.
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop viewports with dark glassmorphic UI aesthetics.

---

## 🛠️ Technologies Used

This application is engineered using modern web technologies to ensure optimal performance, responsive design, and smooth user interactions:

| Category | Technology | Usage & Purpose |
| :--- | :--- | :--- |
| **Core Framework** | **React 19** | Component-based UI framework for state management and view rendering |
| **Language** | **TypeScript** | Strict type safety, interface definitions, and developer productivity |
| **Build Tooling** | **Vite** | Fast Next-Gen frontend build engine and instant Hot Module Replacement (HMR) environment |
| **Styling** | **Tailwind CSS v4** | Utility-first CSS framework enabling dark glassmorphism, responsive grids, and visual effects |
| **Animations** | **Motion (`motion/react`)** | Declarative smooth animations for floating tech stacks, modal popups, and section scroll triggers |
| **Icons** | **Lucide React** | Clean, modern vector icon suite for UI controls, navigation, and skill badges |
| **Interactive FX** | **Canvas Confetti** | Celebration visual particle effects on contact form submission |
| **Vector Graphics** | **Custom SVG Graphics** | Vector portrait illustration (`/ankita-character.svg`) and custom technology logos |
| **Linting & Quality** | **ESLint / TypeScript Compiler** | Automated code quality analysis and build-time type verification |

---

## 📂 Project Structure

```
├── public/                # Static assets (character SVG, icons)
├── src/
│   ├── components/        # React UI components (Hero, Navbar, Projects, Education, Contact, etc.)
│   ├── data/              # Portfolio configuration and content data
│   ├── App.tsx            # Main application layout
│   ├── main.tsx           # Entry point
│   ├── index.css          # Tailwind CSS entry styles
│   └── types.ts           # TypeScript type definitions
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite build configuration
└── README.md              # Documentation
```

---

## 🖼️ How to Customise Images & Project GitHub URLs

### 1. Updating Profile Image (Hero & About Me Sections)

Both the **Hero Section** and the **About Me Section** display your profile picture (rendered as a floating portrait in Hero and a circular glowing portrait badge in About Me).

You can easily replace the profile image in two ways:

#### Option A: Using a Local Image File (Recommended)
1. Copy your photo (e.g. `profile.jpg`, `ankita.png`, or `photo.webp`) into the **`public/`** folder.
2. Open **`src/data/portfolioData.ts`**.
3. Update the `avatarUrl` property in the `PERSONAL_INFO` object:
   ```typescript
   export const PERSONAL_INFO = {
     // ...
     avatarUrl: "/profile.jpg", // Replace with your file name in /public/
   };
   ```

#### Option B: Using an Online Image URL
1. Copy the direct image URL from Cloudinary, GitHub raw assets, Imgur, or LinkedIn.
2. Open **`src/data/portfolioData.ts`**.
3. Set `avatarUrl` to your image link:
   ```typescript
   export const PERSONAL_INFO = {
     // ...
     avatarUrl: "https://your-domain.com/path-to-photo.jpg",
   };
   ```

> **Note:** If the custom image fails to load, the portfolio automatically falls back to `/ankita-character.svg`.

---

### 2. Updating Project Images & GitHub Repository URLs

Each project card in the **Projects Section** displays a preview image, tech stack, description, and direct links to GitHub repositories and live demos.

To update a project's image or GitHub link:

1. Open **`src/data/portfolioData.ts`**.
2. Locate the project inside the **`PROJECTS`** array (e.g., `CORTEX-VISION`, `SepsisInsight`, etc.).
3. Update the **`image`** and **`githubUrl`** fields:

```typescript
export const PROJECTS: ProjectItem[] = [
  {
    id: "cortex-vision",
    title: "CORTEX-VISION",
    subtitle: "AI Brain Tumor MRI Classification & Explainability",
    category: "Deep Learning Healthcare",

    // 1. PROJECT PREVIEW IMAGE (Local path in /public or direct HTTPS link)
    image: "/projects/cortex-preview.png", // or "https://images.unsplash.com/photo-..."

    // 2. GITHUB REPOSITORY LINK
    githubUrl: "https://github.com/sadhukhanankita2025/CORTEX-VISION",

    // 3. OPTIONAL LIVE DEMO LINK
    liveUrl: "https://cortex-vision.demo.app",

    // ... additional fields
  },
  // ... other projects
];
```

#### Uploading Local Project Images:
- Create a folder inside `public/` such as `public/projects/`.
- Save your project screenshot as `public/projects/my-project.png`.
- In `src/data/portfolioData.ts`, set `image: "/projects/my-project.png"`.

---

### 3. Uploading & Linking Your Resume PDF for Direct Download

When visitors click **"DOWNLOAD RESUME"** on your website, it will directly download your PDF resume file.

#### Option A: Place your PDF file in the `public/` folder (Recommended)
1. Save your resume PDF file as **`resume.pdf`** or **`Ankita_Sadhukhan_Resume.pdf`**.
2. Place the file inside the **`public/`** folder (e.g. `public/resume.pdf`).
3. Open **`src/data/portfolioData.ts`** and set `resumeUrl`:
   ```typescript
   export const PERSONAL_INFO = {
     // ...
     resumeUrl: "/resume.pdf", // Pointing to public/resume.pdf
   };
   ```

#### Option B: Link an Online PDF URL (Google Drive, Cloud Storage, or LinkedIn)
1. Upload your resume PDF to Google Drive, Dropbox, or a public cloud storage.
2. Ensure the file sharing permissions are set to *"Anyone with the link can view"*.
3. Open **`src/data/portfolioData.ts`** and set `resumeUrl` to your shareable link:
   ```typescript
   export const PERSONAL_INFO = {
     // ...
     resumeUrl: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID",
   };
   ```

---

## 💻 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your system (v18+ recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ankitasadhukhan/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📧 Contact

- **Email**: sadhukhanankita80@gmail.com
- **LinkedIn**: [linkedin.com/in/ankitasadhukhan](https://linkedin.com/in/ankitasadhukhan)
- **GitHub**: [github.com/ankitasadhukhan](https://github.com/ankitasadhukhan)

---

© Ankita Sadhukhan. All rights reserved.
