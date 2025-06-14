document.getElementById("tipoCarro").addEventListener("change", function () {
    document.getElementById("divCarroValor").classList.toggle("hidden", this.value !== "sim");
});

function calcularKm() {
    const tipoCarro = document.getElementById('tipoCarro').value;
    const valorCarro = tipoCarro === 'sim' ? parseFloat(document.getElementById('valorCarro').value || 0) : 0;
    const seguro = parseFloat(document.getElementById('seguro').value || 0);
    const ipva = parseFloat(document.getElementById('ipva').value || 0);
    const gigu = parseFloat(document.getElementById('gigu').value || 0);
    const internet = parseFloat(document.getElementById('internet').value || 0);
    const lavajato = parseFloat(document.getElementById('lavajato').value || 0);

    const valorCombustivel = parseFloat(document.getElementById('valorCombustivel').value || 0);
    const autonomia = parseFloat(document.getElementById('autonomia').value || 1);
    const kmDia = parseFloat(document.getElementById('kmDia').value || 1);
    const revisao = parseFloat(document.getElementById('revisao').value || 0);
    const pneu = parseFloat(document.getElementById('pneu').value || 0);
    const kmMes = parseFloat(document.getElementById('kmMes').value || 1);
    const lucroDesejado = parseFloat(document.getElementById('lucroDesejado').value || 0);

    const ipvaMensal = ipva / 12;
    const fixoMensal = valorCarro + seguro + ipvaMensal + gigu + internet + lavajato;
    const fixoAnual = fixoMensal * 12;
    const fixoDiario = fixoMensal / 30;
    const fixoMensalPorKm = fixoMensal / kmMes;

    const combustivelPorKm = valorCombustivel / autonomia;
    const revisaoPorKm = revisao / 10000;
    const pneuPorKm = pneu / 40000;
    const variavelPorKm = revisaoPorKm + pneuPorKm;

    const lucroPorKm = lucroDesejado / kmMes;

    const precoIdealPorKm = combustivelPorKm + variavelPorKm + lucroPorKm + fixoMensalPorKm;

    document.getElementById('resultado').innerHTML = `
    <h2>🌐 Resumo dos Custos</h2>
    <p><strong>Despesa FIXA (Anual):</strong> R$ ${fixoAnual.toFixed(2)}</p>
    <p><strong>Despesa FIXA (Mensal):</strong> R$ ${fixoMensal.toFixed(2)}</p>
    <p><strong>Despesa FIXA (Diária):</strong> R$ ${fixoDiario.toFixed(2)}</p>
    <p><strong>Despesa FIXA (Km):</strong> R$ ${fixoMensalPorKm.toFixed(2)}</p>
    <hr>
    <p><strong>Despesa COMBUSTÍVEL (Km):</strong> R$ ${combustivelPorKm.toFixed(2)}</p>
    <p><strong>Despesa VARIÁVEL (Km):</strong> R$ ${variavelPorKm.toFixed(2)}</p>
    <p><strong>LUCRO (Km):</strong> R$ ${lucroPorKm.toFixed(2)}</p>
    <hr>
    <h3><strong>Aceitar corridas acima de:</strong></h3>
    <p><strong>⭐R$ ${precoIdealPorKm.toFixed(2)} /Km⭐</strong></p>
    <hr>
    `;
}
