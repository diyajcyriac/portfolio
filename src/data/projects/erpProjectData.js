import first from "../../assets/images/erp/hero.webp";
import second from "../../assets/images/erp/dashboard.webp";
import fourth from "../../assets/images/erp/report.webp";
import authentication from "../../assets/images/erp/authentication.webp";
import procurement from "../../assets/images/erp/procurement.webp";
import master from "../../assets/images/erp/master.webp";

const erpData = {
  id: "1",
  title: "Development and Optimization of a Full-Stack ERP System",
  subtitle:
    "A secure, scalable, role-based ERP platform built using the MERN stack to streamline inventory, procurement, authentication, reporting, and operational workflows.",
  client: "Personal Project",
  year: "2025",
  role: "Full-Stack Developer · System Architect · Security Implementation · UI/UX Integration",
  heroImage: first,
  skills: [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "ERP System Architecture",
  ],

  link: null,

  sections: [
    {
      title: "System Overview & Architecture",
      body:
        "• Architected and developed a **full-stack ERP system using the MERN stack (MongoDB, Express.js, React.js, Node.js)**.\n\n" +
        "• Designed a **modular RESTful API architecture** with scalable routing and middleware layers.\n\n" +
        "• Implemented **JWT-based authentication** within a secure client-server architecture.\n\n" +
        "• Structured a **relational MongoDB schema** connecting materials, suppliers, brands, manufacturers, and invoices.\n\n" +
        "• Applied **clean architecture principles, scalability patterns, and performance optimization strategies**.",
      image: second,
    },

    {
      title: "Master Data Management (Core ERP Modules)",
      body:
        "• Developed centralized **Master Data modules (Brand, Manufacturer, Supplier, Material)** with full CRUD functionality.\n\n" +
        "• Implemented **real-time GST, discount, taxable amount, and grand total calculations**.\n\n" +
        "• Applied **conditional business logic and dynamic form validation handling**.\n\n" +
        "• Enforced **backend schema validation and middleware-level data integrity checks**.\n\n" +
        "• Strengthened expertise in **data modeling, validation architecture, and enterprise-grade form systems**.",
      image: master,
    },

    {
      title: "Procurement, Inventory & Invoice Workflow Automation",
      body:
        "• Built a **Supplier Order Management system** with multi-line material handling and lifecycle tracking.\n\n" +
        "• Automated **tax, discount, and financial total calculations** ensuring transactional accuracy.\n\n" +
        "• Developed a **Supplier Invoice module with duplicate detection and attachment validation**.\n\n" +
        "• Implemented a **real-time inventory management system with reorder-level detection and stock indicators**.\n\n" +
        "• Secured procurement workflows using **Role-Based Access Control (RBAC) and backend middleware protection**.",
      image: procurement,
    },

    {
      title: "Dashboard, Reporting & Performance Optimization",
      body:
        "• Designed a **real-time operational dashboard** displaying approvals, pending orders, and stock alerts.\n\n" +
        "• Developed **advanced reporting modules with KPI visualizations and monthly trend analysis**.\n\n" +
        "• Optimized system performance using **server-side pagination, filtering, and structured API responses**.\n\n" +
        "• Implemented reusable **custom React hooks (useDashboardData, useReportData)** for clean state management.\n\n" +
        "• Conducted **functional, security, JWT validation, and role-restriction testing** to ensure enterprise reliability.",
      image: fourth,
    },

    {
      title: "Secure Authentication & Role-Based Access Control",
      body:
        "• Implemented **dual-token authentication (Access + Refresh Token) using JWT**.\n\n" +
        "• Secured credentials using **bcrypt hashing with salted encryption**.\n\n" +
        "• Developed **time-bound password reset flows using dynamically signed JWT tokens**.\n\n" +
        "• Enforced **Role-Based Access Control (ADMIN, SUPERVISOR, USER)** across frontend and backend.\n\n" +
        "• Strengthened expertise in **secure API design, authentication flows, and enterprise security architecture**.",
      image: authentication,
    },
  ],
};

export default erpData;
