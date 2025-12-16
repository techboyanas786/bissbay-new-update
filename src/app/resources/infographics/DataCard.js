export const DataCard = ({ title, data, variant = "default" }) => {
  // Calculate totals
  const totalDataCount = data.reduce((sum, item) => sum + (item.count || 0), 0);
  const totalPercentage = data.reduce((sum, item) => sum + (item.percentage || 0), 0);

  return (
    <div
      className={`
        overflow-hidden transition-all border p-4 md:p-6 rounded-xl duration-300 shadow-sm hover:shadow-lg
        ${
          variant === "highlighted"
            ? "border-primary bg-gradient-to-br from-background to-primary/5 shadow-lg"
            : "border-gray-100"
        }
      `}
    >
      {/* Header */}
      <div className="pb-4">
        <div className="!text-xl !font-bold text-foreground flex justify-center">
          {title}
        </div>
      </div>

      {/* Body */}
      <div className="space-y-2 md:space-y-4">
        {data.slice(0, 10).map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <p className="!font-medium text-foreground truncate flex-1 mr-4">
                {item.label}
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <p className="text-muted-foreground !font-semibold min-w-[80px] text-right">
                  {item.count ? (item.count / 1_000_000).toFixed(2) : ""}
                  {item.count ? "M" : ""}
                </p>
                <p className="!font-semibold !text-primary min-w-[50px] text-right">
                  {item.percentage.toFixed(2)}%
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* + More Categories */}
        {data.length > 10 && (
          <div className="text-center pt-2">
            <p className="text-sm text-muted-foreground">
              +{data.length - 10} more categories
            </p>
          </div>
        )}

        {/* Totals Row */}
        <div className="border-t pt-3 mt-3 flex justify-between items-center font-bold text-sm">
          <p className="text-foreground !font-bold">Total</p>
          <div className="flex items-center gap-3">
            <p className="text-muted-foreground !font-bold min-w-[80px] text-right">
              {totalDataCount===0.0?"":(totalDataCount / 1_000_000).toFixed(0)}{totalDataCount===0.0?"":"M"}
            </p>
            <p className="!text-primary !font-bold min-w-[50px] text-right">
              {totalPercentage.toFixed(0)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
