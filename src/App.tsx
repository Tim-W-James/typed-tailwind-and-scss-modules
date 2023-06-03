import "./App.css";
import MyTypeSafeComponent from "./components/MyTypeSafeComponent";
import cn from "./styles/cssUtils";

function App() {
  return (
    <>
      {/* Tailwind */}
      <div
        className={cn(
          // Multiple classes can be a separate param, or within the same string
          "container p-5",
          // Can also use a condition
          { "text-teal-300": true },
        )}
      >
        Type Safe Tailwind!
      </div>

      {/* Scoped SCSS Modules */}
      <MyTypeSafeComponent />
    </>
  );
}

export default App;
