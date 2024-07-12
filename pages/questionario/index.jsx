import React from "react";
import Perguntas from "../../Components/Perguntas";
import Prossimo from "../../Components/Prossimo";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const questionario = () => {
  const [next, setNext] = React.useState(0);

  const [respostas, setRespostas] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });

  const [resultado, setResultado] = React.useState(null);

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    );

    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  return (
    <form>
      <h1 className="px-10 pt-5 text-[20px] font-black">Perguntas:</h1>
      {resultado ? (
        <div className="px-10 mt-2 ">{resultado}</div>
      ) : (
        <div>
          {perguntas.map((item, index) => {
            return (
              <Perguntas
                ativo={next === index}
                key={item.id}
                valor={respostas[item.id]}
                onChange={handleChange}
                {...item}
              />
            );
          })}
        </div>
      )}

      {resultado ? null : (
        <Prossimo
          next={next}
          setNext={setNext}
          perguntas={perguntas}
          resultado={resultadoFinal}
        />
      )}
      {/* {next < perguntas.length ? ( */}

      {/* ) : ( */}
      {/* "opa" */}
      {/* )} */}
    </form>
  );
};

export default questionario;
