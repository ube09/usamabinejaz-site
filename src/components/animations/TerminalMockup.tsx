import { useState, useEffect } from 'react'

const codeLines = [
  { text: 'from', type: 'keyword' },
  { text: ' langgraph ', type: 'normal' },
  { text: 'import', type: 'keyword' },
  { text: ' AgentExecutor', type: 'normal' },
  { text: '\n', type: 'break' },
  { text: 'from', type: 'keyword' },
  { text: ' neuromail.agents ', type: 'normal' },
  { text: 'import', type: 'keyword' },
  { text: ' TriageAgent, DraftAgent', type: 'normal' },
  { text: '\n\n', type: 'break' },
  { text: '# Initialize 4 AI agents for email processing', type: 'comment' },
  { text: '\n', type: 'break' },
  { text: 'pipeline = AgentExecutor(', type: 'normal' },
  { text: '\n', type: 'break' },
  { text: '    agents=', type: 'normal' },
  { text: '[TriageAgent(), DraftAgent()]', type: 'string' },
  { text: ',', type: 'normal' },
  { text: '\n', type: 'break' },
  { text: '    model=', type: 'normal' },
  { text: '"gpt-4o"', type: 'string' },
  { text: ',', type: 'normal' },
  { text: '\n', type: 'break' },
  { text: ')', type: 'normal' },
  { text: '\n\n', type: 'break' },
  { text: 'results = pipeline.run(inbox)', type: 'normal' },
  { text: '\n', type: 'break' },
  { text: '# ✓ 2,847 emails processed in 3.2s', type: 'success' },
]

export default function TerminalMockup() {
  const [visibleChars, setVisibleChars] = useState(0)
  const [started, setStarted] = useState(false)

  const totalChars = codeLines.reduce((acc, line) => acc + line.text.length, 0)

  useEffect(() => {
    // Start typing after a delay
    const startTimeout = setTimeout(() => setStarted(true), 800)
    return () => clearTimeout(startTimeout)
  }, [])

  useEffect(() => {
    if (!started || visibleChars >= totalChars) return
    const timeout = setTimeout(() => {
      setVisibleChars(v => v + 1)
    }, 20)
    return () => clearTimeout(timeout)
  }, [visibleChars, totalChars, started])

  // Build visible text
  let charCount = 0
  const renderedLines = codeLines.map((line, i) => {
    const start = charCount
    charCount += line.text.length
    const visibleLength = Math.max(0, Math.min(line.text.length, visibleChars - start))
    const visibleText = line.text.substring(0, visibleLength)

    if (line.type === 'break') {
      return visibleText ? <span key={i}>{visibleText}</span> : null
    }

    const colorClass = {
      keyword: 'text-violet',
      normal: 'text-gray-300',
      comment: 'text-gray-500',
      string: 'text-coral',
      success: 'text-emerald-400',
    }[line.type] || 'text-gray-300'

    return visibleLength > 0 ? (
      <span key={i} className={colorClass}>{visibleText}</span>
    ) : null
  })

  return (
    <div className="relative max-w-lg mx-auto">
      {/* Glow effect behind terminal */}
      <div className="absolute -inset-4 bg-gradient-to-r from-coral/20 via-violet/20 to-coral/20 rounded-2xl blur-xl opacity-60" />

      <div className="relative bg-[#0d1117] rounded-xl border border-gray-800 shadow-2xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-gray-800">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-gray-500 text-xs font-mono">neuromail/pipeline.py</span>
        </div>

        {/* Code */}
        <pre className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
          <code className="whitespace-pre">
            {renderedLines}
            <span className="animate-blink text-coral">█</span>
          </code>
        </pre>
      </div>
    </div>
  )
}
