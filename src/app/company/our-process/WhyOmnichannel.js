import { Target, TrendingUp, Users } from "lucide-react";

const WhyOmnichannel = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-6">
        <div className=" text-center space-y-12">
          {/* Section Header */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="section-title !mb-0">
              Why <span className="text-primary">Omnichannel Marketing</span>{" "}
              Matters
            </h2>
            <div className="w-24 h-1 primary mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 h-full flex flex-col items-start justify-evenly text-left animate-slide-in-left">
              <p className="!text-lg text-muted-foreground leading-relaxed">
                B2B buyers engage with{" "}
                <span className="text-primary font-semibold">
                  many touchpoints
                </span>{" "}
                across multiple channels.<br/> Traditional marketing can't keep up.
              </p>
              <p className="!text-lg mt-6 text-muted-foreground leading-relaxed">
                Our omnichannel strategy ensures you connect with prospects
                where they are, delivering{" "}
                <span className="text-primary font-semibold">
                  personalized messages that drive results.
                </span>
              </p>
            </div>

            {/* Visual Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 animate-slide-in-right">
              <div className="text-center space-y-4 p-6 gradient-subtle rounded-2xl shadow-lg hover:shadow-primary/10 transition-smooth">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <Target className="medium-icon !text-white" />
                </div>
                <h5 className="mb-2">Precision Targeting</h5>
                <p className="!text-lg text-muted-foreground">
                  Reach the right audience at the perfect moment
                </p>
              </div>
              <div className="text-center h-full flex flex-col items-center justify-center p-6 gradient-subtle rounded-2xl shadow-lg hover:shadow-primary/10 transition-smooth">
                <div className="text-lg text-muted-foreground">
                  <span className="text-primary font-bold">3.5x</span> Better Engagement
                </div>
              </div>
              <div className="text-center h-full flex flex-col items-center justify-center p-6 gradient-subtle rounded-2xl shadow-lg hover:shadow-primary/10 transition-smooth">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <TrendingUp className="medium-icon !text-white" />
                </div>
                <h5 className="mb-2">Proven Results</h5>
                <div className="text-lg text-muted-foreground">
                  <span className="text-primary font-bold">67%</span> Higher Conversion
                </div>
              </div>
              <div className="text-center space-y-4 p-6 gradient-subtle rounded-2xl shadow-lg hover:shadow-primary/10 transition-smooth">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <Users className="medium-icon !text-white" />
                </div>
                <h5 className="mb-2">Multi-Channel Reach</h5>
                <p className="!text-lg text-muted-foreground">
                  Connect across all touchpoints seamlessly
                </p>
              </div>
            </div>
          </div>

          {/* Challenge Points */}
          <div className="grid md:grid-cols-3 gap-8 pt-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 primary rounded-full mx-auto flex items-center justify-center shadow-glow">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h5  >
                Fragmented Efforts
              </h5>
              <p className="text-muted-foreground">
                Traditional marketing creates disconnected touchpoints
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 gradient-secondary rounded-full mx-auto flex items-center justify-center shadow-secondary">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h5  >
                Missed Opportunities
              </h5>
              <p className="text-muted-foreground">
                Prospects slip through gaps between channels
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 primary rounded-full mx-auto flex items-center justify-center shadow-glow">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h5 className="text-xl font-semibold text-foreground">
                Inconsistent Messaging
              </h5>
              <p className="text-muted-foreground">
                Different messages confuse and alienate buyers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOmnichannel;
