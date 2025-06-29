import React, { useState } from 'react';
import { Briefcase, User, Mail, Menu, X, ArrowRight, Dribbble, Linkedin, Twitter, BarChart2, GitMerge, Lock } from 'lucide-react';

// --- Password Protection Component ---
// Moved outside the App component to prevent re-rendering issues
const PasswordGate = ({ handlePasswordSubmit, passwordInput, setPasswordInput, error }) => (
  <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
    <div className="w-full max-w-sm">
      <div className="text-center mb-6">
          <Lock className="mx-auto h-12 w-12 text-slate-500" />
          <h2 className="mt-4 text-2xl font-bold text-white">Portfolio Access</h2>
          <p className="mt-2 text-sm text-slate-400">Please enter the password to view this portfolio.</p>
      </div>
      <form onSubmit={handlePasswordSubmit} className="bg-slate-800 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-bold text-slate-300 mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>
        {error && <p className="text-red-400 text-xs italic mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
        >
          Unlock
        </button>
      </form>
    </div>
  </div>
);


// Main App Component
const App = () => {
  // --- Password Protection State ---
  // To change the password, update the value of 'correctPassword'
  const correctPassword = 'mountain'; // <-- CHANGE YOUR PASSWORD HERE

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState('');

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === correctPassword) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };
  // --- End Password Protection State ---

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const featuredCaseStudies = [
    {
      id: 1,
      category: 'UX Research, Strategy & Service Design',
      title: 'Apple: Designing Emergency SOS via Satellite',
      description: 'Led UX research and strategy for Apple\'s life-saving Emergency SOS via satellite, from designing the core user interaction to validating its performance with emergency services.',
      imageUrl: process.env.PUBLIC_URL + '/IMG_0586.jpeg' ,
      tags: ['UX Research', 'Product Strategy', 'Service Design', 'Validation Testing', 'Critical Systems'],
      details: {
        role: "As a UX Researcher, Strategist, and Subject Matter Expert, I served as a key liaison between a wide range of stakeholders. Internally, I collaborated daily with hardware engineers, software engineers, human-computer interaction (HCI) designers, and product marketing to ensure the feature was both technically feasible and aligned with user needs. Externally, I worked directly with end-users including accident victims, PSAP directors, telecommunicators, field responders, and public land managers to ground our product decisions in real-world context and operational realities.",
        challenge: "When a user is in an emergency without a cellular or Wi-Fi signal, every second counts. The challenge was to design a user experience that could quickly and accurately capture critical information for 911 dispatchers (PSAPs) and field responders, all while working within the technical constraints of satellite communication. The system had to be intuitive for users under extreme stress and trusted by the emergency services community.",
        process: [
            { title: "Designing the Emergency Questionnaire", description: "I helped design the core of the user-facing experience: an emergency questionnaire. Due to satellite network transmission times, this upfront data collection could decrease the time-to-dispatch by up to 50%. The questionnaire blended standard medical dispatch questions with unique, context-aware questions about the remote environment (e.g., steep terrain, water, caves) to ensure specialized rescue teams arrived with the right personnel and equipment." },
            { title: "In-the-Field Validation with Emergency Services", description: "I designed and executed a confidential, in-real-life (IRL) testing protocol with 20 PSAPs. A key insight presented to leadership was the 'unremarkable PSAP response': telecommunicators handled sessions normally and without confusion, validating the core design. However, testing also revealed that PSAP policies often prevented them from immediately dispatching on our initial data alone, highlighting a critical need for PSAP education and policy adaptation to reduce redundancies." },
            { title: "Post-Launch Insights from Complex Rescues", description: "My analysis of real-world events, including the 'Chinese Puzzle Wall' climbing accident and a Utah slot canyon rescue, exposed a recurring service design flaw. In both cases, the relay center or PSAP, bound by protocol, asked redundant questions and could not provide the specialized advice or rescue plans the users needed. This led to user confusion and a loss of confidence. These cases became powerful evidence that a direct line of communication to SAR experts was essential, with the potential to save 30-60 minutes in a complex case." },
            { title: "Designing the 'Responder-in-Chat' Solution", description: "Armed with data from my validation testing and the powerful narratives from real-world case studies, I designed the 'Responder-in-Chat' feature enhancement. This addressed the #1 request from SAR teams and was presented to leadership as a key opportunity to improve SAR response. My proposal included a service experience blueprint, high-level engineering mechanics, and detailed product requirements prioritized into 'Essential' and 'Candidate' features to provide a clear path to implementation." },
            { title: "Developing Responder Training & Documentation", description: "To ensure the successful adoption of the feature, I helped develop a suite of educational materials for the global emergency services community. This included creating the comprehensive PSAP Operational Guide, which provided telecommunicators with clear instructions on the new workflow, technical considerations, and best practices for handling satellite-based emergency sessions." }
        ],
        visuals: [
            { type: 'image', url: process.env.PUBLIC_URL + '/SOSVolume.jpeg', caption: 'Chart showing the increasing volume of Search & Rescue (SAR) incidents, which highlighted the growing need for better communication tools.' },
            { type: 'image', url: process.env.PUBLIC_URL + '/SOSServiceBlueprint.jpg', caption: 'Service design blueprint illustrating the complex existing flow (left) versus the streamlined, intuitive experience of the proposed "Responder-in-Chat" feature (right).' }
        ],
        solution: "The result was a validated, user-centered emergency communication feature. Key deliverables included the final emergency questionnaire flow, a robust validation testing protocol, a suite of educational materials including a detailed PSAP Operational Guide, and highly accurate pre-launch forecasts that modeled the distribution of different emergency use cases.",
        outcome: "The feature launched successfully and has been described as 'game-changing' in complex search and rescue cases. It has seen massive adoption, growing from ~1,900 SAR cases in 2023 to ~6,100 in 2024, with a forecast of over 10,000 for 2025. My pre-launch forecasts modeling the distribution of incident types were highly accurate; for example, the forecast for SAR incidents as a percentage of total sessions was within 5 percentage points of the actuals observed post-launch. This accuracy helped the business effectively allocate and train specialized resources. While my 'Responder-in-Chat' proposal—forecasted to be applicable in ~75% of all SAR incidents—was ultimately tabled due to resourcing constraints, it highlighted a key user need that continues to inform future product strategy.",
        learnings: "This project taught me that for a complex service, successful design is as much about managing stakeholder relationships as it is about pixels. My role required translating insights between engineering, emergency services, and real users to ensure all parts of the service worked in harmony. It also reinforced the importance of proactive problem-finding; even when a proposed feature isn't immediately resourced, identifying the gap and presenting a well-researched solution is a critical strategic contribution that can shape a product's long-term roadmap."
      }
    },
    {
      id: 2,
      category: 'Academic Project: Product Innovation & Service Design',
      title: 'AllTrails: Improving Trust in Crowd-Sourced Data',
      description: 'A concept project for Carnegie Mellon University that enhances the AllTrails app by designing a system to verify user-generated data, increasing trust and safety.',
      imageUrl: process.env.PUBLIC_URL + '/AllTrailsThumb.png',
      tags: ['Product Strategy', 'Service Design', 'UX Research', 'Prototyping', 'Gamification'],
      details: {
        role: "As a graduate student at Carnegie Mellon's Integrated Innovation Institute, I led this project from conception to final prototype. I was responsible for all aspects of the work, including user research, service ecology mapping, jobs-to-be-done analysis, feature ideation, and UI/UX design.",
        challenge: "AllTrails is a powerful community-driven platform, but its greatest strength—crowd-sourced data—is also its greatest weakness. My research, including user interviews and surveys, revealed that inaccurate, unverified user-generated data was a primary pain point, leading to a lack of trust and potential safety issues. The core design question became: How might we empower the community to improve data accuracy and build a more trustworthy system?",
        process: [
          { title: "Research & Opportunity Analysis", description: "I conducted user research to validate the core problem, then created a service ecology map to visualize the exchanges of value between AllTrails and its users. This highlighted key opportunity areas around data accuracy and community engagement." },
          { title: "Ideation & Feature Design", description: "Using a Jobs-to-be-Done framework, I developed a feature set focused on data verification. The core concept is a system where users can report inaccuracies and, more importantly, other users are prompted to verify those reports. This creates a continuous feedback loop that improves data quality over time." },
          { title: "Incentive & Gamification", description: "To drive engagement with the verification system, I designed a contributor model with clear incentives. Users earn badges and progress toward a free AllTrails+ subscription for their contributions, turning a data quality problem into a rewarding community challenge." },
          { title: "Prototyping & Validation", description: "I created a high-fidelity prototype of the user flow, from rating a trail's accuracy post-hike to being prompted to verify a known issue on the trail. I validated the concept with prototype testers, who found the system motivating and straightforward." }
        ],
        visuals: [
            { type: 'image', url: process.env.PUBLIC_URL + '/AllTrailsScreens.png', caption: 'High-fidelity mockups showing the key user flows, from reporting an inaccuracy to the gamified contributor profile.' }
        ],
        solution: "The final concept is a fully integrated feature that leverages the AllTrails community to solve its own data integrity problem. It includes a simple in-app reporting system, a verification workflow that prompts users to confirm issues in the field, and a gamified contributor profile that rewards participation. This transforms passive users into active co-creators of value.",
        outcome: "This academic project demonstrates a clear, structured approach to product innovation. It shows how to translate a key user pain point into a viable, engaging, and value-additive feature concept. The prototype testing validated the core assumption that users would be motivated to participate in a well-designed contribution system.",
        learnings: "This project was a deep dive into the power of community and incentives. It taught me that you can solve complex data problems by designing systems that align user motivations with business goals. The key is to make participation easy, rewarding, and transparent, turning a chore into a compelling part of the user experience."
      }
    },
    {
      id: 3,
      category: 'Methodology & Decision-Making',
      title: 'A Case Study in Decision-Making: Lessons from Avalanche Forecasting',
      description: 'An analysis of a high-stakes backcountry ski tour that demonstrates my core methodology for data synthesis, risk assessment, and decision-making under uncertainty.',
      imageUrl: 'https://i.imgur.com/83p54vj.png',
      tags: ['Risk Assessment', 'Data Synthesis', 'Decision-Making', 'Human Factors', 'Information Design'],
       details: {
        role: "This case study is a personal reflection on my work as a professional mountain guide and avalanche forecaster. It examines a real-world scenario where I had to make critical safety decisions with incomplete information. It is presented here to offer a transparent look into my core methodology for problem-solving, which directly informs my work as a UX researcher and strategist.",
        challenge: "The core challenge, both in the mountains and in product development, is making the best possible decision with the available information. In this specific incident, the question was: After a major storm, how do you assess the stability of a 'stubborn' and 'borderline dormant' persistent slab avalanche problem on a high-consequence slope? The decision had immediate life-or-death implications.",
        process: [
            { title: "Data Synthesis Under Uncertainty", description: "The process began by synthesizing multiple, disparate data streams: regional weather forecasts, ridgetop wind/snow transport data, informal avalanche activity reports, and direct field observations. Much like in UX research, not all data was clean or complete, requiring me to weigh the reliability of each source." },
            { title: "Human Factors & Heuristics", description: "A critical part of the analysis was understanding the human element. This included recognizing the potential for 'expert halo' bias when working with more experienced partners, as well as the group's desire to ski impressive terrain. These are the same types of cognitive biases and user motivations that I analyze in a product context." },
            { title: "Risk Assessment & Mitigation", description: "The final step was to assess the probability and consequence of a potential avalanche. We used specific mitigation strategies, such as skiing one at a time and choosing slopes with clean run-outs, to manage the identified risk. This is directly analogous to identifying usability risks in a product and designing mitigations to prevent user error." }
        ],
        visuals: [
           { type: 'image', url: 'https://i.imgur.com/83p54vj.png', caption: 'An example of a published daily avalanche forecast I authored for the Mount Washington Avalanche Center. This product synthesizes complex data into a clear, scannable, and actionable safety message for a diverse public audience, demonstrating a core competency in high-stakes information design.' }
        ],
        solution: "The 'product' in this scenario is the decision itself: to ski the slopes. While the outcome was successful (no incident), the most valuable deliverable from this experience was the post-incident analysis and reflection. By deconstructing the decision-making process, I identified potential flaws in our logic and opportunities to improve our safety margins in the future.",
        outcome: "The direct outcome of this analysis was a refinement of my personal and professional risk management framework. It reinforced the importance of challenging assumptions, explicitly discussing cognitive biases, and prioritizing psychological safety within a team to ensure dissenting opinions are heard, regardless of experience levels.",
        learnings: "This experience was a powerful lesson in intellectual honesty. It's not enough for a decision to turn out well; you must rigorously question *why* it did. Was it skill and sound judgment, or did we get lucky? Applying this same critical lens to product and design decisions—separating successful outcomes from sound process—is fundamental to my work. It ensures that success is repeatable and not just the result of chance."
      }
    },
  ];
  
  const otherCaseStudies = [
    {
      id: 4,
      category: 'UX Research & Product Strategy',
      title: 'Apple: Reducing False Positives for Automated 911 Features',
      description: 'Led a mixed-methods research initiative to understand and address the high rate of false-positive activations for features like Crash Detection, reducing emergency services strain.',
      imageUrl: 'https://placehold.co/600x400/84cc16/ffffff?text=Journey+Map',
      tags: ['UX Research', 'Data Analysis', 'Service Design', 'Journey Mapping', 'Product Strategy'],
      details: {
        role: "I was the lead researcher responsible for investigating the high volume of non-emergency calls originating from automated features. My role was to quantify the problem, understand the impact on Public Safety Answering Points (PSAPs), and provide actionable recommendations to engineering and design teams.",
        challenge: "Automated features like Crash Detection are designed to save lives, but were also generating a significant number of non-emergency calls, straining PSAP resources and degrading trust in the system. My research was guided by three core questions: What is the rate of non-emergency incidents? How do these features impact 911 operations? And what is the general PSAP attitude toward them?",
        process: [
          { title: "Mixed-Methods Research with PSAPs", description: "I designed and conducted a multi-faceted research study with PSAPs to establish real-world rates of true and non-emergencies. This included quantitative analysis of raw incident data, interviews with PSAP directors to identify trends and pain points, and surveys with telecommunicators to quantify their experience." },
          { title: "Uncovering Key Insights", description: "The research uncovered high non-emergency rates for automated features (e.g., ~70% for iPhone Crash Detection, >90% for Watch Crash Detection). 100% of PSAPs in mountain regions reported ongoing problems with false activations from ski resorts. Furthermore, 100% of all interviewed PSAPs expressed challenges with the automated voice loop, which often covered the caller's own audio. A key 'aha!' moment was discovering that dispatchers had developed their own informal method for verifying incidents: they were using the user's post-event movement data as an indicator of a false alarm—a creative but unintended use of the feature." },
          { title: "Synthesizing and Delivering Recommendations", description: "I synthesized these findings into a detailed Telecommunicator Journey Map that illustrated the mindset, pain points, and opportunities at each stage of handling an automated alert. This artifact was crucial for building empathy and pinpointing specific opportunities, which I framed for leadership as: 1) Improving usability of automated information, 2) Empowering the user to more easily respond to the PSAP, and 3) Strengthening PSAP partnerships and feedback loops." }
        ],
        visuals: [
            { type: 'image', url: 'https://i.imgur.com/K5aW4Uv.png', caption: 'The Telecommunicator Journey Map for an unresponsive user, highlighting mindsets, pain points, and opportunities across the incident lifecycle.' }
        ],
        solution: "My research provided the first clear, data-backed picture of the false positive problem. Based on the insights, I delivered a set of strategic recommendations, including a proposal to use geofencing around ski resort boundaries to suppress false alarms. I also recommended the creation of a PSAP 'Center of Excellence' to build stronger relationships and create a direct feedback loop for ongoing issues.",
        outcome: "This research directly influenced the product roadmap. The geofencing recommendation was implemented (targeting chairlifts specifically) and ultimately led to a ~70% reduction in false activations at ski resorts, significantly reducing the burden on local emergency services. The discovery of dispatchers using movement data for verification also sparked a new internal conversation about providing more explicit and useful verification signals to our PSAP partners. While the Center of Excellence has not yet been implemented, it remains a key strategic proposal for improving the long-term health of the service ecosystem.",
        learnings: "This project taught me the importance of looking at the entire service ecosystem. The 'user' wasn't just the person with the device, but also the dispatcher on the other end of the line. Understanding their challenges and creative workarounds was key to identifying the most meaningful product opportunities. It proved that sometimes the most powerful insights come from observing how users adapt a feature for purposes you never intended."
      }
    },
    {
      id: 5,
      category: 'Academic Team Project: Business Strategy & Product Concept',
      title: 'NutriNeeds: A Meal Service for Specialized Medical Diets',
      description: 'A team-based academic project to design a new meal-kit service for users with chronic diseases, focusing on market analysis, business strategy, and product conceptualization.',
      imageUrl: 'https://i.imgur.com/sW6t7xG.png',
      tags: ['Business Strategy', 'Market Research', 'PESTLE Analysis', 'Product Concept', 'Team Collaboration'],
      details: {
        role: "As a key member of a four-person team at Carnegie Mellon's Integrated Innovation Institute, I contributed to all phases of this project, from initial market research to final product concept. My specific contributions included leading the PESTLE analysis, co-facilitating the Value Opportunity Analysis (VOA), and developing the core product requirements.",
        challenge: "The meal-kit market is crowded, yet our initial research identified a significant, underserved population: the millions of people with chronic diseases like diabetes or celiac disease who require specialized diets. The challenge was to design a new service that could meet their specific nutritional needs while addressing the primary reasons users abandon existing services: high cost and lack of variety.",
        process: [
          { title: "Market & Opportunity Analysis", description: "Our team began with a PESTLE analysis to understand the political, economic, social, and technological landscape of the meal-kit industry. We then used Value Opportunity Analysis to map the current state of the market and identify key gaps where a new service could provide unique value, specifically around health, ingredient quality, and emotional factors like confidence." },
          { title: "Defining the Product Concept", description: "Based on our analysis, we defined the concept for 'NutriNeeds,' a meal service that partners with healthcare professionals and leverages local grocery stores to deliver medically sound, affordable, and customizable meals. I led the effort to translate our VOA findings into a ranked set of product requirements that guided our design." },
          { title: "Business Model & User Experience", description: "We developed a business model centered on partnerships with healthcare providers and a multi-tiered subscription. I contributed to the UX conceptualization, focusing on a simple, clean UI that allows users to customize their health profiles and easily connect with a network of nutrition professionals." }
        ],
        visuals: [
           { type: 'image', url: 'https://i.imgur.com/sW6t7xG.png', caption: 'Our final solution concept, illustrating how NutriNeeds bridges the gap between dietary restrictions, community support, and convenience.' },
           { type: 'image', url: 'https://i.imgur.com/9q7y5rC.png', caption: 'High-fidelity mockups of the NutriNeeds app, showcasing the custom health and diet profile and the extensive recipe library.' }
        ],
        solution: "The final deliverable was a comprehensive business and product proposal for NutriNeeds. The concept addresses the core user needs of affordability and customization by integrating with local supply chains and focusing on personalized, dietician-approved plans.",
        outcome: "As an academic project, the outcome was a well-researched and validated product concept that demonstrates a rigorous, framework-driven approach to innovation. Our final presentation successfully made the case for a viable new entry into the meal-kit market by targeting a specific, high-need user segment.",
        learnings: "This team project was an excellent exercise in team-based collaboration and applying formal business strategy frameworks to a user-centered design problem. It highlighted the challenge of balancing deep user needs (like medical-grade nutritional accuracy) with business model realities (like cost and logistics). My key takeaway was the power of using frameworks like PESTLE and VOA to create alignment and make confident, evidence-based decisions as a team."
      }
    },
    {
      id: 6,
      category: 'Academic Team Project: Business Strategy & Product Concept',
      title: 'iCare Hub: A Health Assistant for Elderly Care',
      description: 'A team-based academic project to design, market, and launch a new hardware/software solution to help elderly patients better manage their healthcare.',
      imageUrl: 'https://i.imgur.com/gYxJ5rU.png',
      tags: ['Business Strategy', 'Marketing Plan', 'Product Launch', 'MVP Definition', 'Team Collaboration'],
      details: {
        role: "On a four-person team at Carnegie Mellon, I was responsible for defining the Minimum Viable Product (MVP) and leading the go-to-market strategy. My key contributions included mapping features to customer value, developing the multi-channel distribution strategy, and creating the promotional plan.",
        challenge: "Elderly patients often face significant challenges in managing their healthcare due to cognitive decline, language barriers, or difficulty navigating complex systems. Our team was tasked with designing a new product and service to empower this user group, helping them maintain independence and improve their quality of care.",
        process: [
          { title: "Market & Opportunity Analysis", description: "Our team began with market research and a competitive analysis to identify gaps in the current landscape of elderly care technology. We defined the core problem and used user personas, like 'Carol Lee,' to ground our work in a clear user need." },
          { title: "MVP & Feature Definition", description: "I led the process of defining the MVP feature set. This involved translating our research findings into a prioritized list of capabilities, focusing on core functions like a wellness check-in, on-demand access to health knowledge, AI-supported appointment summaries, and a real-time translator. I created a 'Features Mapped to Customer Value' matrix to ensure every feature had a clear benefit for the patient, provider, and caregiver." },
          { title: "Go-to-Market Strategy", description: "I then developed the comprehensive go-to-market plan. This included the distribution strategy, which outlined a direct-to-consumer model supplemented by key referral channels like healthcare providers and senior centers. I also created the promotional strategy, detailing the messaging, budget, and campaigns needed to build trust and drive adoption within our target demographic." }
        ],
        visuals: [
           { type: 'image', url: 'https://i.imgur.com/gYxJ5rU.png', caption: 'A wireframe of the iCare Hub smart display, designed to be an accessible, hands-free personal health assistant.' },
           { type: 'image', url: 'https://i.imgur.com/d8p9c7z.png', caption: 'The multi-channel distribution strategy I developed, leveraging both direct-to-consumer sales and trusted referrals from healthcare providers and community organizations.' }
        ],
        solution: "The final concept was 'iCare Hub,' a voice-first, AI-powered health assistant combining a simple home device and a mobile app. The solution centralizes health information, simplifies communication with providers, and provides peace of mind for patients and their families. The go-to-market strategy I created provides a clear roadmap for a phased launch, starting with pilot programs and scaling through strategic partnerships.",
        outcome: "As an academic exercise, the outcome was a complete, investment-ready proposal for a new product and business. The project demonstrated our team's ability to move from an initial problem statement to a detailed product, marketing, and financial plan.",
        learnings: "This team project was a valuable lesson in integrating business strategy with product design. My biggest takeaway was the importance of aligning the product's value proposition with a viable go-to-market strategy from day one. It's not enough to design a great product; you have to design a way for it to reach and be trusted by its intended users, especially when serving a vulnerable population."
      }
    }
  ];

  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const renderProcessSteps = (steps) => {
    return steps.map((step, index) => (
      <div key={index} className="mb-4">
        <h4 className="font-bold text-white text-lg mb-1">{step.title}</h4>
        <p className="text-slate-400">{step.description}</p>
      </div>
    ));
  };

  const renderVisuals = (visuals) => {
    if (!visuals || visuals.length === 0) return null;
    return (
      <div>
        <h3 className="text-white border-b border-slate-700 pb-2 mb-4">Key Visuals & Artifacts</h3>
        <div className="space-y-8">
          {visuals.map((visual, index) => (
            <div key={index} className="bg-slate-900 rounded-lg p-4">
              <img src={visual.url} alt={visual.caption} className="rounded-md w-full h-auto mb-3" />
              <p className="text-sm text-slate-400 text-center italic">{visual.caption}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const CaseStudyCard = ({ study, onClick }) => (
    <div className="bg-slate-900 rounded-lg overflow-hidden group cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
         onClick={() => onClick(study)}>
      <div className="relative">
        <img src={study.imageUrl} alt={study.title} className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white font-bold text-lg">View Case Study</p>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-blue-400 font-semibold mb-2">{study.category}</p>
        <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
        <p className="text-slate-400 text-sm mb-4 flex-grow">{study.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
            {study.tags.map(tag => (
                <span key={tag} className="bg-slate-700 text-slate-300 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
            ))}
        </div>
      </div>
    </div>
  );

  // --- Main Render Logic ---
  if (!isAuthenticated) {
    return (
      <PasswordGate
        handlePasswordSubmit={handlePasswordSubmit}
        passwordInput={passwordInput}
        setPasswordInput={setPasswordInput}
        error={error}
      />
    );
  }

  return (
    <div className="bg-slate-900 text-slate-300 font-sans leading-normal tracking-tight">
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white">Patrick Scanlan</a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-slate-300 hover:text-blue-400 transition-colors duration-300">{link.label}</a>
            ))}
          </nav>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-slate-800">
            <ul className="flex flex-col items-center py-4">
              {navLinks.map(link => (
                <li key={link.href} className="w-full text-center">
                  <a href={link.href} onClick={() => setIsMenuOpen(false)} className="block py-3 text-slate-300 hover:bg-slate-700 hover:text-blue-400 transition-colors duration-300">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center bg-slate-900">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4">
              UX Designer, Researcher & Strategist
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-400 mb-8">
              I translate user insights into strategic design decisions that solve complex problems and drive business growth.
            </p>
            <a href="#work" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 inline-flex items-center">
              View My Work <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-20 bg-slate-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
              <p className="text-slate-400 mt-2">A selection of projects that showcase my process and impact.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCaseStudies.map((study) => (
                <CaseStudyCard key={study.id} study={study} onClick={setSelectedCaseStudy} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Additional Work Section */}
        <section id="additional-work" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Additional Research & Strategy</h2>
                    <p className="text-slate-400 mt-2">Further examples of my work in complex problem spaces.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherCaseStudies.map((study) => (
                       <CaseStudyCard key={study.id} study={study} onClick={setSelectedCaseStudy} />
                    ))}
                </div>
            </div>
        </section>

        {/* Case Study Modal */}
        {selectedCaseStudy && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
              <button onClick={() => setSelectedCaseStudy(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white z-10">
                <X size={28} />
              </button>
              <img src={selectedCaseStudy.imageUrl.replace('600x400', '1200x600')} alt={selectedCaseStudy.title} className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-8 md:p-12">
                <p className="text-sm text-blue-400 font-semibold mb-2">{selectedCaseStudy.details.category || selectedCaseStudy.category}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{selectedCaseStudy.title}</h2>
                
                <div className="prose prose-invert max-w-none text-slate-300 space-y-8">
                    <div>
                        <h3 className="text-white border-b border-slate-700 pb-2 mb-4">My Role</h3>
                        <p className="text-slate-400">{selectedCaseStudy.details.role}</p>
                    </div>
                    <div>
                        <h3 className="text-white border-b border-slate-700 pb-2 mb-4">The Challenge</h3>
                        <p className="text-slate-400">{selectedCaseStudy.details.challenge}</p>
                    </div>
                     <div>
                        <h3 className="text-white border-b border-slate-700 pb-2 mb-4">The Process</h3>
                        {renderProcessSteps(selectedCaseStudy.details.process)}
                    </div>
                    
                    {selectedCaseStudy.details.visuals && renderVisuals(selectedCaseStudy.details.visuals)}

                    <div>
                        <h3 className="text-white border-b border-slate-700 pb-2 mb-4">The Solution</h3>
                        <p className="text-slate-400">{selectedCaseStudy.details.solution}</p>
                    </div>
                    <div>
                        <h3 className="text-white border-b border-slate-700 pb-2 mb-4">Outcome & Impact</h3>
                        <p className="text-slate-400">{selectedCaseStudy.details.outcome}</p>
                    </div>
                     <div>
                        <h3 className="text-white border-b border-slate-700 pb-2 mb-4">Key Learnings</h3>
                        <p className="text-slate-400">{selectedCaseStudy.details.learnings}</p>
                    </div>
                </div>
                
                <button onClick={() => setSelectedCaseStudy(null)} className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3">
                {/* To change your profile picture:
                  1. Add your image file (e.g., 'profile.jpg') to the 'public/images' folder.
                  2. Replace the 'src' value below with: process.env.PUBLIC_URL + '/images/profile.jpg'
                */}
                <img 
                  src= {process.env.PUBLIC_URL + '/SubjectLarge.jpeg'} 
                  alt="Your Name" 
                  className="rounded-full shadow-lg w-64 h-64 mx-auto object-cover" 
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My path to UX research started on a ridgeline, not in an office.</h2>
                <p className="text-slate-400 mb-4">
                  For years, my work has been in high-stakes environments—as a mountain guide, a Search and Rescue incident commander, and a professional avalanche forecaster. This background has shaped my approach as a senior researcher and strategist, giving me a unique ability to navigate ambiguity and lead teams through complex problem spaces. My core fascination is with how people and technology interact under pressure, and how well-designed products can help people make better decisions in high-stress situations.
                </p>
                <p className="text-slate-400 mb-4">
                  As a lifelong learner, I believe the most impactful solutions are built by teams that embrace rigorous inquiry and diverse perspectives. My role on a team is to foster that environment—to ask the challenging questions that ensure we're solving the right problem, not just the most obvious one. I excel at zooming out to define the strategic vision and then zooming in to guide the detailed execution, ensuring our work is both ambitious and achievable.
                </p>
                <p className="text-slate-400 mb-6">
                  I'm now formalizing my real-world experience at Carnegie Mellon's Integrated Innovation Institute, and I am looking to lead research and strategy in a domain where the stakes are high. My passion lies in optimizing human performance and safety—whether in the outdoors, health and wellness, or emergency services—by building meaningful products that users can trust when it matters most.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-slate-400 hover:text-blue-400"><Linkedin size={24} /></a>
                  <a href="#" className="text-slate-400 hover:text-blue-400"><Dribbble size={24} /></a>
                  <a href="#" className="text-slate-400 hover:text-blue-400"><Twitter size={24} /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-800">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Let's build something great together.</h2>
              <p className="text-slate-400 mt-2 mb-8">I'm currently available for new opportunities. If you have a project in mind or just want to connect, I'd love to hear from you.</p>
              <a href="mailto:pattscanlan@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 inline-block">
                Say Hello
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-8">
        <div className="container mx-auto px-6 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
           <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="hover:text-blue-400"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-blue-400"><Dribbble size={20} /></a>
              <a href="#" className="hover:text-blue-400"><Twitter size={24} /></a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
