document.addEventListener('DOMContentLoaded', function() {
    // 1. Controle do menu de filtros mobile
    const filtroMobileBtn = document.getElementById('filtroMobileBtn');
    const filtroSection = document.querySelector('.filtro');
    
    // Mostrar/ocultar filtros no mobile
    if (filtroMobileBtn && filtroSection) {
        filtroMobileBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            filtroSection.classList.toggle('mobile-visible');
            
            // Alternar ícone do botão
            const icon = this.querySelector('i');
            icon.classList.toggle('bi-funnel-fill');
            icon.classList.toggle('bi-funnel');
        });
    }

    // 2. Controle dos dropdowns
    document.querySelectorAll('.dropdown .titulo').forEach(titulo => {
        const icon = titulo.querySelector('.dropdown-btn');
        const dropdownContent = titulo.nextElementSibling;
        
        // Inicializa todos fechados
        dropdownContent.classList.remove('show');
        icon.classList.replace('bi-dash-lg', 'bi-plus');
        
        titulo.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Alterna o dropdown atual
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
                icon.classList.replace('bi-dash-lg', 'bi-plus');
            } else {
                // Fecha outros dropdowns abertos
                document.querySelectorAll('.dropdown-content.show').forEach(content => {
                    if (content !== dropdownContent) {
                        content.classList.remove('show');
                        content.previousElementSibling.querySelector('.dropdown-btn').classList.replace('bi-dash-lg', 'bi-plus');
                    }
                });
                
                dropdownContent.classList.add('show');
                icon.classList.replace('bi-plus', 'bi-dash-lg');
            }
        });
    });
    // 3. Fechar filtros ao redimensionar para desktop


    // 4. Filtragem das olimpíadas
    const filterButtons = document.querySelectorAll('.botao');
    const olimpiadasContainer = document.getElementById('olimpiadas');
    
    const filterMap = {
        // Área
        exatas: { param: 'category', value: 'Exatas' },
        tecnologia: { param: 'category', value: 'Tecnologia' },
        linguagens: { param: 'category', value: 'Linguagens' },
        humanas: { param: 'category', value: 'Humanas' },
        interdiciplinaresOutros: { param: 'category', value: 'Interdisciplinares e outros' },
        cienciasNatureza: { param: 'category', value: 'Ciências da Natureza' },
        
        // Tipo
        escola: { param: 'tipo_inscricao', value: 'escola' },
        aluno: { param: 'tipo_inscricao', value: 'aluno' },
        
        // Status
        aberto: { param: 'status', value: 'Aberto' },
        embreve: { param: 'status', value: 'Em breve' },
        fechado: { param: 'status', value: 'Fechado' },
        
        // Nível
        fundamental1: { param: 'quem_pode', value: 'f1' },
        fundamental2: { param: 'quem_pode', value: 'f2' },
        ensinoMedio: { param: 'quem_pode', value: 'em' },
        superior: { param: 'quem_pode', value: 'sup' },
        livre: { param: 'quem_pode', value: 'livre' },

        // Formato
        online: { param: 'online', value: 'true' }
    };

    async function applyFilters() {
        const params = new URLSearchParams();

        document.querySelectorAll('.botao.ativo').forEach(button => {
            const config = filterMap[button.id];
            if (config) {
                params.append(config.param, config.value);
            }
        });

        try {
            olimpiadasContainer.classList.add('loading');
            
            const response = await fetch(`/catalogo?${params.toString()}`);
            const data = await response.text();
            
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;
            const newContent = tempDiv.querySelector('#olimpiadas').innerHTML;
            
            olimpiadasContainer.innerHTML = newContent;
            window.history.replaceState({}, '', `?${params.toString()}`);
            
        } catch (error) {
            console.error('Erro:', error);
        } finally {
            olimpiadasContainer.classList.remove('loading');
        }
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Impede que o evento chegue ao window.click
            this.classList.toggle('ativo');
            void this.offsetWidth;
            applyFilters();
        });
    });

    function initialize() {
        const params = new URLSearchParams(window.location.search);
        
        params.forEach((value, param) => {
            for (const [btnId, config] of Object.entries(filterMap)) {
                if (config.param === param && config.value === value) {
                    const btn = document.getElementById(btnId);
                    if (btn) btn.classList.add('ativo');
                }
            }
        });
        
        if (params.toString()) {
            applyFilters();
        }
    }
    
    initialize();
});