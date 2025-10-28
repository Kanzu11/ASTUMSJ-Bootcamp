# BlogApp

A modern React-based blog application built with Vite, featuring blog creation, editing, bookmarking, and management capabilities.

## 🚀 Features

- **Blog Management**: Create, read, update, and delete blog posts
- **Bookmarking System**: Save and manage favorite blog posts using Jotai state management
- **Responsive Design**: Modern UI with clean, user-friendly interface
- **Local Storage**: Data persistence using browser's localStorage
- **Routing**: Multi-page navigation with React Router DOM
- **Form Validation**: Input validation for blog creation and editing

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Routing**: React Router DOM 7.7.1
- **State Management**: Jotai 2.12.5
- **Styling**: CSS3
- **Linting**: ESLint with React plugins

## 📁 Project Structure

```
BlogApp/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── arrow.png
│   │   ├── people.png
│   │   └── react.svg
│   ├── atoms/
│   │   └── BookmarkJotai.jsx      # Jotai state management
│   ├── components/
│   │   ├── BlogCards.jsx          # Blog display component
│   │   ├── BlogForm.jsx           # Blog creation form
│   │   └── Navbar.jsx             # Navigation component
│   ├── pages/
│   │   ├── BlogDetails.jsx        # Individual blog view
│   │   ├── Bookmarks.jsx          # Bookmarked blogs page
│   │   ├── CreateBlog.jsx         # Blog creation page
│   │   ├── EditBlog.jsx           # Blog editing page
│   │   └── Home.jsx               # Home page with featured content
│   ├── App.jsx                    # Main application component
│   ├── index.css                  # Global styles
│   └── main.jsx                   # Application entry point
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd BlogApp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check for code issues

## 🎯 Usage

### Creating a Blog Post
1. Navigate to the home page
2. Click on "Create Blog" or navigate to `/create/form`
3. Fill in the required fields:
   - Title
   - Author
   - Description
   - Content
   - Creation Date
4. Click "Submit" to save the blog post

### Viewing Blog Posts
- All blog posts are displayed on the home page
- Click on any blog post to view its details
- Use the navigation to browse between different sections

### Bookmarking
- View individual blog posts to access bookmark functionality
- Bookmarked posts are saved and can be viewed in the Bookmarks section

### Editing Blog Posts
- Navigate to a blog post's details page
- Click on "Edit" to modify the blog post
- Save changes to update the post

## 🔧 Configuration

The application uses localStorage for data persistence. All blog posts and bookmarks are stored locally in your browser.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the ASTUMSJ bootcamp and is for educational purposes.

## 🙏 Acknowledgments

- Built as part of the ASTUMSJ bootcamp program
- Uses modern React patterns and best practices
- Inspired by modern blog applications and content management systems
