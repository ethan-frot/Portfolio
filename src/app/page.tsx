export default function Home() {
  return (
    <section className="flex min-h-screen items-center justify-center px-24 pt-16">
      <div className="grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Left side - Text content */}
        <div className="flex flex-col justify-center space-y-8">
          <h1 className="text-6xl font-bold leading-tight tracking-tight lg:text-7xl">
            Créer des expériences
            <br />
            numériques
            <br />
            exceptionnelles
          </h1>
          <p className="max-w-lg text-lg leading-relaxed opacity-70">
            Je suis un développeur full-stack passionné par la création
            d'applications web modernes et performantes. Mon objectif est de
            transformer des idées en solutions digitales innovantes.
          </p>
        </div>

        {/* Right side - Image placeholder */}
        <div className="relative flex items-center justify-center">
          <div className="relative h-[500px] w-full overflow-hidden rounded-lg border border-[rgb(var(--border))] bg-linear-to-br from-[rgb(var(--accent))]/10 to-transparent">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4 text-8xl opacity-20">💻</div>
                <p className="text-sm opacity-50">Image placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
