import React from "react";

const FairnessSpectrum = ({ score }) => {
  // score expected: 0 → 100

  const getPosition = () => {
    return Math.min(100, Math.max(0, score));
  };

  return (
    <div className="w-full mt-6">
      <h3 className="text-sm text-gray-400 mb-2">FAIRNESS SPECTRUM</h3>

      <div className="relative w-full h-4 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500">
        
        {/* Indicator */}
        <div
          className="absolute top-[-6px] w-2 h-6 bg-white rounded shadow"
          style={{ left: `${getPosition()}%`, transform: "translateX(-50%)" }}
        />
      </div>

      {/* Labels */}
      <div className="flex justify-between text-xs text-gray-400 mt-2">
        <span>High Bias</span>
        <span>Cautionary</span>
        <span>Systemic Fair</span>
      </div>
    </div>
  );
};

export default FairnessSpectrum;