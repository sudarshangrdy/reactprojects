import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  //useState is ahook inreact which should always be in the component, also we need to set the
  //state using the function used below, we should never directly update the state.
  const [step, setStep] = useState(1);
  //const [test, setTest] = useState({ name: "John" });

  const [isOpen, setIsOpen] = useState(true);

  //Handler functions start with handle word as below, also we are not calling the function, just placing the
  //name, if we write handlePrevious(), then it is called immediately. We can also use () => handlePrevious()
  function handlePrevious() {
    //if (step > 1) setStep(step - 1);
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    //We should never update the state using variable direcly, we should use call back
    //if (step < 3) setStep(step + 1);
    //setTest({ name: "Ram" });
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((opn) => !opn)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step :{step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => handleNext()}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
