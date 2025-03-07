import { useState } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";

interface StrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
  strategy: {
    id: string;
    name: string;
    description: string;
    minCapital: string;
    returnRate: string;
    riskLevel: "Low" | "Medium" | "High";
    price: string;
  };
}

export function StrategyModal({
  isOpen,
  onClose,
  strategy,
}: StrategyModalProps) {
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  const handleSubscribe = () => {
    setSubscribed(true);
    // In a real app, you would make an API call here
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-xl font-semibold">{strategy.name}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {subscribed ? (
            <div className="flex flex-col items-center justify-center py-6">
              <CheckCircle className="w-16 h-16 text-brand-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Subscription Successful!
              </h3>
              <p className="text-gray-600 text-center mb-6">
                You have successfully subscribed to {strategy.name}. You can now
                use this strategy in your trading.
              </p>
              <button
                onClick={onClose}
                className="bg-gradient-primary text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-4">{strategy.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Minimum Capital
                  </h4>
                  <p className="font-semibold">{strategy.minCapital}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Expected Return
                  </h4>
                  <p className="font-semibold text-brand-green">
                    {strategy.returnRate}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Risk Level
                  </h4>
                  <p className="font-semibold">{strategy.riskLevel}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Subscription Fee
                  </h4>
                  <p className="font-semibold">{strategy.price}</p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5" />
                  <p className="text-sm text-amber-800">
                    Please ensure you have the minimum capital required before
                    subscribing to this strategy.
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubscribe}
                  className="bg-gradient-primary text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
