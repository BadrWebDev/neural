import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  GitMerge, CheckCircle, XCircle, Clock, Eye, User,
  ChevronRight, MessageSquare, AlertCircle, Filter,
  Search, Sparkles, ArrowRight, Minus, Plus, Check, X
} from 'lucide-react';

type SuggestionStatus = 'pending' | 'approved' | 'rejected';

interface Suggestion {
  id: string;
  articleTitle: string;
  articleId: string;
  author: { name: string; avatar: string };
  submittedAt: string;
  status: SuggestionStatus;
  section: string;
  original: string;
  proposed: string;
  reason: string;
  aiScore: number;
}

const SUGGESTIONS: Suggestion[] = [
  {
    id: '1',
    articleTitle: 'The Future of Generative AI in Content Creation',
    articleId: '1',
    author: {
      name: 'Akram Litniti',
      avatar: 'https://images.unsplash.com/photo-1759884247264-86c2aa311632?w=40&h=40&fit=crop&crop=face',
    },
    submittedAt: '2 hours ago',
    status: 'pending',
    section: 'Introduction',
    original: 'Artificial intelligence is no longer a distant concept — it\'s transforming how we create, communicate, and collaborate.',
    proposed: 'Artificial intelligence has crossed the threshold from theoretical curiosity to practical reality, fundamentally reshaping how modern professionals create, communicate, and collaborate at every level.',
    reason: 'The revised version is more specific, avoids clichés, and better sets up the article\'s professional tone.',
    aiScore: 92,
  },
  {
    id: '2',
    articleTitle: 'The Future of Generative AI in Content Creation',
    articleId: '1',
    author: {
      name: 'Badr Farhani',
      avatar: 'https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=40&h=40&fit=crop&crop=face',
    },
    submittedAt: '5 hours ago',
    status: 'pending',
    section: 'Ethical Considerations',
    original: 'As AI becomes more capable, questions around authorship, originality, and intellectual property become increasingly important.',
    proposed: 'As AI capabilities accelerate, critical questions about authorship attribution, creative originality, and intellectual property rights demand clear frameworks and industry-wide consensus.',
    reason: 'Stronger phrasing that conveys urgency and calls for action. The word "demand" is more impactful.',
    aiScore: 87,
  },
  {
    id: '3',
    articleTitle: 'Building Scalable APIs with Node.js and Express',
    articleId: '2',
    author: {
      name: 'Ilias Jbilou',
      avatar: 'https://images.unsplash.com/photo-1759884247264-86c2aa311632?w=40&h=40&fit=crop&crop=face',
    },
    submittedAt: '1 day ago',
    status: 'approved',
    section: 'Architecture Overview',
    original: 'The API uses a layered architecture for separation of concerns.',
    proposed: 'The API adopts a clean layered architecture (Controller → Service → Repository) to enforce strict separation of concerns and maximize testability.',
    reason: 'Added specific layer names and a benefit (testability) that developers care about.',
    aiScore: 95,
  },
  {
    id: '4',
    articleTitle: 'Design Systems: Building Consistent UX at Scale',
    articleId: '4',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=40&h=40&fit=crop&crop=face',
    },
    submittedAt: '2 days ago',
    status: 'rejected',
    section: 'Conclusion',
    original: 'Design systems save time and ensure consistency across products.',
    proposed: 'A well-implemented design system dramatically reduces design debt, accelerates development cycles by up to 50%, and creates the coherent user experiences that build lasting brand trust.',
    reason: 'Added specific metrics and broader impact framing.',
    aiScore: 79,
  },
];

const STATUS_CONFIG: Record<SuggestionStatus, { label: string; color: string; bg: string; icon: React.ElementType }> = {
  pending: { label: 'Pending Review', color: '#FF9800', bg: 'rgba(255,152,0,0.12)', icon: Clock },
  approved: { label: 'Approved', color: '#4CAF50', bg: 'rgba(76,175,80,0.12)', icon: CheckCircle },
  rejected: { label: 'Rejected', color: '#F44336', bg: 'rgba(244,67,54,0.12)', icon: XCircle },
};

function DiffView({ original, proposed }: { original: string; proposed: string }) {
  return (
    <div className="space-y-2">
      <div
        className="p-4 rounded-xl"
        style={{ background: 'rgba(244,67,54,0.06)', border: '1px solid rgba(244,67,54,0.15)' }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Minus size={13} style={{ color: '#F44336' }} />
          <span className="text-xs font-medium" style={{ color: '#F44336' }}>Original</span>
        </div>
        <p className="text-sm leading-relaxed line-through" style={{ color: '#F44336', opacity: 0.8 }}>
          {original}
        </p>
      </div>
      <div
        className="p-4 rounded-xl"
        style={{ background: 'rgba(76,175,80,0.06)', border: '1px solid rgba(76,175,80,0.15)' }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Plus size={13} style={{ color: '#4CAF50' }} />
          <span className="text-xs font-medium" style={{ color: '#4CAF50' }}>Proposed</span>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: '#4CAF50' }}>
          {proposed}
        </p>
      </div>
    </div>
  );
}

export default function CollaborationPage() {
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState<Suggestion[]>(SUGGESTIONS);
  const [activeFilter, setActiveFilter] = useState<'all' | SuggestionStatus>('all');
  const [selectedSuggestion, setSelectedSuggestion] = useState<Suggestion | null>(SUGGESTIONS[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAction = (id: string, action: 'approved' | 'rejected') => {
    setSuggestions(prev => prev.map(s => s.id === id ? { ...s, status: action } : s));
    if (selectedSuggestion?.id === id) {
      setSelectedSuggestion(prev => prev ? { ...prev, status: action } : null);
    }
  };

  const filtered = suggestions.filter(s => {
    const matchFilter = activeFilter === 'all' || s.status === activeFilter;
    const matchSearch = !searchQuery || s.articleTitle.toLowerCase().includes(searchQuery.toLowerCase()) || s.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchFilter && matchSearch;
  });

  const counts = {
    all: suggestions.length,
    pending: suggestions.filter(s => s.status === 'pending').length,
    approved: suggestions.filter(s => s.status === 'approved').length,
    rejected: suggestions.filter(s => s.status === 'rejected').length,
  };

  return (
    <div className="flex h-full" style={{ background: '#060D1A' }}>
      {/* Left: suggestion list */}
      <div
        className="w-80 flex flex-col shrink-0 overflow-hidden"
        style={{ borderRight: '1px solid rgba(100,150,255,0.1)', background: '#0C1629' }}
      >
        {/* Header */}
        <div className="px-5 pt-6 pb-4" style={{ borderBottom: '1px solid rgba(100,150,255,0.1)' }}>
          <div className="flex items-center gap-2 mb-4">
            <GitMerge size={18} style={{ color: '#00BCD4' }} />
            <h1 className="text-base font-semibold text-white">Collaboration</h1>
          </div>

          {/* Search */}
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-xl mb-4"
            style={{ background: '#112040', border: '1px solid rgba(100,150,255,0.15)' }}
          >
            <Search size={13} style={{ color: '#8AA3C8' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search suggestions..."
              className="flex-1 bg-transparent text-xs outline-none"
              style={{ color: '#E8F0FE' }}
            />
          </div>

          {/* Filter tabs */}
          <div className="flex gap-1">
            {(['all', 'pending', 'approved', 'rejected'] as const).map(f => {
              const count = counts[f];
              const color = f === 'pending' ? '#FF9800' : f === 'approved' ? '#4CAF50' : f === 'rejected' ? '#F44336' : '#8AA3C8';
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-xs font-medium transition-all"
                  style={{
                    background: activeFilter === f ? 'rgba(21,101,192,0.2)' : 'transparent',
                    color: activeFilter === f ? '#60A5FA' : '#8AA3C8',
                    border: activeFilter === f ? '1px solid rgba(21,101,192,0.3)' : '1px solid transparent',
                  }}
                >
                  {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
                  <span
                    className="px-1.5 py-0.5 rounded-full text-xs"
                    style={{
                      background: activeFilter === f ? 'rgba(21,101,192,0.3)' : 'rgba(100,150,255,0.1)',
                      color: activeFilter === f ? '#60A5FA' : color,
                      fontSize: '10px',
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Suggestions list */}
        <div className="flex-1 overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-12 px-4">
              <GitMerge size={32} style={{ color: '#4A6080', margin: '0 auto 1rem' }} />
              <p className="text-sm" style={{ color: '#8AA3C8' }}>No suggestions found</p>
            </div>
          ) : (
            filtered.map(s => {
              const { color, bg, icon: StatusIcon } = STATUS_CONFIG[s.status];
              const isSelected = selectedSuggestion?.id === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedSuggestion(s)}
                  className="w-full text-left p-4 transition-all"
                  style={{
                    background: isSelected ? 'rgba(21,101,192,0.12)' : 'transparent',
                    borderLeft: isSelected ? '2px solid #1565C0' : '2px solid transparent',
                    borderBottom: '1px solid rgba(100,150,255,0.08)',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <img src={s.author.avatar} alt={s.author.name} className="w-8 h-8 rounded-full object-cover shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-xs font-medium text-white">{s.author.name}</span>
                        <span className="text-xs" style={{ color: '#4A6080' }}>{s.submittedAt}</span>
                      </div>
                      <p className="text-xs truncate mb-2" style={{ color: '#8AA3C8' }}>{s.articleTitle}</p>
                      <div
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs"
                        style={{ background: bg, color }}
                      >
                        <StatusIcon size={10} />
                        {s.status.charAt(0).toUpperCase() + s.status.slice(1)}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* Right: detail view */}
      {selectedSuggestion ? (
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-3xl">
            {/* Header */}
            <div
              className="flex items-start justify-between mb-6 pb-6"
              style={{ borderBottom: '1px solid rgba(100,150,255,0.1)' }}
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {(() => {
                    const { color, bg, icon: StatusIcon, label } = STATUS_CONFIG[selectedSuggestion.status];
                    return (
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: bg, color }}
                      >
                        <StatusIcon size={12} />
                        {label}
                      </span>
                    );
                  })()}
                  <span className="text-xs" style={{ color: '#4A6080' }}>·  {selectedSuggestion.submittedAt}</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-1">{selectedSuggestion.articleTitle}</h2>
                <p className="text-sm" style={{ color: '#8AA3C8' }}>
                  Section: <span className="text-white font-medium">{selectedSuggestion.section}</span>
                </p>
              </div>

              <button
                onClick={() => navigate(`/app/article/${selectedSuggestion.articleId}`)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-all"
                style={{ background: 'rgba(100,150,255,0.1)', color: '#8AA3C8', border: '1px solid rgba(100,150,255,0.15)' }}
              >
                <Eye size={13} />
                View Article
                <ChevronRight size={12} />
              </button>
            </div>

            {/* Author info */}
            <div className="flex items-center gap-3 mb-6">
              <img src={selectedSuggestion.author.avatar} alt={selectedSuggestion.author.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium text-white">{selectedSuggestion.author.name}</p>
                <p className="text-xs" style={{ color: '#8AA3C8' }}>Suggested modification to your article</p>
              </div>
            </div>

            {/* AI Assessment */}
            <div
              className="flex items-center gap-4 p-4 rounded-xl mb-6"
              style={{ background: 'rgba(0,188,212,0.08)', border: '1px solid rgba(0,188,212,0.2)' }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(0,188,212,0.15)', border: '1px solid rgba(0,188,212,0.3)' }}>
                <Sparkles size={18} style={{ color: '#00BCD4' }} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium mb-0.5" style={{ color: '#00BCD4' }}>AI Quality Assessment</p>
                <p className="text-xs" style={{ color: '#8AA3C8' }}>
                  NEURAL+ AI has analyzed this suggestion and rates it <strong style={{ color: '#E8F0FE' }}>{selectedSuggestion.aiScore}/100</strong> for quality, clarity, and improvement.
                </p>
              </div>
              <div className="text-right shrink-0">
                <div
                  className="text-2xl font-black"
                  style={{
                    color: selectedSuggestion.aiScore >= 90 ? '#4CAF50' : selectedSuggestion.aiScore >= 75 ? '#FF9800' : '#F44336',
                  }}
                >
                  {selectedSuggestion.aiScore}
                </div>
                <div className="text-xs" style={{ color: '#8AA3C8' }}>/ 100</div>
              </div>
            </div>

            {/* Diff view */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <GitMerge size={15} />
                Proposed Changes
              </h3>
              <DiffView original={selectedSuggestion.original} proposed={selectedSuggestion.proposed} />
            </div>

            {/* Reason */}
            <div
              className="p-4 rounded-xl mb-8"
              style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare size={13} style={{ color: '#8AA3C8' }} />
                <span className="text-xs font-medium text-white">Author's reasoning</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#C8D8F0' }}>
                "{selectedSuggestion.reason}"
              </p>
            </div>

            {/* Action note */}
            {selectedSuggestion.status === 'pending' && (
              <div
                className="flex items-start gap-2 p-3 rounded-xl mb-6"
                style={{ background: 'rgba(255,152,0,0.08)', border: '1px solid rgba(255,152,0,0.2)' }}
              >
                <AlertCircle size={14} style={{ color: '#FF9800', flexShrink: 0, marginTop: 2 }} />
                <p className="text-xs" style={{ color: '#FF9800' }}>
                  As the article author, approving this suggestion will make the proposed change visible to all readers. Rejecting will dismiss it.
                </p>
              </div>
            )}

            {/* Actions */}
            {selectedSuggestion.status === 'pending' && (
              <div className="flex gap-4">
                <button
                  onClick={() => handleAction(selectedSuggestion.id, 'rejected')}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02]"
                  style={{
                    background: 'rgba(244,67,54,0.1)',
                    color: '#F44336',
                    border: '1px solid rgba(244,67,54,0.25)',
                  }}
                >
                  <X size={16} />
                  Reject Suggestion
                </button>
                <button
                  onClick={() => handleAction(selectedSuggestion.id, 'approved')}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, #388E3C, #4CAF50)',
                    color: 'white',
                    boxShadow: '0 4px 16px rgba(76,175,80,0.3)',
                  }}
                >
                  <Check size={16} />
                  Approve & Apply
                </button>
              </div>
            )}

            {selectedSuggestion.status !== 'pending' && (
              <div
                className="flex items-center justify-center gap-2 py-4 rounded-xl"
                style={{
                  background: selectedSuggestion.status === 'approved' ? 'rgba(76,175,80,0.1)' : 'rgba(244,67,54,0.1)',
                  border: `1px solid ${selectedSuggestion.status === 'approved' ? 'rgba(76,175,80,0.25)' : 'rgba(244,67,54,0.25)'}`,
                  color: selectedSuggestion.status === 'approved' ? '#4CAF50' : '#F44336',
                }}
              >
                {selectedSuggestion.status === 'approved' ? <CheckCircle size={18} /> : <XCircle size={18} />}
                <span className="text-sm font-semibold">
                  This suggestion has been {selectedSuggestion.status}
                </span>
              </div>
            )}

            {/* Workflow history */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold text-white mb-4">Activity Timeline</h3>
              <div className="relative pl-6">
                <div className="absolute left-2.5 top-0 bottom-0 w-px" style={{ background: 'rgba(100,150,255,0.15)' }} />
                {[
                  { icon: User, text: `${selectedSuggestion.author.name} submitted a modification suggestion`, time: selectedSuggestion.submittedAt, color: '#8AA3C8' },
                  { icon: Sparkles, text: 'NEURAL+ AI analyzed and scored the suggestion (92/100)', time: selectedSuggestion.submittedAt, color: '#00BCD4' },
                  ...(selectedSuggestion.status !== 'pending' ? [{ icon: selectedSuggestion.status === 'approved' ? CheckCircle : XCircle, text: `You ${selectedSuggestion.status} this suggestion`, time: 'Just now', color: selectedSuggestion.status === 'approved' ? '#4CAF50' : '#F44336' }] : []),
                ].map((event, i) => (
                  <div key={i} className="flex gap-3 mb-4">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 -ml-2.5"
                      style={{ background: '#0C1629', border: `2px solid ${event.color}` }}
                    >
                      <event.icon size={10} style={{ color: event.color }} />
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: '#C8D8F0' }}>{event.text}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#4A6080' }}>{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <GitMerge size={48} style={{ color: '#4A6080', margin: '0 auto 1rem' }} />
            <p className="text-white font-medium mb-1">Select a suggestion to review</p>
            <p className="text-sm" style={{ color: '#8AA3C8' }}>Click on any suggestion from the left panel</p>
          </div>
        </div>
      )}
    </div>
  );
}
