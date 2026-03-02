import { Project, Skill, Internship } from './types';

export const projects: Project[] = [
  
  {
  id: 'ASL',
  title: 'American Sign Language (ASL) Recognition System',
  summary:
    'Developed a real-time American Sign Language (ASL) Recognition System using deep learning and computer vision techniques to detect hand gestures and convert them into text. The system processes live video input, identifies individual alphabet signs, and displays the corresponding output, improving communication accessibility for hearing-impaired users.',
  tools: [
    'Python',
    'OpenCV',
    'Deep Learning',
    'CNN',
    'RNN',
    'Numpy',
    'Matplotlib',
    'TensorFlow'
  ],
  coverImage: 'https://i.postimg.cc/vHXpfggR/asl1.jpg',

  businessProblem: [
  'Communication gap between hearing-impaired individuals and non-sign language users leads to dependency and reduced accessibility.',
  
  'Most existing ASL tools are static (image-based) and do not support real-time gesture recognition.',
  
  'Many systems recognize only isolated letters and fail to construct complete words or sentences.',
  
  'Traditional systems struggle to accurately recognize gestures under variations such as rotated or flipped hand signs, different lighting conditions, background noise, and varying hand orientations.'

],


  businessObjective: [
    'Develop a real-time ASL recognition system that accurately detects and classifies hand gestures from input.',
    'Convert recognized gestures into meaningful text by combining sequential letters into complete words.'
  ],

  constraints: [
    'Limited to CPU-based training and inference (no GPU usage).',
    'Handling different gesture orientations (rotation, flipping)..',
    'Ensuring high accuracy with varied lighting and backgrounds.',
    'Avoiding overfitting due to limited labeled datasets.'
  ],

  

  projectArchitecture: {
    description:
      ['The architecture is built on a modular deep learning pipeline integrating image preprocessing, data augmentation, CNN-based gesture classification, and backend inference handling through a Flask service. The system supports structured prediction flow with confidence-based filtering and scalable model extension, improving accuracy, robustness to varied image conditions, and future adaptability for advanced recognition tasks.'],
    diagramUrl: 'https://i.postimg.cc/43YHv9WJ/Screenshot_2026_03_01_211216.png'
  },

  methodology: [
    'Developed a deep learning–based system to recognize American Sign Language (ASL) alphabets from hand gesture images.',
    'Implemented a Convolutional Neural Network (CNN) model to extract spatial features and accurately classify hand gestures into 26 alphabet categories.',
    'Collected and organized a labeled ASL image dataset to train and validate the model effectively.',
    'Applied preprocessing techniques such as image resizing, normalization, and noise reduction to ensure consistent model input.',
    'Integrated data augmentation techniques (rotation, flipping, brightness adjustments) to handle variations in lighting, orientation, and hand positioning.',
    'Split the dataset into training and testing sets to evaluate generalization performance.',
    'Trained the CNN model using optimized parameters to improve classification accuracy.',
    'Evaluated the model using performance metrics such as accuracy and loss to measure effectiveness.',
    'Designed a user interface that allows users to upload hand gesture images for prediction.',
    'Built a backend system to process the uploaded image, perform prediction, and return the recognized alphabet output.',
    'Ensured system reliability by handling invalid inputs and optimizing model response time.',
    'The final system converts static ASL hand gesture images into corresponding alphabet letters, enabling improved communication support for the hearing and speech impaired community.' 
  ],

  keyLearnings: [
    'Learned to build and train CNN models for image-based ASL recognition.',
    'Gained hands-on experience in image preprocessing and data augmentation.',
    'Understood model evaluation using accuracy and performance metrics.',
    'Learned techniques to improve model robustness and prevent overfitting.'
  ],

  techStack: [
    {
      category: 'Programming',
      items: ['Python', 'Html' , 'CSS' , 'JavaScript']
    },
    {
      category: 'DeepLearning',
      items: ['TensorFLow', 'OpenCv' , 'CNN']
    },
    {
      category: 'Backend',
      items: [
        'Flask'
      ]
    },
    {
      category: 'Deployment ',
      items: [ 'GitHub']
    }
  ],

  visualizations: [],

 
}
];

export const internships: Internship[] = [
  {
    company: 'Purple Technologies',
    role: 'Deep Learning Intern',
    duration: 'December 2024 - April 2025',
    description: [
      'During my internship at Purple Technologies as a Deep Learning Intern, I immersed myself in applying advanced concepts to real-world challenges. I worked on data preprocessing, model training, and evaluation, gaining valuable exposure to how intelligent systems can be designed and optimized for practical use. Collaborating with mentors and peers allowed me to strengthen my problem-solving abilities, sharpen my programming skills in Python, and develop a deeper appreciation for the impact of technology in creating innovative solutions. This experience not only enhanced my technical expertise but also fueled my passion for continuous learning and building software that drives meaningful change.'
    ],
    techStack: ['Python', 'Tensorflow', 'OpenCV'],
    certificateUrl: 'https://i.postimg.cc/Y9TMY4hT/Screenshot-2026-02-23-232632.png'
  },
  {
    company: 'AICTE-Eduskills',
    role: 'Data Analytics process automation Intern',
    duration: 'September 2023 - November 2023',
    description: [
      'I applied for this internship to expand my knowledge in Data Analytics and Process Automation. I gained hands-on experience in data preprocessing, cleaning, visualization, and worked with real-time datasets while automating basic workflows to improve efficiency.'
    ],
    techStack: ['Python' , 'SQL'],
    certificateUrl: 'https://i.postimg.cc/c1fgcYNf/aicte1.jpg'
  }
];

export const skills: Skill[] = [
  {
    category: 'Programming & Development',
    icon: '💻',
    items: ['Java', 'C#', 'Python'],
    description: 'Building efficient, scalable applications using Java, C# and Python'
  },

  {
    category: 'Web Technologies',
    icon: '🌐',
    items: [
      'SQL ( MySQL / Oracle SQL )',
      'HTML'
    ],
    description: 'Designing and managing responsive web interfaces and databases using HTML and SQL technologies.'
  },

  {
    category: 'Tools',
    icon: '🛠️',
    items: [
      'Git',
      'MS Excel'
    ],
    description:
      'Utilizing Git for version control and collaboration, and MS Excel for data organization, analysis, and reporting.'
  },

  {
    category: 'Core Concepts',
    icon: '📚',
    items: ['OOP(object oriented programming)', 'Data Structures'],
    description: 'Strong understanding of core concepts including Data Structures and Object-Oriented Programming for building efficient and scalable applications.'
  },

  {
    category: 'Framework',
    icon: '⚡',
    items: ['dotnet'],
    description: 'Basic understanding of the .NET framework for developing simple web and application solutions.'
  }
];
