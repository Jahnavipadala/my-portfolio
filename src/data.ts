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
    id: 'loan-default',
    title: 'Analysis of Ladle Refining Furnance',
    summary: 'This project focused on optimizing the Ladle Refining Furnace (LRF) sampling and reduction processes by analyzing historical process data. The goal was to improve operational efficiency, reduce energy and material waste, and enhance the yield and quality of ferro alloys. A data-driven system was developed to identify optimal sampling frequency and process parameters for ferro alloying.',
    tools: ['Python','NumPy', 'Pandas', 'Matplotlib','MS Excel','MYSQL','SQL'],
    coverImage: 'https://i.postimg.cc/1zL009rS/ladle-furnaces.jpg',
    businessProblem: [
      'Optimize LRF (Ladle Refining Furnace) sampling and reduction processes by evaluating historical data and ferro alloying processes to improve efficiency and reduce waste.'
    ],
    businessObjective: [
      'Develop a system that analyzes historical LRF and ferro alloying process data to optimize sampling frequency and reduction processes, minimizing energy usage and material waste.'
    ],
    constraints: [
      'Accuracy of Prediction – The model must be precise to reduce false positives (wrongly classifying a good customer as defaulter) and false negatives (classifying a defaulter as good).'
    ],
    dataDetails: [
      'The dataset now contains 2,655 rows and 35 columns.',
      'Key identifiers like Date, Heatno, and Grade are retained.',
      'Elemental composition columns such as C%, SI%, S%, P%, MN%, NI%, and CR% are included.',
      'Final composition columns starting with F- are also retained (e.g., F-C%, F-SI%, etc.)'
    ],
    projectArchitecture: {
      description: '',
      diagramUrl: 'https://i.postimg.cc/BbWX7B47/LRF-project-architecture.png'
    },
    methodology: [
      'Understood the dataset with heats representing initial and final chemical compositions.',
      'Reviewed the role of each element in determining heat quality.',
      'Converted the date column to datetime format.',
      'Handled missing values appropriately.',
      'Ensured all chemical composition columns had correct data types.',
      'Explored distributions of elements using histograms and boxplots.',
      'Compared actual and final compositions to assess refining effectiveness.',
      'Analyzed composition changes across different steel grades.',
      'Used groupby analysis to examine element patterns related to heat quality and Calculated delta values like the difference between final and initial element percentages.',
      'Clustered similar steel grades for comparative analysis.',
      'Detected cases of potential element overuse and material waste and Flagged grades associated with poor heat quality.',
      'Created an interactive dashboard in Excel to visually represent key findings and insights from the analysis.'
    ],
    keyLearnings: [
      'Learned to manage time effectively by prioritizing tasks and adhering to project deadlines.',
      'Learned to break down complex questions (e.g., element-wise failure, grade-wise variation) into measurable metrics',
'Learned to design intuitive visualizations and enhance dashboard clarity through iterative improvements based on feedback.'
    ],
    techStack: [
      {
        category: 'Programming',
        items: ['Python']
      },
      {
        category: 'Data Analysis & Preprocessing:',
        items: ['NumPy', 'Pandas']
      },
      {
        category: 'Visualization',
        items: ['Matplotlib', 'Seaborn','MS Excel']
      },
      {
        category: 'Database',
        items: ['MYSQL', 'SQL']
      }
      
    ],
    dashboardUrl: 'https://www.canva.com/design/DAGmxNfF12w/y0d75kmpa1yPlAFUupftww/view?utm_content=DAGmxNfF12w&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hffdb00b290'
  },
  {
    id: 'customer-segmentation',
    title: 'Adventure Works Performance Analysis',
    summary: 'Worked on analyzing business data from Adventure Works Cycles, a multinational bicycle manufacturing company, to uncover performance trends across customers, products, and regions.',
    tools: ['Power BI', 'Power Query Editor', 'Power BI service', 'Power pivot', 'Microsoft Excel'],
    coverImage: 'https://i.postimg.cc/7P117rGv/6410.webp',
    businessProblem: [
      'Adventure Works Cycles aimed to expand its business but lacked clear visibility into which products, customers, and regions were driving performance.'
    ],
    businessObjective: [
      'Analyze product and regional sales performance',
      'Identify top-performing customers for targeted marketing'
    ],
    constraints: [
      'Complex data relationships',
      'Urgency for Insights: Required quick, actionable analysis to support immediate expansion goals'
    ],
    dataDetails: [
      'Sales transaction records',
      'Customer demographic data',
      'Product information',
      'Regional performance metrics',
      'Historical sales trends'
    ],
    projectArchitecture: {
      description: 'The Power BI solution architecture implements a snowflake schema data model with multiple data files and interactive visualizations.',
      diagramUrl: 'https://media-hosting.imagekit.io/f020d4bd899f4bcb/architecture.png?Expires=1838886951&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lxve5PzklU9dp6q8Jv-kLbUwPAnPW4ed8T0Tm0XYbCRFPpjG8DxucaAV1-UJpKO6ygskY~YfulIE~M-SbayKwTf5insA8GimtmM32mc0is6RA3QNteB7zgnkUi98EobrayE5YZZ0jHHT5m6WO2BM69i77XHGv4WZxYLzCYAl40mNos1X1MinyB0b3nguRRfkBNUVgDfEGww-tC6-BhFNisxu~aoYpSl-mJe7g2nWGVgPcIr-9cVB~YYhYEK1olzi9DlJsiNe9HF5bCfE3aX97xJHe6pwF196aYMEpcsM7U1VzcJYprriHbNr9xuEmzLNltf3~BCdeScwXhcaLQ7lPw__'
    },
    methodology: [
      'Collected and imported relevant tables such as Sales, Date, Customer, Territory, Product, Product Subcategory, and Product Category from the Adventure Works database.',

'Cleaned and transformed the data using Power Query—handled missing values, fixed data types, and removed duplicates.',

'Built a Snowflake Schema data model by normalizing dimension tables such as Product → Subcategory → Category and Customer → Territory.',

'Created proper relationships between fact and dimension tables to enable accurate slicing and dicing of data.',

'Used DAX to create calculated columns and measures such as Total Sales, Sales by Product, Profit Margin, and Sales by Region.',

'Designed an interactive dashboard in Power BI using slicers, filters, bar charts, line charts, pie charts, and map visuals.',

'Analyzed performance metrics over time to identify high-performing products, top-selling regions, and trends in customer behavior.',

'Delivered business insights that supported data-driven decision-making for improving product strategies and regional performance.'
    ],
    keyLearnings: [
      'Importance of proper data modeling in BI',
      'Impact of DAX measures on performance',
      'Value of user-centric dashboard design'
    ],
    techStack: [
      {
        category: 'Business Intelligence',
        items: ['Power BI', 'Power Query', 'DAX']
      },
      {
        category: 'Microsoft Excel',
        items: ['Power query', 'Power pivot', 'Pivot tables and Pivot charts']
      }
    ],
    visualizations: [],
    dashboardUrl: 'https://www.canva.com/design/DAGnVG-O-M4/9b8KF9DY1YiOAsy1j1D88w/view?utm_content=DAGnVG-O-M4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0e9159e9a1'
  },
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
