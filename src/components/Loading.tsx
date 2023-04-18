import Lottie from "lottie-react";

import DiscAnimation from "assets/disc-animation-white.json";
import TextAnimation from "assets/text-animation-white.json";

export const SkeletonLoading = () => {
  return (
    <div className="flex grow flex-col justify-between p-3">
      <div className="flex animate-pulse space-x-4">
        <div className="flex-1 space-y-5 py-1">
          <div className="h-52 rounded bg-slate-700" />
          <div className="space-y-2">
            <div className="h-6 rounded bg-slate-700" />
            <div className="h-6 rounded bg-slate-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const DiscLoading = () => {
  return (
    <div className="h-screen flex justify-center w-16 sm:w-28">
      <Lottie animationData={DiscAnimation} loop={true} />
    </div>
  );
};

export const TextLoading = () => {
  return (
    <div className="h-screen flex justify-center w-40 sm:w-80">
      <Lottie animationData={TextAnimation} loop={true} />
    </div>
  );
};
