
import React, { useState, useMemo } from 'react';
import { QUESTIONS, PROFILES } from './constants';
import { ProfileType } from './types';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<ProfileType[]>([]);

  const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;

  const handleStart = () => setCurrentStep('quiz');

  const handleAnswer = (profileId: ProfileType) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = profileId;
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentStep('result');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateResults = useMemo(() => {
    const counts: Record<ProfileType, number> = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach(id => counts[id]++);
    
    const sorted = (Object.entries(counts) as [ProfileType, number][])
      .sort((a, b) => b[1] - a[1]);
    
    const dominant = sorted[0][0];
    
    const chartData = Object.entries(counts).map(([id, value]) => ({
      name: PROFILES[id].title,
      value,
      color: id === 'A' ? '#2563eb' : id === 'B' ? '#059669' : id === 'C' ? '#d97706' : '#4f46e5'
    }));

    return { counts, dominant, chartData };
  }, [answers]);

  const resetQuiz = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setCurrentStep('intro');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <div className="max-w-2xl w-full">
        {currentStep === 'intro' && (
          <div className="glass-card rounded-3xl p-8 shadow-xl text-center border-t-8 border-indigo-600 animate-in fade-in duration-700">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-magnifying-glass text-3xl text-indigo-600"></i>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              A-Level Economics: <br/><span className="text-indigo-600">Skills & Strengths Quick Quiz</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Discover your thinking strengths and see how they align with A-Level Economics. 
              It's not about what you know yet—it's about how you think! 🔍
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8 text-left">
              <div className="flex items-center space-x-3 bg-slate-50 p-4 rounded-xl">
                <i className="fa-solid fa-clock text-indigo-500"></i>
                <span className="text-sm font-medium text-slate-700">8–10 Minutes</span>
              </div>
              <div className="flex items-center space-x-3 bg-slate-50 p-4 rounded-xl">
                <i className="fa-solid fa-user-graduate text-indigo-500"></i>
                <span className="text-sm font-medium text-slate-700">For Secondary/IP</span>
              </div>
            </div>
            <button 
              onClick={handleStart}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] text-lg"
            >
              Start Your Discovery ✨
            </button>
          </div>
        )}

        {currentStep === 'quiz' && (
          <div className="glass-card rounded-3xl p-6 md:p-10 shadow-xl min-h-[500px] flex flex-col animate-in slide-in-from-right duration-300">
            {/* Progress Header */}
            <div className="mb-8">
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">
                  Question {currentQuestionIndex + 1} of {QUESTIONS.length}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-indigo-600 h-full transition-all duration-500 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.3)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-8 leading-snug">
              {QUESTIONS[currentQuestionIndex].text}
            </h2>

            {/* Options */}
            <div className="space-y-4 flex-grow">
              {QUESTIONS[currentQuestionIndex].options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(option.id)}
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center group
                    ${answers[currentQuestionIndex] === option.id 
                      ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-200' 
                      : 'border-slate-100 hover:border-indigo-300 hover:bg-slate-50'
                    }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 transition-colors
                    ${answers[currentQuestionIndex] === option.id 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-slate-100 text-slate-400 group-hover:bg-indigo-100 group-hover:text-indigo-500'
                    }`}>
                    {option.id}
                  </div>
                  <span className={`text-base md:text-lg font-medium transition-colors
                    ${answers[currentQuestionIndex] === option.id ? 'text-indigo-900' : 'text-slate-700'}`}>
                    {option.text}
                  </span>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="mt-8 flex justify-between items-center">
              <button 
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className={`flex items-center space-x-2 px-6 py-2 rounded-xl transition-all font-semibold
                  ${currentQuestionIndex === 0 
                    ? 'text-slate-300 cursor-not-allowed' 
                    : 'text-slate-500 hover:text-indigo-600 hover:bg-indigo-50'}`}
              >
                <i className="fa-solid fa-arrow-left"></i>
                <span>Previous</span>
              </button>
              <div className="text-slate-400 text-sm italic font-medium">
                Pick the option that sounds most like you!
              </div>
            </div>
          </div>
        )}

        {currentStep === 'result' && (
          <div className="animate-in zoom-in duration-500 space-y-6">
            <div className="glass-card rounded-3xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className={`${PROFILES[calculateResults.dominant].color} p-10 text-white text-center`}>
                <div className="text-6xl mb-4 animate-bounce">
                  {PROFILES[calculateResults.dominant].emoji}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-2 opacity-90">Your Dominant Profile</h3>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  {PROFILES[calculateResults.dominant].title}
                </h2>
              </div>

              <div className="p-8 md:p-10 space-y-8">
                {/* Comparison Chart */}
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 text-center">Your Strengths Mix</h4>
                  <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={calculateResults.chartData} layout="vertical" margin={{ left: 20, right: 30 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                        <XAxis type="number" hide />
                        <YAxis 
                          dataKey="name" 
                          type="category" 
                          width={140} 
                          tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }} 
                        />
                        <Tooltip 
                          cursor={{ fill: 'transparent' }}
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        />
                        <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={24}>
                          {calculateResults.chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                      <i className="fa-solid fa-star text-amber-500 mr-2"></i>
                      Your Core Strengths
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {PROFILES[calculateResults.dominant].strengths.map((s, i) => (
                        <span key={i} className="bg-white border-2 border-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">How this maps to Economics</h4>
                    <p className="text-slate-600 leading-relaxed text-lg italic">
                      "{PROFILES[calculateResults.dominant].description}"
                    </p>
                  </div>
                </div>

                {/* Key Message Box */}
                <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 flex items-start space-x-4">
                  <div className="text-3xl">⭐</div>
                  <div>
                    <h4 className="font-bold text-indigo-900 mb-1">Key Message for You</h4>
                    <p className="text-indigo-800 text-sm leading-relaxed">
                      A-Level Economics is not about already “knowing Economics”—it’s about how you think, learn, and make sense of the world. You have a great foundation to start!
                    </p>
                  </div>
                </div>

                <button 
                  onClick={resetQuiz}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-4 rounded-2xl transition-all"
                >
                  Take Quiz Again
                </button>
              </div>
            </div>
            
            {/* Footer Credit */}
            <p className="text-center text-slate-400 text-sm font-medium">
              Made for Secondary & IP Students exploring A-Level Economics
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
