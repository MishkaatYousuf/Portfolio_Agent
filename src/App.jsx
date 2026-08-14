import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

const starterQuestions = [
  "Which projects demonstrate your backend development skills?",
  "What experience do you have with AI?",
  "I'm hiring a junior backend engineer. Which project should I look at first?",
  "Have you worked with Kubernetes in production?",
];

function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I'm the AI Portfolio Guide. Ask me about projects, skills, experience, education, or achievements. I only answer from the portfolio knowledge base.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Auto-scroll context utility
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  async function sendMessage(event, preset = null) {
    event?.preventDefault();
    const text = (preset ?? input).trim();
    if (!text || loading) return;

    setMessages((current) => [...current, { role: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      // Direct integration mapping pointing to your active Node wrapper port
      const response = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Request failed");
      }

      setMessages((current) => [
        ...current,
        { role: "assistant", text: data.answer },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: `I couldn't answer that right now. ${error.message}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page-shell">
      <section className="agent-card">
        <header className="agent-header">
          <div>
            <p className="eyebrow">PERSONAL AI AGENT</p>
            <h1>AI Portfolio Guide</h1>
            <p className="subtitle">
              Ask about projects, technical skills, education, achievements, or
              experience.
            </p>
          </div>
          <div className="status">Knowledge-grounded</div>
        </header>

        {/* Dynamic Entry Prompts Layer */}
        {messages.length <= 1 && (
          <div className="starter-grid">
            {starterQuestions.map((question) => (
              <button
                className="starter-button"
                key={question}
                onClick={(event) => sendMessage(event, question)}
                disabled={loading}
              >
                {question}
              </button>
            ))}
          </div>
        )}

        {/* Chat Message Box Viewport */}
        <div className="messages" aria-live="polite">
          {messages.map((message, index) => (
            <div
              className={`message-row ${message.role}`}
              key={`${message.role}-${index}`}
            >
              <div className="message-bubble">
                {/* Correctly renders markdown bullets and links from Gemini 3.6 */}
                <ReactMarkdown>{message.text}</ReactMarkdown>
              </div>
            </div>
          ))}

          {/* Active Generation State Row */}
          {loading && (
            <div className="message-row assistant">
              <div className="message-bubble typing">
                Searching portfolio → reasoning → answering…
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* User Prompt Input Composer */}
        <form className="composer" onSubmit={sendMessage}>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="e.g. Which project should a backend recruiter see first?"
            maxLength={1200}
            disabled={loading}
            aria-label="Ask the portfolio agent a question"
          />
          <button type="submit" disabled={loading || !input.trim()}>
            Ask
          </button>
        </form>

        <footer className="agent-footer">
          The agent is read-only and answers from the public portfolio knowledge
          base.
        </footer>
      </section>
    </main>
  );
}

export default App;
