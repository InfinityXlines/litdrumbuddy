# LitDrumBuddy

A comprehensive drum practice application built with Next.js, featuring custom exercises, video functionality, metronome integration, practice timer, progress tracking, and cross-device sync.

## Features

- **Custom Exercises & Categories**: Create and manage personalized drum exercises and organize them into categories
- **Video Functionality**: Integrated video player for exercise demonstrations and tutorials
- **Metronome Integration**: Built-in metronome with adjustable BPM for practice sessions
- **Practice Timer**: Track practice session duration and maintain consistent practice habits
- **Progress Tracking**: Monitor your improvement over time with detailed analytics and charts
- **Cross-Device Sync**: Access your practice data across multiple devices
- **User Authentication**: Secure user accounts with NextAuth.js
- **Responsive Design**: Optimized for desktop and mobile devices

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Database**: Prisma ORM with SQLite
- **Authentication**: NextAuth.js
- **Charts**: Chart.js, Plotly.js, Recharts
- **State Management**: Zustand, Jotai
- **Forms**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/InfinityXlines/litdrumbuddy.git
cd litdrumbuddy
```

2. Navigate to the app directory:
```bash
cd app
```

3. Install dependencies:
```bash
npm install
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication pages
│   ├── exercises/         # Exercise management
│   ├── practice/          # Practice session interface
│   ├── progress/          # Progress tracking and analytics
│   ├── metronome/         # Metronome functionality
│   └── settings/          # User settings
├── components/            # Reusable React components
│   ├── ui/               # UI component library
│   └── ...               # Feature-specific components
├── lib/                   # Utility functions and configurations
├── hooks/                 # Custom React hooks
├── data/                  # Static data and seed files
└── prisma/               # Database schema and migrations
```

## Key Components

- **Dashboard**: Main interface showing practice overview and quick access to features
- **Exercise Manager**: Create, edit, and organize drum exercises
- **Practice Form**: Interface for conducting practice sessions with timer and metronome
- **Progress Charts**: Visual analytics of practice history and improvement
- **Video Player**: Integrated player for exercise demonstrations
- **Metronome**: Adjustable tempo tool for practice sessions

## Database Schema

The application uses Prisma with the following main entities:
- Users (authentication and profiles)
- Categories (exercise organization)
- Exercises (practice content)
- Practice Sessions (tracking and analytics)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with modern web technologies for optimal performance
- Designed with drummers' practice needs in mind
- Responsive design for practice on any device
