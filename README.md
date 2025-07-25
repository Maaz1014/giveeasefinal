# GiveEase v2.0

An AI-powered donation matching platform designed to connect donors with NGOs based on their needs. GiveEase simplifies and enhances the donation process by using modern web technologies and intelligent recommendation systems.

## Features

### 🎯 Core Functionality
- **Smart Donation Matching**: AI-powered algorithm matches donations with NGOs that need them most
- **NGO Registration**: Comprehensive registration system for NGOs with document verification
- **Donor Form**: Easy-to-use form for donors to specify what they want to donate
- **Matched NGOs Display**: Filtered view of NGOs that match donation requirements
- **Direct Contact**: Built-in email and phone contact functionality

### 🎨 Modern UI/UX
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Beautiful Interface**: Clean, modern design with smooth animations using Framer Motion
- **Intuitive Navigation**: Easy-to-use interface with clear visual hierarchy
- **Professional Design**: Inspired by clean SaaS/startup landing pages

### 🤖 AI-Powered Features
- **Smart Matching Algorithm**: Matches donation types with NGO needs
- **Priority-Based Filtering**: Highlights high-priority NGOs
- **Intelligent Search**: Real-time search and filtering capabilities

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Deployment**: Vercel
- **Fonts**: Inter (Google Fonts)
- **Icons**: Heroicons

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd giveasefinal
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages and Features

### Home Page (Landing)
- **Navigation Bar**: Sticky navigation with links to all pages
- **Hero Section**: Compelling headline and call-to-action buttons
- **Features Section**: 4 cards highlighting platform benefits
- **How It Works**: 3-step process explanation
- **Call-to-Action**: Final section encouraging user action
- **Footer**: Contact information and social links

### NGO Registration Page
- **Comprehensive Form**: All required NGO information fields
- **Document Upload**: NGO certificate and government ID upload
- **Social Media Links**: Optional social media integration
- **Form Validation**: Client-side validation for required fields
- **Professional Design**: Clean, organized form layout

### Donor Form Page
- **Donation Type Selection**: Checkbox-based selection of donation types
- **Location Information**: City and specific location fields
- **Item Description**: Detailed description of items to donate
- **Contact Information**: Email, phone, and preferred contact method
- **Information Box**: Clear explanation of how the process works

### Matched NGOs Page
- **NGO Cards**: Beautiful cards displaying NGO information
- **Search & Filter**: Real-time search and donation type filtering
- **Contact Integration**: Direct email and phone contact buttons
- **Priority Indicators**: Visual priority levels for NGOs
- **Verified Badges**: Trust indicators for verified NGOs

## Color Theme and Design

- **Primary Color**: #2563eb (Blue 600)
- **Secondary Color**: #f0f9ff (Light Blue background)
- **Text Color**: #1e293b (Dark Gray/Navy)
- **Design Style**: Clean, minimal, professional with soft-rounded edges
- **Spacing**: Generous whitespace and section separation

## Animation Guidelines

- **Hero Text**: Fade in + slide up animations
- **Buttons**: Scale on hover effects
- **Section Entry**: Fade or slide on scroll
- **Feature Cards**: Shadow and scale on hover
- **Smooth Transitions**: Clean and minimal animations using Framer Motion

## Future Scope

- **Backend Integration**: Node.js + Express API
- **Database**: MongoDB for data persistence
- **Admin Dashboard**: NGO verification and user management
- **Authentication**: OTP or email-based authentication
- **Email Notifications**: Automated email notifications
- **Analytics**: Donor history and donation analytics

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx           # Home page
│   ├── donate/
│   │   └── page.tsx       # Donor form page
│   ├── ngo-registration/
│   │   └── page.tsx       # NGO registration page
│   └── matched-ngos/
│       └── page.tsx       # Matched NGOs page
└── globals.css            # Global styles
```

## Deployment

The easiest way to deploy GiveEase is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository.

---

**GiveEase v2.0** - Connecting generosity with need through AI-powered donation matching 🚀
#   g i v e e a s e f i n a l  
 