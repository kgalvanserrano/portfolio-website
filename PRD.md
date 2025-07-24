# Personal Developer Portfolio Website

A clean, impactful personal website that showcases technical skills and personality to help secure a first developer role in the industry.

**Experience Qualities**:
1. **Professional** - Demonstrates technical competence and attention to detail that employers expect
2. **Authentic** - Shows genuine personality and passion for development beyond just technical skills
3. **Focused** - Cuts through noise to highlight the most relevant information for hiring managers

**Complexity Level**: 
- Content Showcase (information-focused)
- Perfect for presenting developer credentials, projects, and contact information in a structured, scannable format that recruiters can quickly evaluate.

## Essential Features

**Hero Introduction**
- Functionality: Immediate visual impact with name, role, and value proposition
- Purpose: Hook recruiters within 3 seconds of landing on the site
- Trigger: Page load
- Progression: Eye contact with photo → read headline → scan key skills → call-to-action
- Success criteria: Visitors understand who you are and what you do within 5 seconds

**Skills & Technologies Display**
- Functionality: Visual representation of technical competencies with proficiency levels
- Purpose: Quick technical assessment for recruiters and technical screeners
- Trigger: Scroll or navigation to skills section
- Progression: Category overview → specific technologies → proficiency indication → related projects link
- Success criteria: Technical fit can be assessed without reading lengthy descriptions

**Project Showcase**
- Functionality: 3-4 carefully selected projects with live demos and code links
- Purpose: Prove coding ability through real, working examples
- Trigger: Direct navigation or natural scroll flow
- Progression: Project preview → detailed description → live demo → source code → next project
- Success criteria: Each project demonstrates different technical capabilities

**Contact & Availability**
- Functionality: Clear contact information and current availability status
- Purpose: Remove friction from the hiring process
- Trigger: User decides to reach out
- Progression: Find contact section → choose preferred method → immediate action
- Success criteria: Zero barriers to initial contact

## Edge Case Handling

- **Mobile-first responsive design**: Ensure perfect experience on all devices since many initial views happen on mobile
- **Loading states**: Smooth progressive loading for any dynamic content or images
- **Accessibility compliance**: Full keyboard navigation and screen reader support
- **Performance optimization**: Sub-2 second load times for immediate engagement

## Design Direction

The design should feel modern, confident, and detail-oriented - like software crafted by someone who cares about user experience. Clean and minimal interface that demonstrates design sensibility while keeping focus on content and achievements.

## Color Selection

Complementary (opposite colors) - Using a sophisticated blue-orange pairing to create visual interest while maintaining professional credibility.

- **Primary Color**: Deep Blue `oklch(0.3 0.15 250)` - Communicates trust, professionalism, and technical competence
- **Secondary Colors**: Soft grays `oklch(0.95 0 0)` and `oklch(0.85 0 0)` for backgrounds and subtle elements
- **Accent Color**: Warm Orange `oklch(0.7 0.15 50)` - Draws attention to call-to-actions and important achievements
- **Foreground/Background Pairings**: 
  - Background (White `oklch(1 0 0)`): Dark text `oklch(0.15 0 0)` - Ratio 14.1:1 ✓
  - Primary (Deep Blue): White text `oklch(1 0 0)` - Ratio 9.2:1 ✓
  - Accent (Warm Orange): White text `oklch(1 0 0)` - Ratio 4.9:1 ✓
  - Card (Light Gray `oklch(0.98 0 0)`): Dark text `oklch(0.15 0 0)` - Ratio 13.8:1 ✓

## Font Selection

Typography should convey clarity and modernity - demonstrating attention to detail while remaining highly readable across all contexts.

- **Typographic Hierarchy**: 
  - H1 (Name): Inter Bold/48px/tight letter spacing for maximum impact
  - H2 (Section Headers): Inter Semibold/32px/normal spacing for clear structure
  - H3 (Project Titles): Inter Medium/24px/normal spacing for content hierarchy
  - Body Text: Inter Regular/16px/relaxed line height for optimal readability
  - Caption (Skills/Tags): Inter Medium/14px/normal spacing for technical labels

## Animations

Subtle and purposeful motion that guides attention without overwhelming content - demonstrating technical sophistication through restrained implementation.

- **Purposeful Meaning**: Smooth transitions communicate attention to detail and modern development practices
- **Hierarchy of Movement**: Hero elements fade in on load, scroll-triggered reveals for sections, gentle hover states on interactive elements

## Component Selection

- **Components**: Card components for project showcases, Button variants for different CTA priorities, Badge components for skills/technologies, Avatar for professional photo
- **Customizations**: Custom project card layout with image, description, and action buttons; Skills grid with progress indicators
- **States**: Buttons have distinct hover/focus states, project cards lift slightly on hover, smooth transitions between all interactive states
- **Icon Selection**: Phosphor icons for social links (GitHub, LinkedIn), external link icons, and technology representations
- **Spacing**: Consistent 8px base unit scaling (16px, 24px, 32px, 48px) for harmonious rhythm
- **Mobile**: Single column layout on mobile with touch-optimized button sizes, collapsible navigation if needed, optimized image sizes for mobile performance