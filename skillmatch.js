const vagas = [
  {
    titulo: "Desenvolvedor Front-end Júnior",
    empresa: "Fast Site",
    habilidades: ["HTML", "CSS", "JavaScript", "Git"],
  },

  {
    titulo: "Desenvolvedor Front-end React",
    empresa: "Tec Soluções",
    habilidades: ["HTML", "CSS", "JavaScript", "React", "APIs"],
  },

  {
    titulo: "Desenvolvedor Full Stack Júnior",
    empresa: "Sistema Fácil",
    habilidades: ["HTML", "CSS", "JavaScript", "Git", "Node.js", "APIs REST"],
  },
];

const candidatos = [
  {
    nome: "Juliana",
    areaInteresse: "Front-end",
    habilidades: ["JavaScript", "Git", "GitHub"],
    experiencia: 0,
  },
];

function compararHabilidades(habilidadesCandidatos, habilidadesVagas) {
  const habilidadesAtendidas = [];
  const habilidadesFaltantes = [];

  for (const habilidade of habilidadesVagas) {
    if (habilidadesCandidatos.includes(habilidade)) {
      habilidadesAtendidas.push(habilidade);
    } else {
      habilidadesFaltantes.push(habilidade);
    }
  }

  return {
    atendidas: habilidadesAtendidas,
    faltantes: habilidadesFaltantes,
  };
}

const resultadosVagas = [];

for (const vaga of vagas) {
  const resultado = compararHabilidades(
    candidatos[0].habilidades,
    vaga.habilidades,
  );

  const compatibilidade =
    (resultado.atendidas.length / vaga.habilidades.length) * 100;

  const classificacao = classificarCompatibilidade(compatibilidade);

  resultadosVagas.push({
    titulo: vaga.titulo,
    empresa: vaga.empresa,
    faltantes: resultado.faltantes,
    compatibilidade: compatibilidade,
    classificacao: classificacao,
  });

  console.log(vaga.titulo);
  console.log("Classificação:", classificacao);
  console.log("Habilidades atendidas:", resultado.atendidas);
  console.log("Habilidades faltantes:", resultado.faltantes);
  console.log("Compatibilidade:", compatibilidade.toFixed(2) + "%");
  console.log("--------------------");
}

console.log(resultadosVagas);

const melhorVaga = resultadosVagas.reduce((acumulador, atual) => {
  if (
    atual.compatibilidade > acumulador.compatibilidade ||
    (atual.compatibilidade === acumulador.compatibilidade &&
      atual.faltantes.length < acumulador.faltantes.length)
  ) {
    return atual;
  } else {
    return acumulador;
  }
});

console.log("Vaga prioritária para estudo:", melhorVaga.titulo);
console.log("Habilidades faltantes:", melhorVaga.faltantes);
console.log("Recomendações de estudo:");

for (const habilidade of melhorVaga.faltantes) {
  console.log("Estudar:", habilidade);
}

function classificarCompatibilidade(compatibilidade) {
  if (compatibilidade >= 80) {
    return "Alta";
  } else if (compatibilidade >= 50) {
    return "Média";
  } else {
    return "Baixa";
  }
}
