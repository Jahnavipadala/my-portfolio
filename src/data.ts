import { Project, Skill } from './types';

export const projects: Project[] = [
  
  {
  id: 'chittigpt',
  title: 'ChittiGPT – AI Agent Automation Platform',
  summary:
    'This project implemented an Intelligent Employee Assistant Agent powered by a LangGraph ReAct workflow, serving as a unified conversational interface for all administrative needs. It dynamically routes user queries to a diverse toolkit (including a specialized RAG tool for policy and direct APIs for HRMS actions), significantly reducing support overhead and enhancing employee self-service efficiency. This achieved zero-click intelligence, allowing employees to execute complex tasks and retrieve critical data instantly through a single chat window.',
  tools: [
    'Python',
    'FastAPI',
    'LangChain',
    'LangGraph',
    'OpenAI API',
    'Groq',
    'Llama Models',
    'pgvector',
    'Docker',
    'GitHub'
  ],
  coverImage: 'https://i.postimg.cc/PrmdGSp5/what-is-GPT.png',

  businessProblem: [
  'Enterprises lose productivity and incur higher operational costs due to fragmented systems and manual workflows.',
  
  'Employees waste time navigating multiple complex tools (HRMS, Finance, Timesheets) to complete simple tasks.',
  
  'HR and IT teams are overloaded with repetitive Level-1 queries, limiting their focus on strategic initiatives.',
  
  'Critical policies are hard to search, leading to inconsistent answers, slower decisions, and compliance risks.',
  
  'Legacy systems lack automation and a unified interface, creating poor user experience and operational inefficiency.',
  
  'A centralized AI system was needed to understand natural language, automate multi-step tasks, integrate with internal apps, and deliver instant, accurate responses.'
],


  businessObjective: [
    'To deploy a cutting-edge, conversational AI assistant that unifies access to all employee administrative and informational tools through a single, natural language interface.',
    'Enable a scalable agent architecture where new tools and skills can be added without redesigning the system.'
  ],

  constraints: [
    'Ensuring LLM responses remain accurate while interacting with multiple tools.',
    'Managing latency when handling complex, multi-step workflows.',
    'Maintaining data privacy for internal knowledge base and user prompts.',
    'Handling varied query formats coming from employees.'
  ],

  

  projectArchitecture: {
    description:
      'The architecture is built on modular agents using LangGraph, integrating LLM reasoning, vector search, custom tool execution, and FastAPI backend. The system supports parallel and dynamic decision paths, improving reliability and extensibility.',
    diagramUrl: 'https://i.postimg.cc/YSVyXwxW/Gemini-Generated-Image-r5g3b1r5g3b1r5g3.png'
  },

  methodology: [
    'Designed the agent structure using LangGraph to enable deterministic workflows with branching logic.',
    'Integrated LLMs (OpenAI, Groq, Llama) to handle reasoning, tool planning, and natural language responses.',
    'Created custom tools for policy search, SQL database queries, email drafting, document extraction, and action execution.',
    'Implemented vector embeddings using FAISS/Chroma for semantic search of internal documents.',
    'Built a FastAPI backend to expose agent endpoints with streaming responses.',
    'Implemented a memory layer for conversational context and short-term state management.',
    'Added error-handling, timeouts, retry strategies, and logging for reliability.',
    'Containerized application using Docker and deployed on internal servers.',
    'Example flow:',
    'Ingestion: The user asks a question in natural language.',
    'Routing: LangGraph identifies intent and selects the appropriate tool.',
    'Example: "What is maternity leave policy?" → RAG tool.',
    'Example: "Apply for sick leave today." → Leave application tool.',
    'Example: "what is the productivity of my employees?" → Prohance analytics tool.',
    'Execution: The specific tool executes the task (querying a vector DB or hitting an API).',
  'Synthesis: The Agent receives the tools raw data and generates a polite,human-readable readable response confirming the action or providing the answer.'  
  ],

  keyLearnings: [
    'Understood deep integration of FastAPI, vector databases, and custom tools to build production-ready AI workflows.',
    'Gained strong hands-on experience with LangGraph and multi-agent system design.',
    'Learned how to connect LLMs with real tools to perform actual business actions.',
    'Improved architectural thinking for scalable AI systems supporting both deterministic and generative workflows.'
  ],

  techStack: [
    {
      category: 'Programming',
      items: ['Python', 'FastAPI']
    },
    {
      category: 'Databases',
      items: ['PostgresSQL', 'pgvector']
    },
    {
      category: 'AI & LLM Engineering',
      items: [
        'Agents Creation',
        'LangGraph',
        'LangChain',
        'OpenAI API',
        'Groq',
        'Llama Models'
      ]
    },
    {
      category: 'Deployment & DevOps',
      items: ['Docker', 'GitHub', 'Linux / WSL']
    }
  ],

  dashboardUrl:
    'https://www.canva.com/design/DAGxxxxxxx/your-chitti-gpt-demo-link'
}
,
 
  {
  id: 'welpun-rejection-reporting',
  title: 'Industrial Rejection Reports Automation System',
  summary: 'Developed a Streamlit-based application that allows users to upload rejection pipe data, automatically extract structured information from Excel sheets, and store it in MySQL without duplication.',
  tools: ['Python', 'Streamlit', 'Pandas', 'MySQL', 'SQLAlchemy', 'Microsoft Excel'],
  coverImage: 'https://i.postimg.cc/HLSWQZG8/9dcf9e0f-16ed-4495-a8f4-98f4c9cba131.jpg',

  businessProblem: [
    'The quality team needed a frictionless way to record daily pipe rejection reports. Existing manual entry processes were slow, prone to duplication, and caused frequent data inconsistencies.',
    'Tracking and validating rejection reasons across multiple production stages required an automated, reliable system.'
  ],

  businessObjective: [
    'Automate the ingestion of rejection-related production data from Excel sheets.',
    'Eliminate duplicate entries and ensure accurate storage in the MySQL database.',
    'Provide a simple interface for non-technical users to upload and validate rejection data.'
  ],

  constraints: [
    'Excel files contained multiple sheets with varying formats, requiring robust parsing logic.',
    'Duplicate detection needed to be precise to avoid overwriting or missing important records.',
    'Users needed instant feedback on upload results and data validity.'
  ],

  projectArchitecture: {
    description: 'A Streamlit frontend takes the Excel file upload, processes the three sheets using Pandas, performs data validation and deduplication, and stores the cleaned data in MySQL using SQLAlchemy ORM. Logging and exception handling ensure reliability.',
   
  methodology: [
    'Designed a user-friendly Streamlit interface allowing operators to upload Excel files containing ProdRej, DIP1, and DIP2 sheet data.',
    'Used Pandas to read and validate multiple sheets while ensuring consistent column structure.',
    'Implemented record-level deduplication by checking existing database entries before insertion.',
    'Configured MySQL tables (prodrej, dip1, dip2) specifically mapped to each sheet structure.',
    'Used SQLAlchemy ORM for safe, structured database transactions.',
    'Added validation to ensure only clean, complete rows are inserted.',
    'Provided success/error messages in real time so users could confirm upload accuracy.',
    'Created a logging mechanism to trace uploads, rejected rows, duplicates, and system issues.'
  ],

  keyLearnings: [
    'Gained expertise in building data ingestion pipelines with automated validation.',
    'Learned effective strategies for detecting and preventing duplicate database entries.',
    'Enhanced experience with Streamlit UI/UX improvements for industrial use cases.',
    'Understood real-world production data challenges such as inconsistent formatting.'
  ],

  techStack: [
    {
      category: 'Programming',
      items: ['Python']
    },
    {
      category: 'Framework',
      items: ['Streamlit']
    },
    {
      category: 'Data Processing',
      items: ['Pandas', 'OpenPyXL']
    },
    {
      category: 'Database',
      items: ['MySQL', 'SQLAlchemy']
    },
    {
      category: 'Tools',
      items: ['Excel']
    }
  ],

  dashboardUrl: 'https://www.canva.com/design/DAGh_kGrQhw/2zD0jgNS6BhUOeh8IUERbQ/view?utm_content=DAGh_kGrQhw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbff4127822'
},

 {
    id: 'Coal Price Analysis',
    title: 'Coal Price Analysis For steel manufacturer',
    summary: 'Analyzed coal price trends using Python, performed data cleaning and EDA with Pandas and NumPy, visualized correlations with Matplotlib and Seaborn, and created interactive dashboards for insights using Power BI.',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Power BI', 'MySQL','Looker studio'],
    coverImage: 'https://i.postimg.cc/mk3S20Ms/maxresdefault.jpg',
    businessProblem: [
      'Coal procurement is a critical cost center for steel manufacturing companies, but coal prices are highly volatile due to dynamic global factors such as crude oil price fluctuations, geopolitical events, and international trade disruptions. This volatility makes it difficult for the procurement team to forecast prices accurately, leading to unoptimized purchasing decisions, increased risk exposure, and reduced profit margins.','Despite having access to market, commodity, and weather data, the organization lacked a cohesive data-driven approach to monitor coal price trends.The absence of actionable insights resulted in missed opportunities to hedge or bulk purchase during favorable market conditions.'
    ],
    businessObjective: [
      'To reduce coal procurement costs and improve profit margins by leveraging data-driven insights'
    ],
    constraints: [
      'Sudden shifts due to geopolitical events, wars, or trade restrictions can drastically affect coal prices.'
    ],
    
    projectArchitecture: {
      description: 'The architecture follows a layered approach for data processing and analysis, integrating multiple tools',
      diagramUrl: 'https://i.postimg.cc/5NFrs0k1/Screenshot-2025-04-01-121642.png'
    },
    methodology: [
      'Collected historical coal prices, crude oil prices, weather data, and stock prices from client sources.',
      'Loaded raw data into a structured SQL database to enable efficient querying and transformation.',
      'Cleaned the data by removing duplicates, handling missing values using forward fill, and performing type conversions for numerical and date fields.',
      'Conducted exploratory data analysis in Python to identify trends, correlations, and volatility patterns in coal prices.',
      'Found strong correlations between coal and crude oil prices, as well as synchronized movement among different coal grades.',
      'Confirmed minimal influence of regional weather data on coal pricing trends.',
      'Created dynamic dashboards using Power BI and Google Looker Studio to visualize price trends, correlations, and key performance indicators.',
      'Enabled interactive filtering by coal grade, region, and date range to support procurement decisions.',
      'Generated actionable insights such as using a unified buying strategy across grades, tracking oil as a leading indicator, and leveraging hedging strategies.',
      'Presented findings to stakeholders through a structured slide deck with visuals, insights, and business recommendations.'
    ],
    keyLearnings: [
      'Learned how to handle real-world, messy datasets with missing values, outliers, and inconsistent formats.',
      'Improved storytelling skills by translating technical insights into clear, business-oriented recommendations.',
      'Learned how to communicate insights effectively to non-technical stakeholders and support strategic procurement decisions.',
      'Gained hands-on experience with end-to-end data workflows, from data collection and cleaning to analysis and visualization.'
    ],
    techStack: [
      {
        category: 'Programming',
        items: ['Python','FastAPI', 'Streamlit']
      },
      {
        category: 'Data Engineering',
        items: ['Pandas','pyspark','SQL','prefect',
      'Airflow',
      'Vector DB','mongoDB']
      },
      {
    category: 'AI & LLM Engineering',
    items: [
      'Agents creation',
      'LangGraph',
      'LangChain',
      'OpenAI API',
      'Llama Models',
    ],
  },
      {
        category: 'Database',
        items: ['PostgreSQL','MySQL']
      },
      {
        category: 'Data Analytics Tools',
        items: ['Power BI','Looker Studio']
      }
    ],
    dashboardUrl: 'https://www.canva.com/design/DAGm3Qw1_2U/TdX90sfqZEWFCOdQ9rKiyg/view?utm_content=DAGm3Qw1_2U&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4b7377aae0'
  },

];

export const skills: Skill[] = [
  {
    category: 'Programming & Backend',
    icon: '💻',
    items: ['Python', 'FastAPI', 'Streamlit'],
    description: 'Building scalable backend services, APIs, and automation workflows.'
  },

  {
    category: 'Data Engineering',
    icon: '🛠️',
    items: [
      'SQL (PostgreSQL / MySQL)',
      'Prefect',
      'Airflow',
      'Vector DB'
    ],
    description: 'Developing ETL pipelines, orchestration workflows, and optimized data systems.'
  },

  {
    category: 'AI & LLM Engineering',
    icon: '🤖',
    items: [
      'Agentic AI',
      'LangGraph',
      'LangChain',
      'OpenAi'
    ],
    description:
      'Creating LLM-powered automation, agents, and retrieval-based AI systems.'
  },

  {
    category: 'Data Analysis Tools',
    icon: '📊',
    items: ['Advanced Excel', 'Power BI', 'Pandas'],
    description: 'Performing EDA, statistical analysis, and generating meaningful insights from data.'
  },

  {
    category: 'Other Tools & Platforms',
    icon: '🧰',
    items: ['Git', 'GitHub', 'Postman','Docker'],
    description: 'Productive development workflows, version control, and API testing.'
  }
];
