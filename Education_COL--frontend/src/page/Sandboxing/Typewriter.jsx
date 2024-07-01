import { ReactTyped } from "react-typed";

const Typewriter = () => {
     const strings = ["My React App", "Awesome React Project", "Hello React World"];
     return (
          <div>
               <h1>
                    <ReactTyped
                         strings={strings}
                         typeSpeed={100}
                         loop
                         backSpeed={20}
                         showCursor={true}
                    />
               </h1>
          </div>
     );
};

export default Typewriter;