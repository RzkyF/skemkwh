         document.getElementById('btnKipas').addEventListener('click', function() {
            const kipasDaya = parseFloat(document.getElementById('kipasDaya').value) || 0;
            const kwhKipas = (kipasDaya * 6.6 * 365) / 1000;

        if (kipasDaya <= 0) {
            const hasilKipas = document.getElementById('hasilKipas');
            hasilKipas.innerHTML = `Input daya tidak boleh 0`;
            hasilKipas.style.display = 'block';
        } else {
            const hasilKipas = document.getElementById('hasilKipas');
            hasilKipas.innerHTML = `Konsumsi/tahun:<br><b>${kwhKipas} kWh</b>`;
            hasilKipas.style.display = 'block';
        }
    
    });