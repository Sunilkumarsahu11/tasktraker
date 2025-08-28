const initialSteps = [
    {
        id: 1,
        title: 'Select a Suitable Kaggle Competition',
        objective: 'Choose a competition that aligns with your skills and interests.',
        actions: [
            'Browse active Kaggle competitions at kaggle.com/competitions.',
            'Focus on beginner-friendly or intermediate competitions that match your expertise.',
            'Check dataset size, evaluation metric, and submission deadline.',
            'Select a competition with a clear dataset and active discussion forums.',
        ],
    },
    {
        id: 2,
        title: 'Set Up Your Environment',
        objective: 'Prepare a robust development environment for data exploration and modeling.',
        actions: [
            'Use Python 3.6+ in Jupyter Notebook or Google Colab.',
            'Install key libraries: pandas, numpy, scikit-learn, etc.',
            'Set up Google Cloud VM or use Kaggle Notebooks.',
            'Initialize a GitHub repository.',
            'Download the competition dataset using Kaggle API.',
        ],
    },
    {
        id: 3,
        title: 'Exploratory Data Analysis (EDA)',
        objective: 'Understand the dataset and identify key features for modeling.',
        actions: [
            'Load the dataset using pandas or dask.',
            'Perform EDA: missing values, data types, distributions.',
            'Visualize correlations and feature distributions.',
            'Preprocess data: handle missing values, encode categorical variables, scale features.',
            'Document insights and share findings.',
        ],
    },
    {
        id: 4,
        title: 'Model Development',
        objective: 'Build and train a machine learning model to achieve a competitive score.',
        actions: [
            'Start with simple models for baselines.',
            'Progress to ensemble methods or deep learning.',
            'Feature engineering based on EDA insights.',
            'Model training and cross-validation.',
            'Tune hyperparameters.',
        ],
    },
    {
        id: 5,
        title: 'Model Evaluation and Optimization',
        objective: 'Assess model performance and improve results.',
        actions: [
            'Evaluate models using competition’s metric.',
            'Compare models and select the best.',
            'Optimize by stacking/blending, regularization, etc.',
            'Test on Kaggle’s public leaderboard.',
        ],
    },
    {
        id: 6,
        title: 'Deployment and Submission',
        objective: 'Finalize the model and submit results to Kaggle.',
        actions: [
            'Generate predictions on the test set.',
            'Format predictions for Kaggle submission.',
            'Submit via Kaggle interface or API.',
            'Optional: Deploy model using Docker, GCP, FastAPI.',
            'Document pipeline in GitHub repo.',
        ],
    },
    {
        id: 7,
        title: 'Community Engagement and Iteration',
        objective: 'Improve your ranking by learning from the Kaggle community.',
        actions: [
            'Share EDA/code snippets in Kaggle notebooks.',
            'Study top-ranked solutions and adapt techniques.',
            'Iterate and resubmit based on feedback.',
        ],
    },
];
export default initialSteps;