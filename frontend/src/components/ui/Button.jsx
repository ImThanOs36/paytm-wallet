function Button ({onClick}){
    return (
      <button onClick={onClick} className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95">Click me</button>
    );
  };
  
  export default Button;
  