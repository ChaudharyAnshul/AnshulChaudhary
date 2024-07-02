import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import PieChart from '../pie-chart';
import RadarGraph from '../radar-graph';
import ProfileCard from "./profile-card"
import ProjectTable from './project-view'
import WidgetSummary from '../widget-summary';
import TimeLineVisual from '../timeline-visual';
import ImageCard from '../animated-folder-Card';
import BarChartVertical from '../bar-chart-vertical';
import BarChartHorizontal from '../bar-chart-horizontal';

// ----------------------------------------------------------------------

// Skills bar chart
const skills = [
  { label: 'Python', value: 95 },
  { label: 'SQL / NoSQL', value: 92 },
  { label: 'ETL / ELT', value: 90 },
  { label: 'Airflow', value: 88 },
  { label: 'APIs', value: 85 },
  { label: 'AWS', value: 83 },
  { label: 'React', value: 80 },
  { label: 'Machine Learning', value: 80 },
  { label: 'Snowflake', value: 78 },
  { label: 'Docker', value: 75 },
];

// Interpersonal Competencies
const chartData = {
  categories: ['Communication', 'Teamwork', 'Critical Thinking', 'Problem Solving', 'Adaptability', 'Time Management'],
  series: [
    { name: 'Anshul Chaudhary', data: [91, 89, 92, 91, 87, 90] },
    { name: 'Average Human', data: [70, 60, 60, 65, 60, 55] },
  ],
};

// tilemline
const timeline = [
  { id: '1', type: 'order1', title: 'Master of Science @ Northeastern University, USA', subtitle: "Commencement of Master's Program in Software Engineering", time: new Date('2023-09-02') },
  { id: '2', type: 'order1', title: 'JPMorgan Chase & Co.', subtitle: 'Started my career as a Software Engineer', time: new Date('2021-07-02') },
  { id: '3', type: 'order1', title: 'Bachelors of Engineering, India', subtitle: 'Completion of Undergraduate Education', time: new Date('2021-06-03') },
  { id: '4', type: 'order1', title: 'Research Publication', subtitle: {text: 'IEEE Paper',link:"https://ieeexplore.ieee.org/document/9456440"}, time: new Date('2021-06-02') },
  { id: '5', type: 'order1', title: 'ISTE-VESIT: Student Chapter', subtitle: 'Advanced to Chief Technical Officer position', time: new Date('2020-07-02') },
  { id: '6', type: 'order1', title: 'ISTE-VESIT: Student Chapter', subtitle: 'Served as Technical Officer on the Student Council', time: new Date('2019-09-02') },
  { id: '7', type: 'order1', title: 'Bachelors of Engineering @ Mumbai University, India', subtitle: "Commencement of Bachelor's Program in Information Technology", time: new Date('2017-08-02') },
];

// Project Diversity 
const projectDiversity = [
  { label: 'Software Engineering', value: 10 },
  { label: 'Data Engineering', value: 8 },
  { label: 'Data Analysis', value: 3 },
  { label: 'Data Science', value: 6 },
]
const labelsProjectCount = [
  'Python',
  'SQL / NoSQL',
  'ETL / ELT',
  'Airflow',
  'APIs', 
  'AWS',
  'React',
  'ML',
  'NLP',
  'Snowflake',
  'Docker',
];
const seriesProjectCount = [
  {
    name: 'Anshul Chaudhary',
    type: 'column',
    fill: 'solid',
    data: [16, 10, 8, 3, 8, 10, 6, 7, 4, 5, 6],
  },
];

// Featured projects

const projectList = [
  { id: '1', projectName: 'Text Classification using LLM (Financial Data)', techStack: 'Python, LLM models, HuggingFace BERT, PyTorch, Scikit-Learn, Machine Learning', gitURL: "https://github.com/ChaudharyAnshul/TextClassification"},
  { id: '2', projectName: 'News Extraction and Recommendation System', techStack: 'ETL, Airflow, Snowflake, Kafka, CI/CD, MongoDB, FastAPI, Beautiful Soup, Spacy, OpenAI, GPT', gitURL: "https://github.com/BigDataIA-Spring2024-Sec2-Team2/Final-Project"},
  { id: '3', projectName: 'Knowledge Retrieval System (RAG Application)', techStack: 'RAG, Generative AI, ETL, Airflow, Snowflake, GCP, OpenAI, LLM, Pinecone Vector DB', gitURL: "https://github.com/BigDataIA-Spring2024-Sec2-Team2/Assignment-5"},
  { id: '4', projectName: 'Automated PDF Data Extraction and Querying', techStack: 'Snowflake, data pipelining, Airflow, DBT, AWS, PyPDF, Data extraction', gitURL: "https://github.com/ChaudharyAnshul/PDF-Data-Extraction"},
  { id: '5', projectName: 'Stock Close Price Prediction', techStack: 'Machine Learning, Exploratory Data Analysis, Feature selection, Hyperparameter Tuning, AutoML', gitURL: "https://github.com/ChaudharyAnshul/StockClosePricePrediction"},
  { id: '6', projectName: 'PharmaCutieCal: Drug Side Effect Analysis', techStack: 'React, Flask, MongoDB, Machine Learning, Hyperparameter Tuning, Random Forest Classification', gitURL: "https://github.com/TFC-Civic-Tech-Hackathon/drug-effects-predictor"},
  { id: '7', projectName: 'British Airways Review Analysis', techStack: 'Sentiment analysis, Data Scraping, Data visualization, Transformer model, Machine learning, SciPy', gitURL: "https://github.com/ChaudharyAnshul/BritishAirways_ReviewAnalysis"},
  { id: '8', projectName: 'Stock Market Real-Time Data Pipeline', techStack: 'Python, SQL, AWS, EC2, S3, Glue, Athena, Kafka, Docker', gitURL: "https://github.com/ChaudharyAnshul/Stock-Market-Real-Time-Data"},
  { id: '9', projectName: 'Electric Vehicle Analysis Dashboard', techStack: 'Tableau, Data Visualization, Data Analysis, Business Intelligence', gitURL: "https://public.tableau.com/app/profile/anshul.chaudhary3806/viz/EVDashboard_17195951286360/Dashboard1"},
  { id: '10', projectName: 'Content Management System', techStack: 'Spring boot, Java, React, MongoDB, Object Oriented Programming', gitURL: "https://github.com/ChaudharyAnshul/Content-Management-System"},
];
// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <br />
      <br />
      <Grid container spacing={3}>

        {/* Personal Info */}
        <Grid xs={12} md={7} lg={6}>
          <ProfileCard /> 
        </Grid>

        {/* What do I do? */}
        <Grid xs={12} md={5} lg={6}>
          <ImageCard title='What Do I Do?' subheader="Feel Free to Checkout Individual Work"/>
        </Grid>

        {/* Top Skills */}
        <Grid xs={12} md={6} lg={8}>
          <BarChartHorizontal
            title="Top Skills"
            subheader="Featured Skills to Visualize"
            chart={{ series: skills}}
          />
        </Grid>

        {/* Communication ans people Skills */}
        <Grid xs={12} md={6} lg={4}>
          <RadarGraph
            title="Interpersonal Competencies"
            subheader="Compared with Average"
            chart={chartData}
          />
        </Grid>

        {/* Experience and timeline */}
        <Grid xs={12} md={6} lg={4}>
          <TimeLineVisual
            title="Career Timeline"
            list={timeline}
          />
        </Grid>

        {/* Featured Projects */}
        <Grid xs={12} md={6} lg={8}>
          <ProjectTable title="Featured Projects" subheader="Feel Free To Explore More On My" linkURL="https://github.com/ChaudharyAnshul" linkText="GitHub" dataTable={projectList}  />
        </Grid>

        {/* Certification */}
        <Grid xs={12} sm={6} md={3}>
          <WidgetSummary
            title="Microsoft Certified"
            name="Azure AI Fundamentals"
            linkURL="https://www.credly.com/badges/b099ff11-31c8-41d9-bc06-7057272a1dc4/public_url"
            color="success"
            icon={<img alt="icon" src="/assets/certifications/azure-ai.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <WidgetSummary
            title="Microsoft Certified"
            name="Azure Data Fundamentals"
            linkURL="https://www.credly.com/badges/6a48d1f2-ac6e-4d2a-b965-4c0e7d473420/public_url"
            color="success"
            icon={<img alt="icon" src="/assets/certifications/azure-data.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <WidgetSummary
            title="Microsoft Certified"
            name="Azure Fundamentals"
            linkURL="https://www.credly.com/badges/3aa7f6c6-15f3-4f28-93e8-b076292cb2f1/public_url"
            color="success"
            icon={<img alt="icon" src="/assets/certifications/azure.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <WidgetSummary
            title="Snowflake Hands-On"
            name="Data Lake"
            linkURL="https://www.credential.net/be2f069f-a785-434e-8edc-e2eb2a67df7e"
            color="success"
            icon={<img alt="icon" src="/assets/certifications/snowflake-datalake.png" />}
          />
        </Grid>

        <Grid xs={12} sm={3} md={4.5}>
          <div />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <WidgetSummary
            title="Snowflake Hands-On"
            name="Data Warehousing"
            linkURL="https://www.credential.net/59e18970-b9d2-445e-a6dd-75dfb9650709"
            color="success"
            icon={<img alt="icon" src="/assets/certifications/snowflake-datawarehousing.png" />}
          />
        </Grid>

        <Grid xs={12} sm={3} md={4.5}>
          <div />
        </Grid>

        {/* Project diversity */}
        <Grid xs={12} md={6} lg={4}>
          <PieChart
            title="Project Diversity"
            chart={{series: projectDiversity}}
          />
        </Grid>

        {/* line chart project count vs technology */}
        <Grid xs={12} md={6} lg={8}>
          <BarChartVertical
            title="Technologies Used"
            subheader="Project Count w.r.t Technologies"
            chart={{labels:labelsProjectCount, series:seriesProjectCount}}
          />
        </Grid>

      </Grid>
    </Container>
  );
}
