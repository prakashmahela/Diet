import { Notice, StaffMember, Course, Activity, GalleryItem } from './types';

export const HERO_DATA = {
  title: "District Institute of Education & Training, Dimapur",
  subtitle: "Preparing competent teachers for elementary education in Nagaland.",
  description: "Established in 2006, DIET Dimapur operates under the State Council of Educational Research & Training (SCERT), Government of Nagaland. We deliver outstanding teacher-education, field-level research, academic supervision, professional workshops, and community education programmes.",
  images: {
    campus: "/src/assets/images/diet_dimapur_campus_1782190896385.jpg",
  }
};

export const NOTICES: Notice[] = [
  {
    id: "N001",
    title: "Official Admission Notification for 2-Year D.El.Ed Course (Session 2026-2028)",
    date: "2026-06-15",
    category: "Admission",
    important: true,
    refNo: "DIET/DMP/ADM/2026-04",
    content: "Applications are invited from eligible candidates for admission into the 2-Year Diploma in Elementary Education (D.El.Ed) Regular Course for the session starting August 2026. Application forms can be downloaded from our website or obtained from the office during working hours. Last date of submission is July 10, 2026."
  },
  {
    id: "N002",
    title: "D.El.Ed First Semester Examination Schedule & Admit Card Issuance",
    date: "2026-06-20",
    category: "Examination",
    important: true,
    refNo: "DIET/DMP/EXAM-11/26",
    content: "The First Semester terminal examination for D.El.Ed Regular Course is scheduled to commence from July 14, 2026. Admit cards will be distributed at the counter from July 1, 2026. All dues must be cleared prior to collecting admit cards."
  },
  {
    id: "N003",
    title: "Orientation Programme for newly recruited Primary School Teachers during School Internships",
    date: "2026-06-18",
    category: "Workshop",
    important: false,
    refNo: "DIET/DMP/T-WORK/26-02",
    content: "A 3-day regional Orientation and Induction Programme on Competency-Based Learning and Classroom Management will be conducted from June 28 to June 30, 2026 in the main seminar hall. Attendance is mandatory for all nominated primary school teachers."
  },
  {
    id: "N004",
    title: "Need-Based D.El.Ed (ODL Mode) Special Enrolment Verification",
    date: "2026-06-10",
    category: "Academic",
    important: false,
    refNo: "DIET/DMP/ODL-SEC/09",
    content: "In-service teachers admitted under the Open and Distance Learning (ODL) need-based programme are requested to submit their employment verification letters signed by the DIS/SDEO to the ODL nodal cell by June 28, 2026."
  },
  {
    id: "N005",
    title: "Release of National Education Policy (NEP) 2020 Action Research Report",
    date: "2026-06-05",
    category: "General",
    important: false,
    refNo: "DIET/DMP/RES-PUBL/2026",
    content: "DIET Dimapur's Research cell has successfully published its action research paper on 'Assessing Reading Fluency in Elementary Schools of Dimapur District.' Hardcopies are available in the library library shelf, and softcopies have been submitted to SCERT, Kohima."
  }
];

export const STAFF: StaffMember[] = [
  {
    id: "S001",
    name: "Alemla Jamir",
    designation: "Principal",
    qualification: "M.A. (English), M.Ed, UGC-NET",
    image: "/src/assets/images/alemla_jamir_principal_1782190909025.jpg",
    isLeadership: true,
    bio: "Smt. Alemla Jamir has over 18 years of experience in educational leadership, curriculum development, and school standard implementation. She has spearheaded multiple institutional reforms under SCERT Nagaland, focusing on teacher-trainee welfare, indigenous pedgagogies, and digital-classroom integration."
  },
  {
    id: "S002",
    name: "B. Rolland Ao",
    designation: "Vice Principal",
    qualification: "M.Sc (Mathematics), M.Ed",
    image: "/src/assets/images/rolland_ao_vice_principal_1782190924325.jpg",
    isLeadership: true,
    bio: "Shri B. Rolland Ao focuses on mathematics education and institutional administration. With long-standing experience in administering training programs, he ensures that the regular curriculum is supplemented with hands-on practice, action research methodologies, and continuous assessment systems."
  },
  {
    id: "S003",
    name: "James Sema",
    designation: "Nodal Officer / Senior Lecturer",
    qualification: "M.A. (History), M.Ed",
    department: "Program Advisory Board Cell",
    email: "james.sema@dietdimapur.ac.in",
    phone: "9856221729",
    isLeadership: false,
    bio: "Shri James Sema handles overall academic coordination and acts as the Nodal Officer of DIET Dimapur for admission, state-liaison, and grievance redressal."
  },
  {
    id: "S004",
    name: "Dr. K. Yepthomi",
    designation: "Senior Lecturer",
    qualification: "Ph.D. in Education, M.A. M.Ed",
    department: "Pre-Service Teacher Education (PSTE) Branch",
    email: "k.yepthomi@dietdimapur.ac.in",
    isLeadership: false
  },
  {
    id: "S005",
    name: "Mrs. Amenla Sangtam",
    designation: "Lecturer",
    qualification: "M.A. (Sociology), M.Ed",
    department: "Educational Technology (ET) Branch",
    email: "amenla.sang@dietdimapur.ac.in",
    isLeadership: false
  },
  {
    id: "S006",
    name: "Mr. Vizol Angami",
    designation: "Lecturer",
    qualification: "M.A. in Education, B.Ed",
    department: "Work Experience (WE) & Vocational Branch",
    email: "vizol.angami@dietdimapur.ac.in",
    isLeadership: false
  },
  {
    id: "S007",
    name: "Ms. Sharon Chophy",
    designation: "Lecturer",
    qualification: "M.Sc (Physics), M.Ed",
    department: "District Resource Unit (DRU) Branch",
    email: "sharon.chophy@dietdimapur.ac.in",
    isLeadership: false
  },
  {
    id: "S008",
    name: "Mr. Neikhriezo Kire",
    designation: "Lecturer",
    qualification: "M.A. (Geography), M.Ed",
    department: "Curriculum Material Development & Evaluation (CMDE)",
    email: "neikhrie.kire@dietdimapur.ac.in",
    isLeadership: false
  }
];

export const COURSES: Course[] = [
  {
    id: "C001",
    title: "Diploma in Elementary Education (D.El.Ed) - Regular Course",
    mode: "Regular",
    duration: "2 Years (divided into 4 Semesters)",
    intake: 50,
    eligibility: "Candidates must have cleared Higher Secondary School Certificate (Class 12) or its equivalent examination from a recognized Board with at least 50% marks in aggregate (45% for SC/ST/OBC candidates as per State Government reservation norms).",
    outline: "This course is systematically designed to equip pre-service teachers with pedagogical expertise, child development theories, instructional planning skills, work experience models, and direct classroom internships to master teaching primary and middle-school grades.",
    objectives: [
      "Develop understanding of child psychology and growth patterns.",
      "Cultivate interactive classroom management and lesson preparation habits.",
      "Acquire conceptual clarity across foundation languages, basic sciences, environmental studies, and core mathematics.",
      "Integrate regional art, local crafts, and work education into mainstream curriculum templates."
    ],
    fees: [
      { term: "First Semester Admission & Security Dep.", amount: "₹ 3,500" },
      { term: "Semester Tuition Fee", amount: "₹ 2,500" },
      { term: "Library & IT Infrastructure Fee", amount: "₹ 1,000" },
      { term: "Internal Examinations & Practical Lab Manual", amount: "₹ 1,300" },
      { term: "Student Association, Co-curricular & Identity Card", amount: "₹ 1,800" },
      { term: "Total Estimated First Semester Cost", amount: "₹ 10,100" }
    ]
  },
  {
    id: "C002",
    title: "Diploma in Elementary Education (D.El.Ed) - ODL Programme",
    mode: "ODL (Need-based)",
    duration: "2 Years",
    intake: 100,
    eligibility: "Specifically restricted to Untrained In-Service Teachers actively employed in Government or Govt-Aided Primary/Middle schools under SCERT / Department of School Education directives.",
    outline: "Our Open and Distance Learning (ODL) program is highly customized to provide academic support, training materials, and scheduled contact counseling programs on weekends. This guarantees optimal teacher qualification standard upgrade without hampering daily school routines.",
    objectives: [
      "Enhance pedagogical competence of existing untrained school teachers.",
      "Ensure compliant child safety rights and active pedagogical compliance across Dimapur's schools.",
      "Deliver flexible blended contact-hours with personal evaluation logs.",
      "Align with teacher professional qualification standards of Right to Education (RTE) mandate."
    ],
    fees: [
      { term: "Form Registration & Processing Fee", amount: "₹ 500" },
      { term: "Annual Support Material Delivery Fee", amount: "₹ 2,000" },
      { term: "Contact Centers Counseling Session Fee", amount: "₹ 1,500" },
      { term: "Semester Examination & Evaluation Fee", amount: "₹ 1,000" },
      { term: "Total Annual Estimated Cost (Subsidized)", amount: "₹ 5,000" }
    ]
  }
];

export const ACTIVITIES: Activity[] = [
  {
    id: "ACT01",
    title: "Teacher In-Service Capacity Building Training",
    description: "DIET Dimapur organizes rigorous week-long teacher empowerment workshops focusing on modern foundational literacy and numeracy (FLN) models, competency diagnostics, and smart interactive whiteboard techniques.",
    date: "June 2026",
    image: "/src/assets/images/diet_workshop_activity_1782190940401.jpg",
    impact: "Over 240 primary teachers trained across Dimapur district in active pedagogical strategies."
  },
  {
    id: "ACT02",
    title: "Action Research & School Diagnostic Studies",
    description: "Conducting systematic localized field studies inside government elementary schools to identify gaps in student vocabulary retention and develop remedial, cost-efficient learning aids using locally sourced materials.",
    date: "May 2026",
    image: "/src/assets/images/diet_library_research_1782190956877.jpg",
    impact: "Created 12 custom learning-aid kits distributed to 5 remote village learning circles as reference."
  },
  {
    id: "ACT03",
    title: "Community Awareness & Adult Education Initiatives",
    description: "Deploying regular pupil-teacher squads into surrounding villages (Virazouma, and neighborhood) to advocate for the Right to Education Act, digital literacy campaigns, sanitation hygiene tutorials, and active girl-child education enrollment.",
    date: "April 2026",
    image: "https://picsum.photos/seed/community/600/450",
    impact: "Positively impacted 40+ families with direct enrollment support and basic reading materials."
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: "G01",
    src: "/src/assets/images/diet_dimapur_campus_1782190896385.jpg",
    alt: "DIET Dimapur Administration Block",
    caption: "The elegant front campus lawn and main administrative building of DIET Dimapur, Virazouma.",
    category: "Campus"
  },
  {
    id: "G02",
    src: "/src/assets/images/diet_workshop_activity_1782190940401.jpg",
    alt: "Interactive workshop in progress",
    caption: "Pre-service teachers working on interactive child learning charts during an educational psychology workshop.",
    category: "Training"
  },
  {
    id: "G03",
    src: "/src/assets/images/diet_library_research_1782190956877.jpg",
    alt: "Trainees doing action research",
    caption: "Library resources and research section supporting active scholar projects and teaching logs.",
    category: "Academics"
  },
  {
    id: "G04",
    src: "https://picsum.photos/seed/science/800/600",
    alt: "Science Teaching Lab Equipment",
    caption: "Science Teaching laboratory providing modern diagnostic toolkits for class experiments.",
    category: "Academics"
  },
  {
    id: "G05",
    src: "https://picsum.photos/seed/computer/800/600",
    alt: "IT Learning Center",
    caption: "The Computer and Educational Technology Lab supporting digital evaluation training.",
    category: "Campus"
  },
  {
    id: "G06",
    src: "https://picsum.photos/seed/award/800/600",
    alt: "Annual Cultural Program",
    caption: "Annual sports and cultural exhibition fostering community values and creative arts under work experience.",
    category: "Events"
  }
];

export const FEE_TABS = {
  regular: {
    title: "D.El.Ed (Regular Course)",
    description: "Detailed break-up of academic expenditures for government-subsidized full-time regular candidates.",
    table: COURSES[0].fees
  },
  odl: {
    title: "D.El.Ed (ODL Mode)",
    description: "Need-based in-service teachers specialized training package. Most charges are government subsidized.",
    table: COURSES[1].fees
  }
};
