import { CountUpAnimation } from "@/app/what-we-do/account-based-marketing/animation/CountUpAnimation";

  const MetricCard = ({
    title,
    value,
    prefix,
    percentage,
    suffix,
    icon,
    color = '',
    delay = 0,
    subtitle
  }) => {
    return (
      <div
        className="card !p-2 md:!p-6 group duration-300 transition-all animate-fade-in"
        style={{
          animationDelay: `${delay}s`,
          animationFillMode: 'forwards'
        }}
      >
        <div className="flex flex-col justify-between mb-4">
          <div className="flex items-center justify-between">
            <h3 className="!text-base font-medium mb-1">{title}</h3>
            {icon && (
              <div
                className="w-full medium-icon"
                style={{
                  color: color
                }}
              >
                {icon}
              </div>
            )}
          </div>
            {subtitle && (
              <p className="text-xs text-muted-foreground/70 mb-2">{subtitle}</p>
            )}
        </div>

        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <CountUpAnimation
              end={value}
              prefix={prefix}
              suffix={suffix}
              className="text-2xl font-bold text-foreground"
            />
            {percentage && (
              <span className="metric-badge">{percentage}%</span>
            )}
          </div>

          {percentage && (
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  backgroundColor: color,
                  width: `${percentage}%`,
                  transitionDelay: `${delay + 0.5}s`
                }}
              />
            </div>
          )}
        </div>
      </div>
    );
  };
export default MetricCard;