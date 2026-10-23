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

for (const vaga of vagas) {
  const resultado = compararHabilidades(
    candidatos[0].habilidades,
    vaga.habilidades,
  );

  console.log(vaga.titulo);
  console.log(resultado.atendidas);
  console.log(resultado.faltantes);
}
