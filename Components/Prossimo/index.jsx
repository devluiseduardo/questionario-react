import React from "react";

const Proximo = ({ next, setNext, perguntas, resultado }) => {
  function prossimo(event) {
    event.preventDefault();
    if (next === perguntas.length - 1) {
      console.log("final");
      resultado();
    } else {
      setNext(next + 1);
    }
  }

  function anterior(event) {
    event.preventDefault();
    if (next === 0) {
    } else {
      setNext(next - 1);
    }
  }

  return (
    <div>
      <button
        onClick={anterior}
        className="text-black bg-blue-400 ml-8 px-4 py-2 rounded-md border-4 border-transparent  hover:border-[#e4e4e4] hover:bg-blue-500 mt-4 box-border"
      >
        Anterior
      </button>

      <button
        onClick={prossimo}
        className="text-black bg-blue-400 ml-8 px-4 py-2 rounded-md border-4 border-transparent  hover:border-[#e4e4e4] hover:bg-blue-500 mt-4 box-border"
      >
        Próximo
      </button>
    </div>
  );
};

export default Proximo;
