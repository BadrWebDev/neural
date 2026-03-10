import {
  Heart, Bookmark, Share2, MessageSquare, Eye, Clock,
  MoreHorizontal, Edit3, GitMerge, ChevronLeft, ArrowUp,
  Send, ThumbsUp, Flag, Copy, ExternalLink, Linkedin, Download,
  Globe, Sparkles, AlertCircle, Link2
} from 'lucide-react';

const ARTICLE = {
  id: '1',
  title: 'The Future of Generative AI in Content Creation',
  subtitle: 'How artificial intelligence is fundamentally reshaping how we think, write, and publish.',
  content: `Artificial intelligence is no longer a distant concept — it's transforming how we create, communicate, and collaborate. In this article, we explore the most significant advancements in AI-assisted content creation, examine the practical tools available today, and discuss the ethical implications for creators and organizations alike.

## The Rise of Large Language Models

Large language models (LLMs) like GPT-4, Claude, and Gemini have demonstrated remarkable capabilities in understanding context, generating coherent text, and even engaging in complex reasoning tasks. These models are trained on vast corpora of text data, enabling them to produce human-like content across diverse domains.

The implications are profound. Writers who once spent hours crafting a first draft can now generate a solid foundation in minutes. Researchers can quickly summarize complex literature. Marketers can personalize content at scale without massive teams.

> "The best AI tools don't replace human creativity — they amplify it. They handle the mechanical parts of writing so humans can focus on the ideas that truly matter." — Dr. Sarah Chen, AI Research Lead

## Practical Applications for Modern Creators

Content creators are leveraging AI in several transformative ways:

**Automated first drafts**: Using AI to generate initial content that writers then refine and personalize. This reduces blank-page anxiety and accelerates the writing process significantly.

**Research assistance**: AI can quickly surface relevant information, summarize academic papers, and identify key themes across large bodies of text — tasks that once took researchers days.

**Personalization at scale**: Organizations can now create variations of content tailored to different audiences, use cases, or regions without proportionally scaling their content teams.

**Real-time editing**: AI-powered grammar, style, and tone suggestions help writers improve their work as they write, rather than in separate editing passes.

## The Collaboration Dimension

What's particularly exciting about platforms like NEURAL+ is the intersection of AI assistance with human collaboration. Content creation has never been purely solitary — editors, fact-checkers, subject matter experts, and reviewers have always played crucial roles.

AI is now enhancing each of these collaborative relationships. Editors can use AI to quickly identify structural issues. Reviewers can leverage AI summaries to provide faster feedback. Teams can use AI to maintain consistent voice and style across contributions from multiple writers.

## Ethical Considerations

As AI becomes more capable, questions around authorship, originality, and intellectual property become increasingly important. Key considerations include:

- **Transparency**: Should AI-assisted content be labeled as such?
- **Attribution**: When AI contributes significantly, how do we attribute authorship?
- **Bias**: AI models reflect the biases in their training data. How do we mitigate this?
- **Quality control**: Human judgment remains essential for accuracy and nuance.

The field is evolving rapidly, and best practices are still emerging. What's clear is that thoughtful integration of AI — with appropriate human oversight — offers tremendous benefits while managing the risks.

## Looking Ahead

The trajectory of AI in content creation points toward increasingly sophisticated collaborative tools. We can expect:

**Multimodal generation**: AI that seamlessly blends text, images, data visualizations, and other media forms into cohesive content experiences.

**Deeper context awareness**: AI systems that understand an organization's voice, past content, and audience preferences at a deep level.

**Real-time collaboration**: Multiple creators and AI systems working together in real time, with AI suggesting improvements as content takes shape.

The future of content creation is not human vs. AI — it's human + AI, with each contributing what they do best. Platforms like NEURAL+ are building this future today.`,
  author: {
    name: 'Mohamed Nour Zidani',
    avatar: 'https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=48&h=48&fit=crop&crop=face',
    bio: 'Software engineer & AI researcher. Building the future of collaborative content. @m.zidani',
    articles: 24,
    followers: 1840,
  },
  publishedAt: 'March 8, 2026',
  updatedAt: 'March 10, 2026',
  readTime: '8 min read',
  views: 4821,
  likes: 312,
  bookmarks: 142,
  comments: 47,
  tags: ['Artificial Intelligence', 'Content Creation', 'Future of Work', 'Technology'],
  coverImage: 'https://images.unsplash.com/photo-1620555791739-438a95e7ff65?w=1200&fit=crop',
};

const COMMENTS = [
  {
    id: '1',
    author: { name: 'Akram Litniti', avatar: 'https://images.unsplash.com/photo-1759884247264-86c2aa311632?w=40&h=40&fit=crop&crop=face' },
    text: 'Excellent analysis! The section on ethical considerations is particularly well-reasoned. I think the point about transparency is crucial — readers deserve to know when AI has played a significant role in content creation.',
    likes: 28,
    time: '2 hours ago',
    replies: [
      {
        id: '1-1',
        author: { name: 'Mohamed Nour Zidani', avatar: 'https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=40&h=40&fit=crop&crop=face' },
        text: 'Thanks, Akram! Agreed — transparency is the foundation of trust between creators and their audiences. We\'re seeing some promising standards emerging in the industry.',
        likes: 12,
        time: '1 hour ago',
        replies: [],
      },
    ],
  },
  {
    id: '2',
    author: { name: 'Badr Farhani', avatar: 'https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=40&h=40&fit=crop&crop=face' },
    text: 'The human + AI framing at the end is exactly right. The tools that win will be the ones that make the human feel more capable, not replaced. NEURAL+ is doing great work here.',
    likes: 19,
    time: '4 hours ago',
    replies: [],
  },
  {
    id: '3',
    author: { name: 'Ilias Jbilou', avatar: 'https://images.unsplash.com/photo-1759884247264-86c2aa311632?w=40&h=40&fit=crop&crop=face' },
    text: 'Would love to see a follow-up on the multimodal generation point. The combination of text and data visualization in real-time is something I\'m particularly excited about.',
    likes: 15,
    time: '6 hours ago',
    replies: [],
  },
];

const RELATED = [
  {
    id: '6',
    title: 'Machine Learning in Production: Lessons Learned',
    author: 'Akram Litniti',
    readTime: '11 min',
    likes: 634,
    avatar: 'https://images.unsplash.com/photo-1759884247264-86c2aa311632?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: '7',
    title: 'The Art of Technical Writing for Developers',
    author: 'Badr Farhani',
    readTime: '7 min',
    likes: 421,
    avatar: 'https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: '8',
    title: 'Building AI-Powered Applications with React',
    author: 'Ilias Jbilou',
    readTime: '14 min',
    likes: 892,
    avatar: 'https://images.unsplash.com/photo-1759884247264-86c2aa311632?w=32&h=32&fit=crop&crop=face',
  },
];

function CommentItem({ comment, depth = 0 }: { comment: any; depth?: number }) {
  const [liked, setLiked] = useState(false);
  const [showReply, setShowReply] = useState(false);

  return (
    <div className={depth > 0 ? 'ml-10 mt-4' : ''}>
      <div className="flex gap-3">
        <img src={comment.author.avatar} alt={comment.author.name} className="w-9 h-9 rounded-full object-cover shrink-0" />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-semibold text-white">{comment.author.name}</span>
            <span className="text-xs" style={{ color: '#4A6080' }}>{comment.time}</span>
          </div>
          <p className="text-sm leading-relaxed mb-3" style={{ color: '#C8D8F0' }}>{comment.text}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLiked(!liked)}
              className="flex items-center gap-1.5 text-xs transition-colors"
              style={{ color: liked ? '#E91E63' : '#8AA3C8' }}
            >
              <ThumbsUp size={12} />
              {comment.likes + (liked ? 1 : 0)}
            </button>
            <button
              onClick={() => setShowReply(!showReply)}
              className="flex items-center gap-1.5 text-xs transition-colors"
              style={{ color: '#8AA3C8' }}
            >
              <MessageSquare size={12} />
              Reply
            </button>
            <button className="text-xs" style={{ color: '#8AA3C8' }}>
              <Flag size={12} />
            </button>
          </div>
          {showReply && (
            <div className="mt-3 flex gap-2">
              <input
                type="text"
                placeholder="Write a reply..."
                className="flex-1 px-3 py-2 rounded-lg text-sm outline-none"
                style={{ background: '#112040', border: '1px solid rgba(100,150,255,0.2)', color: '#E8F0FE' }}
              />
              <button
                className="px-3 py-2 rounded-lg text-xs font-medium text-white"
                style={{ background: '#1565C0' }}
              >
                Reply
              </button>
            </div>
          )}
        </div>
      </div>
      {comment.replies?.map((reply: any) => (
        <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
      ))}
    </div>
  );
}

export default function ArticlePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [comment, setComment] = useState('');
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestionText, setSuggestionText] = useState('');

  const handleSuggestChange = () => {
    if (!suggestionText.trim()) return;
    setShowSuggestion(false);
    setSuggestionText('');
    // In a real app, this would submit to backend
    alert('Your suggestion has been submitted for the author\'s review!');
  };

  return (
    <div style={{ background: '#060D1A', minHeight: '100vh', color: '#E8F0FE' }}>
      {/* Cover image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={ARTICLE.coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, #060D1A 0%, rgba(6,13,26,0.4) 100%)' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Back navigation */}
        <button
          onClick={() => navigate('/app')}
          className="flex items-center gap-2 mt-4 mb-6 text-sm transition-colors"
          style={{ color: '#8AA3C8' }}
        >
          <ChevronLeft size={16} />
          Back to Dashboard
        </button>

        {/* Article header */}
        <div className="mb-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {ARTICLE.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium cursor-pointer"
                style={{ background: 'rgba(21,101,192,0.15)', color: '#60A5FA', border: '1px solid rgba(21,101,192,0.25)' }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-white mb-3" style={{ lineHeight: 1.25, letterSpacing: '-0.02em' }}>
            {ARTICLE.title}
          </h1>
          <p className="text-lg leading-relaxed mb-6" style={{ color: '#8AA3C8' }}>
            {ARTICLE.subtitle}
          </p>

          {/* Author + meta */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-6" style={{ borderBottom: '1px solid rgba(100,150,255,0.1)' }}>
            <div className="flex items-center gap-3">
              <img src={ARTICLE.author.avatar} alt={ARTICLE.author.name} className="w-11 h-11 rounded-full object-cover" style={{ border: '2px solid rgba(21,101,192,0.4)' }} />
              <div>
                <div className="text-sm font-semibold text-white">{ARTICLE.author.name}</div>
                <div className="flex items-center gap-3 text-xs" style={{ color: '#8AA3C8' }}>
                  <span>{ARTICLE.publishedAt}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock size={11} />{ARTICLE.readTime}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Eye size={11} />{ARTICLE.views.toLocaleString()} views</span>
                </div>
              </div>
            </div>

            <div className="sm:ml-auto flex items-center gap-2">
              <button
                onClick={() => navigate('/app/editor/1')}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-all"
                style={{ background: 'rgba(21,101,192,0.15)', color: '#60A5FA', border: '1px solid rgba(21,101,192,0.25)' }}
              >
                <Edit3 size={13} /> Edit
              </button>
              <button
                onClick={() => setShowSuggestion(true)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-all"
                style={{ background: 'rgba(0,188,212,0.1)', color: '#00BCD4', border: '1px solid rgba(0,188,212,0.25)' }}
              >
                <GitMerge size={13} /> Suggest Edit
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Article content */}
          <article className="flex-1 min-w-0">
            <div
              className="prose max-w-none leading-relaxed space-y-4"
              style={{ color: '#C8D8F0' }}
            >
              {ARTICLE.content.split('\n\n').map((block, i) => {
                if (block.startsWith('## ')) {
                  return (
                    <h2 key={i} className="text-xl font-bold text-white mt-8 mb-3">
                      {block.replace('## ', '')}
                    </h2>
                  );
                }
                if (block.startsWith('> ')) {
                  return (
                    <blockquote
                      key={i}
                      className="px-5 py-4 rounded-xl my-6"
                      style={{
                        background: 'rgba(21,101,192,0.08)',
                        borderLeft: '3px solid #1565C0',
                        color: '#C8D8F0',
                        fontStyle: 'italic',
                      }}
                    >
                      {block.replace('> ', '')}
                    </blockquote>
                  );
                }
                if (block.includes('\n- ') || block.startsWith('- ')) {
                  const lines = block.split('\n');
                  return (
                    <ul key={i} className="space-y-2 my-4">
                      {lines.map((line, li) => {
                        if (line.startsWith('- ') || line.startsWith('**')) {
                          const text = line.replace(/^- /, '').replace(/^\*\*(.*?)\*\*: /, '<strong>$1</strong>: ');
                          return (
                            <li key={li} className="flex gap-2 text-sm" style={{ color: '#C8D8F0' }}>
                              <span style={{ color: '#00BCD4', marginTop: 3 }}>•</span>
                              <span dangerouslySetInnerHTML={{ __html: text }} />
                            </li>
                          );
                        }
                        return null;
                      })}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-sm leading-relaxed" style={{ color: '#C8D8F0' }}>
                    {block.replace(/\*\*(.*?)\*\*/g, '$1')}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10 pt-8" style={{ borderTop: '1px solid rgba(100,150,255,0.1)' }}>
              {ARTICLE.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs cursor-pointer"
                  style={{ background: '#112040', color: '#8AA3C8', border: '1px solid rgba(100,150,255,0.12)' }}
                >
                  #{tag.toLowerCase().replace(/ /g, '-')}
                </span>
              ))}
            </div>

            {/* Engagement bar */}
            <div
              className="flex items-center gap-4 py-5 my-8"
              style={{ borderTop: '1px solid rgba(100,150,255,0.1)', borderBottom: '1px solid rgba(100,150,255,0.1)' }}
            >
              <button
                onClick={() => setLiked(!liked)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all hover:scale-105"
                style={{
                  background: liked ? 'rgba(233,30,99,0.15)' : 'rgba(100,150,255,0.08)',
                  color: liked ? '#E91E63' : '#8AA3C8',
                  border: `1px solid ${liked ? 'rgba(233,30,99,0.3)' : 'rgba(100,150,255,0.15)'}`,
                }}
              >
                <Heart size={16} style={{ fill: liked ? '#E91E63' : 'none' }} />
                {ARTICLE.likes + (liked ? 1 : 0)}
              </button>

              <button
                onClick={() => setBookmarked(!bookmarked)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all hover:scale-105"
                style={{
                  background: bookmarked ? 'rgba(255,152,0,0.15)' : 'rgba(100,150,255,0.08)',
                  color: bookmarked ? '#FF9800' : '#8AA3C8',
                  border: `1px solid ${bookmarked ? 'rgba(255,152,0,0.3)' : 'rgba(100,150,255,0.15)'}`,
                }}
              >
                <Bookmark size={16} style={{ fill: bookmarked ? '#FF9800' : 'none' }} />
                {ARTICLE.bookmarks + (bookmarked ? 1 : 0)}
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowShare(!showShare)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all"
                  style={{ background: 'rgba(100,150,255,0.08)', color: '#8AA3C8', border: '1px solid rgba(100,150,255,0.15)' }}
                >
                  <Share2 size={16} />
                  Share
                </button>
                {showShare && (
                  <div
                    className="absolute top-full left-0 mt-2 w-44 rounded-xl overflow-hidden"
                    style={{ background: '#112040', border: '1px solid rgba(100,150,255,0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
                  >
                    {[
                      { icon: ExternalLink, label: 'Share on X', color: '#1DA1F2' },
                      { icon: Linkedin, label: 'Share on LinkedIn', color: '#0A66C2' },
                      { icon: Copy, label: 'Copy link', color: '#8AA3C8' },
                    ].map(({ icon: Icon, label, color }) => (
                      <button
                        key={label}
                        className="flex items-center gap-3 w-full px-4 py-3 text-xs font-medium text-left transition-all hover:bg-white/5"
                        style={{ color: '#C8D8F0' }}
                      >
                        <Icon size={13} style={{ color }} />
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => setShowSuggestion(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all"
                style={{ background: 'rgba(0,188,212,0.1)', color: '#00BCD4', border: '1px solid rgba(0,188,212,0.2)' }}
              >
                <GitMerge size={16} />
                Suggest Edit
              </button>

              <div className="ml-auto">
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all"
                  style={{ background: 'rgba(100,150,255,0.08)', color: '#8AA3C8', border: '1px solid rgba(100,150,255,0.15)' }}
                >
                  <Download size={16} />
                  Export
                </button>
              </div>
            </div>

            {/* Author card */}
            <div
              className="p-6 rounded-2xl mb-10"
              style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
            >
              <div className="flex items-start gap-4">
                <img src={ARTICLE.author.avatar} alt={ARTICLE.author.name} className="w-14 h-14 rounded-full object-cover" style={{ border: '2px solid rgba(21,101,192,0.4)' }} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-semibold text-white">{ARTICLE.author.name}</h3>
                    <button
                      onClick={() => navigate('/app/profile')}
                      className="px-4 py-1.5 rounded-lg text-xs font-medium text-white transition-all"
                      style={{ background: 'linear-gradient(135deg, #1565C0, #0288D1)' }}
                    >
                      Follow
                    </button>
                  </div>
                  <p className="text-sm mb-3" style={{ color: '#8AA3C8' }}>{ARTICLE.author.bio}</p>
                  <div className="flex gap-4 text-xs" style={{ color: '#8AA3C8' }}>
                    <span><strong className="text-white">{ARTICLE.author.articles}</strong> articles</span>
                    <span><strong className="text-white">{ARTICLE.author.followers.toLocaleString()}</strong> followers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments section */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <MessageSquare size={20} />
                Comments ({ARTICLE.comments})
              </h2>

              {/* Comment input */}
              <div className="flex gap-3 mb-8">
                <img
                  src="https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=40&h=40&fit=crop&crop=face"
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
                <div className="flex-1">
                  <textarea
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    placeholder="Share your thoughts on this article..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                    style={{ background: '#112040', border: '1px solid rgba(100,150,255,0.2)', color: '#E8F0FE' }}
                  />
                  <div className="flex justify-end mt-2">
                    <button
                      disabled={!comment.trim()}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-all"
                      style={{
                        background: comment.trim() ? 'linear-gradient(135deg, #1565C0, #0288D1)' : 'rgba(100,150,255,0.15)',
                        color: comment.trim() ? 'white' : '#8AA3C8',
                      }}
                    >
                      <Send size={14} /> Post Comment
                    </button>
                  </div>
                </div>
              </div>

              {/* Comment list */}
              <div className="space-y-6">
                {COMMENTS.map(c => <CommentItem key={c.id} comment={c} />)}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-64 shrink-0 space-y-6 hidden lg:block">
            {/* Table of contents */}
            <div
              className="p-5 rounded-2xl sticky top-6"
              style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
            >
              <h3 className="text-sm font-semibold text-white mb-3">On this page</h3>
              <ul className="space-y-2">
                {['The Rise of LLMs', 'Practical Applications', 'The Collaboration Dimension', 'Ethical Considerations', 'Looking Ahead'].map(section => (
                  <li key={section}>
                    <a
                      href="#"
                      className="text-xs transition-colors block py-1"
                      style={{ color: '#8AA3C8' }}
                    >
                      {section}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related articles */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.1)' }}
            >
              <h3 className="text-sm font-semibold text-white mb-4">Related Articles</h3>
              <div className="space-y-4">
                {RELATED.map(a => (
                  <div
                    key={a.id}
                    className="cursor-pointer group"
                    onClick={() => navigate(`/app/article/${a.id}`)}
                  >
                    <div className="flex items-start gap-2 mb-1">
                      <img src={a.avatar} alt={a.author} className="w-6 h-6 rounded-full object-cover mt-0.5 shrink-0" />
                      <p className="text-xs font-medium text-white leading-tight group-hover:text-blue-400 transition-colors">{a.title}</p>
                    </div>
                    <div className="flex gap-3 text-xs ml-8" style={{ color: '#8AA3C8' }}>
                      <span className="flex items-center gap-1"><Clock size={10} />{a.readTime}</span>
                      <span className="flex items-center gap-1"><Heart size={10} />{a.likes}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Suggest Edit Modal */}
      {showSuggestion && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
          onClick={() => setShowSuggestion(false)}
        >
          <div
            className="w-full max-w-lg p-8 rounded-2xl"
            style={{ background: '#0C1629', border: '1px solid rgba(100,150,255,0.2)' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 mb-2">
              <GitMerge size={20} style={{ color: '#00BCD4' }} />
              <h2 className="text-lg font-semibold text-white">Suggest a Modification</h2>
            </div>
            <p className="text-sm mb-4" style={{ color: '#8AA3C8' }}>
              Your suggestion will be reviewed by the author before being applied.
            </p>
            <div
              className="flex items-start gap-2 p-3 rounded-xl mb-4"
              style={{ background: 'rgba(255,152,0,0.1)', border: '1px solid rgba(255,152,0,0.2)' }}
            >
              <AlertCircle size={14} style={{ color: '#FF9800', marginTop: 2, flexShrink: 0 }} />
              <p className="text-xs" style={{ color: '#FF9800' }}>
                Suggestions are not immediately visible to other readers. They must be approved by the author first.
              </p>
            </div>
            <textarea
              value={suggestionText}
              onChange={e => setSuggestionText(e.target.value)}
              placeholder="Describe your suggested modification in detail — what you'd change and why..."
              rows={5}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none mb-6"
              style={{ background: '#112040', border: '1px solid rgba(100,150,255,0.2)', color: '#E8F0FE' }}
            />
            <div className="flex gap-3">
              <button
                onClick={() => setShowSuggestion(false)}
                className="flex-1 py-3 rounded-xl text-sm font-medium"
                style={{ background: '#112040', color: '#8AA3C8', border: '1px solid rgba(100,150,255,0.15)' }}
              >
                Cancel
              </button>
              <button
                onClick={handleSuggestChange}
                className="flex-1 py-3 rounded-xl text-sm font-medium text-white transition-all"
                style={{ background: 'linear-gradient(135deg, #1565C0, #00BCD4)', boxShadow: '0 4px 16px rgba(21,101,192,0.3)' }}
              >
                Submit Suggestion
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}