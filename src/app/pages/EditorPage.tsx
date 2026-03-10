import { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';
import {
  Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight,
  List, ListOrdered, Link2, Image, Code, Quote, Sparkles,
  ChevronRight, Globe, Lock, Save, Download, Upload,
  Wand2, RefreshCw, Scissors, ZoomIn, BarChart3, X,
  Hash, Minus, MessageSquare, Send, CheckCircle, ChevronDown,
  Type, Eye, FileText
} from 'lucide-react';

const TOOLBAR_GROUPS = [
  [
    { icon: Bold, label: 'Bold', action: 'bold' },
    { icon: Italic, label: 'Italic', action: 'italic' },
    { icon: Underline, label: 'Underline', action: 'underline' },
  ],
  [
    { icon: AlignLeft, label: 'Align Left', action: 'left' },
    { icon: AlignCenter, label: 'Align Center', action: 'center' },
    { icon: AlignRight, label: 'Align Right', action: 'right' },
  ],
  [
    { icon: List, label: 'Bullet List', action: 'ul' },
    { icon: ListOrdered, label: 'Numbered List', action: 'ol' },
    { icon: Quote, label: 'Blockquote', action: 'quote' },
  ],
  [
    { icon: Code, label: 'Code Block', action: 'code' },
    { icon: Link2, label: 'Insert Link', action: 'link' },
    { icon: Image, label: 'Insert Image', action: 'image' },
    { icon: BarChart3, label: 'Generate Chart', action: 'chart' },
  ],
];

const AI_ACTIONS = [
  { icon: Wand2, label: 'Improve Writing', color: '#00BCD4', prompt: 'improve' },
  { icon: Scissors, label: 'Summarize', color: '#4CAF50', prompt: 'summarize' },
  { icon: ZoomIn, label: 'Expand Text', color: '#FF9800', prompt: 'expand' },
  { icon: RefreshCw, label: 'Rewrite', color: '#9C27B0', prompt: 'rewrite' },
  { icon: MessageSquare, label: 'Clarify Ideas', color: '#E91E63', prompt: 'clarify' },
  { icon: BarChart3, label: 'Generate Visual', color: '#1565C0', prompt: 'visual' },
];

const AI_CHAT_HISTORY = [
  { role: 'user', text: 'Can you improve the introduction paragraph?' },
  {
    role: 'assistant',
    text: 'I\'ve analyzed your introduction. Here\'s an improved version that\'s more engaging and sets clearer context for the reader. The revised paragraph flows better and uses more precise language.\n\n*"Artificial intelligence is no longer a distant concept — it\'s transforming how we create, communicate, and collaborate. In this article, we explore..."*',
  },
  { role: 'user', text: 'Generate a summary of the article' },
  {
    role: 'assistant',
    text: 'Here\'s a concise summary:\n\nThis article examines how generative AI is reshaping content creation workflows, covering key tools, practical implementation strategies, and the ethical considerations for modern writers and researchers.',
  },
];

const TONE_OPTIONS = ['Professional', 'Casual', 'Academic', 'Creative', 'Technical'];
const HEADING_OPTIONS = ['Paragraph', 'Heading 1', 'Heading 2', 'Heading 3'];

const initialContent = `The Future of Generative AI in Content Creation

Artificial intelligence is fundamentally changing how we think about creating content. From automated writing assistants to image generation systems, AI tools are becoming indispensable in modern workflows.

In this article, we'll explore the most significant advancements in AI-assisted content creation, examine the practical tools available today, and discuss the ethical implications for creators and organizations alike.

## The Rise of Large Language Models

Large language models (LLMs) like GPT-4 and Gemini have demonstrated remarkable capabilities in understanding context, generating coherent text, and even engaging in complex reasoning tasks. These models are trained on vast corpora of text data, enabling them to produce human-like content across diverse domains.

## Practical Applications

Content creators are leveraging AI in several ways:
- Automated first drafts and outlines
- Grammar and style improvements  
- Translation and localization
- SEO optimization and keyword integration
- Personalized content at scale

## Ethical Considerations

As AI becomes more capable, questions around authorship, originality, and intellectual property become increasingly important. We must develop frameworks that balance innovation with ethical responsibility.`;

export default function EditorPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState(id ? 'The Future of Generative AI in Content Creation' : '');
  const [content, setContent] = useState(id ? initialContent : '');
  const [aiPanelOpen, setAiPanelOpen] = useState(true);
  const [aiMessage, setAiMessage] = useState('');
  const [chatHistory, setChatHistory] = useState(id ? AI_CHAT_HISTORY : []);
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [status, setStatus] = useState<'draft' | 'published' | 'private'>(id ? 'published' : 'draft');
  const [selectedTone, setSelectedTone] = useState('Professional');
  const [selectedHeading, setSelectedHeading] = useState('Paragraph');
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [saved, setSaved] = useState(false);
  const [wordCount, setWordCount] = useState(id ? 312 : 0);
  const [activeAiAction, setActiveAiAction] = useState<string | null>(null);
  const [showImportModal, setShowImportModal] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setWordCount(e.target.value.split(/\s+/).filter(Boolean).length);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleAiSend = () => {
    if (!aiMessage.trim()) return;
    const userMsg = { role: 'user', text: aiMessage };
    setChatHistory(prev => [...prev, userMsg]);
    setAiMessage('');
    setIsAiTyping(true);

    setTimeout(() => {
      const responses: Record<string, string> = {
        default: "I've analyzed your content and here are my suggestions:\n\n1. **Clarity**: The main argument could be stated more directly in the opening.\n2. **Flow**: Consider adding transition sentences between the sections.\n3. **Evidence**: Adding specific statistics would strengthen your points.\n\nWould you like me to apply any of these improvements automatically?",
        summarize: "Here's a concise summary of your article:\n\n*This piece examines how AI tools are transforming content creation workflows, covering practical applications, ethical considerations, and the future of AI-assisted writing for modern creators.*",
        improve: "I've enhanced your writing for clarity and impact. The revised version uses more active voice, stronger verbs, and better paragraph transitions. Shall I apply these changes?",
      };
      const reply = responses[aiMessage.toLowerCase().includes('summar') ? 'summarize' : aiMessage.toLowerCase().includes('improv') ? 'improve' : 'default'];
      setChatHistory(prev => [...prev, { role: 'assistant', text: reply }]);
      setIsAiTyping(false);
    }, 1800);
  };

  const handleAiAction = (action: string) => {
    setActiveAiAction(action);
    setIsAiTyping(true);
    const actionPrompts: Record<string, string> = {
      improve: 'Improving your writing style and clarity...',
      summarize: 'Generating a concise summary...',
      expand: 'Expanding your content with more detail...',
      rewrite: 'Rewriting for better flow...',
      clarify: 'Clarifying the main ideas...',
      visual: 'Generating a visual chart from your content...',
    };
    setChatHistory(prev => [...prev, { role: 'user', text: `[${AI_ACTIONS.find(a => a.prompt === action)?.label}]` }]);

    setTimeout(() => {
      setChatHistory(prev => [...prev, {
        role: 'assistant',
        text: action === 'visual'
          ? '📊 I\'ve generated a bar chart visualizing the key statistics mentioned in your article. The chart has been inserted into the editor above the "Practical Applications" section.'
          : `✅ Done! I\'ve ${action === 'improve' ? 'improved' : action === 'summarize' ? 'summarized' : action === 'expand' ? 'expanded' : action === 'rewrite' ? 'rewritten' : 'clarified'} your content. Review the changes in the editor and let me know if you\'d like any adjustments.`,
      }]);
      setIsAiTyping(false);
      setActiveAiAction(null);
    }, 2200);
  };

  const statusConfig = {
    draft: { label: 'Draft', color: '#FF9800', icon: FileText },
    published: { label: 'Published', color: '#4CAF50', icon: Globe },
    private: { label: 'Private', color: '#8AA3C8', icon: Lock },
  };

  const CurrentStatusIcon = statusConfig[status].icon;

  return (
    <div className="flex h-full" style={{ background: '#060D1A' }}>
      {/* Main editor area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Editor toolbar */}
        <div
          className="flex items-center gap-1 px-4 py-2 shrink-0 overflow-x-auto"
          style={{ background: '#0C1629', borderBottom: '1px solid rgba(100,150,255,0.1)' }}
        >
          {/* Heading selector */}
          <div className="relative shrink-0">
            <button
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
              style={{ background: '#112040', color: '#C8D8F0', border: '1px solid rgba(100,150,255,0.15)' }}
            >
              <Type size={13} />
              {selectedHeading}
              <ChevronDown size={12} />
            </button>
          </div>

          <div className="w-px h-5 mx-1" style={{ background: 'rgba(100,150,255,0.15)' }} />

          {/* Formatting groups */}
          {TOOLBAR_GROUPS.map((group, gi) => (
            <div key={gi} className="flex items-center gap-0.5">
              {group.map(({ icon: Icon, label, action }) => (
                <button
                  key={action}
                  title={label}
                  className="p-1.5 rounded-lg transition-all hover:scale-110"
                  style={{ color: '#8AA3C8' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(100,150,255,0.12)')}
                  onMouseLeave={e => (e.currentTarget.style.background = '')}
                >
                  <Icon size={15} />
                </button>
              ))}
              {gi < TOOLBAR_GROUPS.length - 1 && (
                <div className="w-px h-5 mx-1" style={{ background: 'rgba(100,150,255,0.15)' }} />
              )}
            </div>
          ))}

          {/* Tone selector */}
          <div className="ml-auto flex items-center gap-2 shrink-0">
            <button
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
              style={{ background: 'rgba(0,188,212,0.1)', border: '1px solid rgba(0,188,212,0.2)', color: '#00BCD4' }}
            >
              <Sparkles size={12} />
              Tone: {selectedTone}
              <ChevronDown size={11} />
            </button>
          </div>
        </div>

        {/* Editor content */}
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <div className="max-w-3xl mx-auto">
              {/* Title */}
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Article title..."
                className="w-full text-3xl font-bold mb-6 bg-transparent outline-none placeholder:opacity-30"
                style={{ color: '#E8F0FE', letterSpacing: '-0.02em', lineHeight: 1.2 }}
              />

              {/* Tags */}
              <div className="flex items-center gap-2 mb-6">
                <Hash size={14} style={{ color: '#8AA3C8' }} />
                <input
                  type="text"
                  placeholder="Add tags... (e.g. AI, Technology, Research)"
                  className="flex-1 bg-transparent text-sm outline-none"
                  style={{ color: '#8AA3C8' }}
                  defaultValue={id ? 'AI, Content, Technology, Future' : ''}
                />
              </div>

              {/* Divider */}
              <div className="mb-6" style={{ borderTop: '1px solid rgba(100,150,255,0.1)' }} />

              {/* Content area */}
              <textarea
                ref={textareaRef}
                value={content}
                onChange={handleContentChange}
                placeholder="Start writing your article... or import a document using the toolbar above."
                className="w-full bg-transparent outline-none resize-none text-base leading-relaxed"
                style={{
                  color: '#E8F0FE',
                  minHeight: '60vh',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '1.8',
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex items-center justify-between px-6 py-3 shrink-0"
          style={{ background: '#0C1629', borderTop: '1px solid rgba(100,150,255,0.1)' }}
        >
          <div className="flex items-center gap-4 text-xs" style={{ color: '#8AA3C8' }}>
            <span>{wordCount} words</span>
            <span>·</span>
            <span>{Math.max(1, Math.ceil(wordCount / 200))} min read</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <CheckCircle size={11} style={{ color: saved ? '#4CAF50' : '#8AA3C8' }} />
              {saved ? 'Saved' : 'Unsaved changes'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Import button */}
            <button
              onClick={() => setShowImportModal(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all"
              style={{ background: 'rgba(100,150,255,0.08)', border: '1px solid rgba(100,150,255,0.15)', color: '#8AA3C8' }}
            >
              <Upload size={13} /> Import
            </button>

            {/* Save */}
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all"
              style={{ background: 'rgba(100,150,255,0.1)', border: '1px solid rgba(100,150,255,0.2)', color: '#E8F0FE' }}
            >
              <Save size={13} /> Save
            </button>

            {/* Status/Publish */}
            <div className="relative">
              <button
                onClick={() => setShowStatusMenu(!showStatusMenu)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all"
                style={{
                  background: status === 'published' ? 'linear-gradient(135deg, #1565C0, #0288D1)' : '#112040',
                  border: status === 'published' ? 'none' : '1px solid rgba(100,150,255,0.2)',
                  color: 'white',
                  boxShadow: status === 'published' ? '0 4px 12px rgba(21,101,192,0.35)' : 'none',
                }}
              >
                <CurrentStatusIcon size={13} />
                {statusConfig[status].label}
                <ChevronDown size={11} />
              </button>

              {showStatusMenu && (
                <div
                  className="absolute bottom-full right-0 mb-2 w-44 rounded-xl overflow-hidden"
                  style={{ background: '#112040', border: '1px solid rgba(100,150,255,0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
                >
                  {(Object.keys(statusConfig) as Array<'draft' | 'published' | 'private'>).map(s => {
                    const { label, color, icon: Icon } = statusConfig[s];
                    return (
                      <button
                        key={s}
                        onClick={() => { setStatus(s); setShowStatusMenu(false); }}
                        className="flex items-center gap-3 w-full px-4 py-3 text-xs font-medium text-left transition-all hover:bg-white/5"
                        style={{ color: status === s ? color : '#C8D8F0' }}
                      >
                        <Icon size={13} style={{ color }} />
                        {label}
                        {status === s && <CheckCircle size={12} className="ml-auto" style={{ color }} />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Export */}
            <div className="relative">
              <button
                onClick={() => setShowExportMenu(!showExportMenu)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all"
                style={{ background: 'rgba(100,150,255,0.08)', border: '1px solid rgba(100,150,255,0.15)', color: '#8AA3C8' }}
              >
                <Download size={13} /> Export
                <ChevronDown size={11} />
              </button>
              {showExportMenu && (
                <div
                  className="absolute bottom-full right-0 mb-2 w-40 rounded-xl overflow-hidden"
                  style={{ background: '#112040', border: '1px solid rgba(100,150,255,0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
                >
                  {['PDF', 'DOCX', 'Markdown', 'HTML'].map(fmt => (
                    <button
                      key={fmt}
                      onClick={() => setShowExportMenu(false)}
                      className="flex items-center gap-2 w-full px-4 py-3 text-xs font-medium text-left transition-all hover:bg-white/5"
                      style={{ color: '#C8D8F0' }}
                    >
                      <Download size={12} style={{ color: '#8AA3C8' }} />
                      Export as {fmt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* AI panel toggle */}
            <button
              onClick={() => setAiPanelOpen(!aiPanelOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all"
              style={{
                background: aiPanelOpen ? 'rgba(0,188,212,0.15)' : 'rgba(100,150,255,0.08)',
                border: aiPanelOpen ? '1px solid rgba(0,188,212,0.3)' : '1px solid rgba(100,150,255,0.15)',
                color: aiPanelOpen ? '#00BCD4' : '#8AA3C8',
              }}
            >
              <Sparkles size={13} />
              AI Assistant
            </button>
          </div>
        </div>
      </div>

      {/* AI Assistant Panel */}
      {aiPanelOpen && (
        <div
          className="flex flex-col shrink-0 overflow-hidden"
          style={{
            width: 360,
            background: '#0C1629',
            borderLeft: '1px solid rgba(100,150,255,0.1)',
          }}
        >
          {/* Panel header */}
          <div
            className="flex items-center justify-between px-5 py-4 shrink-0"
            style={{ borderBottom: '1px solid rgba(100,150,255,0.1)' }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(0,188,212,0.15)', border: '1px solid rgba(0,188,212,0.3)' }}
              >
                <Sparkles size={14} style={{ color: '#00BCD4' }} />
              </div>
              <div>
                <span className="text-sm font-semibold text-white">AI Assistant</span>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#4CAF50' }} />
                  <span className="text-xs" style={{ color: '#8AA3C8' }}>Gemini Pro · Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setAiPanelOpen(false)} style={{ color: '#8AA3C8' }}>
              <X size={16} />
            </button>
          </div>

          {/* Quick actions */}
          <div className="px-4 py-4 shrink-0" style={{ borderBottom: '1px solid rgba(100,150,255,0.08)' }}>
            <p className="text-xs font-medium mb-3" style={{ color: '#8AA3C8' }}>Quick Actions</p>
            <div className="grid grid-cols-3 gap-2">
              {AI_ACTIONS.map(({ icon: Icon, label, color, prompt }) => (
                <button
                  key={prompt}
                  onClick={() => handleAiAction(prompt)}
                  disabled={isAiTyping}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-xl text-center transition-all hover:scale-[1.03] disabled:opacity-50"
                  style={{
                    background: activeAiAction === prompt ? `${color}20` : 'rgba(100,150,255,0.06)',
                    border: `1px solid ${activeAiAction === prompt ? `${color}40` : 'rgba(100,150,255,0.12)'}`,
                  }}
                >
                  <Icon size={16} style={{ color }} />
                  <span className="text-xs" style={{ color: '#C8D8F0', lineHeight: 1.2 }}>{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Chat area */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {chatHistory.length === 0 && (
              <div className="text-center py-8">
                <Sparkles size={32} style={{ color: '#00BCD4', opacity: 0.4, margin: '0 auto 1rem' }} />
                <p className="text-sm" style={{ color: '#8AA3C8' }}>Ask NEURAL+ AI anything about your content</p>
              </div>
            )}
            {chatHistory.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    background: msg.role === 'user' ? 'rgba(21,101,192,0.3)' : 'rgba(0,188,212,0.15)',
                    border: `1px solid ${msg.role === 'user' ? 'rgba(21,101,192,0.4)' : 'rgba(0,188,212,0.3)'}`,
                  }}
                >
                  {msg.role === 'user' ? (
                    <img
                      src="https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=28&h=28&fit=crop&crop=face"
                      alt="User"
                      className="w-7 h-7 rounded-full object-cover"
                    />
                  ) : (
                    <Sparkles size={13} style={{ color: '#00BCD4' }} />
                  )}
                </div>
                <div
                  className="flex-1 px-3 py-2.5 rounded-xl text-xs leading-relaxed"
                  style={{
                    background: msg.role === 'user' ? 'rgba(21,101,192,0.15)' : '#112040',
                    border: `1px solid ${msg.role === 'user' ? 'rgba(21,101,192,0.25)' : 'rgba(100,150,255,0.1)'}`,
                    color: '#C8D8F0',
                    maxWidth: '85%',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isAiTyping && (
              <div className="flex gap-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(0,188,212,0.15)', border: '1px solid rgba(0,188,212,0.3)' }}
                >
                  <Sparkles size={13} style={{ color: '#00BCD4' }} />
                </div>
                <div
                  className="px-4 py-3 rounded-xl"
                  style={{ background: '#112040', border: '1px solid rgba(100,150,255,0.1)' }}
                >
                  <div className="flex gap-1">
                    {[0, 1, 2].map(i => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          background: '#00BCD4',
                          animation: 'bounce 1.2s ease infinite',
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat input */}
          <div
            className="px-4 py-4 shrink-0"
            style={{ borderTop: '1px solid rgba(100,150,255,0.1)' }}
          >
            <div
              className="flex items-end gap-2 px-3 py-2 rounded-xl"
              style={{ background: '#112040', border: '1px solid rgba(100,150,255,0.2)' }}
            >
              <textarea
                value={aiMessage}
                onChange={e => setAiMessage(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleAiSend(); } }}
                placeholder="Ask AI to help with your writing..."
                rows={2}
                className="flex-1 bg-transparent text-xs outline-none resize-none"
                style={{ color: '#E8F0FE', lineHeight: 1.5 }}
              />
              <button
                onClick={handleAiSend}
                disabled={!aiMessage.trim() || isAiTyping}
                className="flex items-center justify-center w-8 h-8 rounded-lg transition-all shrink-0"
                style={{
                  background: aiMessage.trim() ? 'linear-gradient(135deg, #1565C0, #00BCD4)' : 'rgba(100,150,255,0.1)',
                  color: aiMessage.trim() ? 'white' : '#8AA3C8',
                }}
              >
                <Send size={14} />
              </button>
            </div>
            <p className="text-xs mt-2 text-center" style={{ color: '#4A6080' }}>
              AI may produce inaccurate information. Review before publishing.
            </p>
          </div>
        </div>
      )}

      {/* Import Modal */}
      {showImportModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
          onClick={() => setShowImportModal(false)}
        >
          <div
            className="w-full max-w-md p-8 rounded-2xl"
            style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.2)' }}
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold text-white mb-2">Import Document</h2>
            <p className="text-sm mb-6" style={{ color: '#8AA3C8' }}>
              Upload a file and NEURAL+ AI will parse and import the content.
            </p>
            <div
              className="flex flex-col items-center gap-3 p-8 rounded-xl cursor-pointer transition-all hover:border-blue-500/50 mb-6"
              style={{ border: '2px dashed rgba(100,150,255,0.25)', background: 'rgba(100,150,255,0.04)' }}
            >
              <Upload size={32} style={{ color: '#1565C0' }} />
              <p className="text-sm font-medium text-white">Drop files here or click to browse</p>
              <p className="text-xs" style={{ color: '#8AA3C8' }}>Supports PDF, DOCX, TXT, Markdown, HTML</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowImportModal(false)}
                className="flex-1 py-3 rounded-xl text-sm font-medium transition-all"
                style={{ background: '#112040', color: '#8AA3C8', border: '1px solid rgba(100,150,255,0.15)' }}
              >
                Cancel
              </button>
              <button
                onClick={() => setShowImportModal(false)}
                className="flex-1 py-3 rounded-xl text-sm font-medium text-white transition-all"
                style={{ background: 'linear-gradient(135deg, #1565C0, #0288D1)', boxShadow: '0 4px 16px rgba(21,101,192,0.3)' }}
              >
                Import File
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
