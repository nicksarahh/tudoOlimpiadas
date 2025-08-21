console.log("Arquivo idioma.js carregado!");

const textos = {
  pt: {
    inicio: {
      inicioHeader: "Início",
      olimpiadasHeader:"Olímpiadas",
      sobreHeader:"Sobre",
      titulo: "Bem vindo, estudante!",
      textoParagrafo: "Ainda não encontrou uma olimpíada que seja a sua cara? A gente te ajuda filtrando todas as oportunidades do Brasil para atender aos seus interesses!",
      sublinhado: "Rápido, fácil e gratuito:",
      pesquise:"Pesquise qualquer olimpíada por nome ou palavra-chave",
      magica:'Ou selecione seus interesses em "Olimpíadas" e faremos a mágica acontecer',
      searchBar: "Pesquisar..."
    },
    olimpiadas: {
      inicioHeader: "Início",
      olimpiadasHeader:"Olímpiadas",
      sobreHeader:"Sobre",
      explore:"Explore nosso catálogo olímpico",
      exatas:"Exatas",
      tecnologia:"Tecnologia",
      linguagens:"Linguagens",
      humanas:"Humanas",
      interdiciplinaresoutros:"Interdiciplinares e outros",
      cienciasNatureza:"Ciências da Natureza",
      searchBar: "Pesquisar...",

      "faq-title": "🤔 FAQ: tudo sobre olimpíadas!",
      "oque-pergunta": "🤷‍♀️ O que são olimpíadas do conhecimento?",
      "oque-resposta": `As olimpíadas do conhecimento são competições acadêmicas que avaliam o <strong>domínio dos estudantes em diversas áreas do saber</strong>. Elas podem ocorrer em diferentes formatos (questões fechadas ou abertas, projetos, redações, trabalhos em grupo, etc.) e etapas (municipais, estaduais, nacionais e até internacionais), destinando-se a alunos do ensino fundamental, médio e, em alguns casos, também superior. Nem sempre são gratuitas, mas muitas vezes as escolas arcam com os custos da inscrição de seus alunos. Além de melhorar o raciocínio e aprofundar os estudos, as olimpíadas oferecem <strong>prêmios, certificados, oportunidades acadêmicas (como bolsas de iniciação científica júnior) e até vagas em universidades</strong>.`,
      
      "inscrever-pergunta": "📝 Como se inscrever nas olimpíadas do conhecimento?",
      "inscrever-resposta": `<p>Existem duas formas de inscrição:</p>
          <p><strong>1. Inscrição Institucional:</strong> a escola realiza o cadastro dos <strong>estudantes, geralmente com o apoio de um professor responsável</strong>. Esse modelo é adotado por muitas olimpíadas tradicionais e exige o envolvimento da instituição de ensino. Por isso, se você está interessado em participar de alguma dessas competições, como a ONC ou a OBA, procure por mais informações e repasse-as para a coordenação da sua escola, solicitando a sua inscrição.</p>
          <p><strong>2. Inscrição Individual:</strong> o próprio estudante realiza o cadastro <strong>diretamente no site da olimpíada, sem a necessidade de mediação pela escola</strong>. Esse formato costuma estar disponível para a maioria das olimpíadas, principalmente as online ou as menos famosas.</p>
          <p><strong>OBS:</strong> Algumas olimpíadas oferecem ambas as modalidades, permitindo flexibilidade para quem deseja participar por conta própria ou com apoio da escola.</p>
          <p><strong>Em nosso site, é possível filtrar as olimpíadas por tipo de inscrição, facilitando a busca por oportunidades adequadas a cada realidade!</strong></p>`,
      
      "maiores-pergunta": "🤩 Quais são as maiores olimpíadas do Brasil?",
      "maiores-resposta": `<p>As maiores olimpíadas do Brasil são aquelas que concentram o maior número de participantes e abrangem todas as regiões do país. Por serem amplamente divulgadas e reconhecidas, também costumam ser as mais concorridas e aceitas em vagas olímpicas nas universidades. A seguir, destacam-se as principais olimpíadas de cada área do conhecimento:</p>
          <p><strong>🧮 Ciências Exatas:</strong></p>
          <ul>
              <li>OBMEP - Olimpíada Brasileira de Matemática das Escolas Públicas</li>
              <li>OBM - Olimpíada Brasileira de Matemática</li>
              <li>Concurso Canguru de Matemática</li>
          </ul>
          <p><strong>🌱 Ciências da Natureza:</strong></p>
          <ul>
              <li>OBB - Olimpíada Brasileira de Biologia</li>
              <li>ONC - Olimpíada Nacional de Ciências</li>
              <li>OBA - Olimpíada Brasileira de Astronomia e Astronáutica</li>
              <li>OBQ - Olimpíada Brasileira de Química</li>
          </ul>
          <p><strong>🗿 Ciências Humanas:</strong></p>
          <ul>
              <li>ONHB - Olimpíada Nacional em História do Brasil</li>
              <li>OBG - Olimpíada Brasileira de Geografia</li>
          </ul>
          <p><strong>🗣️ Linguagens:</strong></p>
          <ul>
              <li>OLP - Olimpíada de Língua Portuguesa</li>
              <li>OBL - Olimpíada Brasileira de Linguística</li>
          </ul>
          <p><strong>📱 Tecnologia:</strong></p>
          <ul>
              <li>OBI - Olimpíada Brasileira de Informática</li>
              <li>OBR - Olimpíada Brasileira de Robótica</li>
          </ul>`,
      
      "universidade-pergunta": "🎓 Como entrar na universidade por vaga olímpica?",
      "universidade-resposta": `<p>As vagas olímpicas são uma forma de ingresso alternativa oferecida por algumas universidades, selecionando <strong>estudantes em olimpíadas científicas</strong> - geralmente medalhistas ou com menções honrosas em fases nacionais. Esse tipo de ingresso dispensa a realização do vestibular tradicional, valorizando o histórico acadêmico e o comprometimento do jovens com a iniciação científica.</p>
          <p>Diversas instituições já adotam esse modelo, entre elas: UNICAMP, UFMG, UFRJ e UFF. Cada uma delas define critérios próprios, incluindo quais olimpíadas são aceitas, a pontuação mínima exigida e os cursos aplicáveis. Essas regras são publicadas nos editais de cada processo seletivo.</p>`,
      
      "seletivas-pergunta": "🌎 O que são as seletivas internacionais?",
      "seletivas-resposta": `<p>As seletivas internacionais são processos classificatórios que têm como objetivo formar as equipes brasileiras que representarão o país em olimpíadas científicas internacionais.</p>
          <p>Ao contrário das olimpíadas tradicionais, essas seletivas não são abertas ao público em geral. Normalmente, estudantes que obteram alto desempenho nas olimpíadas nacionais são convidados a participar de fases dessas seletivas. Aqueles que passarem pelas diversas fases eliminatórias receberão um treinamento acadêmico intensivo e preparatório para as competições internacionais, em que irão viajar e representar o Brasil.</p>
          <p>Duas das seletivas mais conhecidas são:</p>
          <ul>
              <li>A da OBA, que leva alunos para a OLAA (Olimpíada Latinoamericana de Astronomia e Astronáutica), para a OIAA (Olimpíada Internacional de Astronomia e Astrofísica) e para a IAO (Olimpíada Internacional Astronomia)</li>
              <li>A OBM, que é ao mesmo tempo uma olimpíada nacional (na qual só se entra por um convite, recebido pelos melhores classificados em outras competições) e uma seletiva para a IMO (Olimpíada Internacional de Matemática).</li>
          </ul>`,
      
      "estudar-pergunta": "📚 Onde estudar para as olimpíadas do conhecimento?",
      "estudar-resposta": `<p>O primeiro passo para se preparar para uma olimpíada do conhecimento é consultar, no seu edital, os conteúdos que poderão ser cobrados nas provas e verificar quais deles você ainda não dominou. Depois de trabalhar nesses assuntos e revisar o restante, também é importante realizar as provas dos anos anteriores para simular o seu desempenho. Ademais, uma boa estratégia é participar de grupos de estudo e assistir aulões/lives de revisão, que muitas vezes são promovidos pelas próprias olimpíadas.</p>
          <p>Caso seja possível, recomendamos que você utilize seus próprios materiais escolares durante esses estudos, como livros didáticos e materiais recomendados pelos professores. No entanto, há também diversas <strong>alternativas gratuitas online</strong>, como:</p>
          <ul>
              <li><strong>NOIC (Núcleo Olímpico de Incentivo ao Conhecimento)</strong> - site que oferece mentorias on-line, materiais de estudo e grupos de apoio para participantes de diversas olimpíadas;</li>
              <li><strong>Pitagóricos</strong> - projeto que oferece, em suas redes sociais, materiais preparatórios para olimpíadas de exatas e de ciências da natureza, contando com grupos de mentoria no WhatsApp;</li>
              <li><strong>Khan Academy</strong> - plataforma digital para aprender conteúdos de quase todas as disciplinas, com videoaulas, atividades e simulados;</li>
              <li><strong>Canais do YouTube focados em olimpíadas do conhecimento</strong> - Portal da Matemática Canal da OBMEP, Insight Edu (matemática e astronomia), Fiori Pets (biologia), Virando Olímpico (física), etc;</li>
              <li><strong>Canais do YouTube para estudos em geral</strong> - Me Salva! (interdisciplinar), Politize! (ciências humanas), Ponto em Comum (interdisciplinar), Drauzio Varella (saúde), Nerdologia (ciências humanas), Paulo Jubilut (biologia), Brasil Escola (interdisciplinar), etc.</li>
          </ul>`
    },
    catalogo: {
      inicioHeader: "Início",
      olimpiadasHeader: "Olímpiadas",
      sobreHeader: "Sobre",
      searchBar: "Pesquisar...",
      filtrar:"Filtrar Olimpíadas",
      areaConhecimento: "Área de conhecimento",
      tipoInscricao: "Tipo de registro",
      periodo: "Período de Inscrição",
      status: "Período de Inscrição",
      nivel: "Nível",
      exatas: "Exatas",
      tecnologia: "Tecnologia",
      linguagens: "Linguagens",
      humanas: "Humanas",
      interdiciplinaresOutros: "Interdisciplinares e outros",
      cienciasNatureza: "Ciências da natureza",
      escola: "Escola",
      aluno: "Aluno",
      aberto: "Aberto",
      embreve: "Em breve",
      fechado: "Fechado",
      fundamental1: "Fundamental I",
      fundamental2: "Fundamental II",
      ensinoMedio: "Ensino médio | Técnico",
      superior: "Ensino superior",
      livre: "Livre"
    },
    sobre: {
      inicioHeader: "Início",
      olimpiadasHeader:"Olímpiadas",
      sobreHeader:"Sobre",
      tituloSobre:"Sobre nós",
      tituloMissao:"Nossa missão",
      paragrafoMissao:"O Tudo Olimpíadas é o seu destino online para descobrir tudo sobre as Olimpíadas de conhecimento, projetadas para estudantes do ensino fundamental 2 ao ensino médio. Nosso site fornece informações detalhadas, dicas de estudo e recursos educacionais para ajudar os alunos a se prepararem e terem sucesso nessas competições desafiadoras. Estamos comprometidos em promover o aprendizado e o crescimento intelectual dos estudantes, capacitando-os a alcançar seu pleno potencial acadêmico.",
      tituloEquipe:"Equipe",
      tituloConheca:"Conheça a nossa equipe",
      paragrafoConheca:"Conheça a equipe dedicada por trás do Tudo Olimpíadas, composta por profissionais apaixonados por educação e conhecimento. Nossa equipe está empenhada em fornecer as melhores informações e orientações para os estudantes que buscam se destacar nas Olimpíadas de conhecimento.",
      searchBar: "Pesquisar...",
      isabella: "CEO",
      laila: "Diretora Criativa",
      inae: "Segunda Diretora Técnica",
      nicoly: "Diretora Técnica",
      daniela: "Diretora de Marketing e Mídia"
    },
    blog:{
      inicioHeader: "Início",
      olimpiadasHeader:"Olímpiadas",
      sobreHeader:"Sobre",
      searchBar: "Pesquisar...",
      embreve:"Em breve!"
    },
    resultados:{
      inicioHeader: "Início",
      olimpiadasHeader:"Olímpiadas",
      sobreHeader:"Sobre",
      searchBar: "Pesquisar...",
      resultados:"Resultados de busca"
    },
    buscar: {
      inicioHeader: "Início",
      olimpiadasHeader: "Olímpiadas",
      sobreHeader: "Sobre",
      searchBar: "Pesquisar...",
      search: "Pesquisar...",
      resultados: "Resultados da busca",
      nenhumResultado: "Nenhum resultado encontrado para"
    },
  },
  en: {
    inicio: {
     inicioHeader: "Home",
      olimpiadasHeader:"Olympiads",
      sobreHeader:"About",
      titulo: "Welcome, student!",
      textoParagrafo: "Haven't found an olympiad that suits you yet? We'll help you filter all the opportunities in Brazil to match your interests!",
      sublinhado: "Fast, easy, and free:",
      pesquise:"Search for any Olympics by name or keyword",
      magica:"Or select your interests in 'Olympiads' and we'll make the magic happen.",
      searchBar: "Search..."
    },
    olimpiadas: {
      inicioHeader: "Home",
      olimpiadasHeader:"Olympiads",
      sobreHeader:"About",
      explore: "Explore our olympic catalog",
      exatas:"Mathematics",
      tecnologia:"Technology",
      linguagens:"Languages",
      humanas:"Humanities",
      interdiciplinaresoutros:"Interdisciplinary and Others",
      cienciasNatureza:"Natural Sciences",
      searchBar: "Search...",

      "faq-title": "🤔 FAQ: everything about olympiads!",
      "oque-pergunta": "🤷‍♀️ What are knowledge olympiads?",
      "oque-resposta": `Knowledge olympiads are academic competitions that evaluate <strong>students' mastery in various areas of knowledge</strong>. They can occur in different formats (multiple-choice or open-ended questions, projects, essays, group work, etc.) and stages (municipal, state, national, and even international), targeting elementary, high school, and in some cases, university students. They are not always free, but often schools cover their students' registration costs. Besides improving reasoning and deepening studies, olympiads offer <strong>prizes, certificates, academic opportunities (such as junior scientific initiation scholarships) and even university spots</strong>.`,
      
      "inscrever-pergunta": "📝 How to register for knowledge olympiads?",
      "inscrever-resposta": `<p>There are two registration methods:</p>
          <p><strong>1. Institutional Registration:</strong> the school registers the <strong>students, usually with the support of a responsible teacher</strong>. This model is adopted by many traditional olympiads and requires the involvement of the educational institution. Therefore, if you're interested in participating in any of these competitions, such as ONC or OBA, look for more information and pass it on to your school's coordination, requesting your registration.</p>
          <p><strong>2. Individual Registration:</strong> the student themselves registers <strong>directly on the olympiad's website, without the need for school mediation</strong>. This format is usually available for most olympiads, especially online or less famous ones.</p>
          <p><strong>NOTE:</strong> Some olympiads offer both modalities, allowing flexibility for those who want to participate on their own or with school support.</p>
          <p><strong>On our website, you can filter olympiads by registration type, making it easier to search for opportunities suitable for each reality!</strong></p>`,
      
      "maiores-pergunta": "🤩 What are the largest olympiads in Brazil?",
      "maiores-resposta": `<p>The largest olympiads in Brazil are those that concentrate the highest number of participants and cover all regions of the country. Because they are widely publicized and recognized, they also tend to be the most competitive and accepted in olympic vacancies at universities. Below are the main olympiads in each knowledge area:</p>
          <p><strong>🧮 Exact Sciences:</strong></p>
          <ul>
              <li>OBMEP - Brazilian Public School Math Olympiad</li>
              <li>OBM - Brazilian Math Olympiad</li>
              <li>Kangaroo Math Contest</li>
          </ul>
          <p><strong>🌱 Natural Sciences:</strong></p>
          <ul>
              <li>OBB - Brazilian Biology Olympiad</li>
              <li>ONC - National Science Olympiad</li>
              <li>OBA - Brazilian Astronomy and Astronautics Olympiad</li>
              <li>OBQ - Brazilian Chemistry Olympiad</li>
          </ul>
          <p><strong>🗿 Human Sciences:</strong></p>
          <ul>
              <li>ONHB - National History of Brazil Olympiad</li>
              <li>OBG - Brazilian Geography Olympiad</li>
          </ul>
          <p><strong>🗣️ Languages:</strong></p>
          <ul>
              <li>OLP - Portuguese Language Olympiad</li>
              <li>OBL - Brazilian Linguistics Olympiad</li>
          </ul>
          <p><strong>📱 Technology:</strong></p>
          <ul>
              <li>OBI - Brazilian Informatics Olympiad</li>
              <li>OBR - Brazilian Robotics Olympiad</li>
          </ul>`,
      
      "universidade-pergunta": "🎓 How to enter university through an olympic vacancy?",
      "universidade-resposta": `<p>Olympic vacancies are an alternative form of admission offered by some universities, selecting <strong>students with high performance in scientific olympiads</strong> - usually medalists or with honorable mentions in national stages. This type of admission exempts students from taking the traditional entrance exam, valuing academic history and the young person's commitment to scientific initiation.</p>
          <p>Several institutions already adopt this model, including: UNICAMP, UFMG, UFRJ and UFF. Each of them defines their own criteria, including which olympiads are accepted, the minimum score required and applicable courses. These rules are published in the notices of each selection process.</p>`,
      
      "seletivas-pergunta": "🌎 What are international selections?",
      "seletivas-resposta": `<p>International selections are qualifying processes that aim to form the Brazilian teams that will represent the country in international scientific olympiads.</p>
          <p>Unlike traditional olympiads, these selections are not open to the general public. Normally, students who obtained high performance in national olympiads are invited to participate in stages of these selections. Those who pass through the various eliminatory stages will receive intensive academic training and preparation for international competitions, where they will travel and represent Brazil.</p>
          <p>Two of the best-known selections are:</p>
          <ul>
              <li>OBA's, which takes students to OLAA (Latin American Astronomy and Astronautics Olympiad), to IOAA (International Olympiad on Astronomy and Astrophysics) and to IAO (International Astronomy Olympiad)</li>
              <li>OBM, which is both a national olympiad (which can only be entered by invitation, received by the top ranked in other competitions) and a selection for IMO (International Mathematical Olympiad).</li>
          </ul>`,
      
      "estudar-pergunta": "📚 Where to study for knowledge olympiads?",
      "estudar-resposta": `<p>The first step to prepare for a knowledge olympiad is to check, in its notice, the contents that may be covered in the tests and verify which ones you haven't mastered yet. After working on these subjects and reviewing the rest, it's also important to take tests from previous years to simulate your performance. Furthermore, a good strategy is to participate in study groups and watch review classes/lives, which are often promoted by the olympiads themselves.</p>
          <p>If possible, we recommend that you use your own school materials during these studies, such as textbooks and materials recommended by teachers. However, there are also several <strong>free online alternatives</strong>, such as:</p>
          <ul>
              <li><strong>NOIC (Olympic Center for Knowledge Incentive)</strong> - website that offers online mentoring, study materials and support groups for participants of various olympiads;</li>
              <li><strong>Pitagóricos</strong> - project that offers, on its social networks, preparatory materials for exact sciences and natural sciences olympiads, with WhatsApp mentoring groups;</li>
              <li><strong>Khan Academy</strong> - digital platform to learn content from almost all subjects, with video lessons, activities and mock tests;</li>
              <li><strong>YouTube channels focused on knowledge olympiads</strong> - Portal da Matemática Canal da OBMEP, Insight Edu (mathematics and astronomy), Fiori Pets (biology), Virando Olímpico (physics), etc;</li>
              <li><strong>YouTube channels for general studies</strong> - Me Salva! (interdisciplinary), Politize! (human sciences), Ponto em Comum (interdisciplinary), Drauzio Varella (health), Nerdologia (human sciences), Paulo Jubilut (biology), Brasil Escola (interdisciplinary), etc.</li>
          </ul>`
    },
    catalogo: {
      inicioHeader: "Home",
      olimpiadasHeader: "Olympiads",
      sobreHeader: "About",
      searchBar: "Search...",
      filtrar:"Filter olympiads",
      areaConhecimento: "Knowledge Area",
      tipoInscricao: "Registration Type",
      periodo: "Registration Period",
      status: "Registration Period",
      nivel: "Level",
      exatas: "Mathematics",
      tecnologia: "Technology",
      linguagens: "Languages",
      humanas: "Humanities",
      interdiciplinaresOutros: "Interdisciplinary and others",
      cienciasNatureza: "Natural Sciences",
      escola: "School",
      aluno: "Student",
      aberto: "Open",
      embreve: "Coming soon",
      fechado: "Closed",
      fundamental1: "Elementary I",
      fundamental2: "Elementary II",
      ensinoMedio: "High School | Technical",
      superior: "Higher Education",
      livre: "Free"
    },
    sobre: {
      inicioHeader: "Home",
      olimpiadasHeader:"Olympiads",
      sobreHeader:"About",
      tituloSobre:"About us",
      tituloMissao:"Our mission",
      paragrafoMissao:"Tudo Olimpíadas is your online destination to discover everything about academic olympiads, designed for middle and high school students. Our site provides detailed information, study tips, and educational resources to help students prepare and succeed in these challenging competitions. We are committed to promoting learning and intellectual growth, empowering students to reach their full academic potential.",
      tituloEquipe:"Team",
      tituloConheca:"Meet Our Team",
      paragrafoConheca:"Meet the dedicated team behind Tudo Olimpíadas, composed of professionals passionate about education and knowledge. Our team is committed to providing the best information and guidance for students who want to stand out in academic olympiads.",
      searchBar: "Search...",
      isabella: "CEO",
      laila: "Creative Director",
      inae: "Secondary Technical Director",
      nicoly: "Technical Director",
      daniela: "Marketing and Media Director"
    },
    blog:{
      inicioHeader: "Home",
      olimpiadasHeader:"Olympiads",
      sobreHeader:"About",
      searchBar: "Search...",
      embreve:"Coming soon!"
    }, 
    buscar:{
      inicioHeader: "Home",
      olimpiadasHeader:"Olympiads",
      sobreHeader:"About",
      searchBar: "Search...",
      search: "Search...",
      resultados:"Search results",
      nenhumResultado: "No results found for"
    }
  }
};

// Idioma padrão: português
let idiomaAtual = localStorage.getItem('idioma') || 'pt';

function trocarIdioma(novoIdioma) {
  console.log("Idioma selecionado:", novoIdioma);
  idiomaAtual = novoIdioma;
  localStorage.setItem('idioma', idiomaAtual);
  aplicarIdioma();
}

function aplicarIdioma() {
  // Determina a página atual de forma mais robusta
  const path = window.location.pathname.toLowerCase();
  let pagina = 'inicio';
  
  if (path.includes('olimpiadas')) pagina = 'olimpiadas';
  else if (path.includes('sobre')) pagina = 'sobre';
  else if (path.includes('catalogo') || path.includes('filtros')) pagina = 'catalogo';
  else if (path.includes('buscar')) pagina = 'buscar';
  else if (path.includes('blog')) pagina = 'blog';
  // Adicione outras páginas conforme necessário

  console.log(`Aplicando idioma ${idiomaAtual} para página ${pagina}`);

  // Obtém os textos para a página atual
  const t = textos[idiomaAtual][pagina] || textos[idiomaAtual]['inicio'] || {};

  // 1. Atualiza elementos com IDs correspondentes
  Object.keys(t).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t[id];
    } else {
      el.innerHTML = t[id];
    }
  });

  // 2. Atualiza seletores de idioma
  const selectDesktop = document.getElementById('seletor-idioma');
  const selectMobile = document.getElementById('seletor-idioma-mobile');
  
  if (selectDesktop) selectDesktop.value = idiomaAtual;
  if (selectMobile) selectMobile.value = idiomaAtual;
}

function configurarSeletoresIdioma() {
  const selectDesktop = document.getElementById('seletor-idioma');
  const selectMobile = document.getElementById('seletor-idioma-mobile');
  
  const configurarSeletor = (seletor) => {
      if (seletor) {
          seletor.value = idiomaAtual;
          seletor.addEventListener('change', function() {
              trocarIdioma(this.value);
          });
      }
  };
  
  configurarSeletor(selectDesktop);
  configurarSeletor(selectMobile);
}

// Configuração inicial
document.addEventListener('DOMContentLoaded', function() {
  aplicarIdioma();
  configurarSeletoresIdioma();
  
  // Configura eventos para ambos os seletores
  const configurarSeletor = (seletor) => {
    if (seletor) {
      seletor.value = idiomaAtual; // Seta o valor atual
      seletor.addEventListener('change', function() {
        trocarIdioma(this.value);
      });
    }
  };
  
  configurarSeletor(document.getElementById('seletor-idioma'));
  configurarSeletor(document.getElementById('seletor-idioma-mobile'));
});

// Para permitir teste no console
window.trocarIdioma = trocarIdioma;