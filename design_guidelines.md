# Design Guidelines: 반려동물 찾기 서비스

## Design Approach: Modern Korean Service Aesthetic + Emotional Connection

**Selected Approach**: Hybrid - Drawing inspiration from Korean service platforms (Karrot/당근마켓, Toss) with emotional pet service elements (Rover, Petfinder)

**Design Philosophy**: 
- Warm, approachable aesthetic that resonates with 20대 초반 college students
- Emotional connection without being overly sentimental
- Clean, trustworthy interface for both pet owners and potential advertisers
- Mobile-first Korean web service patterns

---

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: 280 65% 55% (Soft purple - warm, caring, distinctive)
- Secondary: 200 70% 50% (Friendly blue - trust, reliability)
- Accent: 340 75% 60% (Warm coral - urgency, emotional touch)
- Background: 0 0% 98% (Soft white)
- Surface: 0 0% 100% (Pure white cards)
- Text Primary: 240 20% 15% (Deep charcoal)
- Text Secondary: 240 10% 45% (Medium gray)

**Dark Mode:**
- Primary: 280 60% 65%
- Secondary: 200 60% 60%
- Accent: 340 70% 65%
- Background: 240 15% 8%
- Surface: 240 12% 12%
- Text Primary: 0 0% 95%
- Text Secondary: 240 5% 65%

### B. Typography

**Font Families:**
- Primary (Korean/English): 'Pretendard Variable', -apple-system, system-ui, sans-serif
- Headings: 'Pretendard Variable' with weight 700-800
- Body: 'Pretendard Variable' with weight 400-500

**Type Scale:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl font-bold
- Section Heading: text-3xl md:text-4xl font-bold
- Card Title: text-xl md:text-2xl font-semibold
- Body Large: text-lg font-medium
- Body: text-base
- Small: text-sm

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 3, 4, 6, 8, 12, 16, 20 for consistent rhythm
- Card padding: p-6 md:p-8
- Section spacing: py-16 md:py-24
- Element gaps: gap-4, gap-6, gap-8
- Container: max-w-6xl mx-auto px-4 md:px-6

### D. Component Library

**1. Hero Section (반려동물 찾기 신청)**
- Full-width with subtle gradient background (280 65% 98% to 200 70% 98%)
- No large hero image - focus on immediate form access
- Centered layout with headline + subheading + form preview/CTA
- Height: min-h-[70vh] - comfortable but not forced viewport

**2. Service Application Forms**
- Contained cards with soft shadow (shadow-lg)
- Rounded corners: rounded-2xl
- Input fields: 
  - Border: border-2 with focus:ring-2 focus:ring-primary
  - Height: h-12
  - Rounded: rounded-lg
  - Background: bg-white dark:bg-surface with proper contrast
- Labels: font-medium text-sm text-secondary mb-2
- Submit button: Full-width, h-12, primary color, rounded-lg

**3. Information Section (서비스 안내)**
- Grid layout: grid-cols-1 md:grid-cols-3 gap-8
- Icon cards with:
  - Large emoji or simple icon (text-5xl)
  - Title (text-xl font-bold)
  - Description (text-base text-secondary)
  - Subtle background: bg-primary/5 dark:bg-primary/10
  - Padding: p-6
  - Rounded: rounded-xl

**4. Advertiser Section (광고주 모집)**
- Distinguished from main service with secondary color accent
- Two-column layout: Info (left) + Form (right) on desktop
- Stack on mobile
- Background: bg-secondary/5 dark:bg-secondary/10
- Full-width section with inner container

**5. Admin Dashboard**
- Clean data table with alternating row backgrounds
- Sticky header: sticky top-0 bg-surface shadow-sm
- Card-based layout for stats/metrics at top
- Responsive table with horizontal scroll on mobile
- Filter/search bar with border-2 and rounded-lg

**6. Navigation**
- Sticky header: sticky top-0 bg-white/90 dark:bg-surface/90 backdrop-blur-md
- Simple logo + optional admin link on right
- Height: h-16
- Border bottom: border-b border-gray-200 dark:border-gray-800

**7. Footer**
- Clean, minimal design
- Stack layout on mobile, flex on desktop
- Include: Service info, Contact, Copyright
- Background: bg-gray-50 dark:bg-surface
- Padding: py-12

### E. Visual Enhancements

**Micro-interactions (Minimal):**
- Subtle hover lift on cards: hover:translate-y-[-2px] transition-transform
- Button hover: Native button states only
- Input focus: Ring animation with focus:ring-2

**Shadows:**
- Cards: shadow-lg
- Elevated elements: shadow-xl
- Subtle: shadow-sm

**No animations** except form submission success state (simple fade-in message)

---

## Page Structure

**Landing Page Sections (in order):**
1. **Hero + Primary Form** (반려동물 찾기 신청)
   - Headline emphasizing urgency and care
   - Immediate access to missing pet form
   - Warm gradient background

2. **Why Use This Service** (서비스 안내)
   - 3-column grid with emotional but practical benefits
   - Icons + short descriptions
   - College student perspective (affordable, fast, caring community)

3. **Service Details** (추가 정보)
   - How it works (step-by-step process)
   - Success stories or statistics
   - Trust indicators

4. **Advertiser Section** (광고주 모집)
   - Separate visual identity with secondary color
   - Benefits for advertisers
   - Ad application form
   - Two-column layout (info + form)

5. **Footer**
   - Contact information
   - Service hours
   - Simple links

**Admin Page:**
- Login-protected route (/admin)
- Dashboard layout with tabs/sections:
  - Pet Finding Requests
  - Advertiser Applications
- Clean data tables with all submitted information
- No delete functionality - view only

---

## Images

**No large hero image required** - This service prioritizes immediate action (form submission) over visual storytelling.

**Optional decorative elements:**
- Small paw print patterns as subtle background decoration
- Simple pet silhouette illustrations in information cards
- Keep visual elements minimal and non-distracting

---

## Key Design Principles

1. **Immediate Action**: Form is prominently displayed, not hidden below fold
2. **Emotional Intelligence**: Warm colors and empathetic copy without being saccharine
3. **Clear Hierarchy**: Pet finding (primary) > Service info > Advertisers (secondary)
4. **Mobile-First**: Korean users are mobile-heavy, ensure perfect mobile UX
5. **Trust Building**: Clean design, clear information, professional presentation
6. **Accessibility**: High contrast ratios, clear labels, keyboard navigation