import React from "react";

const Perguntas = ({
  pergunta,
  options,
  resposta,
  id,
  valor,
  onChange,
  ativo,
  ...props
}) => {
  // console.log(ativo);

  if (ativo === false) return null;

  return (
    <fieldset className="mx-8 mt-8 p-5 border-2">
      <legend className="font-bold text-[20px] px-[2px] inline-block  bg-white">
        {pergunta}
      </legend>

      <div className="">
        {options.map((opcao, index) => {
          return (
            <div key={index}>
              <label>
                <input
                  className="mr-2"
                  id={id}
                  type="radio"
                  value={opcao}
                  checked={valor === opcao}
                  onChange={onChange}
                />
                {opcao}
              </label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
};

export default Perguntas;
