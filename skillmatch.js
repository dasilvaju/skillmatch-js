class Vaga {
  constructor(titulo, empresa, habilidades) {
    this.titulo = titulo;
    this.empresa = empresa;
    this.habilidades = habilidades;
  }

  compararHabilidades(habilidadesCandidatos) {
    const habilidadesAtendidas = [];
    const habilidadesFaltantes = [];

    for (const habilidade of this.habilidades) {
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
}

class VagaRemota extends Vaga {
  constructor(titulo, empresa, habilidades) {
    super(titulo, empresa, habilidades);
    this.modalidade = "Remota";
  }
}

const vagas = [
  new Vaga("Desenvolvedor Front-end Júnior", "Fast Site", [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
  ]),

  new VagaRemota("Desenvolvedor Front-end React", "Tec Soluções", [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "APIs",
  ]),

  new Vaga("Desenvolvedor Full Stack Júnior", "Sistema Fácil", [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "Node.js",
    "APIs REST",
  ]),
];

const candidatos = [
  {
    nome: "Juliana",
    areaInteresse: "Front-end",
    habilidades: ["JavaScript", "Git", "GitHub"],
    experiencia: 0,
  },
];

const resultadosVagas = [];

for (const vaga of vagas) {
  const resultado = vaga.compararHabilidades(candidatos[0].habilidades);

  const compatibilidade =
    (resultado.atendidas.length / vaga.habilidades.length) * 100;

  const classificacao = classificarCompatibilidade(compatibilidade);

  resultadosVagas.push({
    titulo: vaga.titulo,
    empresa: vaga.empresa,
    modalidade: vaga.modalidade || "Não informada",
    faltantes: resultado.faltantes,
    compatibilidade: compatibilidade,
    classificacao: classificacao,
  });

  console.log(vaga.titulo);
  console.log("Modalidade:", vaga.modalidade || "Não informada");
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
