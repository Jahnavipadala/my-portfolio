import { Project, Skill } from './types';

export const projects: Project[] = [
  {
    id: 'sales-analysis',
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
    dataDetails: [
      'Coal prices for different grades (4800-6000 kcal)',
      'Oil prices (WTI, Brent, Dubai)',
      'Stock prices of major energy companies',
      'Weather data for Richards Bay'
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
  {
  id: 'chittigpt',
  title: 'ChittiGPT – AI Agent Automation Platform',
  summary:
    'Developed an end-to-end intelligent agent system that automates employee workflows, integrates with custom tools, executes multi-step reasoning, and provides real-time responses using LLMs, vector databases, and modular toolchains.',
  tools: [
    'Python',
    'FastAPI',
    'LangChain',
    'LangGraph',
    'OpenAI API',
    'Groq',
    'Llama Models',
    'FAISS',
    'ChromaDB',
    'Docker',
    'GitHub'
  ],
  coverImage: 'https://i.postimg.cc/855j9mNV/chitti-gpt-banner.png',

  businessProblem: [
    'Employees often perform repetitive tasks such as policy lookup, document search, email drafting, data extraction, and workflow approvals. These tasks consume time and reduce productivity.',
    'Existing systems lacked automation, required manual navigation, and did not centralize knowledge, leading to inefficiencies.',
    'The organization needed an AI-driven system that could understand natural language, execute multi-step processes, connect with internal tools, and deliver actionable responses quickly.'
  ],

  businessObjective: [
    'Build an intelligent agent platform that automates employee workflows using LLMs, reduces manual effort, improves response accuracy, and accelerates decision-making.',
    'Enable a scalable agent architecture where new tools and skills can be added without redesigning the system.',
    'Provide reliable reasoning with structured tool usage and ensure domain-specific accuracy.'
  ],

  constraints: [
    'Ensuring LLM responses remain accurate while interacting with multiple tools.',
    'Managing latency when handling complex, multi-step workflows.',
    'Maintaining data privacy for internal knowledge base and user prompts.',
    'Handling varied query formats coming from employees.'
  ],

  dataDetails: [
    'Internal policy documents stored in vector DB (FAISS / Chroma)',
    'Structured datasets accessed through APIs or SQL',
    'User queries and interaction logs for improvement',
    'Tool outputs from external services (search, email, workflow systems)'
  ],

  projectArchitecture: {
    description:
      'The architecture is built on modular agents using LangGraph, integrating LLM reasoning, vector search, custom tool execution, and FastAPI backend. The system supports parallel and dynamic decision paths, improving reliability and extensibility.',
    diagramUrl: 'https://i.postimg.cc/5ycmYjFs/chitti-architecture.png'
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
    'Tested agent performance across different employee workflows and tuned prompts for accuracy.',
    'Developed a modular structure so new tools and agents can be added easily.'
  ],

  keyLearnings: [
    'Gained strong hands-on experience with LangGraph and multi-agent system design.',
    'Learned how to connect LLMs with real tools to perform actual business actions.',
    'Improved architectural thinking for scalable AI systems supporting both deterministic and generative workflows.',
    'Learned to optimize LLM latency using Groq/Llama, reduce hallucination, and improve tool correctness.',
    'Understood deep integration of FastAPI, vector databases, and custom tools to build production-ready AI workflows.'
  ],

  techStack: [
    {
      category: 'Programming',
      items: ['Python', 'FastAPI', 'Streamlit']
    },
    {
      category: 'Data Engineering',
      items: ['SQL', 'FAISS', 'Chroma', 'MongoDB']
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
    id: 'sales-forecasting',
    title: 'Power Trading Analysis',
    summary: 'Analyzed electricity market data to understand price volatility, demand-supply patterns, and seasonal trends.',
    tools: ['Python', 'numpy', 'Pandas', 'mysql', 'Power BI', 'Microsoft Excel', 'Tableau', 'Looker Studio'],
    coverImage: 'https://i.postimg.cc/Gp9zJg0F/energy-power.jpg',
    businessProblem: [
      'In power trading, understanding electricity price fluctuations, demand-supply patterns, and market anomalies is critical for making informed trading decisions.'
    ],
    businessObjective: [
      'Minimize uncertainty in demand-supply fluctuations.'
    ],
    constraints: [
      'Data processing latency requirements',
      'Real-time analytics and decision-making.'
    ],
    dataDetails: [
      'Market clearing price data',
      'Purchase and sell bid information',
      'Trading session details',
      'Volume data for different time periods'
    ],
    projectArchitecture: {
      description: '',
      diagramUrl: 'https://i.postimg.cc/nr8nP5Zh/Screenshot-2025-04-01-123535.png'
    },
    methodology: [
      'Imported necessary Python libraries like pandas, numpy, seaborn, matplotlib, and plotly for data analysis and visualization.','Loaded the electricity price dataset into a Pandas DataFrame for processing.',
'Performed initial data exploration using .head(), .info(), and .describe() to understand the structure and summary statistics.',

'Checked for missing values and handled them appropriately to maintain data quality.',

'Analyzed the distribution of electricity prices and demand-supply values using histograms and KDE plots.',

'Created time series plots to identify trends and fluctuations in electricity prices over time.',

'Generated correlation heatmaps to find relationships between features affecting price volatility.',

'Used boxplots and line charts to visualize seasonal price patterns and detect outliers.',

'Conducted group-based analysis by time intervals (e.g., hourly, monthly) to uncover peak demand and high volatility periods.',

'Created interactive visualizations using plotly for better user understanding.',

'Derived insights such as price behavior during high-demand hours and the impact of seasonality on trading decisions.'
    ],
    keyLearnings: [
      'Learned how critical it is to preprocess and synchronize time-series data'
    ],
    techStack: [
      {
        category: 'Programming',
        items: ['Python', 'SQL']
      },
      {
        category: 'Data Analysis',
        items: ['NumPy', 'Pandas']
      },
      {
        category: 'Database',
        items: ['MySQL']
      },
      {
        category: 'Visualization',
        items: ['Power BI', 'Tableau', 'Excel', 'Looker studio']
      }
    ],
    dashboardUrl: 'https://www.canva.com/design/DAGh_kGrQhw/2zD0jgNS6BhUOeh8IUERbQ/view?utm_content=DAGh_kGrQhw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbff4127822'
  }
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
