export const BUSINESS_INFO = {
  brandName: 'Baba Sales',
  domain: 'cctvbaba.com',
  established: '2012',
  experienceYears: '12+',
  ceo: 'Devesh Agrawal',
  primaryPhone: '+91 94102 54350',
  secondaryPhone: '+91 7017511325',
  whatsappNumber: '919410254350',
  email: 'cctvagra1@gmail.com',
  hours: 'Monday – Sunday, 8:00 AM – 10:00 PM',
  gmbUrl: 'https://share.google/rSuRbsWFwzL10PjnT',
  offices: [
    {
      id: 'kamla-nagar',
      label: 'Head Office · Kamla Nagar',
      address:
        'Agrasen Road, near Nature Resort, Renuka Bagh, Bhur Ka Bagh, G.G. Puram, Kamla Nagar, Agra, Uttar Pradesh 282005',
    },
    {
      id: 'sanjay-place',
      label: 'Commercial Branch · Sanjay Place',
      address:
        'G-24, Block 17, Cloth Market (Kapda Market), Near G.G. Hospital, Sanjay Place, Agra, Uttar Pradesh 282002',
    },
  ],
};

export const HERO_MEDIA = {
  cctv: '/images/hero-cctv.jpg',
  classroom: '/images/smart-classroom.jpg',
  biometric: '/images/biometric-access.jpg',
  server: '/images/enterprise-server.jpg',
};

export const KPI_METRICS = [
  { value: '12+', label: 'Years of Experience', detail: 'Serving Agra & UP since 2012' },
  { value: '500+', label: 'Projects Delivered', detail: 'Residential, retail & campus' },
  { value: '50+', label: 'Institutional Clients', detail: 'Defence, universities & GeM' },
  { value: '24×7', label: 'Support & AMC', detail: 'In-house technical team' },
];

export const AUTHORIZED_BRANDS = [
  'CP PLUS',
  'Hikvision',
  'Prama',
  'Matrix',
  'Honeywell',
  'PeopleLink',
  'Newline',
  'eSSL',
  'RealTime',
  'ERD',
  'Study & Learn',
];

export const SECURITY_RISK_PROFILES = [
  {
    id: 'home',
    label: 'Home / Apartment',
    riskScore: '8.5 / 10',
    riskPercent: 85,
    severityLabel: 'High Exposure',
    potentialLoss: 'Family Safety & ₹2–15 Lakh',
    summary:
      'Unmonitored gates, blind balconies, and unverified visitors leave families exposed during work hours or travel. Video door phones and night-vision perimeter cameras deter intrusion before entry occurs.',
    vulnerabilities: [
      'Unverified doorstep entry and parcel drop-offs',
      'Dark perimeter corners and rear parking blind spots',
      'No mobile alert or recorded evidence during travel',
    ],
    recommendations: [
      'Full-colour night-vision perimeter CCTV',
      'Smart Video Door Phone (VDP) with intercom',
      'Encrypted mobile app remote playback',
      'Cloud + local NVR dual backup',
    ],
  },
  {
    id: 'shop',
    label: 'Shop / Showroom',
    riskScore: '10 / 10',
    riskPercent: 100,
    severityLabel: 'Critical Exposure',
    potentialLoss: '₹5–50 Lakh Inventory Risk',
    summary:
      'Retail theft, cash-counter discrepancies, and after-hours burglary silently drain margins every month. Showrooms with POS-integrated surveillance report up to 60% fewer shrinkage losses.',
    vulnerabilities: [
      'Unmonitored billing counters and inventory storerooms',
      'After-hours shutter tampering without instant alerts',
      'Disputes over cash handling or customer returns',
    ],
    recommendations: [
      'POS-overlaid HD cash counter cameras',
      'Night-vision perimeter & shutter CCTV',
      'Biometric staff attendance & stockroom lock',
      'Fire alarm + intrusion hooter alerts',
    ],
  },
  {
    id: 'school',
    label: 'School / University',
    riskScore: '9.5 / 10',
    riskPercent: 95,
    severityLabel: 'Critical Exposure',
    potentialLoss: 'Student Safety & Exam Integrity',
    summary:
      'Large educational campuses require continuous corridor oversight, tamper-proof examination hall monitoring, and verified staff attendance to meet CBSE, UGC, and university audit mandates.',
    vulnerabilities: [
      'Unmonitored campus gates, hostels, and bus bays',
      'Examination malpractice and paper custody gaps',
      'Outdated chalk/projector classrooms lowering engagement',
    ],
    recommendations: [
      'Campus-wide IP CCTV with centralized NVR wall',
      '4K Interactive Flat Panels (Newline / PeopleLink)',
      'Biometric faculty attendance & gate logs',
      'Campus Public Address & fire alarm network',
    ],
  },
  {
    id: 'office',
    label: 'Office / Corporate',
    riskScore: '9.0 / 10',
    riskPercent: 90,
    severityLabel: 'Severe Exposure',
    potentialLoss: '₹10–80 Lakh Data & Payroll Leak',
    summary:
      'Proxy attendance, unauthorized server room entry, and unencrypted LAN cabling put payroll accuracy and sensitive business records at daily risk.',
    vulnerabilities: [
      'Manual register errors and buddy-punching attendance',
      'Unrestricted physical access to accounts & server racks',
      'Network bottlenecks disrupting cloud & video workflows',
    ],
    recommendations: [
      'Face + fingerprint biometric access control',
      'Structured Cat6/fiber LAN & secured server rack',
      'Boardroom interactive conferencing panels',
      'Commercial laptops/desktops under annual AMC',
    ],
  },
  {
    id: 'govt',
    label: 'Govt. Institution',
    riskScore: '10 / 10',
    riskPercent: 100,
    severityLabel: 'Critical Exposure',
    potentialLoss: 'Compliance & National Asset Security',
    summary:
      'Defence stations, public offices, and institutes of national importance require STQC/NDAA-aligned hardware, zero-downtime redundancy, and GeM-compliant tender documentation.',
    vulnerabilities: [
      'Perimeter intrusion along wide-acreage boundaries',
      'Strict tender compliance & audit trail requirements',
      'High-availability uptime expectations with rapid SLAs',
    ],
    recommendations: [
      'Long-range IR & ANPR perimeter IP cameras',
      'GeM & Udyam verified bulk hardware procurement',
      'Multi-zone fire alarm & emergency PA system',
      'Dedicated local engineering SLA & AMC',
    ],
  },
];

export const SERVICES_LIST = [
  {
    number: '01',
    id: 'cctv-surveillance',
    title: 'CCTV & AI Surveillance Systems',
    shortDesc: 'IP & HD cameras, night-vision perimeter coverage, VDP, and mobile remote viewing.',
    fullDesc:
      'End-to-end surveillance architecture engineered for homes, showrooms, university campuses, and defence perimeters. Every cable run, junction box, and NVR rack is installed by our own trained Agra technicians.',
    brands: ['CP PLUS', 'Hikvision', 'Prama', 'Honeywell'],
    deliverables: [
      '2MP to 8MP 4K IP & HD dome/bullet/PTZ cameras',
      'Color night-vision & smart motion perimeter alerts',
      'Video Door Phones (VDP) for residential & office entry',
      'Centralized NVR control room displays & mobile app setup',
    ],
    image: '/images/hero-cctv.jpg',
  },
  {
    number: '02',
    id: 'biometric-access',
    title: 'Biometric Attendance & Access Control',
    shortDesc: 'Fingerprint, facial recognition, RFID cards, and electromagnetic door automation.',
    fullDesc:
      'Eliminate buddy-punching and restrict unauthorized access to server rooms, laboratories, and administrative blocks with cloud-synced biometric terminals.',
    brands: ['eSSL', 'Matrix', 'RealTime'],
    deliverables: [
      'Touchless AI facial recognition & fingerprint machines',
      'Payroll software & multi-branch attendance sync',
      'Electromagnetic locks, glass door brackets & exit switches',
      'Visitor log integration for schools & factories',
    ],
    image: '/images/biometric-access.jpg',
  },
  {
    number: '03',
    id: 'interactive-panels',
    title: 'Interactive Flat Panels & Smart Classrooms',
    shortDesc: '4K touch panels from Newline, PeopleLink & Study & Learn for colleges and boardrooms.',
    fullDesc:
      'Modernize lecture halls, coaching institutes, and executive conference rooms with anti-glare 4K multi-touch interactive flat panels, wireless screen casting, and studio audio.',
    brands: ['Newline', 'PeopleLink', 'Study & Learn'],
    deliverables: [
      '65", 75", and 86" 4K UHD multi-touch interactive panels',
      'Built-in Android + OPS Windows dual-OS teaching workflow',
      '4K PTZ lecture capture cameras & conferencing soundbars',
      'On-campus faculty training and wall/trolley mounting',
    ],
    image: '/images/smart-classroom.jpg',
  },
  {
    number: '04',
    id: 'enterprise-it',
    title: 'Laptops, Desktops & Enterprise IT Supply',
    shortDesc: 'Bulk institutional hardware procurement with OEM warranty and GeM compliance.',
    fullDesc:
      'Reliable commercial computing supply for university computer labs, government departments, and corporate offices — backed by transparent GST invoicing and GeM portal fulfillment.',
    brands: ['ERD', 'GeM Authorized OEMs'],
    deliverables: [
      'Bulk commercial laptops, All-in-One PCs & lab desktops',
      'UPS backup, power adapters & surge protection (ERD)',
      'GeM bid participation & Udyam MSME documentation',
      'Pre-deployment OS imaging & AMC hardware support',
    ],
    image: '/images/enterprise-server.jpg',
  },
  {
    number: '05',
    id: 'networking-servers',
    title: 'Networking & Server Infrastructure',
    shortDesc: 'Structured Cat6/fiber cabling, managed PoE switches, racks, and campus Wi-Fi.',
    fullDesc:
      'A surveillance or smart-classroom deployment is only as reliable as the network beneath it. We design neat, labeled, interference-free structured cabling backbones built to last years.',
    brands: ['CP PLUS', 'Honeywell', 'Matrix'],
    deliverables: [
      'Cat6 / Armored OFC fiber optic campus backbone cabling',
      'Wall-mount & floor-standing 9U to 42U server racks',
      'Managed gigabit PoE switches & enterprise Wi-Fi access points',
      'Patch panel termination, port labeling & continuity testing',
    ],
    image: '/images/enterprise-server.jpg',
  },
  {
    number: '06',
    id: 'fire-alarm-pa',
    title: 'Fire Alarm & Public Address Systems',
    shortDesc: 'Addressable smoke/heat detection, hooters, and campus-wide PA announcement systems.',
    fullDesc:
      'Life-safety compliance for schools, hospitals, hotels, and multi-storey offices in Agra — integrating conventional or addressable fire detection with clear zone-wise public address paging.',
    brands: ['Honeywell', 'Matrix', 'CP PLUS'],
    deliverables: [
      'Multi-zone fire alarm control panels & smoke/heat detectors',
      'Manual call points (MCP), strobes & high-decibel hooters',
      'Zone amplifiers, ceiling/horn speakers & paging microphones',
      'Periodic inspection & Fire NOC readiness testing',
    ],
    image: '/images/biometric-access.jpg',
  },
];

export const CLIENT_CASE_STUDIES = [
  {
    id: 'agra-air-force',
    institution: 'Agra Air Force Station',
    sector: 'Defence & Govt',
    location: 'Agra, Uttar Pradesh',
    year: 'Ongoing Institutional Partner',
    scope: 'Perimeter Surveillance, Entry Gate Monitoring & AMC',
    challenge:
      'Wide-perimeter visibility across day/night transitions and strict compliance with defence procurement protocols with zero tolerance for system downtime.',
    solution:
      'Deployed high-durability outdoor IP night-vision cameras, armored cabling conduits, and redundant NVR storage supported by priority in-house technician SLAs.',
    outcome: '100% continuous perimeter recording coverage with rapid on-site preventative maintenance.',
    testimonialQuote:
      'Baba Sales executed every stage — from site survey to clean conduit cabling and timely AMC response — with complete discipline and reliability.',
    attributedBy: 'Station Engineering & Works Office',
    attributedRole: 'Defence Facility Maintenance Wing · Agra',
  },
  {
    id: 'agra-university',
    institution: 'Dr. Bhimrao Ambedkar University (Agra Univ)',
    sector: 'Universities & EdTech',
    location: 'Paliwal Park & Central Campus, Agra',
    year: 'Multi-Phase Deployment',
    scope: 'Exam Hall CCTV, Biometric Attendance & IT Infrastructure',
    challenge:
      'Transparent examination monitoring across multiple halls and reliable staff attendance tracking across administrative departments.',
    solution:
      'Installed centralized IP CCTV surveillance feeds, high-capacity NVR archival storage, and biometric attendance machines integrated with campus administration.',
    outcome: 'Audit-ready examination footage archival and verified daily staff attendance logs.',
    testimonialQuote:
      'Their local Agra engineering team understands university examination timelines and always delivers installations before deadline.',
    attributedBy: 'Campus Administration & IT Cell',
    attributedRole: 'University Procurement Committee · Agra',
  },
  {
    id: 'khandari-campus',
    institution: 'Khandari Campus, Agra University',
    sector: 'Universities & EdTech',
    location: 'Khandari, Agra',
    year: 'Smart Campus Upgrade',
    scope: 'Interactive Flat Panels, Academic Block CCTV & Structured LAN',
    challenge:
      'Engineering and science departments needed bright, lag-free digital teaching panels and reliable corridor surveillance across multi-floor academic buildings.',
    solution:
      'Supplied and wall-mounted 4K Interactive Flat Panels alongside structured Cat6 LAN networking and IP dome cameras across lecture corridors.',
    outcome: 'Modernized digital lecture delivery with zero projector bulb maintenance overhead.',
    testimonialQuote:
      'From interactive panel demonstrations for faculty to neat rack cabling, Baba Sales handled the entire technical handover seamlessly.',
    attributedBy: 'Departmental Academic Coordinator',
    attributedRole: 'Khandari Academic Complex · Agra',
  },
  {
    id: 'mahendra-pratap-singh-university',
    institution: 'Raja Mahendra Pratap Singh University (Aligarh)',
    sector: 'Universities & EdTech',
    location: 'Aligarh, Uttar Pradesh',
    year: 'Institutional Supply & Integration',
    scope: 'Smart Classroom Panels, Biometric Access & Enterprise IT Supply',
    challenge:
      'Needed GeM-compliant procurement and dependable regional support for digital classroom hardware, biometric terminals, and commercial computing units.',
    solution:
      'Executed end-to-end GeM order fulfillment covering interactive panels, eSSL/Matrix biometric units, and commercial workstations with OEM warranty.',
    outcome: 'Seamless GeM compliance and active regional after-sales support within hours.',
    testimonialQuote:
      'Rarely do you find a supplier who combines authentic GeM tender compliance with genuine post-installation engineering support.',
    attributedBy: 'Institutional Procurement & Lab In-Charge',
    attributedRole: 'Academic Infrastructure Division · Aligarh',
  },
  {
    id: 'iiit-lucknow',
    institution: 'IIIT Lucknow',
    sector: 'Universities & EdTech',
    location: 'Lucknow, Uttar Pradesh',
    year: 'Institute of National Importance',
    scope: 'High-Density Campus Surveillance & Enterprise IT Solutions',
    challenge:
      'A premier technology institute requiring enterprise-grade network surveillance reliability, structured cabling standards, and verified hardware specifications.',
    solution:
      'Supplied and commissioned enterprise IP surveillance nodes, PoE switching infrastructure, and institutional IT hardware tailored to technical benchmarks.',
    outcome: 'High-uptime campus surveillance backbone meeting national-institute audit standards.',
    testimonialQuote:
      'Baba Sales matched our technical specifications accurately and maintained transparent communication from tender award to commissioning.',
    attributedBy: 'Campus Infrastructure & Security Team',
    attributedRole: 'IIIT Lucknow · Uttar Pradesh',
  },
];

export const GMB_VIDEOS = [
  {
    id: 'vid-cctv-perimeter',
    title: 'Night-Vision IP CCTV Installation Walkthrough in Agra',
    category: 'CCTV & Surveillance',
    duration: '02:18',
    publishedLabel: 'GMB Featured Reel',
    summary:
      'See how our in-house engineers route weatherproof PVC conduits, terminate PoE switches, and calibrate full-color night-vision cameras for zero blind spots.',
    keyTakeaways: [
      'Concealed conduit routing protects wiring from monsoon & tampering',
      'Color night-vision captures license plates & faces in low light',
      'Live mobile app handover & NVR playback training on day one',
    ],
    thumbnail: '/images/hero-cctv.jpg',
    youtubeUrl: '',
    driveUrl: '',
  },
  {
    id: 'vid-smart-classroom',
    title: '4K Interactive Flat Panel Live Demo for Universities & Coaching',
    category: 'Smart Classrooms',
    duration: '03:05',
    publishedLabel: 'GMB Product Spotlight',
    summary:
      'A practical demonstration of Newline & PeopleLink 4K interactive panels — covering multi-touch annotation, wireless screen sharing, and dual-OS switching.',
    keyTakeaways: [
      'Zero shadow glare under bright classroom tube lights & windows',
      'Save & share annotated lecture PDFs directly with students',
      'Available on GeM for government schools & universities',
    ],
    thumbnail: '/images/smart-classroom.jpg',
    youtubeUrl: '',
    driveUrl: '',
  },
  {
    id: 'vid-biometric-access',
    title: 'Touchless Facial & Fingerprint Biometric Setup for Offices',
    category: 'Biometric & Access',
    duration: '01:52',
    publishedLabel: 'GMB Awareness Clip',
    summary:
      'How eSSL and Matrix biometric terminals eliminate manual register errors, automate shift payroll, and lock sensitive server or store rooms.',
    keyTakeaways: [
      'Sub-second facial recognition works even in low-light lobbies',
      'Instant Excel/HRMS attendance export across multiple branches',
      'Fail-safe electromagnetic door lock integration',
    ],
    thumbnail: '/images/biometric-access.jpg',
    youtubeUrl: '',
    driveUrl: '',
  },
  {
    id: 'vid-rack-command',
    title: 'Inside an Institutional NVR Control Room & Structured Server Rack',
    category: 'Institutional Walkthroughs',
    duration: '02:44',
    publishedLabel: 'GMB Case Study',
    summary:
      'Behind the scenes of a clean 24U network rack build with labeled Cat6 patch panels, UPS surge protection, and 32-channel NVR wall monitoring.',
    keyTakeaways: [
      'Labeled patch ports cut troubleshooting time from hours to minutes',
      'Dedicated online UPS prevents hard-drive corruption during power cuts',
      'Built for Agra colleges, hospitals, and commercial complexes',
    ],
    thumbnail: '/images/enterprise-server.jpg',
    youtubeUrl: '',
    driveUrl: '',
  },
];
