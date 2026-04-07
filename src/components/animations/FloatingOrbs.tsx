export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-coral/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet/10 rounded-full blur-3xl animate-float-medium" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cta/5 rounded-full blur-3xl animate-float-slow" />
    </div>
  )
}
