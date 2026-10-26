class Vaga {
  constructor(titulo, empresa, habilidades) {
    this.titulo = titulo;
    this.empresa = empresa;
    this.habilidades = habilidades;
  }

  compararHabilidades(habilidadesCandidatos) {
    const atendidas = [];
    const faltantes = [];

    for (const habilidade of this.habilidades) {
      if (habilidadesCandidatos.includes(habilidade)) {
        atendidas.push(habilidade);
      } else {
        faltantes.push(habilidade);
      }
    }

    return { atendidas, faltantes };
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
    disponivelParaRemoto: true,
  },
];

function carregarVagas() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (vagas.length > 0) {
        resolve(vagas);
      } else {
        reject(new Error("Nenhuma vaga disponível."));
      }
    }, 1000);
  });
}

function criarContadorAnalises() {
  let total = 0;

  return function (callback) {
    total++;
    callback(total);
  };
}

function calcularCompatibilidade(atendidas, exigidas) {
  return Number(((atendidas / exigidas) * 100).toFixed(2));
}

function classificarCompatibilidade(compatibilidade) {
  if (compatibilidade >= 80) {
    return "Alta";
  }

  if (compatibilidade >= 50) {
    return "Média";
  }

  return "Baixa";
}

function analisarVaga(vaga, habilidadesCandidatos) {
  const resultado = vaga.compararHabilidades(habilidadesCandidatos);

  const compatibilidade = calcularCompatibilidade(
    resultado.atendidas.length,
    vaga.habilidades.length,
  );

  return {
    titulo: vaga.titulo,
    empresa: vaga.empresa,
    modalidade: vaga.modalidade || "Não informada",
    atendidas: resultado.atendidas,
    faltantes: resultado.faltantes,
    compatibilidade,
    classificacao: classificarCompatibilidade(compatibilidade),
  };
}

function exibirResultado(resultado) {
  console.log("\nVaga:", resultado.titulo);
  console.log("Empresa:", resultado.empresa);
  console.log("Modalidade:", resultado.modalidade);
  console.log("Classificação:", resultado.classificacao);
  console.log("Habilidades atendidas:", resultado.atendidas);
  console.log("Habilidades faltantes:", resultado.faltantes);
  console.log("Compatibilidade:", resultado.compatibilidade.toFixed(2) + "%");
  console.log("--------------------");
}

const registrarAnalise = criarContadorAnalises();

async function iniciarPrograma() {
  try {
    const vagasCarregadas = await carregarVagas();

    console.log("Vagas carregadas com sucesso!");

    console.log("\nPerfil da candidata:");
    console.log("Nome:", candidatos[0].nome);
    console.log("Área de interesse:", candidatos[0].areaInteresse);
    console.log(
      "Disponibilidade para trabalho remoto:",
      candidatos[0].disponivelParaRemoto,
    );

    const resultadosVagas = [];

    for (const vaga of vagasCarregadas) {
      registrarAnalise((total) => {
        console.log("Vagas analisadas até agora:", total);
      });

      const resultado = analisarVaga(vaga, candidatos[0].habilidades);

      resultadosVagas.push(resultado);
      exibirResultado(resultado);
    }

    const vagasAltaCompatibilidade = resultadosVagas.filter(
      (vaga) => vaga.compatibilidade >= 80,
    );

    console.log("\nVagas com alta compatibilidade:", vagasAltaCompatibilidade);

    const titulosVagas = resultadosVagas.map((vaga) => vaga.titulo);

    console.log("\nVagas analisadas:", titulosVagas);

    console.log("\nResumo das vagas:", resultadosVagas);

    const melhorVaga = resultadosVagas.reduce((acumulador, atual) => {
      if (
        atual.compatibilidade > acumulador.compatibilidade ||
        (atual.compatibilidade === acumulador.compatibilidade &&
          atual.faltantes.length < acumulador.faltantes.length)
      ) {
        return atual;
      }

      return acumulador;
    });

    console.log("\nVaga prioritária para estudo:", melhorVaga.titulo);
    console.log("Habilidades faltantes:", melhorVaga.faltantes);
    console.log("Recomendações de estudo:");

    for (const habilidade of melhorVaga.faltantes) {
      console.log("- Estudar:", habilidade);
    }
  } catch (erro) {
    console.error("Erro ao carregar as vagas:", erro.message);
  }
}

iniciarPrograma();
