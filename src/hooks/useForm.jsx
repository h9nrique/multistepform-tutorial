import { useState } from "react";

export function useForm(steps) {
  const [currentStep, setCurrentStep] = useState(0);

  const currentComponent = steps[currentStep];

  function changeStep(i, e) {
    if (e) e.preventDefault();

    if (i < 0 || i >= steps.length) return;

    setCurrentStep(i);
  }

  const isLastStep = currentStep + 1 === steps.length;
  const isFirstStep = currentStep === 0;

  return {
    currentStep,
    currentComponent,
    changeStep,
    isLastStep,
    isFirstStep,
  };
}
