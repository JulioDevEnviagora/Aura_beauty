document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
    el.style.animationDelay = `${i * 0.08}s`;
  });

  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.closest('.input-group')?.querySelector('input');
      if (!input) return;
      navigator.clipboard?.writeText(input.value);
      const orig = btn.textContent;
      btn.textContent = 'Copiado!';
      setTimeout(() => { btn.textContent = orig; }, 2000);
    });
  });

  // Toggles ligam/desligam ao clicar (demo)
  document.querySelectorAll('.toggle').forEach(toggle => {
    toggle.setAttribute('role', 'switch');
    toggle.setAttribute('tabindex', '0');
    toggle.setAttribute('aria-checked', toggle.classList.contains('off') ? 'false' : 'true');
    const flip = () => {
      toggle.classList.toggle('off');
      toggle.setAttribute('aria-checked', toggle.classList.contains('off') ? 'false' : 'true');
    };
    toggle.addEventListener('click', flip);
    toggle.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); }
    });
  });

  // Abas dos gráficos trocam a aba ativa ao clicar (demo)
  document.querySelectorAll('.chart-tabs').forEach(group => {
    const tabs = group.querySelectorAll('.chart-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });
  });

  // Feedback nos botões "Salvar alterações" (demo)
  document.querySelectorAll('.btn-primary').forEach(btn => {
    if (!/salvar/i.test(btn.textContent)) return;
    btn.addEventListener('click', e => {
      e.preventDefault();
      const orig = btn.textContent;
      btn.textContent = 'Salvo ✓';
      btn.style.opacity = '0.7';
      setTimeout(() => { btn.textContent = orig; btn.style.opacity = ''; }, 1800);
    });
  });
});
