import React, { useState } from 'react';
import '../styles/ProgressBar.css';
import initialSteps from '../components/InitialSteps';


function Home() {
	// Each step's actions will be tracked as an array of booleans
	const [steps, setSteps] = useState(
		initialSteps.map((step) => ({
			...step,
			actionsCompleted: Array(step.actions.length).fill(false),
		}))
	);
	const [currentStepIdx, setCurrentStepIdx] = useState(0);

	// Calculate progress for each step
	const stepProgress = steps.map((step) => {
		const completedCount = step.actionsCompleted.filter(Boolean).length;
		return step.actions.length === 0
			? 0
			: Math.round((completedCount / step.actions.length) * 100);
	});

	// Calculate overall progress
	const overallPercent =
		steps.length === 0
			? 0
			: Math.round(stepProgress.reduce((sum, p) => sum + p, 0) / steps.length);

	// Handle action checkbox change
	const handleActionToggle = (stepIdx, actionIdx) => {
		setSteps((prevSteps) =>
			prevSteps.map((step, idx) =>
				idx === stepIdx
					? {
							...step,
							actionsCompleted: step.actionsCompleted.map((done, aIdx) =>
								aIdx === actionIdx ? !done : done
							),
					  }
					: step
			)
		);
	};

	// Mark step as done (all actions checked)
	const handleMarkDone = (idx) => {
		setSteps((prevSteps) =>
			prevSteps.map((step, i) =>
				i === idx
					? { ...step, actionsCompleted: step.actionsCompleted.map(() => true) }
					: step
			)
		);
		if (idx < steps.length - 1) {
			setCurrentStepIdx(idx + 1);
		}
	};

	// Navigation
	const handlePrev = () => {
		if (currentStepIdx > 0) setCurrentStepIdx(currentStepIdx - 1);
	};
	const handleNext = () => {
		// Only allow next if all actions are completed
		if (
			currentStepIdx < steps.length - 1 &&
			steps[currentStepIdx].actionsCompleted.every(Boolean)
		) {
			setCurrentStepIdx(currentStepIdx + 1);
		}
	};

	const step = steps[currentStepIdx];

	return (
		<div style={{ display: 'flex', maxWidth: 1000, margin: '2rem auto', padding: '1rem' }}>
			{/* Sidebar */}
			<aside
				style={{
					width: 260,
					marginRight: 32,
					background: '#f5f7fa',
					borderRadius: 12,
					boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
					padding: '1.5rem 1rem',
					height: 'fit-content',
				}}
			>
				<h3 style={{ color: '#1976d2', marginBottom: 16, textAlign: 'center' }}>Steps</h3>
				<ol style={{ listStyle: 'none', padding: 0 }}>
					{steps.map((s, idx) => (
						<li
							key={s.id}
							onClick={() => setCurrentStepIdx(idx)}
							style={{
								padding: '10px 12px',
								marginBottom: 8,
								borderRadius: 6,
								cursor: 'pointer',
								background: idx === currentStepIdx ? '#1976d2' : '#fff',
								color: idx === currentStepIdx ? '#fff' : '#1976d2',
								fontWeight: idx === currentStepIdx ? 'bold' : 'normal',
								border: idx === currentStepIdx ? '2px solid #1976d2' : '1px solid #e0eafc',
								transition: 'background 0.2s, color 0.2s',
							}}
						>
							{s.title}
						</li>
					))}
				</ol>
			</aside>
			{/* Main Content */}
			<div style={{ flex: 1 }}>
				<h1 style={{ textAlign: 'center', color: '#1976d2' }}>Kaggle Task Tracker</h1>
				<div style={{ margin: '2rem 0', display: 'flex', alignItems: 'center', gap: 16 }}>
					<label style={{ fontWeight: 'bold', display: 'block', marginBottom: 8 }}>
						Overall Progress: {overallPercent}%
					</label>
					<div className="glass-progress-bar" style={{ width: '200%' }}>
						<div
							className="glass-progress-fill"
							style={{ width: `${overallPercent}%` }}
						>
							<div className="glass-progress-arrow" />
						</div>
						<span className="glass-progress-label">{overallPercent}%</span>
					</div>
					<button
						onClick={() => {
							setSteps(
								initialSteps.map(step => ({
									...step,
									actionsCompleted: Array(step.actions.length).fill(false),
								}))
							);
							setCurrentStepIdx(0);
						}}
						style={{
							marginLeft: 16,
							background: '#FF6384',
						 color: '#fff',
						 border: 'none',
						 borderRadius: 6,
						 padding: '6px 16px',
						 cursor: 'pointer',
						 fontWeight: 'bold',
						}}
					>
						Reset
					</button>
				</div>
				<div
					style={{
						background: '#f9f9f9',
						borderRadius: 12,
						boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
						marginBottom: 24,
						padding: '1.5rem',
					}}
				>
					<h2 style={{ color: '#1976d2', marginBottom: 8 }}>{step.title}</h2>
					<p style={{ fontWeight: 'bold', marginBottom: 8 }}>
						Objective:{' '}
						<span style={{ fontWeight: 'normal' }}>{step.objective}</span>
					</p>
					<div style={{ marginBottom: 12 }}>
						<strong>Actions:</strong>
						<ul style={{ marginLeft: 20, padding: 0 }}>
							{step.actions.map((action, idx) => (
								<li
									key={idx}
									style={{
										listStyle: 'none',
										marginBottom: 8,
										display: 'flex',
										alignItems: 'center',
									}}
								>
									<input
										type="checkbox"
										checked={step.actionsCompleted[idx]}
										onChange={() => handleActionToggle(currentStepIdx, idx)}
										style={{ marginRight: 10, accentColor: '#1976d2' }}
									/>
									<span
										style={{
											textDecoration: step.actionsCompleted[idx] ? 'line-through' : 'none',
											color: step.actionsCompleted[idx] ? '#888' : '#222',
										}}
									>
										{action}
									</span>
								</li>
							))}
						</ul>
					</div>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
						<label style={{ fontWeight: 'bold' }}>Progress: {stepProgress[currentStepIdx]}%</label>
						<div className="glass-progress-bar" style={{ width: 240 }}>
							<div
								className="glass-progress-fill"
								style={{ width: `${stepProgress[currentStepIdx]}%` }}
							>
								<div className="glass-progress-arrow" />
							</div>
							<span className="glass-progress-label">{stepProgress[currentStepIdx]}%</span>
						</div>
						<button
							onClick={() => handleMarkDone(currentStepIdx)}
							style={{
								background: '#1976d2',
							 color: '#fff',
							 border: 'none',
							 borderRadius: 6,
							 padding: '6px 16px',
							 cursor: 'pointer',
							 fontWeight: 'bold',
							}}
							disabled={step.actionsCompleted.every(Boolean)}
						>
							Mark Done
						</button>
					</div>
					<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
						<button
							onClick={handlePrev}
							disabled={currentStepIdx === 0}
							style={{
								background: '#eee',
							 color: '#1976d2',
							 border: 'none',
							 borderRadius: 6,
							 padding: '6px 16px',
							 cursor: currentStepIdx === 0 ? 'not-allowed' : 'pointer',
							 fontWeight: 'bold',
							}}
						>
							Previous
						</button>
						<button
							onClick={handleNext}
							disabled={
								currentStepIdx === steps.length - 1 ||
								!step.actionsCompleted.every(Boolean)
							}
							style={{
								background: '#1976d2',
							 color: '#fff',
							 border: 'none',
							 borderRadius: 6,
							 padding: '6px 16px',
							 cursor:
							 	currentStepIdx === steps.length - 1 ||
							 	!step.actionsCompleted.every(Boolean)
									? 'not-allowed'
									: 'pointer',
							 fontWeight: 'bold',
							}}
						>
							Next
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;