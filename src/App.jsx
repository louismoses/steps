import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Learn React ⚛️</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Apply for jobs 💼</p>
      </StepMessage>
      <StepMessage step={3}>
        <p>Invest your new income 🤑</p>
      </StepMessage>
    </div>
  );
}

function Steps() {
  const [step, setSteps] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setSteps((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) setSteps((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>⏮️</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next<span>⏭️</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      Step {step}: {children}
    </div>
  );
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button style={{ background: bgColor, color: textColor }} onClick={onClick}>
      {children}
    </button>
  );
}
