// === INICIALIZAÇÃO PRINCIPAL ===
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌟 WB Assessoria Migratória - Site carregado com sucesso!');
    
    // Inicializar todas as funcionalidades
    initializeAllFeatures();
    
    // Configurar mapa
    setTimeout(initMap, 500);
    
    // Analytics e tracking
    initializeAnalytics();
});

// === INICIALIZAÇÃO DO MAPA (OpenStreetMap) ===
function initMap() {
    const mapContainer = document.getElementById('mapa');
    if (!mapContainer) {
        console.warn('Container do mapa não encontrado');
        return;
    }
    
    try {
        // COORDENADAS CORRETAS - Av. Amador Bueno da Veiga, 1970 - Penha de França, SP
        // Latitude: -23.5220406 | Longitude: -46.5268898
        const latitude = -23.5220406;
        const longitude = -46.5268898;
        
        console.log(`🗺️ Inicializando mapa nas coordenadas: ${latitude}, ${longitude}`);
        
        // Criar mapa com configurações otimizadas
        const map = L.map('mapa').setView([latitude, longitude], 17); // Zoom aumentado para 17
        map.scrollWheelZoom.disable();
        
        // Adicionar tile layer do OpenStreetMap com atribuição completa
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | © <a href="https://carto.com/attributions">CARTO</a>',
            maxZoom: 19,
            tileSize: 256,
            zoomOffset: 0,
            detectRetina: true
        }).addTo(map);
        
        // Ícone customizado para o marcador (melhorado)
        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `
                <div style="background: linear-gradient(135deg, #D4AF37, #F1C40F); 
                           width: 45px; height: 45px; border-radius: 50%; 
                           display: flex; align-items: center; justify-content: center; 
                           box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4); 
                           border: 4px solid white; position: relative; 
                           transition: all 0.3s ease;">
                    <i class="fas fa-map-marker-alt" style="color: #0a0a0a; font-size: 1.3rem; z-index: 2;"></i>
                    <div style="position: absolute; bottom: -6px; left: 50%; 
                               transform: translateX(-50%); width: 0; height: 0; 
                               border-left: 10px solid transparent; 
                               border-right: 10px solid transparent; 
                               border-top: 15px solid #D4AF37; z-index: 1;"></div>
                </div>
            `,
            iconSize: [45, 55],
            iconAnchor: [22, 55],
            popupAnchor: [0, -50]
        });
        
        // Adicionar marcador principal com coordenadas exatas
        const marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
        
        // Popup informativo detalhado (com link WhatsApp corrigido)
        const popupContent = `
            <div style="min-width: 300px; text-align: center; font-family: 'Poppins', sans-serif; line-height: 1.5; max-width: 320px;">
                <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%); 
                           padding: 1.8rem; border-radius: 18px; 
                           border: 2px solid rgba(212, 175, 55, 0.3); 
                           box-shadow: 0 10px 35px rgba(0,0,0,0.4); position: relative; overflow: hidden;">
                    
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #D4AF37, #F1C40F, #D4AF37);"></div>
                    
                    <h3 style="color: #D4AF37; margin: 0 0 1.2rem 0; 
                               font-family: 'Playfair Display', serif; 
                               font-size: 1.4rem; font-weight: 700; letter-spacing: 0.5px;">
                        <i class="fas fa-building" style="margin-right: 0.5rem;"></i> 
                        WB Assessoria Migratória
                    </h3>
                    
                    <div style="background: rgba(212, 175, 55, 0.08); 
                               padding: 1.2rem; border-radius: 12px; 
                               border-left: 4px solid #D4AF37; margin: 1.2rem 0; 
                               backdrop-filter: blur(10px);">
                        <p style="margin: 0.6rem 0; font-size: 0.95rem; color: #E0E0E0; line-height: 1.4;">
                            <i class="fas fa-map-marker-alt" style="color: #D4AF37; margin-right: 0.6rem;"></i>
                            <strong>Av. Amador Bueno da Veiga, 1970</strong>
                        </p>
                        <p style="margin: 0.6rem 0; font-size: 0.95rem; color: #E0E0E0; line-height: 1.4;">
                            <i class="fas fa-layer-group" style="color: #D4AF37; margin-right: 0.6rem;"></i>
                            2º Andar - Sala 19
                        </p>
                        <p style="margin: 0.6rem 0; font-size: 0.95rem; color: #E0E0E0; line-height: 1.4;">
                            <i class="fas fa-city" style="color: #D4AF37; margin-right: 0.6rem;"></i>
                            Penha de França, São Paulo - SP, 03636-100
                        </p>
                    </div>
                    
                    <div style="margin: 1.2rem 0; padding: 1rem; 
                               background: rgba(37, 211, 102, 0.12); 
                               border-radius: 10px; border: 1px solid rgba(37, 211, 102, 0.3);">
                        <p style="margin: 0; font-size: 0.92rem; color: #E0E0E0; font-weight: 500;">
                            <i class="fas fa-clock" style="color: #25D366; margin-right: 0.6rem;"></i>
                            Atendimento: Segunda a Sexta, 9h às 18h
                        </p>
                    </div>
                    
                    <div style="margin: 1.5rem 0 0 0;">
                        <a href="https://wa.me/5511914258886?text=Ol%C3%A1%21%20Estou%20interessado%20em%20visitar%20o%20escrit%C3%B3rio%20da%20WB%20Assessoria%20na%20Penha%20de%20Fran%C3%A7a" 
                           target="_blank" rel="noopener noreferrer" 
                           style="display: inline-block; background: linear-gradient(135deg, #25D366, #128C7E); 
                                  color: white; padding: 0.9rem 1.8rem; 
                                  border-radius: 25px; text-decoration: none; 
                                  font-weight: 600; margin: 0.5rem auto; 
                                  transition: all 0.3s ease; 
                                  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.3); 
                                  font-size: 0.95rem; letter-spacing: 0.3px;
                                  position: relative; overflow: hidden;">
                            <i class="fab fa-whatsapp" style="margin-right: 0.6rem;"></i>
                            Agendar Visita
                        </a>
                    </div>
                    
                    <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 3px; 
                               background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent);"></div>
                </div>
            </div>
        `;
        
        marker.bindPopup(popupContent, {
            closeButton: true,
            className: 'wb-popup custom-popup',
            autoClose: true,
            closeOnEscapeKey: true,
            maxWidth: 320
        }).openPopup();
        
        // Estilizar popup quando carregado (melhorado)
        setTimeout(() => {
            const popupWrapper = document.querySelector('.custom-popup .leaflet-popup-content-wrapper');
            if (popupWrapper) {
                popupWrapper.style.background = 'transparent';
                popupWrapper.style.border = 'none';
                popupWrapper.style.borderRadius = '18px';
                popupWrapper.style.boxShadow = '0 12px 40px rgba(0,0,0,0.4)';
                popupWrapper.style.padding = '0';
                popupWrapper.style.margin = '0';
                popupWrapper.style.fontFamily = "'Poppins', sans-serif";
                popupWrapper.style.color = '#E0E0E0';
                popupWrapper.style.lineHeight = '1.5';
            }
            
            const popupContentWrapper = document.querySelector('.custom-popup .leaflet-popup-content');
            if (popupContentWrapper) {
                popupContentWrapper.style.margin = '0';
                popupContentWrapper.style.padding = '0';
                popupContentWrapper.style.background = 'transparent';
            }
            
            const closeButton = document.querySelector('.custom-popup .leaflet-popup-close-button');
            if (closeButton) {
                closeButton.innerHTML = '×';
                closeButton.style.color = '#D4AF37';
                closeButton.style.fontSize = '1.3rem';
                closeButton.style.fontWeight = 'bold';
                closeButton.style.background = 'rgba(212, 175, 55, 0.2)';
                closeButton.style.borderRadius = '50%';
                closeButton.style.width = '24px';
                closeButton.style.height = '24px';
                closeButton.style.lineHeight = '22px';
                closeButton.style.right = '-12px';
                closeButton.style.top = '-12px';
            }
        }, 300);
        
        // Adicionar círculo de área de atendimento (1.5km - mais realista para bairro)
        L.circle([latitude, longitude], {
            color: '#D4AF37',
            weight: 3,
            fillColor: '#D4AF37',
            fillOpacity: 0.12,
            radius: 1500,
            dashArray: '8, 4',
            className: 'service-area'
        }).addTo(map).bindPopup('Área de atendimento local - até 1.5km do escritório', {
            closeButton: false,
            className: 'area-popup',
            autoClose: false
        });
        
        // Eventos do mapa otimizados
        map.on('click', function(e) {
            // Fechar popup ao clicar fora do marcador
            if (map._popup && !e.originalEvent.target.closest('.leaflet-popup')) {
                map.closePopup();
            }
        });
        
        // Re-abilitar zoom com scroll quando hover no mapa (melhor UX)
        const mapElement = document.getElementById('mapa');
        let scrollEnabled = false;
        
        mapElement.addEventListener('mouseenter', () => {
            scrollEnabled = true;
            map.scrollWheelZoom.enable();
            console.log('🖱️ Zoom do mapa ativado');
        });
        
        mapElement.addEventListener('mouseleave', () => {
            if (scrollEnabled) {
                map.scrollWheelZoom.disable();
                scrollEnabled = false;
                console.log('🖱️ Zoom do mapa desativado');
            }
        });
        
        // Adicionar controles extras
        L.control.scale({imperial: false, metric: true}).addTo(map);
        
        // Marcar como mapa inicializado
        mapContainer.classList.add('map-loaded');
        mapContainer.dataset.lat = latitude;
        mapContainer.dataset.lon = longitude;
        
        console.log(`✅ Mapa inicializado com sucesso nas coordenadas: ${latitude}, ${longitude}`);
        console.log(`📍 Endereço: Av. Amador Bueno da Veiga, 1970 - Penha de França, São Paulo - SP`);
        
    } catch (error) {
        console.error('❌ Erro ao inicializar mapa:', error);
        
        // Fallback melhorado para erro
        mapContainer.innerHTML = `
            <div class="map-placeholder-error" style="padding: 2rem; text-align: center; background: linear-gradient(135deg, rgba(10,10,10,0.8), rgba(20,20,20,0.8)); border-radius: 12px; border: 2px dashed #D4AF37; min-height: 300px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #E0E0E0;">
                <i class="fas fa-map-marked-alt" style="font-size: 3.5rem; color: #D4AF37; margin-bottom: 1rem; opacity: 0.8;"></i>
                <h3 style="color: #D4AF37; margin: 0 0 0.5rem 0; font-size: 1.3rem; font-weight: 600;">Mapa Temporariamente Indisponível</h3>
                <p style="margin: 0 0 1.5rem 0; font-size: 1rem; opacity: 0.9;">Estamos com problemas técnicos no mapa interativo</p>
                <div style="background: rgba(212, 175, 55, 0.1); padding: 1rem; border-radius: 8px; border-left: 3px solid #D4AF37; max-width: 280px;">
                    <p style="margin: 0.5rem 0; font-size: 0.95rem;">
                        <i class="fas fa-map-marker-alt" style="color: #D4AF37; margin-right: 0.5rem;"></i>
                        <strong>Av. Amador Bueno da Veiga, 1970</strong><br>
                        2º Andar - Sala 19, Penha de França<br>
                        São Paulo - SP, 03636-100
                    </p>
                </div>
                <p style="margin: 1rem 0 0 0; font-size: 0.9rem; color: #B0B0B0;">
                    Coordenadas: -23.5220406, -46.5268898
                </p>
                <a href="https://www.google.com/maps/place/WB+Assessoria+Migrat%C3%B3ria/@-23.5220357,-46.5294647,17z/data=!3m2!4b1!5s0x94ce5e3ad7db0529:0xc38aa49161e4a010!4m6!3m5!1s0x94ce5fb51d533ab1:0x64452d508ce3f536!8m2!3d-23.5220406!4d-46.5268898!16s%2Fg%2F11vpfrpmyf?entry=ttu" 
                   target="_blank" rel="noopener noreferrer"
                   style="display: inline-block; background: #25D366; color: white; padding: 0.8rem 1.5rem; border-radius: 25px; text-decoration: none; font-weight: 600; margin-top: 1rem; transition: all 0.3s ease;">
                    <i class="fas fa-directions" style="margin-right: 0.5rem;"></i>
                    Abrir no Google Maps
                </a>
            </div>
        `;
    }
}

// === MENU MOBILE ===
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger || !navMenu) {
        console.warn('Elementos do menu mobile não encontrados');
        return;
    }

    const toggleMenu = (event) => {
        // A linha abaixo é a mais importante. Ela impede que este clique
        // seja detectado por qualquer outra função na página.
        if (event) event.stopPropagation();

        const isActive = navMenu.classList.contains('active');

        if (isActive) {
            // Se já está ativo, fecha o menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
            console.log('🍔 Menu mobile fechado');
        } else {
            // Se não está ativo, abre o menu
            hamburger.classList.add('active');
            navMenu.classList.add('active');
            document.body.classList.add('menu-open');
            document.body.style.overflow = 'hidden';
            console.log('🍔 Menu mobile aberto');
        }
    };

    // 1. Evento de clique APENAS no ícone de hambúrguer
    hamburger.addEventListener('click', toggleMenu);

    // 2. Evento para fechar ao clicar em um link do menu
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                // Chama a função sem evento para garantir que feche
                toggleMenu(); 
            }
        });
    });

    // 3. Evento para fechar ao clicar FORA do menu
    document.addEventListener('click', (e) => {
        // Só fecha se o menu estiver ativo E o clique não for no menu ou no ícone
        if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            toggleMenu();
        }
    });

    // 4. Evento para fechar com a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    console.log('🍔 Menu mobile inicializado com a correção final.');
}

// === SMOOTH SCROLL E NAVEGAÇÃO ATIVA ===
function initializeSmoothScroll() {
    // Smooth scroll para todos os links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                const startPosition = window.pageYOffset;
                const distance = offsetTop - startPosition;
                const duration = 800; // ms
                let startTime = null;
                
                function animation(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const progress = Math.min(timeElapsed / duration, 1);
                    const easeProgress = easeInOutQuad(progress);
                    
                    window.scrollTo(0, startPosition + distance * easeProgress);
                    
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    } else {
                        // Atualizar navegação ativa
                        updateActiveNav(targetId);
                        // Fechar menu mobile
                        const hamburger = document.querySelector('.hamburger');
                        const navMenu = document.querySelector('.nav-menu');
                        if (hamburger && navMenu && navMenu.classList.contains('active')) {
                            hamburger.classList.remove('active');
                            navMenu.classList.remove('active');
                            document.body.classList.remove('menu-open');
                            document.body.style.overflow = '';
                        }
                    }
                }
                
                requestAnimationFrame(animation);
                
                // Analytics
                console.log(`📜 Scroll suave para: ${targetId}`);
            }
        });
    });
    
    // Função de easing para scroll suave
    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
    
    // Atualizar link ativo na navegação
    function updateActiveNav(currentSection) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    // Navegação ativa por scroll
    let ticking = false;
    function updateNavigation() {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollPosition = window.scrollY + 100;
                const sections = document.querySelectorAll('section[id]');
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        current = `#${section.getAttribute('id')}`;
                    }
                });
                
                if (current) {
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === current) {
                            link.classList.add('active');
                        }
                    });
                }
                
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', updateNavigation, { passive: true });
    
    console.log('📜 Smooth scroll e navegação ativa inicializados');
}

// === ANIMAÇÕES DE INTERSEÇÃO ===
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                // Desvincular após animação para performance
                if (entry.target.classList.contains('animate-once')) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Elementos para animar
    const animatedElements = document.querySelectorAll('.servico-card, .depoimento-card, .sobre-text, .info-item, .hero-text, .chamada-content, .stat-item');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px) scale(0.95)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        el.classList.add('animate-once');
        
        // Delay sequencial
        const delay = index * 0.1;
        el.style.transitionDelay = `${delay}s`;
        
        observer.observe(el);
    });
    
    // Animação das imagens
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    document.querySelectorAll('.hero-main-image, .sobre-main-image').forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.9)';
        img.style.transition = 'all 0.8s ease';
        imageObserver.observe(img);
    });
    
    console.log('🎭 Intersection Observer inicializado');
}

// === FORMULÁRIO DE CONTATO AVANÇADO ===
function initializeContactForm() {
    const contatoForm = document.getElementById('contato-form');
    const submitBtn = document.querySelector('.submit-btn');
    const charCounter = document.getElementById('charCounter');
    
    if (!contatoForm || !submitBtn) {
        console.warn('Formulário de contato não encontrado');
        return;
    }
    
    // Contador de caracteres para textarea
    const mensagemTextarea = document.getElementById('mensagem');
    if (mensagemTextarea && charCounter) {
        mensagemTextarea.addEventListener('input', function() {
            const length = this.value.length;
            charCounter.textContent = `${length}/500 caracteres`;
            
            // Mudar cor se próximo do limite
            if (length > 450) {
                charCounter.style.color = '#D4AF37';
            } else {
                charCounter.style.color = 'var(--text-dark)';
            }
        });
    }
    
    // Máscaras de formatação
    initializeInputMasks();
    
    // Validação e envio
    contatoForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Validação completa
        if (!validateAdvancedForm()) {
            return false;
        }
        
        // Mostrar loading
        const originalText = submitBtn.innerHTML;
        const originalIcon = submitBtn.querySelector('i');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        
        // Prevenir múltiplos envios
        const submitBtnRect = submitBtn.getBoundingClientRect();
        showClickFeedback(submitBtnRect);
        
        try {
            // Coletar dados do formulário
            const formData = new FormData(contatoForm);
            const data = Object.fromEntries(formData);
            
            // Preparar mensagem para WhatsApp Business ou EmailJS
            const servicoMap = {
                'naturalizacao': 'Naturalização Brasileira',
                'vistos': 'Vistos e Imigração',
                'residencia': 'Autorização de Residência',
                'celpe-bras': 'Curso CELPE-Bras',
                'traducao': 'Traduções Juramentadas',
                'outros': 'Outro Serviço'
            };
            
            const servicoTexto = servicoMap[data.servico] || 'Consulta Geral';
            const nomeFormatado = data.nome.trim();
            const whatsappLimpo = data.whatsapp.replace(/\D/g, '');
            
            // Simular integração com WhatsApp Business API
            const whatsappMessage = `🆕 *NOVA CONSULTA WB ASSESSORIA* 🆕

👤 *Nome:* ${nomeFormatado}
📧 *E-mail:* ${data.email}
📱 *WhatsApp:* ${data.whatsapp}
📞 *Telefone:* ${data.telefone || 'Não informado'}
🎯 *Serviço:* ${servicoTexto}

💬 *Mensagem:*
${data.mensagem}

⏰ *Enviado em:* ${new Date().toLocaleString('pt-BR', { 
    timeZone: 'America/Sao_Paulo',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
})}`;

            console.log('📝 Dados do formulário coletados:', data);
            console.log('📱 Mensagem para WhatsApp:', whatsappMessage);
            
// === ENVIO PARA PLANILHA GOOGLE ===
            const scriptUrl = 'https://script.google.com/macros/s/AKfycbzyx2m6le2Hf2z1KbeaszPQeXqZcCa7cBPBm5xPpsv78IIcMK57-W-pGsZL1E9Q0gCQ/exec'; 

            const dadosPlanilha = {
                'Data': new Date().toLocaleString('pt-BR'),
                'Nome': data.nome,
                'Email': data.email,
                'WhatsApp': data.whatsapp,
                'Telefone': data.telefone || 'Não informado',
                'Serviço': servicoTexto,
                'Mensagem': data.mensagem
            };

            try {
                await fetch(scriptUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify(dadosPlanilha),
                });
                console.log('✅ Dados enviados para a planilha!');
            } catch (error) {
                console.error('⚠️ Erro planilha:', error);
            }

            // Delay curto só para a animação do botão não travar bruscamente
            await simulateApiCall(1000);
            
            // Mensagem de sucesso personalizada
            const successMessage = `🎉 *Obrigado, ${nomeFormatado}!*

✅ Recebemos sua solicitação sobre *${servicoTexto}*.

📲 Nossa equipe entrará em contato pelo WhatsApp (${data.whatsapp}) em até *24 horas úteis*.

⏰ Horário de atendimento: Segunda a Sexta, 9h às 18h.

💡 Dica: Salve nosso número (11) 91425-8886 para facilitar o contato!`;

            showNotification(successMessage, 'success');
            
            // Analytics de conversão
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submit', {
                    event_category: 'Engajamento',
                    event_label: servicoTexto,
                    value: 1
                });
            }
            
            // Reset do formulário com animação
            await animateFormReset();
            contatoForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
            
            // Restaurar ícone original
            if (originalIcon) {
                const newIcon = document.createElement('i');
                newIcon.className = originalIcon.className;
                newIcon.style.marginRight = '0.5rem';
                submitBtn.insertBefore(newIcon, submitBtn.firstChild);
            }
            
            // Scroll suave para topo da seção
            document.getElementById('contato').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
            
            // Foco no primeiro campo para nova submissão
            setTimeout(() => {
                document.getElementById('nome').focus();
            }, 500);
            
        } catch (error) {
            console.error('❌ Erro ao processar formulário:', error);
            showNotification(
                '⚠️ Ocorreu um erro ao enviar sua mensagem. ' +
                'Por favor, tente novamente ou entre em contato diretamente pelo WhatsApp: (11) 91425-8886', 
                'error'
            );
            
            // Restaurar botão
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
        }
    });
    
    // Validação em tempo real
    setupRealTimeValidation();
    
    console.log('📝 Formulário de contato inicializado');
}

// === VALIDAÇÃO AVANÇADA DO FORMULÁRIO ===
function validateAdvancedForm() {
    const fields = {
        nome: document.getElementById('nome'),
        email: document.getElementById('email'),
        whatsapp: document.getElementById('whatsapp'),
        servico: document.getElementById('servico'),
        mensagem: document.getElementById('mensagem')
    };
    
    let isValid = true;
    let firstInvalidField = null;
    
    // Validar nome
    if (!fields.nome.value.trim()) {
        showFieldError(fields.nome, 'Por favor, informe seu nome completo');
        isValid = false;
        if (!firstInvalidField) firstInvalidField = fields.nome;
    } else if (fields.nome.value.trim().length < 2) {
        showFieldError(fields.nome, 'Nome deve ter pelo menos 2 caracteres');
        isValid = false;
        if (!firstInvalidField) firstInvalidField = fields.nome;
    } else {
        clearFieldError(fields.nome);
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fields.email.value || !emailRegex.test(fields.email.value.trim())) {
        showFieldError(fields.email, 'Por favor, insira um e-mail válido');
        isValid = false;
        if (!firstInvalidField) firstInvalidField = fields.email;
    } else {
        clearFieldError(fields.email);
    }
    
    // Validar WhatsApp
    const whatsappValue = fields.whatsapp.value.replace(/\D/g, '');
    if (!fields.whatsapp.value || whatsappValue.length < 10) {
        showFieldError(fields.whatsapp, 'Por favor, insira um WhatsApp válido com DDD');
        isValid = false;
        if (!firstInvalidField) firstInvalidField = fields.whatsapp;
    } else {
        clearFieldError(fields.whatsapp);
    }
    
    // Validar serviço
    if (!fields.servico.value) {
        showFieldError(fields.servico, 'Por favor, selecione um serviço');
        isValid = false;
        if (!firstInvalidField) firstInvalidField = fields.servico;
    } else {
        clearFieldError(fields.servico);
    }
    
    // Validar mensagem
    if (!fields.mensagem.value.trim()) {
        showFieldError(fields.mensagem, 'Por favor, descreva sua necessidade');
        isValid = false;
        if (!firstInvalidField) firstInvalidField = fields.mensagem;
    } else if (fields.mensagem.value.trim().length < 10) {
        showFieldError(fields.mensagem, 'Mensagem deve ter pelo menos 10 caracteres');
        isValid = false;
        if (!firstInvalidField) firstInvalidField = fields.mensagem;
    } else {
        clearFieldError(fields.mensagem);
    }
    
    // Focar no primeiro campo inválido
    if (firstInvalidField && !isValid) {
        firstInvalidField.focus();
        firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Efeito de destaque
        firstInvalidField.style.borderColor = '#dc3545';
        firstInvalidField.style.boxShadow = '0 0 0 3px rgba(220, 53, 69, 0.25)';
        
        setTimeout(() => {
            firstInvalidField.style.borderColor = 'rgba(212, 175, 55, 0.1)';
            firstInvalidField.style.boxShadow = 'none';
        }, 3000);
    }
    
    if (!isValid) {
        showNotification('Por favor, corrija os campos destacados em vermelho', 'error');
        // Analytics de erro de validação
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_validation_error', {
                event_category: 'Formulário',
                event_label: 'Validação Cliente'
            });
        }
    }
    
    return isValid;
}

// Funções auxiliares de validação visual
function showFieldError(field, message) {
    clearFieldError(field);
    
    field.classList.add('error');
    field.style.borderColor = '#dc3545';
    field.style.boxShadow = '0 0 0 3px rgba(220, 53, 69, 0.25)';
    
    // Adicionar tooltip de erro
    let errorTooltip = field.parentNode.querySelector('.error-tooltip');
    if (!errorTooltip) {
        errorTooltip = document.createElement('div');
        errorTooltip.className = 'error-tooltip';
        errorTooltip.style.cssText = `
            position: absolute;
            top: -35px;
            left: 50%;
            transform: translateX(-50%);
            background: #dc3545;
            color: white;
            padding: 0.4rem 0.8rem;
            border-radius: 6px;
            font-size: 0.8rem;
            font-weight: 500;
            white-space: nowrap;
            z-index: 10;
            box-shadow: 0 2px 10px rgba(220, 53, 69, 0.3);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            pointer-events: none;
        `;
        errorTooltip.innerHTML = `
            <div style="position: relative;">
                ${message}
                <div style="position: absolute; top: 100%; left: 50%; 
                           transform: translateX(-50%); margin-top: -3px;
                           width: 0; height: 0; border-left: 5px solid transparent;
                           border-right: 5px solid transparent;
                           border-top: 5px solid #dc3545;"></div>
            </div>
        `;
        field.parentNode.style.position = 'relative';
        field.parentNode.appendChild(errorTooltip);
    }
    
    errorTooltip.querySelector('div').textContent = message;
    setTimeout(() => {
        errorTooltip.style.opacity = '1';
        errorTooltip.style.visibility = 'visible';
        errorTooltip.style.transform = 'translateX(-50%) translateY(-2px)';
    }, 100);
}

function clearFieldError(field) {
    field.classList.remove('error');
    field.style.borderColor = '';
    field.style.boxShadow = '';
    
    const errorTooltip = field.parentNode.querySelector('.error-tooltip');
    if (errorTooltip) {
        errorTooltip.style.opacity = '0';
        errorTooltip.style.visibility = 'hidden';
        errorTooltip.style.transform = 'translateX(-50%) translateY(0)';
        setTimeout(() => errorTooltip.remove(), 300);
    }
}

// Validação em tempo real
function setupRealTimeValidation() {
    const inputs = document.querySelectorAll('#contato-form input, #contato-form select, #contato-form textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') || this.id === 'telefone') {
                validateField(this);
            }
            clearFieldError(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
    
    function validateField(field) {
        const fieldName = field.id;
        const value = field.value.trim();
        
        switch (fieldName) {
            case 'nome':
                if (value && value.length >= 2) {
                    clearFieldError(field);
                }
                break;
                
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (value && emailRegex.test(value)) {
                    clearFieldError(field);
                }
                break;
                
            case 'whatsapp':
                const whatsappClean = value.replace(/\D/g, '');
                if (whatsappClean.length >= 10) {
                    clearFieldError(field);
                }
                break;
                
            case 'servico':
                if (value) {
                    clearFieldError(field);
                }
                break;
                
            case 'mensagem':
                if (value.length >= 10) {
                    clearFieldError(field);
                }
                break;
        }
    }
}

// Máscaras de entrada
function initializeInputMasks() {
    // Máscara WhatsApp (11) 99999-9999
    const whatsappInput = document.getElementById('whatsapp');
    if (whatsappInput) {
        whatsappInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            const is11Digits = value.length > 11;
            
            // Aplicar máscara
            if (is11Digits) {
                // (11) 9 9999-9999
                value = value.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
            } else {
                // (11) 99999-9999
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            }
            
            e.target.value = value.substring(0, 16);
        });
        
        // Placeholder inicial
        whatsappInput.addEventListener('focus', function() {
            if (!this.value.trim()) {
                this.value = '(11) ';
            }
            this.select();
        });
        
        whatsappInput.addEventListener('blur', function() {
            if (this.value === '(11) ' || !this.value.trim()) {
                this.value = '';
            }
        });
        
        // Validação automática
        whatsappInput.addEventListener('blur', function() {
            const cleanValue = this.value.replace(/\D/g, '');
            if (cleanValue.length === 11 && cleanValue.startsWith('11')) {
                // Formato correto para São Paulo
                clearFieldError(this);
            } else if (cleanValue.length >= 10) {
                // Aceitar outros DDDs
                clearFieldError(this);
            }
        });
    }
    
    // Máscara Telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length <= 11) {
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else {
                value = value.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
            }
            
            e.target.value = value.substring(0, 16);
        });
        
        telefoneInput.addEventListener('focus', function() {
            if (!this.value.trim()) {
                this.value = '(  ) ';
            }
        });
        
        telefoneInput.addEventListener('blur', function() {
            if (this.value === '(  ) ' || !this.value.trim()) {
                this.value = '';
            }
        });
    }
    
    // Auto-select no select
    const servicoSelect = document.getElementById('servico');
    if (servicoSelect) {
        servicoSelect.addEventListener('focus', function() {
            if (this.value === '') {
                this.selectedIndex = -1;
            }
        });
    }
    
    console.log('🎭 Máscaras de entrada inicializadas');
}

// === EFEITOS VISUAIS E INTERATIVOS (VERSÃO CORRIGIDA) ===
function initializeVisualEffects() {
    // Efeitos hover nos cards (SEM interferir em links)
    document.querySelectorAll('.servico-card, .depoimento-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(212, 175, 55, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'var(--shadow-gold)';
        });
        
        // Efeito de clique (apenas em áreas não-link)
        card.addEventListener('click', function(e) {
            if (e.target.closest('.saiba-mais')) return; // Não interferir em links WhatsApp
            
            // Ripple effect apenas se não for link
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(212, 175, 55, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
                z-index: 10;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Animação dos links "Saiba Mais" (CORRIGIDO - não interfere mais)
    document.querySelectorAll('.saiba-mais').forEach(link => {
        // APENAS EFEITOS VISUAIS - SEM PREVENTDEFAULT
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
        
        // EFEITO VISUAL LEVE AO CLICAR (SEM BLOQUEAR NAVEGAÇÃO)
        link.addEventListener('click', function(e) {
            // NÃO usar preventDefault() - deixar o link funcionar normalmente
            // Apenas adicionar feedback visual
            this.style.transform = 'scale(0.95)';
            
            // Reset da animação
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Analytics (sem interferir na navegação)
            console.log('📱 WhatsApp "Saiba Mais" clicado:', new Date().toLocaleString('pt-BR'));
            if (typeof gtag !== 'undefined') {
                gtag('event', 'whatsapp_click', {
                    event_category: 'Conversão',
                    event_label: 'Link Saiba Mais',
                    value: 5
                });
            }
            
            // O link vai funcionar normalmente após este código
        });
    });
    
    // CORREÇÃO PRINCIPAL: EFEITOS WHATSAPP SEM INTERFERIR NA NAVEGAÇÃO
    document.querySelectorAll('.btn-whatsapp, .whatsapp-float a, .social-link.whatsapp').forEach(link => {
        let clickTimeout;
        let isProcessing = false;
        
        // EFEITOS HOVER (SEMPRE FUNCIONAM)
        link.addEventListener('mouseenter', function() {
            if (!isProcessing) {
                this.style.transform = 'scale(1.05)';
                this.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.3)';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            if (!isProcessing) {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            }
        });
        
        // CLIQUE CORRIGIDO - SEM PREVENTDEFAULT QUE BLOQUEIA
        link.addEventListener('click', function(e) {
            // NÃO PREVINIR O COMPORTAMENTO PADRÃO DO LINK
            // Apenas adicionar feedback visual e analytics
            
            isProcessing = true;
            this.setAttribute('data-clicked', 'true');
            
            // Feedback visual de clique
            const rect = this.getBoundingClientRect();
            showClickFeedback(rect, true);
            
            // Efeito de escala
            this.style.transform = 'scale(0.95)';
            this.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.4)';
            
            // Analytics
            console.log('📱 WhatsApp clicado com sucesso:', new Date().toLocaleString('pt-BR'));
            if (typeof gtag !== 'undefined') {
                gtag('event', 'whatsapp_click', {
                    event_category: 'Conversão',
                    event_label: this.textContent.trim() || 'Botão WhatsApp',
                    value: 10
                });
            }
            
            // Reset após animação (SEM interferir na navegação)
            clearTimeout(clickTimeout);
            clickTimeout = setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                this.removeAttribute('data-clicked');
                isProcessing = false;
            }, 200);
            
            // O link WhatsApp vai abrir normalmente após 200ms
            // Não há preventDefault() aqui, então a navegação funciona!
        });
        
        // Prevenir spam de cliques (mas sem bloquear navegação)
        let openTabs = 0;
        link.addEventListener('click', function(e) {
            if (openTabs > 0 && isProcessing) {
                // Apenas feedback visual, não bloquear
                e.stopPropagation();
                showNotification('Aguarde o WhatsApp abrir...', 'info');
                return;
            }
            openTabs++;
            setTimeout(() => openTabs--, 2000); // Reset após 2 segundos
        });
    });
    
    // Efeitos das redes sociais (sem interferir)
    document.querySelectorAll('.social-link.facebook, .social-link.instagram').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        link.addEventListener('click', function() {
            console.log(`🌐 Rede social clicada: ${this.classList[1]}`);
        });
    });
    
    // Efeito de digitação no hero (REMOVIDO POR SOLICITAÇÃO)
    // initializeTypewriterEffect();
    
    // Parallax sutil no hero (mantido)
    initializeParallaxEffect();
    
    // Scroll effects no header (mantido)
    initializeHeaderScrollEffects();
    
    console.log('✨ Efeitos visuais CORRIGIDOS - WhatsApp agora funciona corretamente');
}

// === EFEITO DE DIGITAÇÃO ===
function initializeTypewriterEffect() {
    const heroTitle = document.querySelector('.hero-content h1');
    if (!heroTitle) return;
    
    const originalText = heroTitle.textContent;
    const speed = 80; // ms por caractere
    
    function typeWriter(element, text, speed = 80) {
        element.innerHTML = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                
                // Efeito de cursor piscante
                if (i < text.length) {
                    element.innerHTML += '|';
                    setTimeout(() => {
                        const lastChar = element.innerHTML.slice(-1);
                        if (lastChar === '|') {
                            element.innerHTML = element.innerHTML.slice(0, -1);
                        }
                    }, speed / 2);
                }
                
                setTimeout(type, speed);
            } else {
                // Remover cursor final
                if (element.innerHTML.endsWith('|')) {
                    element.innerHTML = element.innerHTML.slice(0, -1);
                }
            }
        }
        
        // Delay inicial
        setTimeout(() => type(), 500);
    }
    
    // Iniciar após carregamento das fontes
    if ('fonts' in document) {
        document.fonts.load('700 3rem Playfair Display').then(() => {
            typeWriter(heroTitle, originalText, speed);
        }).catch(err => {
            console.warn('Fontes não carregadas, usando fallback:', err);
            typeWriter(heroTitle, originalText, speed);
        });
    } else {
        typeWriter(heroTitle, originalText, speed);
    }
}

// === EFEITO PARALLAX ===
function initializeParallaxEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;
    
    hero.addEventListener('mousemove', (e) => {
        if (!isHovering) return;
        
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        mouseX = (clientX - centerX) / centerX;
        mouseY = (clientY - centerY) / centerY;
        
        const moveX = mouseX * 10;
        const moveY = mouseY * 10;
        
        hero.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    hero.addEventListener('mouseenter', () => {
        isHovering = true;
        requestAnimationFrame(raf);
    });
    
    hero.addEventListener('mouseleave', () => {
        isHovering = false;
        hero.style.transform = 'translate(0, 0)';
    });
    
    function raf() {
        if (isHovering) {
            requestAnimationFrame(raf);
        }
    }
}

// === EFEITOS DE SCROLL NO HEADER ===
function initializeHeaderScrollEffects() {
    let lastScrollTop = 0;
    let header = document.querySelector('.header');
    let whatsappFloat = document.querySelector('.whatsapp-float');
    
    if (!header || !whatsappFloat) return;
    
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
        
        // Efeitos no header
        if (scrollTop > 50) {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
            header.style.backdropFilter = 'blur(25px)';
            header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        }
        
        // Auto-hide WhatsApp button
        if (scrollDirection === 'down' && scrollTop > 300) {
            whatsappFloat.style.transform = 'translateY(100px) scale(0.9)';
            whatsappFloat.style.opacity = '0';
        } else if (scrollTop < 100 || scrollDirection === 'up') {
            whatsappFloat.style.transform = 'translateY(0) scale(1)';
            whatsappFloat.style.opacity = '1';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        
        // Parallax em elementos (performance otimizado)
        if (scrollTop > 100) {
            document.querySelectorAll('.servico-card, .depoimento-card').forEach((card, index) => {
                const cardRect = card.getBoundingClientRect();
                const speed = 0.5;
                const yPos = -(cardRect.top / window.innerHeight) * speed * 100;
                card.style.transform = `translateY(${yPos}px)`;
            });
        }
    }
    
    // Debounce para performance
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Inicializar posição
    handleScroll();
    
    console.log('📜 Efeitos de scroll inicializados');
}

// === SISTEMA DE NOTIFICAÇÕES AVANÇADO ===
function showNotification(message, type = 'info') {
    // Remover notificações anteriores
    document.querySelectorAll('.notification').forEach(notification => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');
    notification.setAttribute('tabindex', '-1');
    
    // Determinar ícone e cores
    const iconClass = type === 'success' ? 'fa-check-circle' : 
                     type === 'error' ? 'fa-exclamation-triangle' : 'fa-info-circle';
    const bgColor = type === 'success' ? 
                   'linear-gradient(135deg, rgba(40, 167, 69, 0.95), rgba(34, 197, 94, 0.9))' :
                   type === 'error' ? 
                   'linear-gradient(135deg, rgba(220, 53, 69, 0.95), rgba(255, 99, 71, 0.9))' :
                   'linear-gradient(135deg, rgba(108, 117, 125, 0.95), rgba(173, 181, 189, 0.9))';
    
    // Verificar se mensagem é longa e formatar
    let displayMessage = message;
    if (message.length > 300) {
        displayMessage = message.substring(0, 300) + '...';
    }
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.75rem; width: 100%;">
            <i class="fas ${iconClass}" style="font-size: 1.2rem; min-width: 20px; opacity: 0.9;"></i>
            <div style="flex: 1; line-height: 1.4;">
                <div style="font-weight: 600; margin-bottom: 0.25rem;">${type === 'success' ? 'Sucesso!' : type === 'error' ? 'Atenção!' : 'Informação'}</div>
                <div style="font-size: 0.9rem;">${displayMessage}</div>
            </div>
            <button class="close-btn" aria-label="Fechar notificação" style="background: none; border: none; color: inherit; font-size: 1.1rem; cursor: pointer; padding: 0.25rem; margin-left: auto; opacity: 0.7; transition: opacity 0.2s;">
                ×
            </button>
        </div>
    `;
    
    // Estilos inline completos
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: bgColor,
        color: 'white',
        padding: '1rem 1.25rem',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        zIndex: '10001',
        maxWidth: '420px',
        minWidth: '280px',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(255,255,255,0.2)',
        animation: 'slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        fontFamily: "'Poppins', sans-serif",
        lineHeight: '1.4'
    });
    
    // Adicionar ao DOM
    document.body.appendChild(notification);
    
    // Auto-foco para acessibilidade
    setTimeout(() => notification.focus(), 100);
    
    // Event listeners para fechar
    const closeBtn = notification.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeNotification(notification);
        });
        
        closeBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                closeNotification(notification);
            }
        });
    }
    
    // Fechar com ESC
    const handleEsc = (e) => {
        if (e.key === 'Escape' && document.body.contains(notification)) {
            closeNotification(notification);
            document.removeEventListener('keydown', handleEsc);
        }
    };
    document.addEventListener('keydown', handleEsc);
    
    // Fechar clicando fora (exceto no botão)
    notification.addEventListener('click', (e) => {
        if (!e.target.closest('.close-btn') && !e.target.closest('i')) {
            closeNotification(notification);
        }
    });
    
    // Auto-fechar baseado no tipo
    const autoCloseTime = type === 'error' ? 5000 : type === 'success' ? 6000 : 4000;
    setTimeout(() => {
        if (document.body.contains(notification)) {
            closeNotification(notification);
        }
    }, autoCloseTime);
    
    // Analytics
    if (typeof gtag !== 'undefined' && type !== 'info') {
        gtag('event', 'notification_displayed', {
            event_category: 'UX',
            event_label: type,
            value: 1
        });
    }
    
    function closeNotification(notif) {
        notif.style.animation = 'slideOutRight 0.3s ease';
        notif.style.pointerEvents = 'none';
        
        // Remover event listeners
        document.removeEventListener('keydown', handleEsc);
        
        setTimeout(() => {
            if (document.body.contains(notif)) {
                notif.remove();
            }
        }, 300);
    }
    
    console.log(`🔔 Notificação ${type} exibida:`, message.substring(0, 50));
}

// === FUNÇÕES AUXILIARES ===
function simulateApiCall(duration = 2000) {
    return new Promise(resolve => setTimeout(resolve, duration));
}

async function animateFormReset() {
    const inputs = document.querySelectorAll('#contato-form .form-group input, #contato-form .form-group select, #contato-form .form-group textarea');
    
    for (let input of inputs) {
        input.style.transition = 'all 0.3s ease';
        input.style.transform = 'translateY(5px)';
        input.style.opacity = '0.7';
        
        await new Promise(resolve => setTimeout(resolve, 150));
    }
    
    // Resetar animação
    setTimeout(() => {
        inputs.forEach(input => {
            input.style.transition = '';
            input.style.transform = '';
            input.style.opacity = '';
            input.style.borderColor = 'rgba(212, 175, 55, 0.1)';
        });
    }, 500);
}

function showClickFeedback(rect, isWhatsApp = false) {
    const feedback = document.createElement('div');
    feedback.style.cssText = `
        position: fixed;
        left: ${rect.left + rect.width / 2}px;
        top: ${rect.top + rect.height / 2}px;
        width: 6px;
        height: 6px;
        background: ${isWhatsApp ? '#25D366' : '#D4AF37'};
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        pointer-events: none;
        z-index: 10002;
        animation: clickFeedback 0.6s ease-out forwards;
        box-shadow: 0 0 10px ${isWhatsApp ? 'rgba(37, 211, 102, 0.6)' : 'rgba(212, 175, 55, 0.6)'};
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => feedback.remove(), 600);
}

function initializeAnalytics() {
    // Configuração básica de analytics
    if (typeof gtag !== 'undefined') {
        gtag('config', 'G-XXXXXXXXXX', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true
        });
        
        // Track page view
        gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname
        });
    }
    
    // Track de carregamento da página
    console.log('📊 Analytics: Página carregada -', document.title);
    
    // Performance metrics
    if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0];
        console.log('⚡ Tempo de carregamento:', navigation.loadEventEnd - navigation.loadEventStart, 'ms');
    }
}

// === OTIMIZAÇÕES DE PERFORMANCE ===
function initializePerformanceOptimizations() {
    // Lazy loading para imagens (nativo)
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => img.loading = 'lazy');
    } else {
        // Fallback para navegadores antigos
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Pré-carregar recursos críticos
    if ('preload' in document.createElement('link')) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700';
        preloadLink.as = 'style';
        document.head.appendChild(preloadLink);
    }
    
    // Otimizar fontes
    if ('fonts' in document) {
        document.fonts.load('400 16px Poppins').then(() => {
            document.documentElement.classList.add('fonts-loaded');
        });
        
        document.fonts.load('700 2.8rem Playfair Display').then(() => {
            console.log('📚 Fontes principais carregadas');
        });
    }
    
    // Detectar conexão lenta
    if ('connection' in navigator) {
        const connection = navigator.connection;
        if (connection.saveData || connection.effectiveType === '2g' || connection.effectiveType === '3g') {
            console.log('📱 Modo de economia de dados ativado');
            document.documentElement.classList.add('low-bandwidth');
            
            // Reduzir qualidade de imagens
            document.querySelectorAll('img').forEach(img => {
                if (img.src.includes('q=80')) {
                    img.src = img.src.replace('q=80', 'q=40');
                }
            });
        }
    }
    
    // Service Worker (futuro)
    if ('serviceWorker' in navigator) {
        // navigator.serviceWorker.register('/sw.js').catch(err => {
        //     console.warn('Service Worker não disponível:', err);
        // });
    }
    
    console.log('⚡ Otimizações de performance aplicadas');
}

// === FUNÇÃO PRINCIPAL DE INICIALIZAÇÃO ===
function initializeAllFeatures() {
    try {
        // Inicializar em ordem de prioridade
        initializeMobileMenu();
        initializeSmoothScroll();
        initializeIntersectionObserver();
        initializeContactForm();
        initializeVisualEffects();
        initializePerformanceOptimizations();
        
        // Configurações globais
        setupGlobalEventListeners();
        setupAccessibilityFeatures();
        
        // Sucesso
        console.log('✅ Todas as funcionalidades inicializadas com sucesso');
        document.documentElement.classList.add('js-loaded');
        
        // Emitir evento customizado
        document.dispatchEvent(new CustomEvent('wb-site-ready'));
        
    } catch (error) {
        console.error('❌ Erro na inicialização:', error);
        showNotification('Ocorreu um erro ao carregar algumas funcionalidades. O site continua funcionando normalmente.', 'error');
    }
}

// === EVENT LISTENERS GLOBAIS ===
function setupGlobalEventListeners() {
    // Prevenir zoom em inputs mobile
    document.addEventListener('focusin', (e) => {
        if (e.target.tagName === 'INPUT' && /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            e.target.style.fontSize = '16px';
        }
    });
    
    // Detectar mudança de orientação
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            window.scrollTo(0, 1); // Fix para iOS
        }, 100);
    });
    
    // Online/offline detection
    window.addEventListener('online', () => {
        console.log('🌐 Conexão restaurada');
        showNotification('Conexão com a internet restaurada', 'success');
    });
    
    window.addEventListener('offline', () => {
        console.log('⚠️ Conexão perdida');
        showNotification('Você está offline. Algumas funcionalidades podem estar limitadas.', 'error');
    });
    
    // Error handling global
    window.addEventListener('error', (e) => {
        console.error('Erro global:', e.error);
        if (!e.filename?.includes('script.js')) {
            // Não mostrar erros de terceiros para o usuário
            return;
        }
        
        showNotification('Ocorreu um erro inesperado. Tente recarregar a página.', 'error');
    });
    
    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (e) => {
        console.error('Promise rejeitada:', e.reason);
    });
}

// === RECURSOS DE ACESSIBILÍDADE ===
function setupAccessibilityFeatures() {
    // Skip to content
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Ir para conteúdo principal';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--gold-primary);
        color: var(--primary-black);
        padding: 0.5rem 1rem;
        text-decoration: none;
        font-weight: bold;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '20px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Adicionar IDs para acessibilidade
    const mainContent = document.querySelector('.hero') || document.body;
    mainContent.id = 'main-content';
    
    // ARIA labels dinâmicos
    document.querySelectorAll('img').forEach(img => {
        if (!img.alt || img.alt.trim() === '') {
            console.warn('Imagem sem alt:', img.src);
            img.alt = 'Imagem decorativa';
        }
    });
    
    // Foco management
    document.addEventListener('focusin', (e) => {
        e.target.classList.add('focused');
    });
    
    document.addEventListener('focusout', (e) => {
        e.target.classList.remove('focused');
    });
    
    // High contrast mode
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.documentElement.classList.add('high-contrast');
    }
    
    console.log('♿ Recursos de acessibilidade configurados');
}

// === INICIALIZAÇÃO AUTOMÁTICA ===
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAllFeatures);
} else {
    initializeAllFeatures();
}

// === POLYFILLS PARA COMPATIBILIDADE ===
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || 
                               Element.prototype.webkitMatchesSelector;
}

if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        'use strict';
        if (search instanceof RegExp) {
            throw TypeError('search deve ser string');
        }
        return search.call(this, search, start);
    };
}

// === DEBUG MODE (Remover em produção) ===
const DEBUG = false;
if (DEBUG) {
    window.WB_DEBUG = {
        validateForm: validateAdvancedForm,
        initMap: initMap,
        showNotification: showNotification
    };
    console.log('🔧 Debug mode ativado. Use window.WB_DEBUG para testes.');
}