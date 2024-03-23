const courses = [
  {
    title: "Advanced Data Analysis Techniques",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1683141154082-324d296f3c66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdBy: 3,
    description:
      "Explore advanced data analysis techniques used by professionals in various industries. Learn how to analyze large datasets efficiently, extract meaningful insights, and make data-driven decisions. Topics include machine learning algorithms, predictive modeling, data visualization, and more. Suitable for data scientists, analysts, and business professionals looking to enhance their analytical skills.",
  },
  {
    title: "Strategic Marketing Management",
    thumbnail:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdBy: 7,
    description:
      "Master the principles of strategic marketing management and learn how to develop effective marketing strategies to drive business growth. This course covers market analysis, consumer behavior, branding, product development, pricing strategies, and promotional tactics. Gain practical insights and skills essential for marketing professionals and business owners.",
  },
  {
    title: "Cybersecurity Fundamentals",
    thumbnail:
      "https://images.unsplash.com/photo-1544890225-2f3faec4cd60?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdBy: 8,
    description:
      "Gain a solid understanding of cybersecurity fundamentals and learn how to protect digital assets from cyber threats. Topics include network security, cryptography, threat detection, incident response, and risk management. Suitable for IT professionals, security analysts, and anyone interested in safeguarding digital information.",
  },
  {
    title: "Financial Analysis for Business",
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdBy: 10,
    description:
      "Learn essential financial analysis techniques for evaluating business performance and making informed financial decisions. Topics include financial statement analysis, ratio analysis, cash flow forecasting, capital budgeting, and risk assessment. This course is ideal for finance professionals, business owners, and managers.",
  },
  {
    title: "Introduction to Python Programming",
    thumbnail:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdBy: 3,
    description:
      "Get started with Python programming language, one of the most versatile and widely used languages in the tech industry. Learn basic syntax, data types, control structures, functions, and object-oriented programming concepts. Build practical coding skills and lay the foundation for advanced Python development.",
  },
  {
    title: "Leadership and Management Strategies",
    thumbnail:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdBy: 10,
    description:
      "Develop essential leadership and management skills to effectively lead teams and drive organizational success. Topics include leadership styles, team dynamics, conflict resolution, decision-making, and organizational change management. Suitable for current and aspiring leaders in various industries.",
  },
  {
    title: "Web Development Fundamentals",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdBy: 4,
    description:
      "Learn the fundamentals of web development, including HTML, CSS, and JavaScript. Gain hands-on experience in building responsive and interactive web applications. Explore modern web development frameworks and tools to create dynamic and engaging websites. Suitable for beginners and aspiring web developers.",
  },
  {
    title: "Business Intelligence and Analytics",
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdBy: 3,
    description:
      "Discover how business intelligence and analytics can drive strategic decision-making and enhance business performance. Learn to leverage data visualization tools, analytics platforms, and predictive modeling techniques to extract actionable insights from data. Ideal for business professionals seeking to harness the power of data-driven insights.",
  },
  {
    title: "Cloud Computing Essentials",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1681487942927-e1a2786e6036?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdBy: 4,
    description:
      "Gain an understanding of cloud computing principles, architectures, and service models. Explore popular cloud platforms such as AWS, Azure, and Google Cloud. Learn to deploy, manage, and secure cloud-based applications and infrastructure. Suitable for IT professionals and business leaders interested in cloud technologies.",
  },
  {
    title: "Strategic Business Planning",
    thumbnail:
      "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdBy: 8,
    description:
      "Learn how to develop and execute strategic business plans to achieve organizational goals and objectives. Topics include SWOT analysis, goal setting, resource allocation, risk management, and performance measurement. Gain practical skills for creating competitive advantage and driving business growth.",
  },
  {
    title: "Machine Learning for Business",
    thumbnail:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdBy: 3,
    description:
      "Explore the applications of machine learning in business contexts, including predictive analytics, customer segmentation, recommendation systems, and fraud detection. Learn to apply machine learning algorithms to real-world problems and make data-driven decisions. Suitable for business analysts and data scientists.",
  },
  {
    title: "Financial Modeling and Valuation",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661740258370-67d4a99c154d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdBy: 10,
    description:
      "Master the art of financial modeling and valuation techniques used by finance professionals and investment analysts. Learn to build financial models, conduct valuation analysis, and assess investment opportunities. Gain practical skills for financial decision-making and corporate finance.",
  },
  {
    title: "Cybersecurity Risk Management",
    thumbnail:
      "https://images.unsplash.com/photo-1621072149347-f261706353c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdBy: 8,
    description:
      "Develop expertise in cybersecurity risk management and learn how to identify, assess, and mitigate cyber risks within organizations. Topics include risk assessment methodologies, security controls, incident response planning, and compliance frameworks. Suitable for cybersecurity professionals and risk managers.",
  },
  {
    title: "Entrepreneurship Essentials",
    thumbnail:
      "https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdBy: 7,
    description:
      "Gain practical insights into entrepreneurship and learn how to start and grow a successful business venture. Topics include idea generation, market research, business planning, funding options, and growth strategies. Suitable for aspiring entrepreneurs and small business owners.",
  },
  {
    title: "Data Science Fundamentals",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdBy: 4,
    description:
      "Discover the fundamentals of data science, including data wrangling, exploratory data analysis, statistical modeling, and machine learning. Learn to extract actionable insights from large datasets and communicate findings effectively. Suitable for aspiring data scientists and analysts.",
  },
];

const postCourseData = async () => {
  try {
    for (const course of courses) {
      const formData = await createFormData(course);
      const response = await fetch("http://localhost:3010/courses", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();
      console.log("Course added:", responseData);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const createFormData = async (course) => {
  const formData = new FormData();
  formData.append("title", course.title);
  formData.append("description", course.description);
  formData.append("createdBy", course.createdBy);

  try {
    // Download the image and append it to the FormData object
    const response = await fetch(course.thumbnail);
    const imageBlob = await response.blob();
    formData.append("thumbnail", imageBlob, "thumbnail.png");
  } catch (error) {
    console.error("Error downloading image:", error);
  }

  return formData;
};

postCourseData();
